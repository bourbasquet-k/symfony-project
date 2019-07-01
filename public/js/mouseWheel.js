var ancres = document.getElementsByClassName("ancre");
var ids = getIds(ancres);

$(window).bind('mousewheel DOMMouseScroll', function (e) {

  var delta = e.originalEvent.wheelDelta;
  var trouve = false;
  var i = 0;
  var idVisible;
  
  while(!trouve){
    if(isElementVisible(ids[i])){
      trouve = true;
      idVisible = ids[i];

      var index = ids.indexOf(idVisible);

      if(delta < 0){
        goTo(ids[index + 1]);
      } else{
        goTo(ids[index - 1]);
      };
    }
    i++
  };
});

function isElementVisible(elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = Math.round($(elementToBeChecked).offset().top,0);
    var BotElement = TopElement + Math.round($(elementToBeChecked).height(),0);
    return ((TopElement <= TopView+10)&&(TopElement >= TopView-10));
}

function goTo(elemToGo)
{
  var speed = 550; // Durée de l'animation (en ms)
  $('html, body').animate( { scrollTop: $(elemToGo).offset().top }, speed ); // Go
  return false;
}

function getIds(array){
  var arrayId = [];
  var i = 0;
  Array.prototype.forEach.call(array, function(el){
    arrayId[i] = "#"+el.getAttribute('id');
    i++;
  });
  return arrayId;
}