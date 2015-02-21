$(function(){


//active link on navbar
var $links = $('.navBar li');
  
// Add click event to each link
// using special jquery object $(this) 
// to reference each element that was matched
  
$.each($links, function(){
    $(this).on('click', function(){
      
      // Remove the active class from all links
      $links.removeClass('active');
      console.log(this);
      
      // Add the active class to the link that was clicked
      // which is refererenced by $(this)
      $(this).addClass('active');
    });
})
  


//if user scrolls downward the navigation (which starts at
//the bottom of the screen) moves to the top and is sticky
var winHeight = $(window).height();
var landingHeight = winHeight - $('.navBar').outerHeight(true);
//outherHeight(true) will calculate with borders, paddings and margins.

$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
    	if ( scrollVal >= landingHeight) {
    		$('.navBar').addClass('sticky');
        } else { 
        	$('.navBar').removeClass('sticky')
        }
    });

//as user scrolls past the hero content, the 
//sticky nav becomes more narrow (padding is reduced)
//using the function to add .skinnyNav class
$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
      if ( scrollVal >= winHeight) {
        $('.navBar').addClass('skinnyNav');
        } else { 
          $('.navBar').removeClass('skinnyNav')
        }
    });

//users can click on any of the light levels which will 
//take them to the houseplants that fit that criteria

$('a.light').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 300);
    return false;
});

//once in a houseplant section, user can choose to select
//low maintenance or high maintenance using MixItUp plugin

$('#plantGroup1').mixItUp();
$('#plantGroup2').mixItUp();
$('#plantGroup3').mixItUp();

//the user can hover over any of the plants to see it's name

$(".plant").mouseenter(function(){           
  $(this).find('.myhover').fadeIn(400);
  }).mouseleave(function(){ 
  $(this).find('.myhover').stop().fadeOut(100);
})  

//when the user clicks on the plants it will take
// a lightbox will pop up with plant care instructions

$(".fancybox").fancybox({
    openEffect  : 'fade',
    closeEffect : 'fade',
    afterLoad   : function() {
        this.content = this.content.html();
    }
});


//at the bottom of the page will be a widget that feeds
//in tumblr content of attractive house plants in
//hipster's homes for inspiration

});
