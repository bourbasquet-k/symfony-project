
  var hbody = screen.height;
  var hnav = document.getElementById('menu').clientHeight;
  var hcontainer = hbody-hnav;
  var el = document.getElementById('container');

  var largw = (window.innerWidth);
  var hautw = (window.innerHeight);

  el.style.marginTop = hnav+'px';