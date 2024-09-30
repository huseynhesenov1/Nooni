const row = document.querySelector(".prod-row");
const basket = [];

const addToCart = (addProd) => {
  basket.push(addProd);
  const localBasket = JSON.stringify(basket);
  localStorage.setItem("basket", localBasket);
};

const wishlist = [];

const addToWish = (addProd) => {
  wishlist.push(addProd);
  const localWishlist = JSON.stringify(wishlist);
  localStorage.setItem("wishlist", localWishlist);
};

const langData = {
  en: [
    "UP TO 40% OFF BEST-SELLING . SHOP NOW",
    "HOME",
    "SHOP",
    "BLOG",
    "ABOUT US",
    "CONTACT US",
    "Home / Shop",
    "Shop Noon’i",

    "ABOUT",
    "Our Story",
    "Influencers",
    "Join our team",
    "Join our shop",
    "CUSTOMER SERVICES",
    "Home",
    "Features",
    "Pricing",
    "FAQs",
    "SIGN UP FOR EMAILS",
    "Enjoy 15% off* your first order when sign up to our newsletter",
    "Home",
    "About",
    "Shop",
    "Product",
    "Blog",
  ],

  az: [
    "ƏN ÇOX SATILANLARA 40%-Ə QƏDƏR ENDİRİM. İNDİ ALIN",
    "Ana Səhifə",
    "Məhsullar",
    "Məqalə",
    "Haqqımızda",
    "Əlaqə",
    "Ana Səhifə / Satış",

    "Nooni Satış",
    "Haqqimizda",
    "Bizim hekaye",
    "Bizə qoşul",
    "Mağazaya qoşul",
    "Təsirlər",
    "Müştəri servisi",
    "Ana Səhifə",
    "Xüsusiyyətləri",
    "Qiymət",
    "Suallar",
    "Email ilə qeydiyyat",
    "Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın",
    "Ana Səhifə",
    "Haqqımızda",
    "Mağaza",
    "Məhsullar",
    "Məqalə",
  ],
};

