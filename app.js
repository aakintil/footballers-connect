// set the date we're counting down to
var target_date = new Date('Dec, 15, 2018').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var _days = document.getElementById('days');
var _hours = document.getElementById('hours');

// update the tag with id "countdown" every 1 second
setInterval(function () {

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  // do some time calculations
  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  // format countdown string + set tag value
  _days.innerHTML = days;
  _hours.innerHTML = hours;
  // '<div class="col-md-6"></div><p class="days">' + days +  ' <p class="days-label">Days</p></p></div><div class="col-md-6"><p class="hours">' + hours + ' <p class="hours-labels">Hours</p></p></div>'
  // '<p class="days">' + days +  ' <p class="days-label">Days</p></p> <p class="hours">' + hours + ' <p class="hours-labels">Hours</p></p>'

}, 1000);

$(function() {
  $('.collapse').collapse();
  $('html').removeClass('fade-out');

  setTimeout(function() {
    $('body').removeClass('fade-out');
  }, 1750);

  $('#accordionExample').on('.collapse', function () {
    // do something…
  })
});
