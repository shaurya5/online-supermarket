package com.online.marketplace.controllers;

import com.online.marketplace.dao.UserDao;
import com.online.marketplace.entity.Product;
import com.online.marketplace.entity.User;
import com.online.marketplace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserDao userDao;
    @PostConstruct
    public void initRolesAndUsers() {
        userService.initRolesAndUser();
    }

    @PostMapping({"/registerNewUser"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User registerNewUser(@RequestBody User user){
        return userService.registerNewUser(user);
    }

    @PostMapping({"/registerNewManager"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User registerNewManager(@RequestBody User user){
        return userService.registerNewManager(user);
    }

    @GetMapping({"/adminOnly"})
    @PreAuthorize("hasRole('admin')")
    @CrossOrigin(origins = "http://localhost:3000")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/userOnly"})
    @PreAuthorize("hasRole('user')")
    @CrossOrigin(origins = "http://localhost:3000")
    public String forUser(){
        return "This URL is only accessible to the user";
    }

    @PutMapping({"/editUserDetails"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User editUserDetails(@RequestBody User user){
        return userService.editUserDetails(user);
    }

    @PutMapping({"/editUserPassword"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User editUserPassword(@RequestBody User user) {
        return userService.editUserPassword(user);
    }

    @DeleteMapping({"/deleteUserDetails/{userName}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteUserDetails(@PathVariable("userName") String userName){
        userService.deleteUserDetails(userName);
    }

    @DeleteMapping({"/deleteManagerDetails/{userName}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteManagerDetails(@PathVariable("userName") String userName){
        userService.deleteManagerDetails(userName);
    }

    @GetMapping({"/getUserById/{userName}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User getUserById(@PathVariable("userName") String userName) {
        return userService.getUserById(userName);
    }

    @PutMapping({"/topupWallet"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User topupWallet(@RequestBody User user) {
        return userService.topupWallet(user);
    }

    @GetMapping({"/helloworld"})
    public List<User> deleteUser() {
        return userDao.deleteUserFromUsername();
    }
}
