const PRODUCT_URL = "https://dummyjson.com/products";
const productContainer = document.querySelector(".productContainer");

const fetchProducts = async (url) => {
    try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);
        displayProducts(products);
    } catch (error) {
        console.error("Fetch error " + error);
    }
}

fetchProducts(PRODUCT_URL)

const displayProducts = (products) => {
    products.forEach(({image, category, price}) => {
        const productCard = document.createElement("div");
        productCard.classList.add("categoryAndPrice")
        productCard.innerHTML = `
            <div>
            <img src="${image[0]}" alt="Product image">
            <div class=category>
            <p>${category}</p>
            <span>${price}</span>
            </div>
            </div>
            `
        productContainer.appendChild(productCard);
    })
}

const searchProducts = async () => {}