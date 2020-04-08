var p = $('p');

$( p ).on( "click",  function( e ) {
    $( e.delegateTarget ).css( "background-color", "red" );
    
  });

  $("body").delegate("p", "mouseout", function(){
    $(this).css('background-color', '');
});


//bonus add both in one function