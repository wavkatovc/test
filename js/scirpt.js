const product = {
    crazy: {
        name: "Crazy",
        price: 31000,
        amount: 0,
        img: "images/burger_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "Light",
        price: 26000,
        amount: 0,
        img: "images/burger_2.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: "CheeseBurger",
        price: 29000,
        amount: 0,
        img: "images/burger_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: "dBurger",
        price: 24000,
        amount: 0,
        img: "images/burger_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__shop'),
    shopImg = document.querySelector('.shop__img'),
    basket = document.querySelector('.basket'),
    basketClose = document.querySelector('.basket__close'),
    shopItem  = document.querySelector('.shop__item');

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        addCard(this)
    })
});
function addCard(btn) {
    const parent = btn.closest(".card"),
        cardId = parent.getAttribute("id")
    product[cardId].amount++
    basketInfo()
}
function basketInfo() {
    const productArr = []
    for (const key in product) {
        const pk = product[key]
        const productCard = document.querySelector(`#${pk.name.toLowerCase()}`),
            span = productCard.querySelector(".card__item")
        if (pk.amount) {
            span.classList.add("active")
            span.innerHTML = pk.amount
            productArr.unshift(pk)
            shopItem.classList.add("active")
        }else{
            span.classList.remove("active")
        }
    }
    for (let i = 0; i < productArr.length; i++) {
        shopItem.innerHTML=i+1
    }
}






shopImg.addEventListener("click", () => {
    basket.classList.toggle("active")
})
basketClose.addEventListener("click", () => {
    basket.classList.remove("active")
})







const cardImg = document.querySelectorAll('.card__img'),
    headerImg = document.querySelector('.header__img');
cardImg.forEach(img => {
    img.addEventListener("click", () => {
        let imgAtt = img.getAttribute("src")
        headerImg.style.opacity = "0"
        setTimeout(() => {
            headerImg.setAttribute("src", imgAtt)
            headerImg.style.opacity = "1"
        }, 300);
    })
})