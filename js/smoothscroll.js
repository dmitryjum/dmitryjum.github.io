$("#navlist a").click(function(){
  var navlistId = $(this).attr("href");
  $("body").animate({scrollTop: $(navlistId).offset().top}, "slow");
  return false;
})