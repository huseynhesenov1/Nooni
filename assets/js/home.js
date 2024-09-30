// fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
const langData = {
    en: ['UP TO 40% OFF BEST-SELLING . SHOP NOW','HOME', 'SHOP', 'BLOG', 'ABOUT US', 'CONTACT US', 
     'Sale off 20%','Lamps & Lights Great Low Prices','Free Standart Shopping with 40$','Shop Now',
     'Sale off 25%','Chairs Settings You all love','Free Standart Shopping with 54$','Shop Now',
     'Sale off 30%',' Discovery Living Room Tables','Free Standart Shopping with 34$','Shop Now',


    'ABOUT','Our Story' ,'Influencers','Join our team', 'Join our shop','CUSTOMER SERVICES' ,
        'Home', 'Features' , 'Pricing' ,'FAQs', 'SIGN UP FOR EMAILS', 'Enjoy 15% off* your first order when sign up to our newsletter',
        'Home',
        'About',
        'Shop',
        'Product',
        'Blog'
      ],
      
  
    az: ["ƏN ÇOX SATILANLARA 40%-Ə QƏDƏR ENDİRİM. İNDİ ALIN","Ana Səhifə", "Məhsullar", "Məqalə", "Haqqımızda", "Əlaqə"
    ,
    'Endirim 20%','Lampalar və İşıqlar Aşağı Qiymətlərə','Pulsuz Standart Çatdırılma ilə 40$','İndi al',
    'Endirim 25%','Kreslolarımız Hər Kəsin Zövqünə uyğundur','Pulsuz Standart Çatdırılma ilə 54$','İndi al',
    'Endirim 30%','Yeni Qonaq Otağı Masaları','Pulsuz Standart Çatdırılma ilə 34$','İndi al'
    

          ,"Haqqimizda","Bizim hekaye","Bizə qoşul","Mağazaya qoşul","Təsirlər"
        ,"Müştəri servisi","Ana Səhifə","Xüsusiyyətləri","Qiymət","Suallar"
          ,"Email ilə qeydiyyat","Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın","Ana Səhifə",
          "Haqqımızda",
          "Mağaza",
          "Məhsullar",
          "Məqalə"
        ]
  }






const row = document.querySelector('.prod-row');
const basket = [];

const addToCart = (addProd) => {
    basket.push(addProd);
    const localBasket = JSON.stringify(basket);
    localStorage.setItem('basket', localBasket);
}


const langBtn = document.querySelectorAll('#lang-btn');
const langItem = document.querySelectorAll('.lang');
const ol =  document.querySelector("ol")
Acer = true
fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
.then(res=>res.json())
.then(data=>{
    let li = ""
    data.slice(1,11).map(item=>{
        li+=`
        
        
        
        <div data-aos="zoom-in-up" id="qedr" class="col-12 col-sm-6 col-md-6 col-lg-4">
        <div id="shop-card" class="card mt-5">
        <div class="image-container">
                <img style="object-fit:cover" src="${item.image}" alt="">
                    
            <div class="price">$${item.price}</div>
        </div>
        <label class="favorite">
     <i  style="color: red;" class="fa-regular fa-heart"></i>
        
           
        </label>
    
        <div class="content">
        <div style="font-size:1.2rem" class="product-name">${item.title.en.slice(0,30)}...</div>
        <div style="font-size:1rem" class="product-name">${item.description.en.slice(0,40)}</div>
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
            <a style="text-align: center; text-decoration: none;" href="detailshome.html?id=${item.id}" id="heart" class="buy-button button">Buy Now</a>
            <button id="btn-p" class="cart-button button">
            <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
    
            </button>
        </div>
    </div>


        </div>
        
        
        
        
        
        
        `
    })
    document.querySelector("ol").innerHTML= li
    data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
            alert("Məhsul əlavə olundu")
            addToCart(i);
        
        };
    }) 
})
.catch(err=>console.log(err));


