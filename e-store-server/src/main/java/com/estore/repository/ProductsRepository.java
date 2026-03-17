package com.estore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estore.domain.Product;

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long> {

    // Example custom query: find products by category
    List<Product> findByCategory(String category);

    // Example: find products by userId
    List<Product> findByUserId(String userId);
}