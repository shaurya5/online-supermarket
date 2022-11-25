package com.online.marketplace.dao;

import com.online.marketplace.entity.OrderDetail;
import org.springframework.data.repository.CrudRepository;

public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> // we r using orderID for details therefore Integer is written next to orderdetail (var type of ID)
{
}
