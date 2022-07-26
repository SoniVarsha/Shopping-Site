 


   function renderShoppingItems(shoppingItems){
    let container = document.getElementsByClassName('container')
    // console.log(container)

    for(let counter=0; counter<shoppingItems.length; counter++){
      productLists = shoppingItems[counter]
    //  console.log(productLists)
productId = productLists.id
console.log(productId)
      
  let card = document.createElement('div')
      card.classList.add('card')

      card.innerHTML=`<a href="product.html?productId=${productId}">
      <div class="product-card">
      <div class="image">
        <img src="${productLists.preview}" alt="">
      </div>
      <div class="card-details">
        <h4>${productLists.name}</h4>
        <h5>${productLists.brand}</h5>
        <p>Rs ${productLists.price}</p>
      </div>
    </div>
    </a>`
   
  

   if(productLists.isAccessory){
   (container[1]).append(card)
   }else{
    (container[0]).append(card)
   }
}
}






 $.ajax({
    method:'GET',
    url: "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    success: function(data){
    //  console.log(data)
     shoppingItems=data,
     renderShoppingItems(shoppingItems)
    },
 error: function(err){
     console.log(error)
 }
     })