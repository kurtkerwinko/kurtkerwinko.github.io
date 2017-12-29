// Scroll Animation
$('a').click(function(){
  $($(this).attr('href'))[0].scrollIntoView({
    behavior: 'smooth'
  });
  return false;
});

// Menu Highlight
var lastId;
var topMenuHeight = $(".menu").outerHeight();
var scrollItems = $(".menu").find("a").map(function(){
  return $($(this).attr("href"));
});

$(".content").scroll(function(){
  var panel = scrollItems.map(function(){
    if ($(this).offset().top <= topMenuHeight)
      return this;
  });

  var panelId = panel[panel.length-1][0].id;
  if (lastId !== panelId) {
    lastId = panelId;
    $(".menu a[href^='#']").removeClass("active");
    if (panelId !== 'home')
      $("a[href='#" + panelId + "']").addClass("active");
  }
});
