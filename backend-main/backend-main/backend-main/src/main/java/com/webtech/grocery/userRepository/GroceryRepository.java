package com.webtech.grocery.userRepository;

import com.webtech.grocery.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroceryRepository extends JpaRepository<Grocery, Long> {
}