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


// 


const tbody = document.querySelector("tbody");

const comingBasketData = JSON.parse(localStorage.getItem("basket"));

let tr = "";

comingBasketData.map((i,c)=>{
    tr+=`  <tr>
    <th scope="row">${c+1}</th>
    <td><img style="object-fit:cover" width="200" height="200"  src="${i.image}"/></td>
    <td>${i.title.en}</td>
    <td>${i.price}$</td>
    <td><button style="border: none;background: none"  class="silDugmesi" onclick="removeItem(${c})"><i class="fa-solid fa-trash"></i></button></td> 
    
  </tr>`
  tbody.innerHTML = tr;
})






function clearBasket() {
    
  var result = confirm("Səbəti təmizləməyə əminsiniz?");
  
  if (result) {
      location.reload(); 
      localStorage.removeItem('basket');
    } else {
     
    }
    
}
  


// const tbody = document.querySelector("tbody");
// let comingBasketData = JSON.parse(localStorage.getItem("basket"));

// let tr = "";

// comingBasketData.forEach((i, index) => {
//     tr += `
//         <tr>
//             <th scope="row">${index + 1}</th>
//             <td><img width="70" src="${i.image}" alt="product image" /></td>
//             <td>${i.title}</td>
//             <td>${i.price}$</td>
//             <td><button class="silDugmesi" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button></td>
//         </tr>
//     `;
// });

function removeItem(c) {
    comingBasketData.splice(c, 1); 
    localStorage.setItem("basket", JSON.stringify(comingBasketData)); 
    renderBasket(); 
    alert('Remove the product from the cart?')
}

function renderBasket() {
    tr = ""; 
    comingBasketData.forEach((i, c) => {
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

renderBasket();