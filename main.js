import { products } from './products.js';
// const producList = [
//     { name: "Apple", category: "Fruit", kal: 50, vitamins: "a, b, c", color: "red", price: 5000, },
//     { name: "Cherry", category: "Fruit", kal: 55, vitamins: "h, d, o", color: "red", price: 6000 },
//     { name: "Peach", category: "Fruit", kal: 60, vitamins: "a, b, c", color: "yellow", price: 7000 },
//     { name: "Pear", category: "Fruit", kal: 65, vitamins: "a, h, c", color: "whiteyellow", price: 4000 },

//     { name: "Tomato", category: "Vegetable", kal: 30, vitamins: "a, b, c", color: "red, green, yellow", price: 10000 },
//     { name: "Potato", category: "Vegetable", kal: 35, vitamins: "d, g, d", color: "green", price: 9000 },
//     { name: "Cucumber", category: "Vegetable", kal: 40, vitamins: "h, d, g", color: "purpul", price: 4000 },
//     { name: "Pumpkin", category: "Vegetable", kal: 45, vitamins: "k, g, c", color: "yellow", price: 5000 },

//     { name: "Banana", category: "Sitrus", kal: 50, vitamins: "a, b, c", color: "red", price: 20000 },
//     { name: "Pineapple", category: "Sitrus", kal: 45, vitamins: "g, f, d", color: "green", price: 30000 },
//     { name: "Kivi", category: "Sitrus", kal: 40, vitamins: "a, u, c", color: "red", price: 19000 },
//     { name: "Mango", category: "Sitrus", kal: 50, vitamins: "h, b, c", color: "red", price: 24000 },
// ];

const category = document.querySelector("#category")
const searchInput = document.getElementById("search");
const result = document.getElementById("result");
const btn = document.querySelector("button")
const from = document.querySelector("#from")
const to = document.querySelector("#to")


function displayResult(products) {
    result.innerHTML = products.map(product => {
        return `
        <div id="item" style="--color: ${product.color === "black" ? "white" : product.color}">
            <div class="content">
                <p>name: ${product.name}</p>
                <p>category: ${product.category}</p>
                <p>calory: ${product.calories}</p>
                <p>vitamins: ${product.vitamins}</p>
                <p>color: ${product.color}</p> 
            </div>
        </div>
        `;
    }).join("");
}
displayResult(products);

searchInput.addEventListener("input", search);

function search() {
    let value = searchInput.value.trim().toLowerCase();

    if (value === "") {
        displayResult(products);
        return;
    }

    let filtered = products.filter(item =>
        item.name.toLowerCase().startsWith(value)
    );

    if (filtered.length === 0) {
        result.innerHTML = "<p>Bunday mahsulot yo‘q</p>";
        return;
    }

    displayResult(filtered);
}
category.addEventListener("change", () => {
    const filterCat = products.filter((product) => {
        return category.value === product.category
    })
    displayResult(filterCat)
    if (category.value === "all") {
        displayResult(products)
    }
})

btn.addEventListener("click", () => {
    const fromVal = from.value || 0
    const toVal = to.value || Infinity

    const filteredCategoriesAndCal = products
        .filter((product) => category.value === product.category)
        .filter(
            (product) => product.calories >= fromVal && product.calories <= toVal
        );
    displayResult(filteredCategoriesAndCal)
    if (category.value === "all") {
        const filterProducts = products.filter((product) =>
            product.calories >= fromVal && product.calories <= toVal)
    }
    displayResult(filterProducts)
})

//99 148 04 58