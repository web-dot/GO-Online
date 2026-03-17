package com.estore.domain;

import javax.persistence.*;

@Entity
@Table(name = "store")
public class StoreData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment ID
    private Long id;

    private String userId;
    private String shopName;
    private String summary;

    // Default constructor
    public StoreData() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getShopName() { return shopName; }
    public void setShopName(String shopName) { this.shopName = shopName; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
}