      function func() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
            let outPut = "";
            data.map((api) => {
              outPut += `<div class="col-sm-12 col-md-6 col-lg-4 mt-5">
                    <div class="card" style="width: 18rem;">
  <img src="${api.image}" class="card-img-top" style="height: 200px; object-fit: contain;" alt="...">
  <div class="card-body">
    <h6 class="card-title text-danger text-truncate">${api.title}</h6>
    <p>Price: ${api.price} $</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">ÜRÜNÜ İNCELE</a>
  </div>
</div>
                </div>
`;
            });
            document.querySelector(".row").innerHTML = outPut;
          });
      }
      func();

      function tikla() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        var rgbColor = `rgb(${r}, ${g}, ${b})`;
        document.body.style.backgroundColor = rgbColor;
        // document.querySelector("#xx").style.backgroundColor = rgbColor;
      }
      setInterval(tikla, 3000);

      function getExchangeRates() {
        fetch("https://api.exchangerate-api.com/v4/latest/TRY")
          .then((response) => response.json())
          .then((data) => {
            // Döviz kurları JSON verisinin rates özelliğinde bulunur
            const exchangeRates = data.rates;

            // toFixed yuvarlama metodudur parantez içine yazılan sayı da noktadan sonra kaç sayıyı alacağını gösterir
            document.getElementById("usd-rate").textContent =
              exchangeRates.USD.toFixed(2);
            document.getElementById("eur-rate").textContent =
              exchangeRates.EUR.toFixed(2);
            document.getElementById("jpy-rate").textContent =
              exchangeRates.JPY.toFixed(2);
            document.getElementById("rub-rate").textContent =
              exchangeRates.RUB.toFixed(2);
          })
          .catch((error) => {
            console.error("Döviz kurları çekilirken hata oluştu: ", error);
          });
      }

      getExchangeRates();
      setInterval(getExchangeRates, 3000);
