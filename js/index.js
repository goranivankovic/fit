



anime({
    targets:".d",
    translateY:[-100,0],
    duration:3000,
    loop:true,
    delay:function(el,i){
        return 1000 + 100 * i;
    }
   
})











AOS.init({
    duration:1500,
    delay:500,
    offset: 100,
    

})

let zero=0;

let obj = {
    imageCol:document.querySelector('.imageCol'),
    image:document.querySelector('.image'),
    slideImage(){
           
        setInterval(()=>{
           zero++
           if(zero>5){
               zero=0;
            
           }
           
           obj.imageCol.innerHTML=`<img src="images/slide-${zero}.jpg">`
    
            
    
        },3000)
    
    
    }
   

  


}
   

obj.slideImage()

function myFunction() {
    var x = document.getElementById("myVideo").autoplay;
   
 
  }
