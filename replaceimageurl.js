var images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace("https://cdn.statically.io/img/1.bp.blogspot.com/" , "https://cdn.statically.io/img/2.bp.blogspot.com/");
  };
