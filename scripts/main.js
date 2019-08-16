/* ----- Counting up numbers ----- */

var $length = $('#length');
var lengthMax = parseInt($length.attr('data-max'), 10);
var current = 0;

var updateLength = function () {
  current += (lengthMax/30);
  $length.html(current.toLocaleString());
  updateTick();
};

var updateTick = function () {
  if (current < lengthMax) {
    requestAnimationFrame(updateLength);
  } else {
    $length.html(lengthMax.toLocaleString() + ' ');
  }
};

updateLength();

/* ----- Counting up numbers 2 ----- */

var $length2 = $('#length2');
var lengthMax2 = parseInt($length2.attr('data-max2'), 10);
var current2 = 0;

var updateLength2 = function () {
  current2 += (lengthMax2/30);
  $length2.html(current2.toLocaleString());
  updateTick2();
};

var updateTick2 = function () {
  if (current2 < lengthMax2) {
    requestAnimationFrame(updateLength2);
  } else {
    $length2.html(lengthMax2.toLocaleString() + ' ');
  }
};

updateLength2();

/* ----- Counting up numbers 3 ----- */

var $length3 = $('#length3');
var lengthMax3 = parseInt($length3.attr('data-max3'), 10);
var current3 = 0;

var updateLength3 = function () {
  current3 += (lengthMax3/30);
  $length3.html(current3.toLocaleString());
  updateTick3();
};

var updateTick3 = function () {
  if (current3 < lengthMax3) {
    requestAnimationFrame(updateLength3);
  } else {
    $length3.html(lengthMax3.toLocaleString() + ' ');
  }
};

updateLength3();


/* ----- Navigation ----- */

var $navWrap = $('.nav-wrap');
var $navBtn = $('.nav-btn');
var $nav = $('.nav');

$nav.find('a').attr('tabindex', -1);

$navBtn.on('click', function () {
  if ($navWrap.hasClass('is-open')) {
    $navWrap.removeClass('is-open');
    $nav.attr('aria-hidden', true);
    $navBtn.attr('aria-expanded', false);
    $nav.find('a').attr('tabindex', -1);
  } else {
    $navWrap.addClass('is-open');
    $navWrap.addClass('is-fixed');
    $navBtn.addClass('is-active');
    $nav.attr('aria-hidden', false);
    $navBtn.attr('aria-expanded', true);
    $nav.find('a').attr('tabindex', 0);
  }
});

$navWrap.on('transitionend', function () {
  if (!$navWrap.hasClass('is-open')) {
    $navWrap.removeClass('is-fixed');
    $navBtn.removeClass('is-active');
  }
});

$navWrap.on('keypress', function (e) {
  switch (e.keyCode) {
    case 27:
      $navWrap.removeClass('is-open');
      $nav.attr('aria-hidden', true);
      $navBtn.attr('aria-expanded', false);
      $nav.find('a').attr('tabindex', -1);
      $navBtn.focus();
      break;
  }
});

/* ----- Tabs ----- */

var $tabs = $('.tabs');
var $panels = $('.tab-panel');

$tabs.on('click', 'a', function (e) {
  e.preventDefault();

  var id = $(this).attr('href');

  $panels.filter('[aria-hidden="false"]').attr('aria-hidden', true);
  $tabs.find('[aria-selected="true"]').attr('aria-selected', false);

  $(this).attr('aria-selected', true);
  $(id).attr('aria-hidden', false);
});
