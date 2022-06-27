// about section tabs 

(() =>{
   const aboutSection = document.querySelector(".about-section"),
   tabsContainer = document.querySelector(".about-tabs");

   tabsContainer.addEventListener("click", (event) =>{
       /* if event.target contains 'tab-item'  and not contains active class*/
       if(event.target.classList.contains("tab-item") &&
       !event.target.classList.contains("active")){
         const target = event.target.getAttribute("data-target");
        // deactivate exixting active 'tab-item'
        tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
        // activating the new tab
        event.target.classList.add("active","outer-shadow");
        // deactivating exising active tab-content
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        // activating new gtan-content
        aboutSection.querySelector(target).classList.add("active");
        
       }
   })
})();



/*---------------------------------------------portfolio filter and popup--------------------------------*/
(()=>{
  const filterContainer = document.querySelector(".portfolio-filter"),
  portfolioItemsContainer = document.querySelector(".portfolio-items"),
  portfolioItems = document.querySelectorAll(".portfolio-item");

  
  // filter portfolio items 

  filterContainer.addEventListener("click", (event)=>{
      if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
        //  deactivating active slide
        filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
        // activating new slide
        event.target.classList.add("active","outer-shadow");
        const target = event.target.getAttribute("data-target");
        portfolioItems.forEach((item) =>{
           if(target === item.getAttribute("data-category")|| target === 'all'){
               item.classList.remove("hide");
               item.classList.add("show");
           }
           else{
            item.classList.remove("show");
            item.classList.add("hide");
           }
        })
      }
      else{
         
      }
     
  })   
})();

/*---------------------------------------------Testimonial section begins from here--------------------------------*/
 
(()=>{
   const sliderContainer = document.querySelector(".testi-slider-container"),
   slides = sliderContainer.querySelectorAll(".testi-item"),
   slideWidth = sliderContainer.offsetWidth;
  prevBtn = document.querySelector(".testi-slider-nav .prev"),
  nextBtn = document.querySelector(".testi-slider-nav .next");
  let slideIndex = 0;


  // set width 1
  slides.forEach((slide) =>{
    slide.style.width = slideWidth + "px";
  })

  // set width 2 
  sliderContainer.style.width = slideWidth * slides.length + "px";

  nextBtn.addEventListener("click", () =>{
    if(slideIndex === slides.length-1){
       slideIndex = 0;
    }
    else{
      slideIndex++;
    }
    sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
  })

  prevBtn.addEventListener("click", () =>{
       if(slideIndex === 0){
         slideIndex = slides.length-1;
       }
       else{
         slideIndex--;
       }
       sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
  })

})();