const s = (e) => document.querySelector(e)

pizzaJson.map((item, index) => {
    let pizzaItem = s(".models .element").cloneNode(true);
    let modal = s(".fundoModal");
    let closeButton = s(".modal .closeModal");
    let buyButton = s(".modal .buy")

    pizzaItem.querySelector(".name").innerHTML = item.name;
    pizzaItem.querySelector(".price").innerHTML = item.price.toFixed(2);
    pizzaItem.querySelector("img").src = item.img;
    pizzaItem.addEventListener("click", (e) => {
        modal.style.opacity = 0;
        modal.style.display = "flex";
        setTimeout ( ()=> {
            modal.style.opacity = 1;
        }, 500)

        modal.querySelector(".campoPizza img").src = item.img;
        modal.querySelector(".nomePizza").innerHTML = item.name;
        modal.querySelector(".descPizza").innerHTML = item.description;
        modal.querySelector(".valorPizza").innerHTML = ` R$ ${item.price.toFixed(2)}`;

        closeButton.addEventListener("click", (e)=> {
            modal.style.display = "none";
        })

        buyButton.addEventListener("click", ()=> {
            
        })
    })

    document.querySelector("#pizzas .content").append(pizzaItem);
})