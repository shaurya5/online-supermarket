package com.online.marketplace.service;

import com.online.marketplace.dao.RoleDao;
import com.online.marketplace.dao.UserDao;
import com.online.marketplace.entity.Product;
import com.online.marketplace.entity.Role;
import com.online.marketplace.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerNewUser(User user) {
        Role role = new Role("user", "User Role");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }

    public User registerNewManager(User user) {
        Role role = new Role("manager", "Manager Role");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }

    public void initRolesAndUser() {
        Role adminRole = new Role("admin", "Admin Role");
//        adminRole.setName("admin");
//        adminRole.setDescription("Admin Role");
        roleDao.save(adminRole);

        Role userRole = new Role("user", "User Role");
//        userRole.setName("user");
//        userRole.setDescription("User Role");
        roleDao.save(userRole);

        Role managerRole = new Role("manager", "Manager Role");
//        managerRole.setName("manager");
//        managerRole.setDescription("Manager Role");
        roleDao.save(managerRole);

        User adminUser = new User();
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        adminUser.setUserName("admin1234");
        adminUser.setUserPassword(getEncodedPassword("admin@1234"));
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

//        User user = new User();
//        user.setUserFirstName("ramu");
//        user.setUserLastName("goyal");
//        user.setUserName("ramu1234");
//        user.setUserPassword(getEncodedPassword("ramu@1234"));
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);

    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public User editUserDetails(User user) {
        String userName = user.getUserName();
        User usert = userDao.findById(userName).get();
        usert.setUserName(user.getUserName());
        usert.setUserFirstName(user.getUserFirstName());
        usert.setUserLastName(user.getUserLastName());
        return userDao.save(usert);
    }

    public User editUserPassword(User user) {
        String userName = user.getUserName();
        User usert = userDao.findById(userName).get();
        usert.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(usert);
    }

    public User topupWallet(User user) {
        String userName = user.getUserName();
        User usert = userDao.findById(userName).get();
        usert.setWallet(user.getWallet());
        return userDao.save(usert);
    }
    public User getUserById(String userName){
        return userDao.findById(userName).get();
    }

    public void deleteUserDetails(String userName){
        userDao.deleteById(userName);
    }
    public void deleteManagerDetails(String userName){
        userDao.deleteById(userName);
    }

    @Query(value = "SELECT * FROM user")
    public void deleteUserFromUsername() {

    }
}
