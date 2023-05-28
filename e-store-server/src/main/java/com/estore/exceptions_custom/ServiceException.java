package com.estore.exceptions_custom;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServiceException extends RuntimeException {
	private static final long serialVersionUID = 6057630318293717938L;
	private static final Logger LOG = LoggerFactory.getLogger(ServiceException.class);
	
	private final String message;
	public ServiceException(String message) {
		super(message);
		this.message = message;
	}
	@Override
	public String getMessage() {
		return this.message;
	}
}
