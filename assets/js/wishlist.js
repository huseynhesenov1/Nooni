const tbody = document.querySelector("tbody");

const comingwishlistData = JSON.parse(localStorage.getItem("wishlist"));

let tr = "";

comingwishlistData.map((i,c)=>{
    tr+=`  <tr>
    <th scope="row">${c+1}</th>
    <td><img style="object-fit:cover" width="200" height="200"  src="${i.image}"/></td>
    <td>${i.title.en}</td>
    <td>${i.price}$</td>
    <td><button style="border: none;background: none"  class="silDugmesi" onclick="removeItem(${c})"><i class="fa-solid fa-trash"></i></button></td> 

  </tr>`
  tbody.innerHTML = tr;
})






function clearWish() {
  var result = confirm("Wishlisti təmizləməyə əminsiniz?");
  if (result) {
     location.reload(); 
      localStorage.removeItem('wishlist');
    } else {
     
    }
}
  


function removeItem(c) {
  comingwishlistData.splice(c, 1); 
  localStorage.setItem("wishlist", JSON.stringify(comingwishlistData)); 
  renderWishlist(); 
  alert('Remove the product from the Wishlish?')
}

function renderWishlist() {
  tr = ""; 
  comingwishlistData.forEach((i, c) => {
      tr += `
          <tr>
              <th scope="row">${c + 1}</th>
              <td><img style="object-fit:cover" width="200" height="200" src="${i.image}" alt="product image" /></td>
              <td>${i.title.en}</td>
              <td>${i.price}$</td>
              <td><button class="silDugmesi" onclick="removeItem(${c})"><i class="fa-solid fa-trash"></i></button></td>
          </tr>
      `;
  });
  tbody.innerHTML = tr; 
}

renderWishlist();



let Swich = true;
const Modebtn = document.querySelector("#modeBtn")
const item = document.querySelector(".light")
if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode","light")
}else{
  Modebtn.addEventListener("click",()=>{
    if (Swich == true) {
      item.className="dark"
      document.body.style.backgroundColor = "black"
          Modebtn.style.backgroundColor = "#fff"
          Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
          Modebtn.style.color = "black"
          localStorage.setItem("mode","dark")
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




const langData = {
  en: ['UP TO 40% OFF BEST-SELLING . SHOP NOW','HOME', 'SHOP', 'BLOG', 'ABOUT US', 'CONTACT US',  'Your Wishlist',
   
   'ABOUT','Our Story' ,'Influencers','Join our team', 'Join our shop','CUSTOMER SERVICES' ,
      'Home', 'Features' , 'Pricing' ,'FAQs', 'SIGN UP FOR EMAILS', 'Enjoy 15% off* your first order when sign up to our newsletter',
      'Home',
      'About',
      'Shop',
      'Product',
      'Blog'
    ],
    

  az: ["ƏN ÇOX SATILANLARA 40%-Ə QƏDƏR ENDİRİM. İNDİ ALIN","Ana Səhifə", "Məhsullar", "Məqalə", "Haqqımızda", "Əlaqə" ,"Sizin Seçilmişləriniz"
  
        ,"Haqqimizda","Bizim hekaye","Bizə qoşul","Mağazaya qoşul","Təsirlər"
      ,"Müştəri servisi","Ana Səhifə","Xüsusiyyətləri","Qiymət","Suallar"
        ,"Email ilə qeydiyyat","Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın","Ana Səhifə",
        "Haqqımızda",
        "Mağaza",
        "Məhsullar",
        "Məqalə"
      ]
}


const langBtn = document.querySelectorAll('#lang-btn');
const langItem = document.querySelectorAll('.lang');
Acer = true

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang","eng")
}else{
function multiLang() {
  if (Acer == true) {
    for (let i = 0; i < langData.az.length; i++) {
      langItem[i].innerHTML = langData.az[i];
  }
  langBtn[0].innerHTML = "EN";
  localStorage.setItem("lang","aze")
  Acer = false
  } else {
    for (let i = 0; i < langData.en.length; i++) {
        langItem[i].innerHTML = langData.en[i];
    }
    langBtn[0].innerHTML = "AZ";
    localStorage.setItem("lang","eng")
    Acer= true
  
  }
}

langBtn[0].onclick = multiLang;
}


if (localStorage.getItem("lang") == "eng") {
  for (let i = 0; i < langData.en.length; i++) {
          langItem[i].innerHTML = langData.en[i];
      }
      langBtn[0].innerHTML = "AZ";
}else{
  for (let i = 0; i < langData.az.length; i++) {
    langItem[i].innerHTML = langData.az[i];
}
langBtn[0].innerHTML = "EN";
  }
