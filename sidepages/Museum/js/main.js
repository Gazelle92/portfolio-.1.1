const body = document.body;
const wrap = document.getElementById('wrap');

wrap.style.position = 'fixed';
wrap.style.top = 0;
wrap.style.left = 0;

let sy = 0;
let dy = sy;
  
body.style.height = wrap.offsetHeight + 'px';

window.addEventListener('scroll', function(){ 
  body.style.height = wrap.offsetHeight + 'px'
}, true);



window.addEventListener('scroll', easeScroll);

function easeScroll() {
  sy = window.pageYOffset;
}


window.requestAnimationFrame(render);

function render(){
  dy = li(dy,sy,0.1);
  wrap.style.transform = `translateY(-${dy}px)`;
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * (b * 1);
}
document.getElementById("border").style.width = "100%";

