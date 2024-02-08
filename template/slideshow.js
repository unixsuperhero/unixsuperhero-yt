window.slideshow = {};
slideshow.current_slide = 0;
slideshow.max_slides = document.querySelectorAll('div.slide').length;
slideshow.next_slide = ()  => {
  if(slideshow.current_slide == slideshow.max_slides) return;
  slideshow.current_slide++;
  document.querySelectorAll('div.slide').forEach((el, idx) => {
    if(el.dataset['slide'] == slideshow.current_slide.toString()) {
      el.classList.add('flex');
      el.classList.remove('hide');
    } else {
      el.classList.remove('flex');
      el.classList.add('hide');
    }
  });
};
slideshow.prev_slide = ()  => {
  if(slideshow.current_slide == 0) return;
  slideshow.current_slide--;
  document.querySelectorAll('div.slide').forEach((el, idx) => {
    if(el.dataset['slide'] == slideshow.current_slide.toString()) {
      el.classList.add('flex');
      el.classList.remove('hide');
    } else {
      el.classList.remove('flex');
      el.classList.add('hide');
    }
  });
};
document.addEventListener('keydown', ({key}) => {
  switch (key) {
    case 'j':
     slideshow.next_slide();
     break;
    case 'k':
     slideshow.prev_slide();
      break
  };
});
