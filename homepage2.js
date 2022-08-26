let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

     if (n > slides.length){
        slideIndex = 1
    }
      if (n < 1){
        slideIndex = slides.length
    }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";

    }

    tbody1data=[
        {image:"https://cdn-icons-png.flaticon.com/128/679/679720.png",
         text:"Packages" },
         {image:"https://cdn-icons-png.flaticon.com/128/5564/5564823.png",
         text:"furniture" },
         {image:"https://cdn-icons-png.flaticon.com/128/185/185606.png",
         text:"Fitness" },
         {image:"https://cdn-icons-png.flaticon.com/128/1692/1692657.png",
         text:"Packages" },
         {image:"https://cdn-icons-png.flaticon.com/128/7996/7996373.png",
         text:"Electronic"},        
          {image:"https://cdn-icons-png.flaticon.com/128/25/25694.png",

         text:"Home"}
    ]
    tbody1data.forEach(function(el){
      let row=document.createElement("div")
     

 let div1=document.createElement("img")
 div1.setAttribute("src",el.image)
 div1.setAttribute("id", "p_image");


 let div2=document.createElement("p")
 div2.innerText=el.text
 div2.setAttribute("id", "texts");

 
 row.append(div1,div2)
 document.querySelector("#tbody1").append(row)
    })
    

    let tbody2data=[
      
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {images:"https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
      h3text:"Finest-quality products",
      ptext:"Quality matters to you, and us! That's why we do a strict quality-check for every product."
    }
    ]
    tbody2data.forEach(function(el){
      let row=document.createElement("div")

      let images=document.createElement("img")
      images.setAttribute("src",el.images)
      images.setAttribute("id","img2")
      let h3text=document.createElement("h3")
      h3text.style.fontSize="15px"
      h3text.innerText=el.h3text
      let ptext=document.createElement("p")
      ptext.style.fontSize="12px"
      ptext.innerText=el.ptext
      ptext.style.color="grey"
      row.append(images,h3text,ptext)
      document.querySelector("#tbody2").append(row)

    })

   
    
      document.querySelector("#search").addEventListener("click",function(){
        let searchproduct=document.querySelector("#searchforall").value

        if(searchproduct=="bed"){
          document.location.href="bed.html"
        }
        if(searchproduct=="fitness"){
          document.location.href="fitness.html"
        }
        if(searchproduct=="electronic"){
          document.location.href="electronic.html"
        }
        if(searchproduct=="tv"){
          document.location.href="tv.html"
         }
        if(searchproduct=="washing machine"){
          document.location.href="washing.html"
        }
      })


      let cartArr=[]
      let homedata=[
        {
          image:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        },
        {
          image:"https://p.rmjo.in/productSquare/yxvjrli3-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        },{
          image:"https://p.rmjo.in/productSquare/g0ealw05-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        },{
          
          image:"https://p.rmjo.in/productSquare/tmp99edr-500x500.jpg",
           h4tage:"Rent itmes",
          price:456,
          cart:"Add Cart"

        },{
          image:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
          price:456,
          cart:"Add Cart"
        },{
          image:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        },{
          image:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        },{
          image:"https://p.rmjo.in/productSquare/durxsu1c-500x500.jpg",
          h4tage:"Rent itmes",

          price:456,
          cart:"Add Cart"
        }
        
      ]
homedata.forEach(function(el){

  let row=document.createElement("div")
  let img=document.createElement("img")
  img.setAttribute("src",el.image)
  img.setAttribute("id","pro_img")
  let h4tage=document.createElement("h4")
  h4tage.innerText=el.h4tage
  let price=document.createElement("p")
  price.innerText="$"+el.price
  let cart=document.createElement("button")
  cart.innerText=el.cart
  cart.style.color="red"
  cart.style.border="red"
  cart.style.width="80px"
  cart.addEventListener("click",function(){
    cartArr.push(el)
    localStorage.setItem("cart-items",JSON.stringify(cartArr))
  })
  row.append(img,h4tage,price,cart)
  document.querySelector("#products>div").append(row)
})
 
let cart=document.querySelector(".cart")
cart.addEventListener("click",function(){
  document.location.href="cart.html"
})