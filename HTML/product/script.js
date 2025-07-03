const PRODUCT_URL = "https://fakestoreapi.com/products";
const imagesContainer = document.querySelector(".imagesContainer");

//const fetchProducts = (url) => {
 //   fetch(url)
   //     .then(response => response.json())
     //   .then(data => console.log(data))
       // .catch(error => console.log(error))
//}
const fetchProducts = async(url) => {
    try { 
        const response = await fetch(url);  
        const data = await response.json();
        console.log(data)
        displayProducts(data);
    } catch (error) {
        console.log("Fetch error " + error)
    }
}

fetchProducts(PRODUCT_URL);

const displayProducts = (products) => {
    products.forEach((product) => {
        const {image, category, price} = product;
        const productCard = document.createElement("div");
        productCard.classList.add("categoryAndPrice")
        productCard.innerHTML = `
            <div>
            <img src="${image}" alt="">
            <div class=category>
            <p>${category}</p>
            <span>${price}</span>
            </div>
            </div>
            `
        imagesContainer.appendChild(productCard);
    })
}

function searchContainer() {
    const query = document.querySelector("#search").value.toLowerCase();
    const products = document.querySelectorAll(".category");
    products.forEach(product => {
        const categoryInfo = product.querySelector("p").textContent.toLowerCase();

        product.style.display = categoryInfo.includes(query) ? '' : "none";
    })
}
