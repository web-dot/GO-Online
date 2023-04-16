package com.estore.service;

import java.io.IOException;
import java.security.GeneralSecurityException;

import com.estore.domain.User;

public interface IDTokenVerifierService {
		
	public User verifyIDToken(String token);
}
