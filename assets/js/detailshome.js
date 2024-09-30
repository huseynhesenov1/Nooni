fetch("https://mocki.io/v1/673da01d-bebb-41d5-99e9-cce9e39751e1")
.then(res=>res.json())
.then(data=>{
    const urlid = location.href.slice(55, 99);
    console.log(location.href.length);
    const details = document.querySelector("#detailshome");
    const filterData = data.filter(p => p.id ==urlid);
    details.innerHTML = `
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img style="height:400px; object-fit:contain" src="${filterData[0].image}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${filterData[0].title.en}</h1>
      <p class="lead">${filterData[0].description.en}</p>
      
      <p class="lead">${filterData[0].color}</p>
        <a href="home.html"  class="btn btn-dark btn-lg px-4 me-md-2">Back</a>  <br>
        <button type="button" class="btn btn-outline-dark btn-lg px-4 mt-3">Ödəniləcək Məbləğ: ${filterData[0].price}$</button>
       
        </div>
        </div>
  </div>`
});

// document.querySelector("ol").innerHTML= li


// async function sharePage() {
//   try {
//       await navigator.share({
//           title: document.title,
//           url: window.location.href
//       });
//   } catch (error) {
//       console.error('Paylaşım hatası:', error);
//   }
// }