const langBtn = document.querySelectorAll("#lang-btn");
const langItem = document.querySelectorAll(".lang");
const ol = document.querySelector("ol");
Acer = true;
fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    data.slice(0, 24).map((item) => {
      li += `
        
        
        
        <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div id="shop-card" class="card mt-5">
        <div class="image-container">
                <img style="object-fit:cover" src="${item.image}" alt="">
                    
            <div class="price">$${item.price}</div>
        </div>
        <label class="favorite">
        <button id="btn-w" style="background: none; border: none;" class="wish${
          item.id
        }" class="wish-button button">
     <i id="heartt${item.id}" style="color: red;" class="fa-regular fa-heart"></i>
        
     </button>
        </label>
    
        <div class="content">
        <div style="font-size:1rem" class="product-name">${item.title.en.slice(0,27)}...</div>
        <div style="font-size:1rem" class="product-name">${item.color.en.slice(0,30 )}</div>
            <div class="color-size-container">
                
            </div>
            <div class="rating">
                <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                    <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                    <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                    <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                    <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                    <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                </svg>
                (29,062)
            </div>
        </div>
    
        <div class="button-container">
            <a style="text-align: center; text-decoration: none;" href="details.html?id=${
              item.id
            }" id="heart" class="buy-button button">View Details</a>
            <button id="btn-p" class="cart-button button">
            <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
            </button>
        </div>
    </div>
        </div>
        `;
    });
    document.querySelector("ol").innerHTML = li;
    
    data.map((i, c) => {
      document.querySelectorAll("#btn-w")[c].addEventListener("click", () => {
        swal({
          title: "Product added to Wishlist!",
          text: "You clicked the button!",
          icon: "success",
          button: "OK!",
        });
        addToWish(i);
      });
    });

    data.map((i, c) => {
      document.querySelectorAll("#btn-p")[c].onclick = () => {
        swal({
          title: "Product added to Basket!",
          text: "You clicked the button!",
          icon: "success",
          button: "OK!",
        });
        addToCart(i);
      };
    });
    
  })
  .catch((err) => console.log(err));

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "eng");
} else {
  function multiLang() {
    if (Acer == true) {
      for (let i = 0; i < langData.az.length; i++) {
        langItem[i].innerHTML = langData.az[i];
      }
      fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
        .then((res) => res.json())
        .then((data) => {
          let li = "";
          data.slice(0, 24).map((item) => {
            li += `
            
            
            
            <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
            <div id="shop-card" class="card mt-5">
            <div class="image-container">
                    <img style="object-fit:cover" src="${item.image}" alt="">
                        
                <div class="price">$${item.price}</div>
            </div>
            <label class="favorite">
            <button id="btn-w"  style="background: none; border: none;" class="wish${
              item.id
            }" class="wish-button button">
            <i id="heartt${
              item.id
            }" style="color: red;"  class="fa-regular fa-heart"></i>
               
            </button>
            
            
            </label>
        
            <div class="content">
            <div style="font-size:1rem" class="product-name">${item.title.az.slice(
              0,
              27
            )}...</div>
            <div style="font-size:1rem" class="product-name">${item.color.az.slice(
              0,
              30
            )}</div>
                <div class="color-size-container">
                    
                </div>
                <div class="rating">
                    <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                        <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                        <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                        <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                        <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                        <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                    </svg>
                    (29,062)
                </div>
            </div>
        
            <div class="button-container">
                <a style="text-align: center; text-decoration: none;" href="details.html?id=${
                  item.id
                }" id="heart" class="buy-button button">View Details</a>
                <button id="btn-p" class="cart-button button">
                <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
        
                </button>
            </div>
        </div>
    
    
            </div>
            
           
            
            `;
          });
          document.querySelector("ol").innerHTML = li;
          

          data.map((i, c) => {
            document
              .querySelectorAll("#btn-w")
              [c].addEventListener("click", () => {
                swal({
                  title: "Product added to Wishlist!",
                  text: "You clicked the button!",
                  icon: "success",
                  button: "OK!",
                });
                
                    data.map((i, c) => {
                      document.querySelectorAll("#btn-p")[c].onclick = () => {
                        swal({
                          title: "Product added to Basket!",
                          text: "You clicked the button!",
                          icon: "success",
                          button: "OK!",
                        });
        
                        addToCart(i);
                      };
                    });
                  
                addToWish(i);
              });
          });
        })
        .catch((err) => console.log(err));

      langBtn[0].innerHTML = "EN";
      localStorage.setItem("lang", "aze");
      Acer = false;
    } else {
      for (let i = 0; i < langData.en.length; i++) {
        langItem[i].innerHTML = langData.en[i];
      }

      fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
        .then((res) => res.json())
        .then((data) => {
          let li = "";
          data.slice(0, 24).map((item) => {
            li += `
          
          
          
          <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">

          <button id="btn-w" style="background: none; border: none;" class="wish${
            item.id
          }" class="wish-button button">
          <i id="heartt${
            item.id
          }" style="color: red;"  class="fa-regular fa-heart"></i>
             
          </button>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1.2rem" class="product-name">${item.title.en.slice(
            0,
            18
          )}...</div>
          <div class="product-name">${item.color.en.slice(0, 30)}</div>
              <div class="color-size-container">
                  
              </div>
              <div class="rating">
                  <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                      <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                      <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                      <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                      <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                      <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                  </svg>
                  (29,062)
              </div>
          </div>
      
          <div class="button-container">
              <a style="text-align: center; text-decoration: none;" href="details.html?id=${
                item.id
              }" id="heart" class="buy-button button">View Details</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `;
          });
          document.querySelector("ol").innerHTML = li;
          
          data.map((i, c) => {
            document.querySelectorAll("#btn-p")[c].onclick = () => {
              swal({
                title: "Product added to Basket!",
                text: "You clicked the button!",
                icon: "success",
                button: "OK!",
              });

              addToCart(i);
            };
            data.map((i, c) => {
              document
                .querySelectorAll("#btn-w")
                [c].addEventListener("click", () => {
                  swal({
                    title: "Product added to Wishlist!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "OK!",
                  });
                  addToWish(i);
                });
            });
          });
        })
        .catch((err) => console.log(err));

      langBtn[0].innerHTML = "AZ";
      Acer = true;
      localStorage.setItem("lang", "eng");
    }
  }
}

langBtn[0].onclick = multiLang;

