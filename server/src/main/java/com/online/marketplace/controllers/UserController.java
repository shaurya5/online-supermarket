package com.online.marketplace.controllers;

import com.online.marketplace.entity.Product;
import com.online.marketplace.entity.User;
import com.online.marketplace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void initRolesAndUsers() {
        userService.initRolesAndUser();
    }

    @PostMapping({"/registerNewUser"})
    @CrossOrigin(origins = "http://localhost:3000")
    public User registerNewUser(@RequestBody User user){
        return userService.registerNewUser(user);
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

}
