// function clickMe(){
//     alert("Ouch");
// }
// const btn = document.querySelector(".btn");
// btn.addEventListener('click', clickMe);

// setTimeout(() => {
//     btn.removeEventListener('click', clickMe);
// },5000)


const itemList = document.querySelector("#item-list");
// console.log(store)


// const item = document.createElement("div");
// item.setAttribute("class", "col");
// itemList.textContent("image");
store.forEach((item) => {
    const imageContainer= document.createElement("div");
    imageContainer.setAttribute("class", "col-3 text-center");

    const img = document.createElement("img");
    img.setAttribute("src", `${item.image}`);
    imageContainer.appendChild(img);

    const h5 = document.createElement("h3");
    h5.textContent = item.itemName;

    const p = document.createElement("p");
    p.textContent = item.description;

    const qty = document.createElement("input");
    qty.setAttribute('value','');
    qty.setAttribute("id", "index");
    qty.setAttribute("placeholder", "QTY");
    qty.setAttribute("type", "number");

    const addToCartBtn = document.createElement("button");
    addToCartBtn.setAttribute("class", "btn btn-warning btn-sm m-4");
    addToCartBtn.setAttribute("value", "Add To Cart");
    addToCartBtn.textContent = "Add To Cart";

    imageContainer.appendChild(h5);
    imageContainer.appendChild(p);
    imageContainer.appendChild(qty);
    imageContainer.appendChild(addToCartBtn);

    itemList.appendChild(imageContainer)
});