if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang","eng")
}else{
  function multiLang() {
    if (Acer == true) {
      for (let i = 0; i < langData.az.length; i++) {
        langItem[i].innerHTML = langData.az[i];
    }
    fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
    .then(res=>res.json())
    .then(data=>{
        let li = ""
        data.slice(1,11).map(item=>{
            li+=`
            
            
            
            <div data-aos="zoom-in-up" id="qedr" class="col-12 col-sm-6 col-md-6 col-lg-4">
            <div id="shop-card" class="card mt-5">
            <div class="image-container">
                    <img style="object-fit:cover" src="${item.image}" alt="">
                        
                <div class="price">$${item.price}</div>
            </div>
            <label class="favorite">
         <i  style="color: red;" class="fa-regular fa-heart"></i>
            
               
            </label>
        
            <div class="content">
            <div style="font-size:1.2rem" class="product-name">${item.title.az.slice(0,30)}...</div>
            <div style="font-size:1rem" class="product-name">${item.description.az.slice(0,40)}</div>
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
                <a style="text-align: center; text-decoration: none;" href="detailshome.html?id=${item.id}" id="heart" class="buy-button button">Buy Now</a>
                <button id="btn-p" class="cart-button button">
                <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
        
                </button>
            </div>
        </div>
    
    
            </div>
            
            
            
            
            
            
            `
        })
        document.querySelector("ol").innerHTML= li
        data.map((i, c) => {
            document.querySelectorAll("#btn-p")[c].onclick = () => {
                alert("Məhsul əlavə olundu")
                addToCart(i);
            
            };
        }) 
    })
    .catch(err=>console.log(err));
    langBtn[0].innerHTML = "EN";
    localStorage.setItem("lang","aze")
    Acer= false
  } else {
    for (let i = 0; i < langData.en.length; i++) {
      langItem[i].innerHTML = langData.en[i];
  }    


  fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
  .then(res=>res.json())
  .then(data=>{
      let li = ""
      data.slice(1,11).map(item=>{
          li+=`
          
          
          
          <div data-aos="zoom-in-up" id="qedr" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">
       <i  style="color: red;" class="fa-regular fa-heart"></i>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1.2rem" class="product-name">${item.title.en.slice(0,30)}...</div>
          <div style="font-size:1rem" class="product-name">${item.description.en.slice(0,40)}</div>
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
              <a style="text-align: center; text-decoration: none;" href="details.html?id=${item.id}" id="heart" class="buy-button button">Buy Now</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `
      })
      document.querySelector("ol").innerHTML= li
      data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
            alert("Məhsul əlavə olundu")
            addToCart(i);
        
        };
    }) 
  })
  .catch(err=>console.log(err));


  langBtn[0].innerHTML = "AZ";
  Acer = true
  localStorage.setItem("lang","eng")
      
    }
  }}
  
  langBtn[0].onclick = multiLang;
  




  if (localStorage.getItem("lang")=="aze") {
    for (let i = 0; i < langData.az.length; i++) {
      langItem[i].innerHTML = langData.az[i];
  }


  fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
  .then(res=>res.json())
  .then(data=>{
      let li = ""
      data.slice(1,11).map(item=>{
          li+=`
          
          
          
          <div data-aos="zoom-in-up" id="qedr" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">
       <i  style="color: red;" class="fa-regular fa-heart"></i>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1.2rem" class="product-name">${item.title.az.slice(0,30)}...</div>
          <div style="font-size:1rem" class="product-name">${item.description.az.slice(0,40)}</div>
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
              <a style="text-align: center; text-decoration: none;" href="detailshome.html?id=${item.id}" id="heart" class="buy-button button">Buy Now</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `
      })
      document.querySelector("ol").innerHTML= li
      data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
            alert("Məhsul əlavə olundu")
            addToCart(i);
        
        };
    }) 
  })
  .catch(err=>console.log(err));


  langBtn[0].innerHTML = "EN";
  Acer= false
}else{ 
  for (let i = 0; i < langData.en.length; i++) {
    langItem[i].innerHTML = langData.en[i];
}

fetch("https://mocki.io/v1/ec0525b3-175e-4490-8f23-ce7b5c411a5d")
  .then(res=>res.json())
  .then(data=>{
      let li = ""
      data.slice(1,11).map(item=>{
          li+=`
          
          
          
          <div data-aos="zoom-in-up" id="qedr" class="col-12 col-sm-6 col-md-6 col-lg-4">
          <div id="shop-card" class="card mt-5">
          <div class="image-container">
                  <img style="object-fit:cover" src="${item.image}" alt="">
                      
              <div class="price">$${item.price}</div>
          </div>
          <label class="favorite">
       <i  style="color: red;" class="fa-regular fa-heart"></i>
          
             
          </label>
      
          <div class="content">
          <div style="font-size:1.2rem" class="product-name">${item.title.en.slice(0,30)}...</div>
          <div style="font-size:1rem" class="product-name">${item.description.en.slice(0,40)}...</div>
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
              <a style="text-align: center; text-decoration: none;" href="detailshome.html?id=${item.id}" id="heart" class="buy-button button">Buy Now</a>
              <button id="btn-p" class="cart-button button">
              <i style="color: #fff;" class="fa-solid fa-cart-arrow-down"></i>
      
              </button>
          </div>
      </div>
  
  
          </div>
          
          
          
          
          
          
          `
      })
      document.querySelector("ol").innerHTML= li
      data.map((i, c) => {
        document.querySelectorAll("#btn-p")[c].onclick = () => {
            alert("Məhsul əlavə olundu")
            addToCart(i);
        
        };
    }) 
  })
  .catch(err=>console.log(err));
  langBtn[0].innerHTML = "AZ";
   Acer = true
}














//  ==============================                       MODE                       ========================================

let Swich = true;
const Modebtn = document.querySelector("#modeBtn")
const item = document.querySelector(".light")

if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode","light")
}else{
      Modebtn.addEventListener("click",()=>{
        if (Swich == true) {
            document.body.style.backgroundColor = "black"
          item.className="dark"
          Modebtn.style.backgroundColor = "#fff"
          Modebtn.style.color = "black"
          localStorage.setItem("mode","dark")
                    Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'

          Swich=false
        }else{
                      Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
 document.body.style.backgroundColor = "#fff"
          item.className="light"
          Modebtn.style.backgroundColor = "black"
          Modebtn.style.color = "#fff"
          localStorage.setItem("mode","light")
          Swich=true
        }

    })
}




if (localStorage.getItem("mode")=="light") {
  item.className="light"
  Modebtn.style.backgroundColor = "black"
  Modebtn.style.color = "#fff"
   document.body.style.backgroundColor = "#fff"
  Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
}else{
      Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
 document.body.style.backgroundColor = "black"
  item.className="dark"
  Modebtn.style.backgroundColor = "#fff"
  Modebtn.style.color = "black"
}





// ============================                 PRE-LOADER                  =======================================
setTimeout(()=>{
    document.querySelector(".pre-loader").style.display ="none"
    document.querySelector(".main-page").style.display ="block"
  
  },1000)




