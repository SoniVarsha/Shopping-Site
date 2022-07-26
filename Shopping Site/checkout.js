var productDataLists = JSON.parse(localStorage.getItem('product-list'))

 console.log(productDataLists)
console.log(productDataLists.length)


 let mainDiv = document.getElementById('container')


for(var i=0; i<productDataLists.length; i++){
  var div = document.createElement('div')
  div.classList.add('content')
  myLocalStorageData = productDataLists
  div.innerHTML = `
  <div class="item">
  <img src="${myLocalStorageData[i].preview}"/>
  <div class="detail">
      <h3>${myLocalStorageData[i].name}</h3>
      <p>x${myLocalStorageData[i].count}</p>
      <p>Amount:${myLocalStorageData[i].price}</p>
  </div>
</div>
  `
mainDiv.append(div)
}