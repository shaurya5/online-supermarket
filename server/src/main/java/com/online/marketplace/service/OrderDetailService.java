package com.online.marketplace.service;

import com.online.marketplace.config.JwtRequestFilter;
import com.online.marketplace.dao.OrderDetailDao;
import com.online.marketplace.dao.ProductDao;
import com.online.marketplace.dao.UserDao;
import com.online.marketplace.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
    private String generateInvoiceNumber(int n) {
        String AlphaNumericString = "0123456789";


        StringBuilder sb = new StringBuilder(n);

        for (int i = 0; i < n; i++) {
            int index = (int)(AlphaNumericString.length()
                    * Math.random());

            sb.append(AlphaNumericString
                    .charAt(index));
        }
        return sb.toString();
    }
    public void placeOrder(OrderInput orderInput){

        List<OrderProductQuantity> productQuantityList = orderInput.getOrderProductQuantityList();
       // List<OrderDetail> ordersList = new ArrayList<>();
        String invoiceNumber = generateInvoiceNumber(15);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        for(OrderProductQuantity o: productQuantityList){
            Product product = productDao.findById(o.getProductId()).get();

            String currentUser = JwtRequestFilter.CURRENT_USER;
            User user = userDao.findById(currentUser).get();

            OrderDetail orderDetail = new OrderDetail(
                    orderInput.getFullName(),
                    orderInput.getFullAddress(),
                    orderInput.getContactNumber(),
                    orderInput.getAlternateContactNumber(),
                    orderInput.getZipcode(),
                    ORDER_PLACED,
                    product.getProductDiscountedPrice() * o.getQuantity(),
                    o.getQuantity(),
                    product,
                    user,
                    invoiceNumber,
                    dtf.format(now)

            );
           // ordersList.add(orderDetail);
            orderDetailDao.save(orderDetail);
        }
    }
}
