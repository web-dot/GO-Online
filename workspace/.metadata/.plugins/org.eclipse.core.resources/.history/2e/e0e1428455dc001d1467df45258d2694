package com.estore.service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;

import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;


public class IDTokenVerifierServiceImpl implements IDTokenVerifierService {
	
	@Autowired
	HttpTransport transport;
	
	@Autowired
	JsonFactory jsonFactory;

	private static final String CLIENT_ID = "113730373728-lu02f6c5mcjr8ae755463ns05a4k9hqi.apps.googleusercontent.com";
	
	@Override
	public String verifyIDToken(String idTokenString) {
		GoogleIdTokenVerifier verifier = null;
		try {
			verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
					.setAudience(Collections.singletonList(CLIENT_ID))
					.build();
		} catch (Exception e) {
			
		}
		
		GoogleIdToken idToken = null;
		try {
			idToken = verifier.verify(idTokenString);
		} catch (Exception e) {
			
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
			
			System.err.println(email);
			System.err.println(emailVerified);
			System.err.println(name);
			System.err.println(pictureUrl);
			System.err.println(locale);
			System.err.println(familyName);
		}
		else {
			
		}
		return null;
	}

}
