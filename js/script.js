var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900'];
var a=-48;
var b= 41;
var j= -8;
var arr= [];
var arr2= [];
for (var w = 0; w < 12; w++) {
    arr[w]= b;
    b+=4; 
}
for (var g = 0; g < 12; g++) {
    arr2[g]= j;
    j-=8; 
}

var h= 0;
$('div').click(function(){
    h=  $('div').nextAll().index(this);
}
)
    

var d=0;
for (var i = 0; i < $(".div").length; i++) {
    $(".div").css({
        width:"150px",
        height: "400px",
        position: "absolute",
        left: (window.innerWidth/2)- 125 +"px",
        top: window.innerHeight/2- 250 +"px",
        transformOrigin: "0% 100%"
    }).eq(i).css({transform: "rotate("+(a) +"deg)",
                    background: colorArray[i]});

    

    a+=8;  
  
}

$('div').click(function(){
        
    $(this).css({
            transform: "rotate(0deg)",
        
    
        })
        .nextAll().each(function(i){            
            if(i>=0){
               $(this).css({
                transform: "rotate("+arr[i]+"deg)"
               });
             }
             
          })
     
    $(this).prevAll().each(function(e){            
        if(e>=0){
           $(this).css({
            transform: "rotate("+arr2[e]+"deg)"
           });
           
         }
         
      })
      
      
})

