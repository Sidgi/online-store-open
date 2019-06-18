
// ##search button selects class searchform and shows it and clears it after ech call##
let searchButton = () =>{
  let form = document.querySelector('.searchForm');
  form.style.display = 'block';
  let searchInp = document.querySelector('.searchInput').value ='';
}
// ##google search, takes  a value from imput and searches in google##
let searchGoogle = ()=>{
let searchInp = document.querySelector('.searchInput');
let result = searchInp.value;
document.querySelector('.linkGoogle').href = `https://www.google.com/search?q=${result}`;

}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned = ()=>{
   let firstImg = document.getElementById('firstImage');
  firstImg.style.top = '10%';
  firstImg.style.left = '10%';
  firstImg.style.width = 300 +'px';
  firstImg.style.height = 380 +'px';
  document.getElementById('h1TextLandingPage').innerHTML = 'Hello'

}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned1 = ()=>{
   let secondImg = document.getElementById('secondImage');
     secondImg.style.left = '40%';
     secondImg.style.top =  '1%';
     secondImg.style.width = 230 +'px';
     secondImg.style.height = 290 +'px';
     document.getElementById('h1TextLandingPage').innerHTML = 'Products';

}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned2 = ()=>{
   let  thirdImg = document.getElementById('thirdImage');
     thirdImg.style.left = '65%';
     thirdImg.style.top =  '10%';
     thirdImg.style.width = 200 +'px';
     thirdImg.style.height = 250 +'px';
     document.getElementById('h1TextLandingPage').innerHTML = 'About';


}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned3 = ()=>{
  let  fourthImg = document.getElementById('fourthImage');
     fourthImg.style.left = '75%';
     fourthImg.style.top =  '50%';
     fourthImg.style.width = 160 +'px';
     fourthImg.style.height = 200 +'px';
     document.getElementById('h1TextLandingPage').innerHTML = 'Terms Of Service'


}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned4 = ()=>{
  let  fifthImg = document.getElementById('fifthImage');
       fifthImg.style.left = '65%';
       fifthImg.style.top =  '80%';
       fifthImg.style.width = 120 +'px';
       fifthImg.style.height = 160 +'px';
       document.getElementById('h1TextLandingPage').innerHTML = 'Return Policy'


}
// ##matreshka function on 1 click gets element by id and puts size and margin and substituts
// h1 text on the name of menu on click###
let positoned5 = ()=>{
  let  sixImg = document.getElementById('sixImage');
        sixImg.style.left = '45%';
        sixImg.style.top =  '82%';
        sixImg.style.width = 100 +'px';
        sixImg.style.height = 140 +'px';
        document.getElementById('h1TextLandingPage').innerHTML = 'Contact us'
}

// ##on double click this functions opens a link and redirects to page##
let aFirstImage =()=>{
  document.getElementById('firstImageA').href = 'pages/Products.html'
}
// ##on double click this functions opens a link and redirects to page##
 let aSecondImage =()=>{
  document.getElementById('secondImageA').href = 'pages/About.html'
}
// ##on double click this functions opens a link and redirects to page##
 let aThirdImage =()=>{
  document.getElementById('thirdImageA').href = 'pages/TermsOfService.html'
}
// ##on double click this functions opens a link and redirects to page##
 let aFourthImage =()=>{
  document.getElementById('fourthImageA').href = 'pages/ReturnPolicy.html'
}
// ##on double click this functions opens a link and redirects to page##
 let aFifthImage =()=>{
  document.getElementById('fifthImageA').href = 'pages/ContactUs.html'
}
// ##on double click this functions opens a link and redirects to page##
    let aSixImage =()=>{

}
// ###This is class Bikes
// ###With this class I make objects bike as many as I need
class Bikes {
  constructor(id,url,model,price,manufactrer,condition,color,gender,modelYear,count){
    this.id = id;
    this.url = url;
    this.model = model;
    this.price = price;
    this.manufacturer = manufactrer;
    this.condition = condition;
    this.color = color;
    this.gender = gender;
    this.modelYear = modelYear;
    this.count = count;

  }
  getId(){
    return this.id;
  }
  getUrl(){
    return this.url;
  }
  getModel(){
    return this.model;
  }
  getPrice(){
    return this.price;
  }
  getManufacturer(){
    return this.manufacturer;
  }
  getCondition(){
    return this.condition;
  }
  getColor(){
    return this.color;
  }
  getGender(){
    return this.gender;
  }
  getModelYear(){
     return this.modelYear;
  }
  getCount(){
    return this.count;
  }
}
// ###This is my objects which was created with help of Class Bikes
let bike1 = new Bikes('bike1',"../images/bike1.jpeg",'Scott Bicycle',"300$","China","Very good",'RED','man',2019,0);
let bike2 = new Bikes('bike2',"../images/bike2.jpeg",'Trek Bicycle ',"400$","China","Not good",'GREEN','woman',2018,0);
let bike3 = new Bikes('bike3',"../images/bike3.jpeg",'Specialized Bike',"450$","China","Brand new",'GREY','woman',2017,0);
let bike4 = new Bikes('bike4',"../images/bike4.jpeg",'Excellent Harper',"399$","China","Very old",'BLACK','man',2016,0);
let bike5 = new Bikes('bike5',"../images/bike5.jpg",'Scott Bicycle',"259$","China","Excellent",'GREY','child',2015,0);
let bike6 = new Bikes('bike6',"../images/bike6.jpeg",'Cannondale Bicycle',"346$","China","Bad",'BLACK','man',2009,0);
let bike7 = new Bikes('bike7',"../images/bike7.jpeg",' Bianchi Bike',"658$","China","Very bad",'BLUE','woman',2010,0);
let bike8 = new Bikes('bike8',"../images/bike8.jpg",'GT Bike',"434$","China","Very good",'WHITE','man',2012,0);
let bike9 = new Bikes('bike9',"../images/bike9.jpg",'Fuji Bike',"549$","China","Very good",'LIGHT GREEN','man',2011,0);
let bike10 = new Bikes('bike10',"../images/bike10.jpg",'Cervelo Bike',"457$","China","Very good",'RED','man',2008,0);
let bike11 = new Bikes('bike11',"../images/bike11.jpg",'Pinarello',"867$","China","Very good",'GREY','man',2019,0);
let bike12 = new Bikes('bike12',"../images/bike12.jpg",'Santa Cruz Bicycles',"239$","China","Very good",'GREEN','man',2007,0);

