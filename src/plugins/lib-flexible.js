/*
 * @Author: leslie
 * @Date: 2021-08-26 11:07:48
 * @LastEditors: leslie
 * @LastEditTime: 2021-08-26 11:07:48
 * @Description: 请填写简介
 */
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // 根据不同dpr调整body字体大小
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置根元素字体大小
  function setRemUnit() {
    let rem = 75;
    // 当页面可见的宽度大于750px时按照750px处理
    if (docEl.clientWidth >= 750) {
      rem = 75;
    } else {
      rem = docEl.clientWidth / 10;
    }
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();

  // 监听网页resize事件并重新计算rem
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // 检测支持0.5px
  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
