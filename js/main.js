
$(document).ready(function () {
  $(".sk-cube-grid").fadeTo(2000, 1 , function () {
    $("#loading").fadeOut(2500, function () {
      $("body").css("overflow", "auto");
      $("#loading").remove();
    });
  });
});

$("li a").click(function () {
  let hrefValue = $(this).attr("href");
  console.log(hrefValue);
  let sectiontop = $(hrefValue).offset().top;
  console.log(sectiontop);
  $("html,body").animate({ scrollTop: sectiontop }, 3200);
});


var typed2 = new Typed('#typing', {
    strings: ['Photographer|', 'Designer|', 'Developer|','Freelancer|'],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    fadeOut: false,
    loop: true
  });

  let sectionAbout = $("#About").offset().top
  let sectionHome = $("#Home").offset().top
  $(".arrowIcon").hide()
$(window).scroll(function(){
    console.log("hello");
    let top  = $(window).scrollTop()
    if(top >sectionAbout){
        $(".arrowIcon").fadeIn(1000)
    }
    else{
        $(".arrowIcon").fadeOut(1000)
    }
    if(top > sectionHome){
      $(".navbar").css("background-color" , "rgba(0, 0, 0, 0.96 )")
    }
    else{
      $(".navbar").css("background-color" , "transparent")
    }
})
$(".arrowIcon").click(function(){
    $("html,body").animate({scrollTop:0},4000)
})