package com.online.marketplace.controllers;
import com.online.marketplace.entity.Role;
import com.online.marketplace.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping({"/createNewRole"})
    @CrossOrigin(origins = "http://localhost:3000")
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }

}
