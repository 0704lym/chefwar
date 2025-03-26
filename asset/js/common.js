$(function () {
  popupPosition();
  popupEvent();
  popupClose();

});


//높이값 크로스 브라우징 
function setFullHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFullHeight);
setFullHeight();

//팝업창 띄우기
function popupPosition() {
  var $popup = $('.popup');
  var winHeight = $(window).height();
  var popupHeight = $popup.outerHeight();
  var scrollTop = $(window).scrollTop();

  // 팝업이 너무 크면 상단 마진을 조정하여 조금 더 위쪽에 배치
  var topPosition = (winHeight - popupHeight) / 2 + scrollTop;
  if (popupHeight > winHeight * 0.8) {
    topPosition = scrollTop + 50; // 너무 크면 상단에서 50px 띄우기
  }
  $popup.css({
    "top": topPosition + "px",
    "left": (($('body').width() - $popup.outerWidth()) / 2 + $(window).scrollLeft()) + "px",
  });
}

function popupEvent() {
  var popupBtn = $('.act-popup');

  popupBtn.on('click', function () {

    var targetPopup = $(this).data('target');
    $('.' + targetPopup).css('display', 'block');
    $('.dimmed').css('display', 'block');
  })
}

function popupClose() {
  var popupClose = $('.pop-close, .pop-ok');

  popupClose.on('click', function () {
    $('.popup').css('display', 'none');
    $('.dimmed').css('display', 'none');
  })
}


