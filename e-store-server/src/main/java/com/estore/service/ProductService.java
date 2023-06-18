package com.estore.service;

import org.springframework.stereotype.Service;

import com.estore.domain.Product;

public interface ProductService {
	public Product deleteProductById(String id);
	public Product updateProduct(Product product);
}
