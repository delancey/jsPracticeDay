 $('body *').each(function() {
    
    let top = Math.floor(Math.random()*500) + 'px';
    let left = Math.floor(Math.random()*500) + 'px';

    $(this).css({'position':'absolute', 'top': top, 'left': left});
  });


