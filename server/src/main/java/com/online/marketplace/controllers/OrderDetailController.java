package com.online.marketplace.controllers;

import com.online.marketplace.entity.OrderInput;
import com.online.marketplace.service.OrderDetailService;
import com.online.marketplace.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class  OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    // @PreAuthorize("hasRole('User')")
    @PostMapping({"/placeOrder"})
    @CrossOrigin(origins = "http://localhost:3000")
    public void placeOrder(@RequestBody OrderInput orderInput){ orderDetailService.placeOrder(orderInput); }
}
