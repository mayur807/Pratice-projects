

// fetch('https://dummyjson.com/products?limit=200&skip=0&select=thumbnail')
// .then(res => res.json())
// .then(data =>{
//   // console.log(data);
//   data.products.forEach(element => {
//     // console.log(element.thumbnail);

//   });
// })

fetch('https://dummyjson.com/products?limit=200&skip=0&products')
.then(res => res.json())
.then(data =>{
// let arr2 = []
// arr2.push(data.products)
// console.log ("arr2", arr2);
// console.log(arr2);
// console.log(
//   arr2.indexOf("Beauty")
// );





// console.log(data);


let groupdeddata = {};
data.products.forEach(element => {

 let key = `${element.category}`;
    // console.log(key);
    
    if(!groupdeddata[key]){
      groupdeddata[key]  = {
        // brand: element.brand,
        cate :  element.category,
        thumb: element.thumbnail,
        brand: element.brand,
        title:element.title,   
        availability:element.availabilityStatus,
        rate : element.rating,
        price: element.price,
        dis:element.
discountPercentage

      }
    //  console.log(key);
     
     
      // groupdeddata[key].push(element)
    }



  // console.log("elements" , element);



  
  // console.log(element.brand);
  
    
    
    
    // let key = `${element.brand}`;
    // // console.log(key);
    
    // if(!groupdeddata[key]){
    //   groupdeddata[key]  = {
    //     brand: element.brand,
    //     cate :  element.category,
    //   }
     
    //   // groupdeddata[key].push(element)
    // }
    



    // let arr = []
    // arr.push(element.category)
    // // arr.some(n => n === arr)
    // console.log(arr);
    // arr.filter(n=> 
    //   n.indexOf1("Beauty")

    // )

    // if(element.category ){

    // }
    // console.log(element.category);
//     if(!(element.dis == undefined) && !(element.price == undefined)  ){
// console.log(element.dis);

//       console.log("price", element.price - element.dis);
//     }
    
    

 

    
    
  });

//   let wrp = document.createElement('div');
//   wrp.classList.add("slide","swiper" )
// console.log(wrp);

  
  // let slider =  document.createElement('div');
  // slider.classList.add("swiper-wrapper");
  // console.log(slider);
  
  // wrp.appendChild(slider)


  // console.log("grouped data" , groupdeddata);
 let values =  Object.values(groupdeddata)
 values.map(e =>{
// console.log("price" , e.price);
// console.log("price" , e.dis);



let pricearr = []
pricearr.push(e.price)

let discarr = []
discarr.push(e.dis)

let defiprice = [];
let defidisc = [];

pricearr.some(a => {
if(a !==  undefined){
 
defiprice.push(a)
}})

discarr.some(a => {
if(a !==  undefined){

defidisc.push(a)
}

})

defiprice.map(p =>{
  // console.log(p);
  
defidisc.map(d =>{
  // console.log(d);
  
 let twodecimal =  p - d 
// console.log();

// console.log(  "e",e);
if(twodecimal < 100 ){
  // console.log(e);
  // console.log(d);
  
  // console.log(twodecimal);
  
  // console.log("e2",  e);
  
        // let link  = element.thumbnail;
        let popu =   document.createElement("div");
        popu.classList.add('img' , "flex-col")
        popu.innerHTML =`
        <img src="${e.thumb}" alt="">
        <div class="flex flex-col around  about-product">
        <span class="brand" >Brand: ${e.brand === undefined ? "BRAND NOT AVAILABLE" : e.brand }</span>
        <span class="title" >${e.title === undefined ? "NAME NOT AVAILABLE" : e.title}</span>
        <span class="" >Ratings: ${e.rate === undefined ? "RATINGS ARE NOT AVAILABLE" : e.rate } </span>
        <span class="">Listed Price: ${e.price} $ ||  After ${e.dis} $ (discount) Price ${twodecimal.toFixed(2)} $ </span>
        <span class="">${e.availability === undefined ? "AVAILABLE SOON" : e.availability}</span>
        
     
        </div>
 
        `
        
        let  maincon = document.querySelector('.imgitems')
        maincon.appendChild(popu)
}



//     if() > ){
      
      
//     }








})

})



// thumbs.some(a => {
//   if (a === undefined) {
//     console.log(a); // This logs real undefined values
//   }
// });

// let categoriesindom = document.createElement('p');
// // categoriesindom.classList.add()
// categoriesindom.innerText = e.cate;
// document.querySelector(".row").appendChild(categoriesindom);
//  console.log(e.thumb);
 

// console.log( "brand", e.brand);


let imgslide = document.createElement("div")
imgslide.classList.add("item", "swiper-slide")
imgslide.innerHTML = `
<img  src="${e.thumb}" alt="">
`

if(e){
  setTimeout(()=>{

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      grabCursor:true,
      spaceBetween:50,
      
      // If we need pagination
      //   pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     dynamicBullets:true,
        //   },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        
        breakpoints:{
          0:{
            slidesPerView:3
          },
          670:{
slidesPerView:4
          },
          800:{

            slidesPerView:4
          },

          // 1024:{
          //   slidesPerView:5
          // },
          1204:{
            
            slidesPerView:4
          }
        }
        
      })
      },3500);
    }

// slider.appendChild(imgslide)
let wrp = document.querySelector(".swiper-wrapper");
wrp.appendChild(imgslide)
 })
});

// document.querySelector('.slide').appendChild(slider)

// let arr = [1,3,4,5];
// arr.filter(word =>{
// word.indexOf(word)
    
// })

// const str = "Hello world, welcome to the world.";
// const firstIndex = str.indexOf("world"); // Returns 6 (index of 'w' in 'world')
// const notFound = str.indexOf("JavaScript"); // Returns -1 (value not found)
// const startIndex = str.indexOf("world", 7); // Returns 21 (starts search from index 7)

// console.log("string" , str);
// console.log("firstindex", firstIndex);
// console.log("index not founded examplme 'js'", notFound);
// console.log("start index starts from 7",  startIndex);



// const arr = ["apple", "banana", "orange", "banana"];
// const firstIndex = arr.indexOf("banana"); // Returns 1
// const notFound = arr.indexOf("grape"); // Returns -1
// const startIndex = arr.indexOf("banana", 2); // Returns 3 (starts search from index 2)

// console.log("array", arr);
// console.log(firstIndex  , "firstindex");
// console.log(notFound  , "cant found");
// console.log(startIndex , " starts seaching from second index");


let bool =  true;
document.querySelector(".setting").addEventListener("click",()=>{
  let nv =  document.querySelector('nav ul');
if(bool){

  nv.classList.add('navb');
    document.querySelector("nav").style.display = "flex";
    bool = false
  }else{
    bool = true
    nv.classList.remove('navb');
      document.querySelector("nav").style.display = "none";

}

// document.querySelector("setting").classList.add('sett')


})



