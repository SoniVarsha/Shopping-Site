const searchString = window.location.search;
const params = new URLSearchParams(searchString);
const productId = params.get('productId');
console.log(productId)

let productData = []


 function renderProductDetails(productData){
  let section = document.querySelector("#section");
    
  let leftdiv = document.createElement("div")
  let rightdiv = document.createElement("div")

  leftdiv.classList.add('left_div')
  rightdiv.classList.add('right_div')



  leftdiv.innerHTML = `<img src='${productData.preview}'
alt="image loading error">`;

  rightdiv.innerHTML = `  
  <div class="product-description">
<div class="text">
  <h1 class="name">${productData.name}</h1>
  <h4 class="brand">${productData.brand}</h4>
  <p class="price">Price: Rs <span>${productData.price}</span></p>
  <div class="description">
      <h4 class="description-heading">Description</h4>
      <p id='description'>${productData.description}</p>
  </div>
</div>
<div class="preview">
  <h4 class='product-preview'>Product Preview</h4>
  <div class="previewimg">
      <img id="img1"
          src="${productData.photos[0]}"
          alt="image loading error">
      <img id="img2"
          src="${productData.photos[1]}"
          alt="image loading error">
      <img id="img3"
          src="${productData.photos[2]}"
          alt="image loading error">
      <img id="img4"
          src="${productData.photos[3]}"
          alt="">
      <img id="img5"
          src="${productData.photos[4]}"
          alt="">
      <img id="img6"
       src="${productData.photos[5]}"
       alt="">
  </div>
  <div id="btndiv">
      <button class="btn id="addToCart">Add to Cart</button>
  </div>
</div>
</div>`
 

  section.appendChild(leftdiv)
  section.appendChild(rightdiv)
 
 

  let previewimg = document.querySelector(".previewimg")
 
   function onclickHandler(e){
   if(e.target.nodeName === 'IMG'){
        currentsrc= e.target.src
        document.querySelector('.left_div img').src = currentsrc

        let allImages = previewimg.children
        console.log(allImages)
        for(let counter=0; counter<allImages.length; counter++){
                   allImages[counter].classList.remove('currentborder')
        }
        e.target.classList.add('currentborder')

    
   } 
  }




     let btn = document.querySelector("#btndiv")
  console.log(btn)

  let cartInitialValue = 0
   function addToCart(){
      if(localStorage.getItem('count')===null ){
      cartInitialValue = 0
      }
      else{
        cartInitialValue = JSON.parse(window.localStorage.getItem('count'))
        console.log(cartInitialValue)
      }
      $("#cart-count").text(cartInitialValue)
   
   var cartCurrentValue = cartInitialValue + 1 ;
   window.localStorage.setItem("count",cartCurrentValue);
   $('#cart-count').text(cartCurrentValue);

}

function addDataIntoList(productData) {

  // If Local Storage Is Empty Then Set List To Empty
if (window.localStorage.getItem("product-list") === null) {
  myCartData = [];
}
// If Local Storage Is Not Empty Then Set List To Value Of Local Storage
else {
  myCartData = JSON.parse(window.localStorage.getItem("product-list"));
}
// If List Is Empty Then Push The Object In It
if (myCartData.length === 0) {
var myObj = {
  id: productData.id,
  title: productData.name,
  count: 1,
  price: productData.price,
  preview: productData.preview
};
myCartData.push(myObj);
console.log(myCartData)

}
// If List Is Not Empty Then
else if (myCartData.length != 0) {
var w = 0;
// If Same Product Data == True Then List.Count++
for (var i = 0; i < myCartData.length; i++) {
  if (myCartData[i].id == productData.id) {
    myCartData[i].count = parseInt(myCartData[i].count) + 1;
    w += 1;

  }
}
// Else Add New Data Into List
if (w == 0) {
  var myObj = {
    id: productData.id,
    title: productData.name,
    count: 1,
    price: productData.price,
    preview: productData.preview
  };
  myCartData.push(myObj);
  console.log(myCartData)
}
}
// Store The List Into Local Storage
console.log(myCartData)
window.localStorage.setItem("product-list", JSON.stringify(myCartData));
}


function onSubmit(){
  addToCart()
  addDataIntoList(productData)
}


//adding click usig jquery and handler
 
  btn.addEventListener('click',onSubmit)


  previewimg.addEventListener('click', onclickHandler)


  console.log(localStorage)
//   let currentproductData= JSON.parse(window.localStorage.getItem('cartItems'))
// console.log(currentproductData)
}




  $.ajax({
    method:'GET',
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+productId ,
    success: function(data){
     console.log(data)
       productData =data
       renderProductDetails(productData)
    },
 error: function(err){
     console.log(err)
 }
     })