package com.online.marketplace.service;

import com.online.marketplace.config.JwtRequestFilter;
import com.online.marketplace.dao.OrderDetailDao;
import com.online.marketplace.dao.ProductDao;
import com.online.marketplace.dao.UserDao;
import com.online.marketplace.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService {
    private static String ORDER_PLACED= "Placed";
    @Autowired
    private OrderDetailDao orderDetailDao;

    @Autowired
    private ProductDao productDao;

    @Autowired
    private UserDao userDao;
    public void placeOrder(OrderInput orderInput){

        List<OrderProductQuantity> productQuantityList = orderInput.getOrderProductQuantityList();

        for(OrderProductQuantity o: productQuantityList){
            Product product = productDao.findById(o.getProductId()).get();

            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user = userDao.findById(currentUser).get();

            OrderDetail orderDetail = new OrderDetail(

                    orderInput.getFullName(),
                    orderInput.getFullAddress(),
                    orderInput.getContactNumber(),
                    orderInput.getAlternateContactNumber(),
                    ORDER_PLACED,
                    product.getProductActualPrice()*o.getQuantity(),
                    product,
                    user
                    // orderAmount: 100.09,

            );
            orderDetailDao.save(orderDetail);
        }
    }
}
