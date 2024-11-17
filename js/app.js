eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    getProducts();
  });
}

getProducts = () => {
  const request = new Request();

  request.get("http://localhost:3000/products/").then((products) => {
    const valorantlist = document.getElementById("homeValorantPins");
    const steamlist = document.getElementById("homeSteamPins");

    const valorantPins = products
      .filter((product) => product.category === "Valorant")
      .slice(0, 6);
    const steamPins = products
      .filter((product) => product.category === "Steam")
      .slice(0, 6);

    valorantPins.forEach((valorantPin) => {
      valorantlist.innerHTML += `<a href="#" class="pinBox">
            <img
              class="pinImg"
              src="${valorantPin.img}"
              alt="${valorantPin.name}"
            />
            <div class="pinDis">
              <p>${valorantPin.disValue}</p>
              <p>İNDİRİM</p>
            </div>
            <p class="pinCategory">${valorantPin.category}</p>
            <p class="pinTitle">${valorantPin.name}</p>
            <div class="pinPriceBox">
              <p class="pinPrice">${valorantPin.price} ${valorantPin.currency}</p>
              <p class="pinPrice2" style="text-decoration: line-through">
              ${valorantPin.disPrice} ${valorantPin.currency}
              </p>
            </div>
          </a>`;
    });

    steamPins.forEach((steamPin) => {
      steamlist.innerHTML += `<a href="#" class="pinBox">
              <img
                class="pinImg"
                src="${steamPin.img}"
                alt="${steamPin.name}"
              />
              <div class="pinDis">
                <p>${steamPin.disValue}</p>
                <p>İNDİRİM</p>
              </div>
              <p class="pinCategory">${steamPin.category}</p>
              <p class="pinTitle">${steamPin.name}</p>
              <div class="pinPriceBox">
                <p class="pinPrice">${steamPin.price} ${steamPin.currency}</p>
                <p class="pinPrice2" style="text-decoration: line-through">
                ${steamPin.disPrice} ${steamPin.currency}
                </p>
              </div>
            </a>`;
    });
  });
};
