$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$( function() {
    $( "#accordion" ).accordion();
  } );
  // $(".accordion-demo").accordionjs({

  //   // The section open on first init.
  //   activeIndex : 1,     
  
  //   // Closeable section.
  //   closeAble: false, 
  
  //   // Close other sections.
  //   closeOther  : true,  
  
  //   // the speed of slide animation.
  //   slideSpeed: 200 
    
  // });