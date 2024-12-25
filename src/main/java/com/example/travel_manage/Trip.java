package com.example.travel_manage;

public class Trip {
    private Long id;
    private String destination;
    private String description;
    private Double price;

    public Trip(Long id, String destination, String description, Double price) {
        this.id = id;
        this.destination = destination;
        this.description = description;
        this.price = price;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}