const socket = io('https://store-7.onrender.com');



let productStorageBaits = "";
let productStorageRods = "";
let productStorageReels = "";
let productStorageHooks = "";
let productStorageSpecials = "";
let productTrack = "";
let uptades = "";
const sbutton = document.querySelector('.sbutton');
const list = document.querySelector('.row');
const serPrMain = document.querySelector('.ser-pr-fin');

if(localStorage.getItem('th-name') === null) {
  document.querySelector('.dash-b').innerHTML = `Hi, ${localStorage.getItem('dash-name')}`;
} else {
  document.querySelector('.dash-b').innerHTML = `Hi, ${localStorage.getItem('th-name')}`;
}
 



productTrack = localStorage.getItem("track");
uptades = localStorage.getItem("uptade");
productStorageRods = localStorage.getItem("rods");

socket.on('launch', ({ products }) => {
  uptadeProducts(products);
  console.log(products);
})

socket.on('added-product', (product) => {
  uptadeProducts([product]);
  console.log([product]);
})

socket.on('users', (users) => {
  console.log(users);
})


async function searchPr() {
    const inputPr = document.querySelector('.ser-pr').value;
    if(inputPr.includes('rod') || inputPr.includes('Rod')) {
        const response = await fetch('https://store-7.onrender.com/search/rods');
        const resultRod = await response.json();

        resultRod.forEach(pr => {
            const prEl = document.createElement('div');
            prEl.innerHTML = `<h1>${pr.nm}</h1>`;
            list.appendChild(prEl);
        })
    }
}


async function fetchProducts() {
    
    const response = await fetch("https://store-7.onrender.com/api/products");
  
    const products = await response.json();

    const list = document.querySelector('.row');


    products.forEach(pr => {
        const prElement = document.createElement('div');

        prElement.innerHTML = `<div>
            <h1>${pr.nm}</h1>
            <a href="https://store-7.onrender.com/products/${pr.nm}" target="_blank">See Description</a>
        </div>`;

      list.appendChild(prElement);
    });
}

fetchProducts();


serPrMain.addEventListener('click', () => {
    searchPr();
});





function uptadeProducts(products) {
  products.forEach((pr) => {
    const list = document.querySelector(".row");
    const prElement = document.createElement("div");
    prElement.innerHTML = `<h1>${pr.nm}</h1>`;
    list.appendChild(prElement);
  });
}















    

