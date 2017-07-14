'user strict';

//sample
$(function() {
  $('.contentThatDoesNotAppearUntilItSomethingIsClickedToMakeTheContentAppearCLASSNAME').hide();
  $('.contentThatDoesNotAppearUntilItSomethingIsClickedToMakeTheContentAppearCLASSNAME#delegation').show();
});

$('.nav-items > a').on('click', function() {//any anchor tag with a class of nav-items will be searched for content
  //Dont need a preventDefault because there's no default behavior that needs to be stopped at the moment
  $('.tab-content').hide();
  $('#' + $(this).data('tab')).show();
  //$('#delegation')
});

$('button').on('click', function(event) {
  event.preventDefault();
  console.log(this);//is a DOM object
  //VS.
  console.log($this);//is a DOM jQuery object
  $('#' + $(this).data('menu')).append('<li>NewListItem</li>');//this is what that concatenated selector is providing as a final value ===>   $('menu1')
});

$('.menu').on('click', 'li' ,function() {
  console.log(this);
});
