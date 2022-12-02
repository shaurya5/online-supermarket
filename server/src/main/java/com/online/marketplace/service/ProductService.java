package com.online.marketplace.service;

import com.online.marketplace.dao.ProductDao;
import com.online.marketplace.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductDao productDao;

    public Product addNewProduct(Product product){
        return productDao.save(product);
    }

    public List<Product> getAllProducts(){
       return (List<Product>) productDao.findAll();
    }

    public Product getProductDetailsById(Integer productId){
       return productDao.findById(productId).get();
    }


    public void deleteProductDetails(Integer productId){
        productDao.deleteById(productId);
    }

    public Product editProductDetails(Product product) {
        Integer productId = product.getProductID();
        Product prod = productDao.findById(productId).get();
        prod.setProductName(product.getProductName());
        prod.setProductDescription(product.getProductDescription());
        prod.setProductActualPrice(product.getProductActualPrice());
        prod.setProductDiscountedPrice(product.getProductDiscountedPrice());
        return productDao.save(prod);
    }
    public List<Product> getProductDetails(boolean isSingleProductCheckout, Integer productId){
        if(isSingleProductCheckout){
            // we buy single product

            List <Product> list = new ArrayList<>();
            Product product = productDao.findById(productId).get();
            list.add(product);
            return list;
        }
        else{
            // we checkout entire cart
        }
        return new ArrayList<>();
    }


}
