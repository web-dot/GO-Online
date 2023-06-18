package com.estore.service;

import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estore.domain.Product;
import com.estore.exceptions_custom.ServiceException;
import com.estore.repository.ProductsRepository;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

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
	
	
	@Override
	public Product updateProduct(Product product) {
		Product productToUpdate = null;
		try {
			if(Objects.nonNull(product)) {
				String id = product.getId();
				Optional<Product> optional = productsRepo.findById(id);
				if(optional.isPresent()) {
					productToUpdate = optional.get();
					BeanUtils.copyProperties(product, productToUpdate);
					productToUpdate = productsRepo.save(productToUpdate);
				}
			}
		} catch (BeansException e) {
			e.printStackTrace();
		}
		return productToUpdate;
	}
}
