package com.estore.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.estore.domain.Product;

@Repository
public interface ProductsRepository extends MongoRepository<Product, String> {

}
