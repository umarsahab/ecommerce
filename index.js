// const { log } = require("async")

getPorducts()
const container = document.getElementById('container')
const tags = document.getElementById('tags')

var product = []
let products;

async function getPorducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
        .then(res => res.json())

    products = productsResponse.products

    product = products

    //if we do it thruofh for loop

    // for (var i = 0; i < products.length; i++) {
    //     const card = `<div class='card' >
    //     <img src =${products[i].thumbnail} />
    //     <h4>${products[i].title} </h4>
    //     </div>`
    // }

    //map
    // let categories = products.map((obj, i) => {
    //     var prod = obj
    //     prod.available = true
    //     return prod

    //For Each
    products.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
        container.innerHTML += card
    })

    //map
    var categories = []
    products.map((obj, i) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    categories.forEach((cat, i) => {
        const chip = `<div class = 'chip' id = 'chip'> <span> ${cat}</span> </div>`
        tags.innerHTML += chip
    })

    // filter
    const smartphones = products.filter((data) => data.category == 'laptops')
    console.log('smartphones->', smartphones)

    //find
    const iphone = products.find((data) => data.title == 'iPhone X')
    console.log('iphone->', iphone)

}

// var search = document.getElementById('search')
// search.addEventListener('click' , find)
// function find(){
//     fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);

// }

function smart(){
   const smartphone = products.filter((data)=> data.category == 'smartphones')
   container.innerHTML = ''
   console.log(products)

    smartphone.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
        container.innerHTML += card
    })
}
function lap(){
    const laptop = products.filter((data)=> data.category == 'laptops')
    container.innerHTML = ''
    console.log(products)
 
     laptop.forEach((data, i) => {
         const card = `<div class='card' >
         <img src =${data.thumbnail} />
         <h4>${data.title} </h4>
         <h4>${data.price} </h4>
         </div>`
         container.innerHTML += card
     })
}
function fragra(){
    const fragrance = products.filter((data)=> data.category == 'fragrances')
    container.innerHTML = ''
    console.log(products)
 
     fragrance.forEach((data, i) => {
         const card = `<div class='card' >
         <img src =${data.thumbnail} />
         <h4>${data.title} </h4>
         <h4>${data.price} </h4>
         </div>`
         container.innerHTML += card
     })
}
function skin(){
    const skinCare = products.filter((data)=> data.category == 'skincare')
    container.innerHTML = ''
    console.log(products)
 
     skinCare.forEach((data, i) => {
         const card = `<div class='card' >
         <img src =${data.thumbnail} />
         <h4>${data.title} </h4>
         <h4>${data.price} </h4>
         </div>`
         container.innerHTML += card
     })
}
function glo(){
    const gloceries = products.filter((data)=> data.category == '')
    container.innerHTML = ''
    console.log(products)
 
     gloceries.forEach((data, i) => {
         const card = `<div class='card' >
         <img src =${data.thumbnail} />
         <h4>${data.title} </h4>
         <h4>${data.price} </h4>
         </div>`
         container.innerHTML += card
     })
}
function home(){
    const homeDecoration = products.filter((data)=> data.category == 'home-decoration')
    container.innerHTML = ''
    console.log(products)
 
     homeDecoration.forEach((data, i) => {
         const card = `<div class='card' >
         <img src =${data.thumbnail} />
         <h4>${data.title} </h4>
         <h4>${data.price} </h4>
         </div>`
         container.innerHTML += card
     })
}




//for each
//map
//filter
//find
//findbyindex
//reduce
//sort