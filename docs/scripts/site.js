// window.addEventListener('load', (event) => {
//     document.getElementsByTagName('body')[0].classList.add('loaded');
//  }); 

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    document.getElementsByTagName('body')[0].classList.add('loaded');
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});