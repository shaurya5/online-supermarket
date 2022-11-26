package com.online.marketplace.service;

import com.online.marketplace.dao.RoleDao;
import com.online.marketplace.dao.UserDao;
import com.online.marketplace.entity.Role;
import com.online.marketplace.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
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
        Role role = roleDao.findById("user").get();
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }

    public void initRolesAndUser() {
        Role adminRole = new Role();
        adminRole.setName("admin");
        adminRole.setDescription("Admin Role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setName("user");
        userRole.setDescription("User Role");
        roleDao.save(userRole);

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
}