import React, { useEffect, useState } from "react";
import axios from "axios";

function TripList() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/api/trips")
            .then(response => setTrips(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Available Trips</h1>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        {trip.destination} - ${trip.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TripList;