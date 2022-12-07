package com.online.marketplace.controllers;


import com.online.marketplace.entity.Product;
import com.online.marketplace.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Id;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping({"/addNewProduct"})
    @CrossOrigin(origins = "http://localhost:3000")
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }

    @GetMapping({"/getProductDetailsById/{productId}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public Product getProductDetailsById(@PathVariable("productId") Integer productId){
        return productService.getProductDetailsById(productId);
    }

    @GetMapping({"/getAllProducts"})
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @DeleteMapping({"/deleteProductDetails/{productId}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteProductDetails(@PathVariable("productId") Integer productId){
        productService.deleteProductDetails(productId);
    }

    @PutMapping({"/editProductDetails"})
    @CrossOrigin(origins = "http://localhost:3000")
    public Product editProductDetails(@RequestBody Product product){
        return productService.editProductDetails(product);
    }

    @GetMapping({"/getProductDetails/{isSingleProductCheckout}/{productId}"})
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Product> getProductDetails(@PathVariable(name = "isSingleProductCheckout") boolean isSingleProductCheckout,
                                           @PathVariable(name = "productId") Integer productId){
        return productService.getProductDetails(isSingleProductCheckout, productId);

    }



}
