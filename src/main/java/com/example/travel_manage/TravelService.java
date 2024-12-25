package com.example.travel_manage;

import com.example.travel_manage.Booking;
import com.example.travel_manage.Trip;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TravelService {
    private final List<Trip> trips = new ArrayList<>();
    private final List<Booking> bookings = new ArrayList<>();
    private final AtomicLong tripIdCounter = new AtomicLong(1);
    private final AtomicLong bookingIdCounter = new AtomicLong(1);

    public TravelService() {
        // Initialize with some sample trips
        trips.add(new Trip(tripIdCounter.getAndIncrement(), "Paris", "Explore the Eiffel Tower", 1200.0));
        trips.add(new Trip(tripIdCounter.getAndIncrement(), "New York", "Experience Times Square", 1500.0));
    }

    public List<Trip> getAllTrips() {
        return trips;
    }

    public Trip addTrip(Trip trip) {
        trip.setId(tripIdCounter.getAndIncrement());
        trips.add(trip);
        return trip;
    }

    public List<Booking> getAllBookings() {
        return bookings;
    }

    public Booking addBooking(Booking booking) {
        booking.setId(bookingIdCounter.getAndIncrement());
        bookings.add(booking);
        return booking;
    }
}