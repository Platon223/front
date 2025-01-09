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





function uptadeProducts(products) {
  products.forEach((pr) => {
    const prElement = document.createElement('div');
    prElement.innerHTML = ` <div class="col-md-4 col-6"> <div class="card text-bg-secondary mb-3">
                      <img class="card-img-top" src="${pr.img}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${pr.nm}</h5>
                        <p class="card-text">$ ${pr.price}</p>
                        <a href="#" class="btn btn-primary"> <button class="btn btn-primary" onclick="place${pr.pl}('${pr.nm}', ${pr.price}, '${pr.img}');">Add to cart</button></a>
                      </div>
                    </div> </div> `;
   

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
    localStorage.setItem("code1");
    localStorage.setItem("price1");
    localStorage.setItem("img1");

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
    localStorage.setItem("code2");
    localStorage.setItem("price2");
    localStorage.setItem("img2");

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
    localStorage.setItem("code3");
    localStorage.setItem("price3");
    localStorage.setItem("img3");

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
    localStorage.setItem("code4");
    localStorage.setItem("price4");
    localStorage.setItem("img4");

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
    localStorage.setItem("code5");
    localStorage.setItem("price5");
    localStorage.setItem("img5");

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
    localStorage.setItem("code6");
    localStorage.setItem("price6");
    localStorage.setItem("img6");

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
    localStorage.setItem("code7");
    localStorage.setItem("price7");
    localStorage.setItem("img7");

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
    localStorage.setItem("code8");
    localStorage.setItem("price8");
    localStorage.setItem("img8");

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
    localStorage.setItem("code9");
    localStorage.setItem("price9");
    localStorage.setItem("img9");

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
    localStorage.setItem("code10");
    localStorage.setItem("price10");
    localStorage.setItem("img10");

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
    localStorage.setItem("code11");
    localStorage.setItem("price11");
    localStorage.setItem("img11");

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
    localStorage.setItem("code12");
    localStorage.setItem("price12");
    localStorage.setItem("img12");

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
    localStorage.setItem("code13");
    localStorage.setItem("price13");
    localStorage.setItem("img13");

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
    localStorage.setItem("code14");
    localStorage.setItem("price14");
    localStorage.setItem("img14");

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
    localStorage.setItem("code15");
    localStorage.setItem("price15");
    localStorage.setItem("img15");

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
    localStorage.setItem("code16");
    localStorage.setItem("price16");
    localStorage.setItem("img16");

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








 





let finalBait = localStorage.getItem('baits');
let finalRod = localStorage.getItem('rods');




