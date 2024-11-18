eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    getProducts();
    getAds();
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

getAds = () => {
  const request = new Request();

  request.get("http://localhost:3000/ads/").then((ads) => {
    const adlist = document.getElementById("homeAds");

    ads.forEach((ad) => {
      adlist.innerHTML += `<a href="#"
          ><div class="adBox">
            <div class="ad">
              <img
                src="${ad.img}"
                alt="${ad.title}"
              />
              <span class="adPrice">${ad.price} ${ad.currency}</span>
              <h6 class="adTitle">${ad.title}</h6>
              <p class="adDesc">
              ${ad.description}
              </p>
            </div>
            <div class="seller">
              <img
                class="sellerImg"
                src="${ad.sellerImg}"
                alt="Zzistaken"
              />
              <div class="sellerInfo">
                <p style="font-size: x-small; margin: 0rem; color: #9494a1">
                  SATICI
                </p>
                <p id="sellerName" style="font-size: small; margin: 0rem">
                ${ad.sellerName}
                </p>
              </div>
            </div>
          </div></a
        >`;
    });
  });
};