if (localStorage.getItem("lang") == "aze") {
  for (let i = 0; i < langData.az.length; i++) {
    langItem[i].innerHTML = langData.az[i];
  }

  fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
    .then((res) => res.json())
    .then((data) => {
      let li = "";
      data.slice(0, 24).map((item) => {
        li += `
          
          
          
          <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">
          <button id="btn-w" style="background: none; border: none;" class="wish${
            item.id
          }" class="wish-button button">
          <i id="heartt${
            item.id
          }" style="color: red;" style="border:none" class="fa-regular fa-heart"></i>
             
          </button>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1rem" class="product-name">${item.title.az.slice(
            0,
            27
          )}...</div>
          <div style="font-size:1rem" class="product-name">${item.color.az.slice(
            0,
            30
          )}</div>
              <div class="color-size-container">
                  
              </div>
              <div class="rating">
                  <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                      <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                      <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                      <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                      <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                      <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                  </svg>
                  (29,062)
              </div>
          </div>
      
          <div class="button-container">
              <a style="text-align: center; text-decoration: none;" href="details.html?id=${
                item.id
              }" id="heart" class="buy-button button">View Details</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `;
      });
      document.querySelector("ol").innerHTML = li;
      
      data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
          swal({
            title: "Product added to Basket!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });

          addToCart(i);
        };
      });
      data.map((i, c) => {
        document.querySelectorAll("#btn-w")[c].addEventListener("click", () => {
          swal({
            title: "Product added to Wishlist!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
          addToWish(i);
        });
      });
    })
    .catch((err) => console.log(err));

  langBtn[0].innerHTML = "EN";
  Acer = false;
} else {
  for (let i = 0; i < langData.en.length; i++) {
    langItem[i].innerHTML = langData.en[i];
  }

  fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
    .then((res) => res.json())
    .then((data) => {
      let li = "";
      data.slice(0, 24).map((item) => {
        li += `
          
          
          
          <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">
          <button id="btn-w" style="background: none; border: none;" class="wish${
            item.id
          }" class="wish-button button">
          <i id="heartt${
            item.id
          }" style="color: red;" class="fa-regular fa-heart"></i>
             </button>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1rem" class="product-name">${item.title.en.slice(
            0,
            27
          )}...</div>
          <div style="font-size:1rem" class="product-name">${item.color.en.slice(
            0,
            30
          )}</div>
              <div class="color-size-container">
                  
              </div>
              <div class="rating">
                  <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                      <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                      <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                      <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                      <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                      <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
                  </svg>
                  (29,062)
              </div>
          </div>
      
          <div class="button-container">
              <a style="text-align: center; text-decoration: none;" href="details.html?id=${
                item.id
              }" id="heart" class="buy-button button">View Details</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `;
      });
      document.querySelector("ol").innerHTML = li;
      // document.querySelector(".wish1").onclick = () => {
      //   document.querySelector(".wish1").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish2").onclick = () => {
      //   document.querySelector(".wish2").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish3").onclick = () => {
      //   document.querySelector(".wish3").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish4").onclick = () => {
      //   document.querySelector(".wish4").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish5").onclick = () => {
      //   document.querySelector(".wish5").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish6").onclick = () => {
      //   document.querySelector(".wish6").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish7").onclick = () => {
      //   document.querySelector(".wish7").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish8").onclick = () => {
      //   document.querySelector(".wish8").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish9").onclick = () => {
      //   document.querySelector(".wish9").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      // document.querySelector(".wish10").onclick = () => {
      //   document.querySelector(".wish10").innerHTML =
      //     '<i style="color:red" class="fa-regular fa-heart"></i>';
      // };
      data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
          swal({
            title: "Product added to Basket!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });

          addToCart(i);
        };
      });
      data.map((i, c) => {
        document.querySelectorAll("#btn-w")[c].addEventListener("click", () => {
          swal({
            title: "Product added to Wishlist!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK!",
          });
          addToWish(i);
        });
      });
    })
    .catch((err) => console.log(err));

  langBtn[0].innerHTML = "AZ";
  Acer = true;
}

