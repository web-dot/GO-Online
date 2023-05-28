package com.estore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estore.domain.Product;
import com.estore.exceptions_custom.ServiceException;
import com.estore.repository.ProductsRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductsRepository productsRepo;
	
	@Override
	public Product deleteProductById(String id) {
		try {
			Product product = productsRepo.findById(id).orElse(null);
			if(product != null) {				
				productsRepo.delete(product);
			}
			return product;
		}
		catch(Exception e) {
			throw new ServiceException("something went wrong in ProductService : ");
		}
	}
}
