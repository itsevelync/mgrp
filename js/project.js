var images=[
    "img/ads/1.PNG",
    "img/ads/2.PNG",
    "img/ads/3.PNG",
    "img/ads/4.PNG",
    "img/ads/5.PNG"
];

var i=0;

function change(){
  if (i==4) {
    i=0;
  } else {
    i = i + 1;
  }
  
    document.getElementById('ads').src= images[i];
}

setInterval(change,5000);

setTimeout(function() {
  $('#adModal').modal('show');
}, 2000);

setInterval(function() {
    $('#adModal').modal('show');
}, 6000);




var oysters = "";
function oyster(){
  if (oysters=="img/sand.png") {
    oysters="img/oyster.png";
  } else {
    oysters="img/sand.png";
  }
  
    document.getElementById('flierIMG').src=oysters;
    console.log(oysters);
}

setInterval(oyster,10000);
