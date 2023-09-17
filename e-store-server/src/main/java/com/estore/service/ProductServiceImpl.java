package com.estore.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
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
	
	
	@Override
	public Product saveProduct(Product product) {
		try {
			if(product.getImage() != null) {
				String base64Image = product.getImage();
				String[] parts = base64Image.split(",");
				String base64Data = parts[1];
				byte[] imageBytes= Base64.getDecoder().decode(base64Data);
				InputStream inputStream = new ByteArrayInputStream(imageBytes);
				byte[] byteArray = readFully(inputStream);
				product.setImageData(byteArray);
				return productsRepo.save(product);
			}
		} catch (Exception e) {
			throw new IllegalArgumentException();
		}
		return null;
	}
	
	public byte[] readFully(InputStream input) throws IOException {
		byte[] buffer = new byte[8192];
		int bytesRead;
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		while((bytesRead = input.read(buffer)) != -1) {
			output.write(buffer, 0, bytesRead);
		}
		return output.toByteArray();
	}
}