const searchInput = document.getElementById("searchInput");
const searchResultsBox = document.getElementById("searchResults");
const resultsCon = document.getElementById("results-con");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  fetch("https://mocki.io/v1/4add10c8-7802-4e8e-bdef-be68fe7bff16")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) =>
        item.title.en.toLowerCase().includes(searchTerm)
      );
      displayResults(filteredData);
    })
    .catch((error) => console.error("Error fetching data:", error));
});
function displayResults(results) {
  if (results.length === 0) {
    resultsCon.innerHTML =
      '<h1 style="color:red" class="text-center my-5">No Result Found</h1>';
  } else {
    document.querySelector(".prodrow").style.display = "none";
    const html = results
      .map(
        (item) => `
      
    

    <div data-aos="zoom-in-up" id="qedr1" class="col-12 col-sm-6 col-md-6 col-lg-4">
    <div id="shop-card" class="card mt-5">
    <div class="image-container">
            <img style="object-fit:cover" src="${item.image}" alt="">
                
        <div class="price">$${item.price}</div>
    </div>
    <label class="favorite">
    <button id="btn-w" style="background: none; border: none;"class=" wish${
      item.id
    }" class="wish-button button">
    <i id="heartt${
      item.id
    }" style="color: red;"  class="fa-regular fa-heart"></i>
       </button>
    
       
    </label>

    <div class="content">
    <div style="font-size:1rem" class="product-name">${item.title.en.slice(
      0,
      27
    )}...</div>
    <div style="font-size:1rem" class="product-name">${item.color.en.slice(
      0,
      30
    )}</div>
        <div class="color-size-container">
            
        </div>
        <div class="rating">
            <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" class="svg four-star-svg">
                <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com"></path>
                <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2"></path>
                <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3"></path>
                <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4"></path>
                <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5"></path>
            </svg>
            (29,062)
        </div>
    </div>

    <div class="button-container">
        <a style="text-align: center; text-decoration: none;" href="details.html?id=${
          item.id
        }" id="heart" class="buy-button button">View Details</a>
        <button id="btn-p" class="cart-button button">
        <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>

        </button>
    </div>
</div>


    </div>
    
    
    
    
    
      
    `
      )
      .join("");
    resultsCon.innerHTML = html;
  }
  searchResultsBox.style.display = "flex";
}

// document.querySelector("#btn-w").onclick=()=>{
//     document.querySelector("#btn-w").innerHTML = "fa-regular fa-heart"
//     console.log("test");
// }

// .innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'

// document.querySelector(".wish2").onclick=()=>{
//     console.log("huseyn eltac");
//     document.querySelector(".wish2").innerHTML = '<i class="fa-regular fa-heart"></i>'

// }

//                    ===============          MODE           =========================

const shopLogo = document.querySelector("#shopimg");
let Swich = true;
const Modebtn = document.querySelector("#modeBtn");
const item = document.querySelector(".light");
if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode", "light");
} else {
  Modebtn.addEventListener("click", () => {
    if (Swich == true) {
      item.className = "dark";
      Modebtn.innerHTML =
        '<i style="padding: 10px;" class="fa-regular fa-moon"></i>';
      Modebtn.style.backgroundColor = "#fff";
      document.body.style.backgroundColor = "black";
      Modebtn.style.color = "black";
      localStorage.setItem("mode", "dark");
      Swich = false;
    } else {
      item.className = "light";
      Modebtn.innerHTML =
        '<i style="padding: 7px;" class="fa-regular fa-sun"></i>';
      document.body.style.backgroundColor = "#fff";
      Modebtn.style.backgroundColor = "black";
      Modebtn.style.color = "#fff";
      localStorage.setItem("mode", "light");

      Swich = true;
    }
  });
}

if (localStorage.getItem("mode") == "light") {
  item.className = "light";
  Modebtn.style.backgroundColor = "black";
  Modebtn.style.color = "#fff";
  document.body.style.backgroundColor = "#fff";
  Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>';
} else {
  item.className = "dark";
  document.body.style.backgroundColor = "black";
  Modebtn.style.backgroundColor = "#fff";
  Modebtn.style.color = "black";
  Modebtn.innerHTML =
    '<i style="padding: 10px;" class="fa-regular fa-moon"></i>';
}

// ============================            upp          ============================
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// // AOS.init();

// // =========================================      mouse tails         ==============================================================================
// var dots = [],
//     mouse = {
//       x: 0,
//       y: 0
//     };

// var Dot = function() {
//   this.x = 0;
//   this.y = 0;
//   this.node = (function(){
//     var n = document.createElement("div");
//     n.className = "trail";
//     document.body.appendChild(n);
//     return n;
//   }());
// };
// Dot.prototype.draw = function() {
//   this.node.style.left = this.x + "px";
//   this.node.style.top = this.y + "px";
// };

// for (var i = 0; i < 22; i++) {
//   var d = new Dot();
//   dots.push(d);
// }

// function draw() {
//   var x = mouse.x,
//       y = mouse.y;

//   dots.forEach(function(dot, index, dots) {
//     var nextDot = dots[index + 1] || dots[0];

//     dot.x = x;
//     dot.y = y;
//     dot.draw();
//     x += (nextDot.x - dot.x) * .6;
//     y += (nextDot.y - dot.y) * .6;

//   });
// }

// addEventListener("mousemove", function(event) {
//   mouse.x = event.pageX;
//   mouse.y = event.pageY;
// });

// function animate() {
//   draw();
//   requestAnimationFrame(animate);
// }

// animate();
// =========================================      mouse tails   finished      ==============================================================================