// ###This is global variabale array which is array of objects
let array =[bike1,bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike9,bike10,bike11,bike12];
// var elements = document.querySelector('.buttonBike');

let addProduct=()=>{
  debugger;
let a = window.localStorage.getItem("id");
for(s in array){
  if(array[s].id === window.localStorage.getItem("id")){
    let productModel = document.getElementById('productModel');
    productModel.innerHTML = `Model: ${array[s].getModel()}`;
    let productCondition = document.getElementById('productCondition');
    productCondition.innerHTML =`Condition: ${array[s].getCondition()}`;
    let productManufacturer = document.getElementById('productManufacturer');
    productManufacturer.innerHTML = `Manufacturer: ${array[s].getManufacturer()}`;
    let productPrice = document.getElementById('productPrice');
    productPrice.innerHTML = `Price: ${array[s].getPrice()}`;
    let productColor = document.getElementById('productColor');
    productColor.innerHTML = `Color: ${array[s].getColor()}`;
    let productGender = document.getElementById('productGender');
    productGender.innerHTML = `Category: ${array[s].getGender()}`;
    let productModelYear = document.getElementById('productModelYear');
    productModelYear.innerHTML = array[s].getModelYear();
    let productImage = document.getElementById('productImage');
    productImage.src = array[s].getUrl();

   }
  }
}
// ##sets local storage onclick of id of a link##
// ## opens new page ProductDescription.html through javascript
let localStore = (idOfProduct) =>{

  window.localStorage.setItem("id",idOfProduct);
  let a = window.localStorage.getItem('id');
  window.open('ProductDescription.html', '_blank');
}
 // let cart = [];
 JSON.parse(localStorage.getItem('card')) !== null ? cart = JSON.parse(localStorage.getItem('card')) : cart = [];
 //finds on id bike_ substracts _
 let find =(idOfCartItem)=>{
  debugger;
  let m = idOfCartItem.split('');
    if(m.includes('_')){
      let a = m.indexOf('_');
      m.splice(a);
      var newId = m.join('');
    }
    for(bike in array){

      if (array[bike].id === newId){
        let testDelet = cart.includes(array[bike]);
        let result = cart.find(cartItem => cartItem.id === newId);
        if(result){
          result.count+=1;
        }else{
          cart.unshift(array[bike]);
          cart[0].count+=1;
        }
      }
    }
    window.localStorage.setItem("card",JSON.stringify(cart));
    let resultat = 0;
    for(item in cart){
     resultat += cart[item].count;
    }
    document.getElementById('shoppingCartCountNumber').innerHTML = resultat;
}
// ###Slide Show###
let current = 0;
let slideShow = ()=>{
  debugger;
  let imgArray = [];
  for( element in array){
     imgArray.push(array[element].getUrl());
  }
   const numIteration = imgArray.length-1;

      current+=1;
      if(current>numIteration){
      	current = 0;
      }
      if(current<0){
      	 current = numIteration;
      }
      document.getElementById('firstImageCart').src = imgArray[current];
}
// ###slide show finished##
// ###This function works on load of Cart.html page
// ###gets all objects from local Storage which added from Products.html page button "add to cart"
let cartOnloaD =()=>{
  debugger;
  let cart = JSON.parse(localStorage.getItem('card'));
  for(item in cart){
  let newModel =  document.createElement('li');
  newModel.setAttribute('class','productDescriptionLi');
  newModel.textContent = `Model: ${cart[item].model}`;
  document.getElementById('cartUl').appendChild(newModel);
  let newPrice =  document.createElement('li');
  newPrice.setAttribute('class','productDescriptionLi');
  newPrice.textContent =`Price: ${cart[item].price}`;
  document.getElementById('cartUl').appendChild(newPrice);
  let newCount =  document.createElement('li');
  newCount.setAttribute('class','productDescriptionLi');
  newCount.textContent = `Quantity of item:  ${cart[item].count}`;
  document.getElementById('cartUl').appendChild(newCount);
  // let newIde =  document.createElement('li');
  // newIde.setAttribute('class','productDescriptionLi');
  // newIde.textContent = cart[item].url;
  // document.getElementById('cartUl').appendChild(newIde);
  let removeButton = document.createElement('button');
  let attribute = cart[item].url;
  removeButton.textContent = "Remove Item";
  removeButton.setAttribute('id',attribute);
  removeButton.setAttribute('class','returnPolicyRuleButton');
  removeButton.setAttribute('onclick',"removeItemFromCart(this.id)");
  document.getElementById('cartUl').appendChild(removeButton);
  }
  window.localStorage.setItem("card",JSON.stringify(cart));
  // ###slideShow##
setInterval(slideShow,2000);
// ####SlideShow###


}
// ##Clears local storage which allows to clear all items-objects in array Cart
let clearLocalStorage =() =>{
  localStorage.clear();
  window.location.reload();

}
// ##This function removes 1 Count from object in cart
// ## if count equals 0 remove object from array cart
let removeItemFromCart = (thisId) => {
  let cart = JSON.parse(localStorage.getItem('card'));
  let result = cart.find(cartItem => cartItem.url === thisId);
  if(result){
  if((result.count)- 1>0){
    result.count-=1;
  }else if ((result.count)- 1 === 0) {
    let index = cart.indexOf(result)
    cart.splice(index,1);
   }
  }
  window.localStorage.setItem("card",JSON.stringify(cart));
  window.location.reload();
}
// ###this function alerts messages for every button -submit , signed in and signed up
// ##works on click compares parametr which is id with textContent
// ## if it is right alert certain message
let alertMessage = (idOfMessage)=>{
  if(idOfMessage === 'signInButton'){
    alert('You successfully signed in');
  }
  else if (idOfMessage === 'signUpButton') {
    alert('You successfully signed up');
  }
else if (idOfMessage === 'submitContactFormButton') {
  alert('You submitted contact form, we will get back to you shortly');
 }
}
// ###This function sets creates ne List tag in Return Policy page on click "Set rules button"
let setTheRule = ()=>{
  let text = document.getElementById('returnPolicyRuleInput').value;
  let rule = document.createElement('li');
  rule.textContent = text;
  document.getElementById('returnPolicyRuleList').appendChild(rule);
}
// ####This function sets price and model name in Product page on P tag ###
// ###It gets array of every image in document
// ###Loops through array and looks for images in document itself
// ###if it finds images id and id in array it looks for images's siblings grand child which is P pTag
// ### then it with fun find loops through global array of objects and compares id of image and id in objects
// ### if it is the same it assigns model name and price to P tag
let priceNameBike = () =>{
  debugger;
  for (imageArray in document.images){
  let img = document.images[imageArray].id;
  if (document.querySelector('#'+img).nextElementSibling === null || document.querySelector('#'+img).nextElementSibling.children[1] === undefined) {

  }else{
    let pTag = document.querySelector('#'+img).nextElementSibling.children[1].children[0];
    let result = array.find(bike => bike.id === img);
    pTag.innerHTML = `Model: ${result.model} </br> Price:  ${result.price}`;
  }

  }
}
// ####fuction display modal
let displayModalCss = (parametr)=>{
  debugger;
  document.getElementById('modalIdProducts').style.display = 'block';
  for (imageArray in document.images){
  let img = document.images[imageArray].id;
  let result = array.find(bike => bike.id === img);
  if (result && parametr.id === img) {
    let imgTag = document.getElementById('modalImageIdContent');
    imgTag.src = result.url;
    }
   }
  }
// ###function close modal on click of outer Div
let closeModalCss = ()=>{
  document.getElementById('modalIdProducts').style.display = 'none';
}
