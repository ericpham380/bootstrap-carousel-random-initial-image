document.addEventListener("DOMContentLoaded", function () {
  /* Initialize the carousel via JavaScript and modify the predefined values of the interval and pause configuration properties. Take note that we choose to set the value of the pause property to false because we always want the cycling to be active */
  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });

  /* Creating full-screen Bootstrap carousel slides */
  var $item = $('.carousel-item');
  var $wHeight = $(window).height();

  $item.height($wHeight);
  $item.addClass('full-screen');

  /* Loop through the images and get the values of src and data-color attributes */
  $('.carousel img').each(function () {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');

    /* Find direct parent (.item) and assign full-screen class along with a few background-related properties
    Note that the values of those properties depend on the values of the aforementioned attributes */
    $(this).parent().css({
      'background-image': 'url(' + $src + ')',
      'background-color': $color
    });

    /* Remove the img elements which are not needed since we are relying on the backgrounds */
    $(this).remove();
  });

  /* Set the height of the parent element equal to the viewport height.
  It's important to mention that we have to recalculate the height of the browser window when it changes size, using the resize event */
  $(window).on('resize', function () {
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  /* When the page loads, we'll add the active class to the first slide using JQuery, rather than having it hard-coded in HTML
  $item.eq(0).addClass('active');
  */


  /* Initializing a random slide - sometimes we want to show a random slides when the page loads. We first have to remove the default active class from the first slide as well as the first indicator */

  /* Get the total number of slides and use this value to find a random slide */
  var $numberofSlides = $('.carousel-item').length;
  var $currentSlide = Math.floor((Math.random() * $numberofSlides));

  /* Traversing through the carousel indicators and retrieve the value of the data-slide-to attribute. */
  $('.carousel-indicators li').each(function () {
    var $slideValue = $(this).attr('data-slide-to');
    /* If the random number matches the value of this attribute, we assign the active class to the corresponing slide and indicator. If that doesn't happen, we remove it from the target elements. */
    if ($currentSlide == $slideValue) {
      $(this).addClass('active');
      $item.eq($slideValue).addClass('active');
    } else {
      $(this).removeClass('active');
      $item.eq($slideValue).removeClass('active');
    }
  });

});