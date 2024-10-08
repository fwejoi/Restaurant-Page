import pizzaBackgroundImg from "./img/pizza9.jpg";

export function renderReserveationPage() {
  const contetContainer = document.querySelector("#content");
  contetContainer.innerHTML = "";
  const reservation = document.createElement("div");
  reservation.id = "reservation";

  reservation.innerHTML = `

    <div class="reservation-container">
    <img src="${pizzaBackgroundImg}" alt="restaurant" class="resBackgroundImg" />
<div class="reservation-content">
    <h1>lets
Book a Table</h1>
    <form class="reservation-form">
    <div class="input-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>

    <div class="input-group">
        <label for="phone">Contact Phone:</label>
        <input type="tel" id="phone" name="phone" required>
    </div>

    <div class="input-group">
        <label for="email">Email (Optional):</label>
        <input type="email" id="email" name="email">
    </div>

    <div class="input-group">
        <label for="date">Reservation Date:</label>
        <input type="date" id="date" name="date" required>
    </div>

    <div class="input-group">
        <label for="time">Reservation Time:</label>
        <input type="time" id="time" name="time" required>
    </div>

    <div class="input-group">
        <label for="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" min="1" required>
    </div>

    <div class="input-group">
        <label for="requests">Special Requests (Optional):</label>
        <textarea id="requests" name="requests" rows="3"></textarea>
    </div>

    <button type="submit" class="submit-btn">Submit Reservation</button>
</form>

    </div>

</div>


    `;

  contetContainer.appendChild(reservation);
}
