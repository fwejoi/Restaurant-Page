import backrgoundImg from "./img/img1.jpg";
import { renderMenuPage } from "./menu";

export function renderHomePage() {
  const contetContainer = document.querySelector("#content");
  contetContainer.innerHTML = "";
  const home = document.createElement("div");
  home.id = "home";

  home.innerHTML = `
    <div class="homepageContainer">
        <img src="${backrgoundImg}" alt="restaurant" />
        <div class="homeContent">
            <h1>Where Every Slice Tells a Story!</h1>
            <p>Join us for a taste of mouthwatering delights!</p>
            <button class="Menu-button">Discover Menu</button>
        </div>
    </div>
    `;

    const menuButton = home.querySelector(".Menu-button");
    menuButton.addEventListener("click", () => {
      renderMenuPage(); // 点击按钮时渲染菜单页面
    });

  contetContainer.appendChild(home);
}
