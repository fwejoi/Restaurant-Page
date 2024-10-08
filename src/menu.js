import pizza1 from "./img/pizza1.jpg";
import pizza2 from "./img/pizza2.jpg";
import pizza3 from "./img/pizza3.jpg";
import pizza4 from "./img/pizza4.jpg";
import pizza5 from "./img/pizza5.jpg";
import coffee1 from "./img/coffee1.jpg";
import cocktaile from "./img/cocktailes.jpg";

export function renderMenuPage() {
  const contetContainer = document.querySelector("#content");
  contetContainer.innerHTML = "";
  const menu = document.createElement("div");
  menu.id = "menu";

  menu.innerHTML = `
    <div class=MenuPageContainer>
        <h1>Menu</h1>
        <div class="menuCards">
            <div class="foodCard">
                <img src="${pizza1}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Sausage Pizza</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Savor a delicious Sausage Pizza, featuring a crispy crust topped with rich tomato sauce, savory sausage slices, and gooey mozzarella cheese. Each bite is a flavorful delight!</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${pizza2}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Tomato Olive Pizza</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">
                        Enjoy a delicious Tomato Olive Pizza with a crisp crust topped with juicy tomatoes and briny black olives. Each bite offers a perfect blend of savory and tangy flavors, all enhanced by melted mozzarella and fresh herbs.</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${pizza3}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Double Cheese Pizza</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Savor a mouthwatering Double Cheese Pizza, featuring a crispy crust loaded with layers of gooey, melted mozzarella and rich cheddar cheese. Each bite is a cheesy delight that satisfies even the most serious cheese lover!</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${pizza4}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Tomato Veggie Pizza</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Enjoy a vibrant Tomato Veggie Pizza, topped with fresh tomatoes and a medley of colorful vegetables. Each slice is a delightful combination of flavors, complemented by melted cheese and fragrant herbs, making it a healthy and satisfying choice!</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${pizza5}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Cheese Veggie Pizza</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Savor a delicious Cheese Veggie Pizza, generously topped with melted cheese and an array of fresh vegetables. Each bite is a perfect blend of creamy cheese and garden-fresh flavors, making it a delightful choice for veggie lovers!</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${coffee1}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Espresso</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Indulge in a rich and bold Espresso, a concentrated shot of coffee that delivers a powerful flavor and aromatic experience. Perfectly brewed to highlight the coffee's natural richness, it's the ideal pick-me-up for any time of day!</p>
                </div>
            </div>
            <div class="foodCard">
                <img src="${cocktaile}" alt="食物图片" class="foodImage">
                <div class="foodDetails">
                    <div class="foodHeader">
                        <h3 class="foodName">Red Cocktail</h3>
                        <p class="foodPrice">$10.99</p>
                    </div>
                    <hr class="divider">
                    <p class="foodDescription">Delight in a vibrant Red Cocktail, a refreshing blend of fruity flavors and spirited notes, beautifully garnished to catch the eye. Each sip offers a perfect balance of sweetness and tang, making it a festive choice for any occasion!/p>
                </div>
            </div>
        </div>
    </div>
    `;

  contetContainer.appendChild(menu);
}