function submit() {
        let productName = document.querySelector(".name").value;
        let productClass = document.querySelector(".classification").value;
        let productPlace = document.querySelector(".place").value;
        let productPrice = document.querySelector(".price").value;
        let productImg = document.querySelector(".imgURL").value;

        localStorage.setItem("img", productImg);

        if ((productName === "") & (productPrice === "")) {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p> Not much information about the product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productName === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>You gotta have a name for your product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productPrice === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>You gotta identify a price for your product </p> <button onclick="Ok();">Ok</button>`;
        } else if (productClass === "") {
          document.querySelector(
            ".helper"
          ).innerHTML = `<p>Class is required </p> <button onclick="Ok();">Ok</button>`;
        }

        if (
          (productName != "") &
          (productPrice != "") &
          (productClass != "") &
          (productPlace != "") &
          (productImg != "")
        ) {
          productTrack += `<h1>${productName}  $${productPrice} --- ${productPlace}</h1>`;
          uptades += `<p>${productName}  $${productPrice} --- ${productPlace} </p>`;
          if ((productClass === "Rods") & (productPlace === "001")) {
            productStorageRods += ` <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place1();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code1 = productName;
            const price1 = productPrice;
            const img1 = productImg;
            localStorage.setItem("code1", code1);
            localStorage.setItem("price1", price1);
            localStorage.setItem("img1", img1);
            console.log(code1);
          } else if ((productClass === "Rods") & (productPlace === "002")) {
            productStorageRods += ` <div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place2();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code2 = productName;
            const price2 = productPrice;
            const img2 = productImg;
            localStorage.setItem("code2", code2);
            localStorage.setItem("price2", price2);
            localStorage.setItem("img2", img2);
            console.log(code2);
          } else if ((productClass === "Rods") & (productPlace === "003")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place3();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code3 = productName;
            const price3 = productPrice;
            const img3 = productImg;
            localStorage.setItem("code3", code3);
            localStorage.setItem("price3", price3);
            localStorage.setItem("img3", img3);
          } else if ((productClass === "Rods") & (productPlace === "004")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;" >
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place4();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code4 = productName;
            const price4 = productPrice;
            const img4 = productImg;
            localStorage.setItem("code4", code4);
            localStorage.setItem("price4", price4);
            localStorage.setItem("img4", img4);
          } else if ((productClass === "Rods") & (productPlace === "005")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place5();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code5 = productName;
            const price5 = productPrice;
            const img5 = productImg;
            localStorage.setItem("code5", code5);
            localStorage.setItem("price5", price5);
            localStorage.setItem("img5", img5);
          } else if ((productClass === "Rods") & (productPlace === "006")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place6();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code6 = productName;
            const price6 = productPrice;
            const img6 = productImg;
            localStorage.setItem("code6", code6);
            localStorage.setItem("price6", price6);
            localStorage.setItem("img6", img6);
          } else if ((productClass === "Rods") & (productPlace === "007")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place7();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code7 = productName;
            const price7 = productPrice;
            const img7 = productImg;
            localStorage.setItem("code7", code7);
            localStorage.setItem("price7", price7);
            localStorage.setItem("img7", img7);
          } else if ((productClass === "Rods") & (productPlace === "008")) {
            productStorageRods += `<div class="col-lg"> <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                      <img class="card-img-top" src="${productImg}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text">$ ${productPrice}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place8();">Add to cart</button></a>
                      </div>
                    </div> </div> `;
            const code8 = productName;
            const price8 = productPrice;
            const img8 = productImg;
            localStorage.setItem("code8", code8);
            localStorage.setItem("price8", price8);
            localStorage.setItem("img8", img8);
          } else if (productClass === "Baits") {
            productStorageBaits += `<h1>${productName}  ${productPrice}</h1>`;
          } else if (productClass === "Reels") {
            productStorageReels += `<h1>${productName}  ${productPrice}</h1>`;
          }
        }

        localStorage.setItem("track", productTrack);
        localStorage.setItem("uptade", uptades);
        localStorage.setItem("rods", productStorageRods);

        document.querySelector(".tracking").innerHTML = productTrack;
        document.querySelector(".uptadation").innerHTML = uptades;
      }








function place1(nm, price, img) {
    localStorage.setItem("code1", nm);
    localStorage.setItem("price1", price);
    localStorage.setItem("img1", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff1">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct1PriseAndQuanity();"> + </button>
                                    <li class="count1" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct1PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct1();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing1", shopItem);
}

 
function place2(nm, price, img) {
    localStorage.setItem("code2", nm);
    localStorage.setItem("price2", price);
    localStorage.setItem("img2", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff2">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct2PriseAndQuanity();"> + </button>
                                    <li class="count2" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct2PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct2();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing2", shopItem);
}

 
function place3(nm, price, img) {
    localStorage.setItem("code3", nm);
    localStorage.setItem("price3", price);
    localStorage.setItem("img3", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff3">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct3PriseAndQuanity();"> + </button>
                                    <li class="count3" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct3PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct3();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing3", shopItem);
}

 
function place4(nm, price, img) {
    localStorage.setItem("code4", nm);
    localStorage.setItem("price4", price);
    localStorage.setItem("img4", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff4">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct4PriseAndQuanity();"> + </button>
                                    <li class="count4" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct4PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct4();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing4", shopItem);
}

 
function place5(nm, price, img) {
    localStorage.setItem("code5", nm);
    localStorage.setItem("price5", price);
    localStorage.setItem("img5", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff5">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct5PriseAndQuanity();"> + </button>
                                    <li class="count5" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct5PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct5();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing5", shopItem);
}

 
function place6(nm, price, img) {
    localStorage.setItem("code6", nm);
    localStorage.setItem("price6", price);
    localStorage.setItem("img6", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff6">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct6PriseAndQuanity();"> + </button>
                                    <li class="count6" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct6PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct6();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing6", shopItem);
}

 
function place7(nm, price, img) {
    localStorage.setItem("code7", nm);
    localStorage.setItem("price7", price);
    localStorage.setItem("img7", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff7">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct7PriseAndQuanity();"> + </button>
                                    <li class="count7" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct7PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct7();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing7", shopItem);
}

 
function place8(nm, price, img) {
    localStorage.setItem("code8", nm);
    localStorage.setItem("price8", price);
    localStorage.setItem("img8", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff8">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct8PriseAndQuanity();"> + </button>
                                    <li class="count8" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct8PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct8();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing8", shopItem);
}

 
function place9(nm, price, img) {
    localStorage.setItem("code9", nm);
    localStorage.setItem("price9", price);
    localStorage.setItem("img9", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff9">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct9PriseAndQuanity();"> + </button>
                                    <li class="count9" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct9PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct9();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing9", shopItem);
}

 
function place10(nm, price, img) {
    localStorage.setItem("code10", nm);
    localStorage.setItem("price10", price);
    localStorage.setItem("img10", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff10">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct10PriseAndQuanity();"> + </button>
                                    <li class="count10" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct10PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct10();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing10", shopItem);
}

 
function place11(nm, price, img) {
    localStorage.setItem("code11", nm);
    localStorage.setItem("price11", price);
    localStorage.setItem("img11", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff11">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct11PriseAndQuanity();"> + </button>
                                    <li class="count11" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct11PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct11();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing11", shopItem);
}

 
function place12(nm, price, img) {
    localStorage.setItem("code12", nm);
    localStorage.setItem("price12", price);
    localStorage.setItem("img12", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff12">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct12PriseAndQuanity();"> + </button>
                                    <li class="count12" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct12PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct12();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing12", shopItem);
}

 
function place13(nm, price, img) {
    localStorage.setItem("code13", nm);
    localStorage.setItem("price13", price);
    localStorage.setItem("img13", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff13">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct13PriseAndQuanity();"> + </button>
                                    <li class="count13" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct13PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct13();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing13", shopItem);
}

 
function place14(nm, price, img) {
    localStorage.setItem("code14", nm);
    localStorage.setItem("price14", price);
    localStorage.setItem("img14", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff14">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct14PriseAndQuanity();"> + </button>
                                    <li class="count14" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct14PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct14();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing14", shopItem);
}

 
function place15(nm, price, img) {
    localStorage.setItem("code15", nm);
    localStorage.setItem("price15", price);
    localStorage.setItem("img15", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff15">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct15PriseAndQuanity();"> + </button>
                                    <li class="count15" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct15PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct15();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing15", shopItem);
}

 
function place16(nm, price, img) {
    localStorage.setItem("code16", nm);
    localStorage.setItem("price16", price);
    localStorage.setItem("img16", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff16">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct16PriseAndQuanity();"> + </button>
                                    <li class="count16" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct16PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct16();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing16", shopItem);
}

 
function place17(nm, price, img) {
    localStorage.setItem("code17", nm);
    localStorage.setItem("price17", price);
    localStorage.setItem("img17", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff17">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct17PriseAndQuanity();"> + </button>
                                    <li class="count17" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct17PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct17();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing17", shopItem);
}

 
function place18(nm, price, img) {
    localStorage.setItem("code18", nm);
    localStorage.setItem("price18", price);
    localStorage.setItem("img18", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff18">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct18PriseAndQuanity();"> + </button>
                                    <li class="count18" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct18PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct18();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing18", shopItem);
}

 
function place19(nm, price, img) {
    localStorage.setItem("code19", nm);
    localStorage.setItem("price19", price);
    localStorage.setItem("img19", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff19">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct19PriseAndQuanity();"> + </button>
                                    <li class="count19" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct19PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct19();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing19", shopItem);
}

 
function place20(nm, price, img) {
    localStorage.setItem("code20", nm);
    localStorage.setItem("price20", price);
    localStorage.setItem("img20", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff20">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct20PriseAndQuanity();"> + </button>
                                    <li class="count20" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct20PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct20();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing20", shopItem);
}

 
function place21(nm, price, img) {
    localStorage.setItem("code21", nm);
    localStorage.setItem("price21", price);
    localStorage.setItem("img21", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff21">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct21PriseAndQuanity();"> + </button>
                                    <li class="count21" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct21PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct21();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing21", shopItem);
}

 
function place22(nm, price, img) {
    localStorage.setItem("code22", nm);
    localStorage.setItem("price22", price);
    localStorage.setItem("img22", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff22">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct22PriseAndQuanity();"> + </button>
                                    <li class="count22" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct22PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct22();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing22", shopItem);
}

 
function place23(nm, price, img) {
    localStorage.setItem("code23", nm);
    localStorage.setItem("price23", price);
    localStorage.setItem("img23", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff23">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct23PriseAndQuanity();"> + </button>
                                    <li class="count23" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct23PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct23();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing23", shopItem);
}

 
function place24(nm, price, img) {
    localStorage.setItem("code24", nm);
    localStorage.setItem("price24", price);
    localStorage.setItem("img24", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff24">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct24PriseAndQuanity();"> + </button>
                                    <li class="count24" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct24PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct24();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing24", shopItem);
}

 
function place25(nm, price, img) {
    localStorage.setItem("code25", nm);
    localStorage.setItem("price25", price);
    localStorage.setItem("img25", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff25">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct25PriseAndQuanity();"> + </button>
                                    <li class="count25" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct25PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct25();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing25", shopItem);
}

 
function place26(nm, price, img) {
    localStorage.setItem("code26", nm);
    localStorage.setItem("price26", price);
    localStorage.setItem("img26", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff26">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct26PriseAndQuanity();"> + </button>
                                    <li class="count26" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct26PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct26();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing26", shopItem);
}

 
function place27(nm, price, img) {
    localStorage.setItem("code27", nm);
    localStorage.setItem("price27", price);
    localStorage.setItem("img27", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff27">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct27PriseAndQuanity();"> + </button>
                                    <li class="count27" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct27PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct27();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing27", shopItem);
}

 
function place28(nm, price, img) {
    localStorage.setItem("code28", nm);
    localStorage.setItem("price28", price);
    localStorage.setItem("img28", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff28">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct28PriseAndQuanity();"> + </button>
                                    <li class="count28" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct28PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct28();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing28", shopItem);
}

 
function place29(nm, price, img) {
    localStorage.setItem("code29", nm);
    localStorage.setItem("price29", price);
    localStorage.setItem("img29", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff29">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct29PriseAndQuanity();"> + </button>
                                    <li class="count29" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct29PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct29();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing29", shopItem);
}

 
function place30(nm, price, img) {
    localStorage.setItem("code30", nm);
    localStorage.setItem("price30", price);
    localStorage.setItem("img30", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff30">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct30PriseAndQuanity();"> + </button>
                                    <li class="count30" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct30PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct30();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing30", shopItem);
}

 
function place31(nm, price, img) {
    localStorage.setItem("code31", nm);
    localStorage.setItem("price31", price);
    localStorage.setItem("img31", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff31">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct31PriseAndQuanity();"> + </button>
                                    <li class="count31" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct31PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct31();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing31", shopItem);
}

 
function place32(nm, price, img) {
    localStorage.setItem("code32", nm);
    localStorage.setItem("price32", price);
    localStorage.setItem("img32", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff32">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct32PriseAndQuanity();"> + </button>
                                    <li class="count32" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct32PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct32();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing32", shopItem);
}

 
function place33(nm, price, img) {
    localStorage.setItem("code33", nm);
    localStorage.setItem("price33", price);
    localStorage.setItem("img33", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff33">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct33PriseAndQuanity();"> + </button>
                                    <li class="count33" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct33PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct33();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing33", shopItem);
}

 
function place34(nm, price, img) {
    localStorage.setItem("code34", nm);
    localStorage.setItem("price34", price);
    localStorage.setItem("img34", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff34">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct34PriseAndQuanity();"> + </button>
                                    <li class="count34" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct34PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct34();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing34", shopItem);
}

 
function place35(nm, price, img) {
    localStorage.setItem("code35", nm);
    localStorage.setItem("price35", price);
    localStorage.setItem("img35", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff35">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct35PriseAndQuanity();"> + </button>
                                    <li class="count35" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct35PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct35();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing35", shopItem);
}

 
function place36(nm, price, img) {
    localStorage.setItem("code36", nm);
    localStorage.setItem("price36", price);
    localStorage.setItem("img36", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff36">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct36PriseAndQuanity();"> + </button>
                                    <li class="count36" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct36PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct36();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing36", shopItem);
}

 
function place37(nm, price, img) {
    localStorage.setItem("code37", nm);
    localStorage.setItem("price37", price);
    localStorage.setItem("img37", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff37">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct37PriseAndQuanity();"> + </button>
                                    <li class="count37" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct37PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct37();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing37", shopItem);
}

 
function place38(nm, price, img) {
    localStorage.setItem("code38", nm);
    localStorage.setItem("price38", price);
    localStorage.setItem("img38", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff38">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct38PriseAndQuanity();"> + </button>
                                    <li class="count38" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct38PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct38();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing38", shopItem);
}

 
function place39(nm, price, img) {
    localStorage.setItem("code39", nm);
    localStorage.setItem("price39", price);
    localStorage.setItem("img39", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff39">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct39PriseAndQuanity();"> + </button>
                                    <li class="count39" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct39PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct39();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing39", shopItem);
}

 
function place40(nm, price, img) {
    localStorage.setItem("code40", nm);
    localStorage.setItem("price40", price);
    localStorage.setItem("img40", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff40">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct40PriseAndQuanity();"> + </button>
                                    <li class="count40" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct40PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct40();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing40", shopItem);
}

 
function place41(nm, price, img) {
    localStorage.setItem("code41", nm);
    localStorage.setItem("price41", price);
    localStorage.setItem("img41", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff41">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct41PriseAndQuanity();"> + </button>
                                    <li class="count41" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct41PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct41();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing41", shopItem);
}

 
function place42(nm, price, img) {
    localStorage.setItem("code42", nm);
    localStorage.setItem("price42", price);
    localStorage.setItem("img42", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff42">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct42PriseAndQuanity();"> + </button>
                                    <li class="count42" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct42PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct42();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing42", shopItem);
}

 
function place43(nm, price, img) {
    localStorage.setItem("code43", nm);
    localStorage.setItem("price43", price);
    localStorage.setItem("img43", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff43">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct43PriseAndQuanity();"> + </button>
                                    <li class="count43" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct43PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct43();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing43", shopItem);
}

 
function place44(nm, price, img) {
    localStorage.setItem("code44", nm);
    localStorage.setItem("price44", price);
    localStorage.setItem("img44", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff44">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct44PriseAndQuanity();"> + </button>
                                    <li class="count44" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct44PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct44();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing44", shopItem);
}

function place45(nm, price, img) {
    localStorage.setItem("code45", nm);
    localStorage.setItem("price45", price);
    localStorage.setItem("img45", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff45">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct45PriseAndQuanity();"> + </button>
                                    <li class="count45" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct45PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct45();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing45", shopItem);
}

function place46(nm, price, img) {
    localStorage.setItem("code46", nm);
    localStorage.setItem("price46", price);
    localStorage.setItem("img46", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff46">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct46PriseAndQuanity();"> + </button>
                                    <li class="count46" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct46PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct46();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing46", shopItem);
}

function place47(nm, price, img) {
    localStorage.setItem("code47", nm);
    localStorage.setItem("price47", price);
    localStorage.setItem("img47", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff47">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct47PriseAndQuanity();"> + </button>
                                    <li class="count47" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct47PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct47();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing47", shopItem);
}

function place48(nm, price, img) {
    localStorage.setItem("code48", nm);
    localStorage.setItem("price48", price);
    localStorage.setItem("img48", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff48">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct48PriseAndQuanity();"> + </button>
                                    <li class="count48" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct48PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct48();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing48", shopItem);
}

function place49(nm, price, img) {
    localStorage.setItem("code49", nm);
    localStorage.setItem("price49", price);
    localStorage.setItem("img49", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff49">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct49PriseAndQuanity();"> + </button>
                                    <li class="count49" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct49PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct49();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing49", shopItem);
}

function place50(nm, price, img) {
    localStorage.setItem("code50", nm);
    localStorage.setItem("price50", price);
    localStorage.setItem("img50", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff50">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct50PriseAndQuanity();"> + </button>
                                    <li class="count50" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct50PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct50();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing50", shopItem);
}

function place51(nm, price, img) {
    localStorage.setItem("code51", nm);
    localStorage.setItem("price51", price);
    localStorage.setItem("img51", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff51">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct51PriseAndQuanity();"> + </button>
                                    <li class="count51" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct51PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct51();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing51", shopItem);
}

function place52(nm, price, img) {
    localStorage.setItem("code52", nm);
    localStorage.setItem("price52", price);
    localStorage.setItem("img52", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff52">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct52PriseAndQuanity();"> + </button>
                                    <li class="count52" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct52PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct52();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing52", shopItem);
}

function place53(nm, price, img) {
    localStorage.setItem("code53", nm);
    localStorage.setItem("price53", price);
    localStorage.setItem("img53", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff53">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct53PriseAndQuanity();"> + </button>
                                    <li class="count53" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct53PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct53();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing53", shopItem);
}

function place54(nm, price, img) {
    localStorage.setItem("code54", nm);
    localStorage.setItem("price54", price);
    localStorage.setItem("img54", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff54">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct54PriseAndQuanity();"> + </button>
                                    <li class="count54" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct54PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct54();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing54", shopItem);
}

function place55(nm, price, img) {
    localStorage.setItem("code55", nm);
    localStorage.setItem("price55", price);
    localStorage.setItem("img55", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff55">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct55PriseAndQuanity();"> + </button>
                                    <li class="count55" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct55PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct55();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing55", shopItem);
}

function place56(nm, price, img) {
    localStorage.setItem("code56", nm);
    localStorage.setItem("price56", price);
    localStorage.setItem("img56", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff56">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct56PriseAndQuanity();"> + </button>
                                    <li class="count56" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct56PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct56();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing56", shopItem);
}

function place57(nm, price, img) {
    localStorage.setItem("code57", nm);
    localStorage.setItem("price57", price);
    localStorage.setItem("img57", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff57">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct57PriseAndQuanity();"> + </button>
                                    <li class="count57" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct57PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct57();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing57", shopItem);
}

function place58(nm, price, img) {
    localStorage.setItem("code58", nm);
    localStorage.setItem("price58", price);
    localStorage.setItem("img58", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff58">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct58PriseAndQuanity();"> + </button>
                                    <li class="count58" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct58PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct58();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing58", shopItem);
}

function place59(nm, price, img) {
    localStorage.setItem("code59", nm);
    localStorage.setItem("price59", price);
    localStorage.setItem("img59", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff59">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct59PriseAndQuanity();"> + </button>
                                    <li class="count59" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct59PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct59();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing59", shopItem);
}

function place60(nm, price, img) {
    localStorage.setItem("code60", nm);
    localStorage.setItem("price60", price);
    localStorage.setItem("img60", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff60">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct60PriseAndQuanity();"> + </button>
                                    <li class="count60" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct60PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct60();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing60", shopItem);
}

function place61(nm, price, img) {
    localStorage.setItem("code61", nm);
    localStorage.setItem("price61", price);
    localStorage.setItem("img61", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff61">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct61PriseAndQuanity();"> + </button>
                                    <li class="count61" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct61PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct61();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing61", shopItem);
}

function place62(nm, price, img) {
    localStorage.setItem("code62", nm);
    localStorage.setItem("price62", price);
    localStorage.setItem("img62", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff62">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct62PriseAndQuanity();"> + </button>
                                    <li class="count62" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct62PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct62();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing62", shopItem);
}

function place63(nm, price, img) {
    localStorage.setItem("code63", nm);
    localStorage.setItem("price63", price);
    localStorage.setItem("img63", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff63">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct63PriseAndQuanity();"> + </button>
                                    <li class="count63" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct63PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct63();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing63", shopItem);
}

function place64(nm, price, img) {
    localStorage.setItem("code64", nm);
    localStorage.setItem("price64", price);
    localStorage.setItem("img64", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff64">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct64PriseAndQuanity();"> + </button>
                                    <li class="count64" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct64PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct64();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing64", shopItem);
}

function place65(nm, price, img) {
    localStorage.setItem("code65", nm);
    localStorage.setItem("price65", price);
    localStorage.setItem("img65", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff65">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct65PriseAndQuanity();"> + </button>
                                    <li class="count65" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct65PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct65();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing65", shopItem);
}

function place66(nm, price, img) {
    localStorage.setItem("code66", nm);
    localStorage.setItem("price66", price);
    localStorage.setItem("img66", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff66">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct66PriseAndQuanity();"> + </button>
                                    <li class="count66" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct66PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct66();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing66", shopItem);
}

function place67(nm, price, img) {
    localStorage.setItem("code67", nm);
    localStorage.setItem("price67", price);
    localStorage.setItem("img67", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff67">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct67PriseAndQuanity();"> + </button>
                                    <li class="count67" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct67PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct67();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing67", shopItem);
}

function place68(nm, price, img) {
    localStorage.setItem("code68", nm);
    localStorage.setItem("price68", price);
    localStorage.setItem("img68", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff68">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct68PriseAndQuanity();"> + </button>
                                    <li class="count68" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct68PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct68();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing68", shopItem);
}

function place69(nm, price, img) {
    localStorage.setItem("code69", nm);
    localStorage.setItem("price69", price);
    localStorage.setItem("img69", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff69">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct69PriseAndQuanity();"> + </button>
                                    <li class="count69" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct69PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct69();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing69", shopItem);
}

function place70(nm, price, img) {
    localStorage.setItem("code70", nm);
    localStorage.setItem("price70", price);
    localStorage.setItem("img70", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff70">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct70PriseAndQuanity();"> + </button>
                                    <li class="count70" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct70PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct70();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing70", shopItem);
}

function place71(nm, price, img) {
    localStorage.setItem("code71", nm);
    localStorage.setItem("price71", price);
    localStorage.setItem("img71", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff71">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct71PriseAndQuanity();"> + </button>
                                    <li class="count71" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct71PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct71();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing71", shopItem);
}

function place72(nm, price, img) {
    localStorage.setItem("code72", nm);
    localStorage.setItem("price72", price);
    localStorage.setItem("img72", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff72">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct72PriseAndQuanity();"> + </button>
                                    <li class="count72" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct72PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct72();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing72", shopItem);
}

function place73(nm, price, img) {
    localStorage.setItem("code73", nm);
    localStorage.setItem("price73", price);
    localStorage.setItem("img73", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff73">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct73PriseAndQuanity();"> + </button>
                                    <li class="count73" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct73PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct73();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing73", shopItem);
}

function place74(nm, price, img) {
    localStorage.setItem("code74", nm);
    localStorage.setItem("price74", price);
    localStorage.setItem("img74", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff74">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct74PriseAndQuanity();"> + </button>
                                    <li class="count74" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct74PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct74();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing74", shopItem);
}

function place75(nm, price, img) {
    localStorage.setItem("code75", nm);
    localStorage.setItem("price75", price);
    localStorage.setItem("img75", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff75">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct75PriseAndQuanity();"> + </button>
                                    <li class="count75" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct75PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct75();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing75", shopItem);
}

function place76(nm, price, img) {
    localStorage.setItem("code76", nm);
    localStorage.setItem("price76", price);
    localStorage.setItem("img76", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff76">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct76PriseAndQuanity();"> + </button>
                                    <li class="count76" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct76PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct76();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing76", shopItem);
}

function place77(nm, price, img) {
    localStorage.setItem("code77", nm);
    localStorage.setItem("price77", price);
    localStorage.setItem("img77", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff77">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct77PriseAndQuanity();"> + </button>
                                    <li class="count77" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct77PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct77();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing77", shopItem);
}

function place78(nm, price, img) {
    localStorage.setItem("code78", nm);
    localStorage.setItem("price78", price);
    localStorage.setItem("img78", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff78">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct78PriseAndQuanity();"> + </button>
                                    <li class="count78" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct78PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct78();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing78", shopItem);
}

function place79(nm, price, img) {
    localStorage.setItem("code79", nm);
    localStorage.setItem("price79", price);
    localStorage.setItem("img79", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff79">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct79PriseAndQuanity();"> + </button>
                                    <li class="count79" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct79PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct79();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing79", shopItem);
}

function place80(nm, price, img) {
    localStorage.setItem("code80", nm);
    localStorage.setItem("price80", price);
    localStorage.setItem("img80", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff80">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct80PriseAndQuanity();"> + </button>
                                    <li class="count80" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct80PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct80();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing80", shopItem);
}

function place81(nm, price, img) {
    localStorage.setItem("code81", nm);
    localStorage.setItem("price81", price);
    localStorage.setItem("img81", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff81">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct81PriseAndQuanity();"> + </button>
                                    <li class="count81" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct81PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct81();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing81", shopItem);
}

function place82(nm, price, img) {
    localStorage.setItem("code82", nm);
    localStorage.setItem("price82", price);
    localStorage.setItem("img82", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff82">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct82PriseAndQuanity();"> + </button>
                                    <li class="count82" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct82PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct82();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing82", shopItem);
}

function place83(nm, price, img) {
    localStorage.setItem("code83", nm);
    localStorage.setItem("price83", price);
    localStorage.setItem("img83", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff83">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct83PriseAndQuanity();"> + </button>
                                    <li class="count83" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct83PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct83();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing83", shopItem);
}

function place84(nm, price, img) {
    localStorage.setItem("code84", nm);
    localStorage.setItem("price84", price);
    localStorage.setItem("img84", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff84">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct84PriseAndQuanity();"> + </button>
                                    <li class="count84" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct84PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct84();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing84", shopItem);
}

function place85(nm, price, img) {
    localStorage.setItem("code85", nm);
    localStorage.setItem("price85", price);
    localStorage.setItem("img85", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff85">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct85PriseAndQuanity();"> + </button>
                                    <li class="count85" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct85PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct85();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing85", shopItem);
}

function place86(nm, price, img) {
    localStorage.setItem("code86", nm);
    localStorage.setItem("price86", price);
    localStorage.setItem("img86", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff86">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct86PriseAndQuanity();"> + </button>
                                    <li class="count86" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct86PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct86();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing86", shopItem);
}

function place87(nm, price, img) {
    localStorage.setItem("code87", nm);
    localStorage.setItem("price87", price);
    localStorage.setItem("img87", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff87">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct87PriseAndQuanity();"> + </button>
                                    <li class="count87" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct87PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct87();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing87", shopItem);
}

function place88(nm, price, img) {
    localStorage.setItem("code88", nm);
    localStorage.setItem("price88", price);
    localStorage.setItem("img88", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff88">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct88PriseAndQuanity();"> + </button>
                                    <li class="count88" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct88PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct88();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing88", shopItem);
}

function place89(nm, price, img) {
    localStorage.setItem("code89", nm);
    localStorage.setItem("price89", price);
    localStorage.setItem("img89", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff89">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct89PriseAndQuanity();"> + </button>
                                    <li class="count89" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct89PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct89();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing89", shopItem);
}

function place90(nm, price, img) {
    localStorage.setItem("code90", nm);
    localStorage.setItem("price90", price);
    localStorage.setItem("img90", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff90">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct90PriseAndQuanity();"> + </button>
                                    <li class="count90" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct90PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct90();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing90", shopItem);
}

function place91(nm, price, img) {
    localStorage.setItem("code91", nm);
    localStorage.setItem("price91", price);
    localStorage.setItem("img91", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff91">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct91PriseAndQuanity();"> + </button>
                                    <li class="count91" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct91PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct91();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing91", shopItem);
}

function place92(nm, price, img) {
    localStorage.setItem("code92", nm);
    localStorage.setItem("price92", price);
    localStorage.setItem("img92", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff92">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct92PriseAndQuanity();"> + </button>
                                    <li class="count92" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct92PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct92();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing92", shopItem);
}

function place93(nm, price, img) {
    localStorage.setItem("code93", nm);
    localStorage.setItem("price93", price);
    localStorage.setItem("img93", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff93">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct93PriseAndQuanity();"> + </button>
                                    <li class="count93" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct93PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct93();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing93", shopItem);
}

function place94(nm, price, img) {
    localStorage.setItem("code94", nm);
    localStorage.setItem("price94", price);
    localStorage.setItem("img94", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff94">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct94PriseAndQuanity();"> + </button>
                                    <li class="count94" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct94PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct94();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing94", shopItem);
}

function place95(nm, price, img) {
    localStorage.setItem("code95", nm);
    localStorage.setItem("price95", price);
    localStorage.setItem("img95", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff95">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct95PriseAndQuanity();"> + </button>
                                    <li class="count95" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct95PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct95();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing95", shopItem);
}

function place96(nm, price, img) {
    localStorage.setItem("code96", nm);
    localStorage.setItem("price96", price);
    localStorage.setItem("img96", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff96">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct96PriseAndQuanity();"> + </button>
                                    <li class="count96" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct96PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct96();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing96", shopItem);
}

function place97(nm, price, img) {
    localStorage.setItem("code97", nm);
    localStorage.setItem("price97", price);
    localStorage.setItem("img97", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff97">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct97PriseAndQuanity();"> + </button>
                                    <li class="count97" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct97PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct97();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing97", shopItem);
}

function place98(nm, price, img) {
    localStorage.setItem("code98", nm);
    localStorage.setItem("price98", price);
    localStorage.setItem("img98", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff98">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct98PriseAndQuanity();"> + </button>
                                    <li class="count98" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct98PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct98();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing98", shopItem);
}


function place99(nm, price, img) {
    localStorage.setItem("code99", nm);
    localStorage.setItem("price99", price);
    localStorage.setItem("img99", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff99">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct99PriseAndQuanity();"> + </button>
                                    <li class="count99" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct99PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct99();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing99", shopItem);
}


function place100(nm, price, img) {
    localStorage.setItem("code100", nm);
    localStorage.setItem("price100", price);
    localStorage.setItem("img100", img);

    const itemsArray = [];
    itemsArray.push(nm);

    console.log(itemsArray);

    let cartHTML = "";

    for (let j = 0; j < itemsArray.length; j++) {
        let html = `<div class="stuff100">
                        <div class="col-lg">
                            <div class="card text-bg-secondary mb-3" style="width: 18rem;">
                                <img src="${img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${nm}  $${price}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <button class="btn btn-success" onclick="addproduct100PriseAndQuanity();"> + </button>
                                    <li class="count100" style="font-size: 25px;"></li>
                                    <button class="btn btn-danger" onclick="decproduct100PriseAndQuanity();"> - </button>
                                </ul>
                                <div class="card-body">
                                    <button onclick="removeProduct100();">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        cartHTML += html;
    }

    const shopItem = cartHTML;
    localStorage.setItem("thing100", shopItem);
}







 





let finalBait = localStorage.getItem('baits');
let finalRod = localStorage.getItem('rods');




