import React from "react";

function Packages() {
    return (
        <section id="packages" className="packages">
            <h2>Our Travel Packages</h2>
            <div className="package">
                <h3>Beach Getaway</h3>
                <p>Enjoy a relaxing week at the beach with all-inclusive amenities.</p>
                <button className="btn">Book Now</button>
            </div>
            <div className="package">
                <h3>Mountain Adventure</h3>
                <p>Experience the thrill of hiking and exploring the mountains.</p>
                <button className="btn">Book Now</button>
            </div>
            <div className="package">
                <h3>City Tour</h3>
                <p>Discover the vibrant culture and history of the city.</p>
                <button className="btn">Book Now</button>
            </div>
        </section>
    );
}

export default Packages;