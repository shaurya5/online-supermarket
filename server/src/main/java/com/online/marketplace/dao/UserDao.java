package com.online.marketplace.dao;

import com.online.marketplace.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends CrudRepository<User, String> {
    @Query(value = "SET FOREIGN_KEY_CHECKS=0", nativeQuery = true)
    public List<User> deleteUserFromUsername();
}
