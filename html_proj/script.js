// Array to store booking details, initially empty
let bookings = [];

// Clear sessionStorage and reset the bookings table on page load
window.addEventListener("load", function() {
    // Clear sessionStorage data when the page loads
    sessionStorage.clear();

    // Re-render bookings from the sessionStorage (empty in this case)
    renderBookings();
});
// Function to render bookings in the table
function renderBookings() {
    const bookingTableBody = document.querySelector("#bookingTable");
    bookingTableBody.innerHTML = ""; // Clear existing rows

    // Get bookings from sessionStorage (if any) or use the current array
    let storedBookings = JSON.parse(sessionStorage.getItem("bookings")) || [];

    // Loop through the bookings array and create table rows
    storedBookings.forEach((booking, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.phone}</td>
            <td>${booking.destination}</td>
            <td>${booking.date}</td>
            <td>${booking.status}</td>
            <td>
                ${
                    booking.status === "Pending"
                        ? `<button class="confirm-btn" data-index="${index}">Confirm</button>`
                        : ""
                }
            </td>
        `;
        bookingTableBody.appendChild(row);
    });

    // Add event listeners to Confirm buttons
    document.querySelectorAll(".confirm-btn").forEach(button => {
        button.addEventListener("click", function() {
            const index = this.dataset.index;
            confirmBooking(index);
        });
    });
}

// Handle form submission to add a new booking
document.querySelector("#bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const destination = document.querySelector("#destination").value;
    const date = document.querySelector("#date").value;

    if (name && phone && destination && date) {
        // Create a new booking object
        const newBooking = {
            name,
            phone,
            destination,
            date,
            status: "Pending"
        };

        // Get current bookings from sessionStorage or an empty array if none
        let storedBookings = JSON.parse(sessionStorage.getItem("bookings")) || [];

        // Add the new booking
        storedBookings.push(newBooking);

        // Save updated bookings array in sessionStorage
        sessionStorage.setItem("bookings", JSON.stringify(storedBookings));

        // Re-render the table with updated data
        renderBookings();

        // Clear the form after submission
        document.querySelector("#bookingForm").reset();
        alert("Booking added successfully!");
    } else {
        alert("Please fill out all fields.");
    }
});

// Function to confirm booking and send email via Formspree
function confirmBooking(index) {
    // Retrieve the current bookings from sessionStorage
    let storedBookings = JSON.parse(sessionStorage.getItem("bookings")) || [];
    storedBookings[index].status = "Confirmed";

    const booking = storedBookings[index];

    // Send confirmation email via Formspree
    fetch("https://formspree.io/f/xannnrrz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            subject: "Booking Confirmation",
            message: `
                Dear ${booking.name},
                Your booking for ${booking.destination} on ${booking.date} is confirmed.
                Phone: ${booking.phone}.
            `
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Booking confirmed! A confirmation email has been sent.");
        } else {
            alert("Booking confirmed, but the email could not be sent.");
        }
    })
    .catch(error => {
        console.error("Error sending email:", error);
        alert("Booking confirmed, but there was an error sending the email.");
    });

    // Save updated bookings back to sessionStorage
    sessionStorage.setItem("bookings", JSON.stringify(storedBookings));

    // Re-render the table with the updated status
    renderBookings();
}
