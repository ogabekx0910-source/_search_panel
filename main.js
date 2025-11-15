// @ts-nocheck
// SEARCH
const producList = [
    { name: "Apple", category: "Fruit", kal: 50, vitamins: "a, b, c", color: "red", price: 5000, },
    { name: "Cherry", category: "Fruit", kal: 55, vitamins: "h, d, o", color: "red", price: 6000 },
    { name: "Peach", category: "Fruit", kal: 60, vitamins: "a, b, c", color: "yellow", price: 7000 },
    { name: "Pear", category: "Fruit", kal: 65, vitamins: "a, h, c", color: "whiteyellow", price: 4000 },

    { name: "Tomato", category: "Vegetable", kal: 30, vitamins: "a, b, c", color: "red, green, yellow", price: 10000 },
    { name: "Potato", category: "Vegetable", kal: 35, vitamins: "d, g, d", color: "green", price: 9000 },
    { name: "Cucumber", category: "Vegetable", kal: 40, vitamins: "h, d, g", color: "purpul", price: 4000 },
    { name: "Pumpkin", category: "Vegetable", kal: 45, vitamins: "k, g, c", color: "yellow", price: 5000 },

    { name: "Banana", category: "Sitrus", kal: 50, vitamins: "a, b, c", color: "red", price: 20000 },
    { name: "Pineapple", category: "Sitrus", kal: 45, vitamins: "g, f, d", color: "green", price: 30000 },
    { name: "Kivi", category: "Sitrus", kal: 40, vitamins: "a, u, c", color: "red", price: 19000 },
    { name: "Mango", category: "Sitrus", kal: 50, vitamins: "h, b, c", color: "red", price: 24000 },
];

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const result = document.getElementById("result");
const name = document.getElementById("name");
const category = document.getElementById("category");
const kal = document.getElementById("kal");
const vitamins = document.getElementById("vitamins");
const color = document.getElementById("color");
const price = document.getElementById("price");
const h5 = document.getElementById("h5");

searchInput.addEventListener("input", search);
function search() {
    let value = searchInput.value.trim().toLowerCase();

    result.textContent = "";

    if (value === "") {
        return
    }

    let filteredProducts = producList.filter(item => { return item.name.toLowerCase().startsWith(value) });

    if (filteredProducts.length === 0) {
        result.textContent = "Bunday mahsulot yo'q";
        return
    }

    filteredProducts.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
        <div class="group">
            <p><b>Name:</b> ${item.name}</p>
            <p><b>Category:</b> ${item.category}</p>
        </div>
        <div class="group">
            <p><b>Kal:</b> ${item.kal}</p>
            <p><b>Vitamins:</b> ${item.vitamins}</p>
        </div>
        <div class="group">
            <p><b>Color:</b> ${item.color}</p>
            <p><b>Price:</b> ${item.price} UZS</p>
        </div>
    `;

        result.appendChild(div);
    });
}

item.addEventListener("focus", () => {
    item.style.backgroundColor = "blue";
});

