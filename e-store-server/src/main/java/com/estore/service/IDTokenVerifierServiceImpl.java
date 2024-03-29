package com.estore.service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estore.domain.User;
import com.estore.repository.UserRepository;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

@Service
public class IDTokenVerifierServiceImpl implements IDTokenVerifierService {
	
	HttpTransport transport = new NetHttpTransport();
	JsonFactory jsonFactory  = new JacksonFactory();
	
	@Autowired
	UserRepository userRepository;

	private static final String CLIENT_ID = "113730373728-lu02f6c5mcjr8ae755463ns05a4k9hqi.apps.googleusercontent.com";
	
	@Override
	public User verifyIDToken(String idTokenString) {
		GoogleIdTokenVerifier verifier = null;
		try {
			verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
					.setAudience(Collections.singletonList(CLIENT_ID))
					.build();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		GoogleIdToken idToken = null;
		try {
			idToken = verifier.verify(idTokenString);
		} catch (GeneralSecurityException | IOException e) {
			e.printStackTrace();
		}
		if(idToken != null) {
			Payload payload = idToken.getPayload();
			
			//print user identifier
			String userId = payload.getSubject();
			System.out.println("USER ID:" + userId);
			
			//get profile information from from payload
			String email = payload.getEmail();
			boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
			String name = (String)payload.get("name");
			String pictureUrl = (String) payload.get("picture");
			String locale = (String) payload.get("locale");
			String familyName = (String) payload.get("family_name");
			String givenName = (String) payload.get("given_name");
			
			User user = null;
			if(Objects.nonNull(userId) && Objects.nonNull(email) && Objects.nonNull(name)) {
				
				user = userRepository.findByUserId(userId);
				if(user == null) {
					user = new User();
					user.setUserId(userId);
					user.setEmail(email);
					user.setName(name);
					userRepository.save(user);
				}
			}
			return user;
		}
		else {
			throw new IllegalArgumentException();
		}
	}

}
