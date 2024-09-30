const formInput = document.querySelectorAll(".form-control");
    (function() {
    emailjs.init({
      publicKey: "EW_BngZpDF48NcSYA",
    });
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        if (localStorage.getItem("login")==="true") {
            if (!formInput[4].value) {
                alert("Please, Write Message")
            }else{
                formInput[0].value = localStorage.getItem("fullname")
            formInput[3].value = localStorage.getItem("email")
            event.preventDefault();
            emailjs.sendForm('service_7dsmngk', 'template_2rh3b2i', this)
                .then(() => {
                    console.log('SUCCESS!');
                    alert("Succesful")
                }, (error) => {
                    console.log('FAILED...', error);
                });
            }
        }else{
            if (!formInput[0].value || !formInput[1].value || !formInput[2].value || !formInput[3].value || !formInput[4].value) {
                alert("Please, Fill Input");
            }else{
            event.preventDefault();
            emailjs.sendForm('service_7dsmngk', 'template_2rh3b2i', this)
                .then(() => {
                    console.log('SUCCESS!');
                    alert("Succesful")
                }, (error) => {
                    console.log('FAILED...', error);
                });
            }
        }
    });
}




// ============================            upp          ============================ 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ============================            mode          ============================ 





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
  Modebtn.style.backgroundColor = "bla"
  Modebtn.style.color = "#fff"
  document.body.style.backgroundColor = "#fff"
  Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
}else{
  item.className="dark"
  Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
  Modebtn.style.backgroundColor = "#fff"
  Modebtn.style.color = "black"
  document.body.style.backgroundColor = "black"
}












const langData = {
  en: ['UP TO 40% OFF BEST-SELLING . SHOP NOW','HOME', 'SHOP', 'BLOG', 'ABOUT US', 'CONTACT US', 'Get in touch with us. Send us a message', 'Contact Us', 
  'Call to Us:' ,
  'We’re available 24/7, 7 days a week.+08 9229 8228 ', 'Write to Us:',
    'Fill out our form and we will contact you within 24 hours.Email: Support1234@Jaroti',
      'Headquarter', ' Monday – Friday: 9:00-20:00 Saturady: 11:00 – 15:00 123 Atlantic, Brooklyn, New York, USA', 
      'We would love to hear from you.', 'Name', 
      'Surname', 'Phone','Email address','Write Messag','Send message',
      

      'ABOUT','Our Story' ,'Influencers','Join our team', 'Join our shop','CUSTOMER SERVICES' ,'Home', 'Features' , 'Pricing' ,'FAQs', 'SIGN UP FOR EMAILS', 'Enjoy 15% off* your first order when sign up to our newsletter',
      'Home',
      'About',
      'Shop',
      'Product',
      'Blog'
    ],
    

  az: ["ƏN ÇOX SATILANLARA 40%-Ə QƏDƏR ENDİRİM. İNDİ ALIN","Ana Səhifə", "Məhsullar", "Məqalə", "Haqqımızda", "Əlaqə", "Bizimlə əlaqə saxlayın. Bizə mesaj göndərin", "Bizimlə əlaqə",
  "Bizimlə əlaqə saxlayın", 
  "Həftənin 7 günü, 24/7 xidmətinizdəyik.+08 9229 8228", "Bizə yazın:", "Formumuzu doldurun və biz 24 saat ərzində sizinlə əlaqə saxlayacağıq.E-poçt: Support1234@Jaroti",
      "Baş ofis", "Bazar ertəsi – Cümə: 9:00-20:00 Şənlik: 11:00 – 15:00 123 Atlantic, Brooklyn, New York, USA",
      "Sizdən eşitmək istərdik.", "Ad:",
        "Soyad:", "Telefon:", "Email:", "Mesaj yazin:","Gonder"
      
        ,"Haqqimizda","Bizim hekaye","Bizə qoşul","Mağazaya qoşul","Təsirlər"
      ,"Müştəri servisi","Ana Səhifə","Xüsusiyyətləri","Qiymət","Suallar"
        ,"Email ilə qeydiyyat","Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın",'Ana Səhifə',
        'Haqqımızda',
        'Mağaza',
        'Məhsullar',
        'Məqalə'
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
  // localStorage.setItem("lang","aze")
}else{
  for (let i = 0; i < langData.az.length; i++) {
    langItem[i].innerHTML = langData.az[i];
}
langBtn[0].innerHTML = "EN";
      // localStorage.setItem("lang","eng")
  }












































































































































// (function() {
//     // https://dashboard.emailjs.com/admin/account
//     emailjs.init({
//       publicKey: "EW_BngZpDF48NcSYA",
//     });
// })();


// window.onload = function() {
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // these IDs from the previous steps
//         emailjs.sendForm('service_7dsmngk', 'template_2rh3b2i', this)
//             .then(() => {
//                 console.log('SUCCESS!');
//                 alert("Succesful")
//             }, (error) => {
//                 console.log('FAILED...', error);
//             });
//     });
// }