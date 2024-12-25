package com.example.travel_manage;

public class Booking {
    private Long id;
    private String userName;
    private Long tripId;

    public Booking(Long id, String userName, Long tripId) {
        this.id = id;
        this.userName = userName;
        this.tripId = tripId;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUserName() { return userName; } // Corrected getter method name
    public void setUserName(String userName) { this.userName = userName; } // Corrected setter method name
    
    public Long getTripId() { return tripId; }
    public void setTripId(Long tripId) { this.tripId = tripId; }
}