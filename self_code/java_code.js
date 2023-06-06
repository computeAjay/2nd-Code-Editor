// first select all the elements which are there in our html file 
const first = document.querySelector('.first')
const iframe = document.querySelector('iframe')
const button = document.querySelector('button')

// when we click on the button we neesd to change the code in to html
button.addEventListener("click",function (){
     html = first.textContent
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html)

})

// Add real time effect auto reload the code page
first.addEventListener('keyup',function() {
    var html = first.textContent
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html)

})

     $(document).ready(function(){
      $(".clean2").click(function(){
        $(".first").empty();

      });
     });

    //  set download option set
    window.onload=function(){
      var txt= document.getElementById('txt');
      document.getElementById('link').onclick=function(){
        this.href='data:txt/html;charset=utf-8,'+ encodeURI(txt.html);
      };
      
    };
    main();

    // toogle 

      $(document).ready(function(){
        $("#live2").click(function(){
          $(".second").toggle();
        });
      });
  

    

