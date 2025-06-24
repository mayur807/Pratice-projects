fetch('https://dummyjson.com/products?limit=200&skip=0&products')
.then(res => res.json())
.then(data =>{
// console.log(data);

    

let groupdeddata = [];
data.products.forEach(element => {

    // console.log(element);
    // groupdeddata.push(element)

     let key = `${element.id}`;


    if(!groupdeddata[key]){
          groupdeddata[key]  = {
        
            cate :  element.category,
            thumb: element.thumbnail,
            brand: element.brand,
            title:element.title,   
            availability:element.availabilityStatus,
            rate : element.rating,
            price: element.price,
            dis:element.
            discountPercentage,
    images:element.images
      }
    
    }
    
    
}
)

let womenarr =[];
    
     let values =  Object.values(groupdeddata)
     values.map(e =>{
         
         if(e.cate === 'beauty' || e.cate === 'fragrances' || e.cate === 'skin-care' || e.cate === 'sunglasses' || e.cate === 'tops' || e.cate === 'womens-bags' || e.cate === 'womens-dresses' || e.cate === 'womens-jewellery' || e.cate === 'womens-shoes' || e.cate === 'womens-watches'){
             
             womenarr.push(e)
             
            }
       
            
        })

        womenarr.forEach(e =>{



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
defidisc.map(d =>{
let twodecimal =  p - d 
if(twodecimal < 100 ){
  
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

})

})



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


let wrp = document.querySelector(".swiper-wrapper");
wrp.appendChild(imgslide)


        })
    });

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