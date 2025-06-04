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
        displayProducts(data);
    } catch (error) {
        console.log(error)
    }
}

fetchProducts(PRODUCT_URL);

const displayProducts = (products) => {
    imagesContainer.innerHTML = "";
    products.forEach((product) => {
        const {image, category, price} = product;
       // const productCard = document.createElement("div");
        imagesContainer.innerHTML += `
            <div>
            <img src="${image}" alt="">
            <p>${category}</p>
            <span>${price}</span>
            </div>
            `;
    })
}

