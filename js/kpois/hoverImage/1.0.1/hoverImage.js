/*
 * Created on Fri Jul 20 2018
 * Copyright © 2018 Mikhail K. (iSm1le)
 * Licensed under the Apache License, Version 2.0
 */

var selector = 'news-topic-image';
var mNode = document.createElement('div');
var sNode = document.createElement('span');
var iNode = document.createElement('img');
var loadingImg = document.createElement('span');
var isShowingImage = false;
var imgs = document.getElementsByClassName(selector);

function showImage(img) {
  if (isShowingImage) {
    mNode.style.display = 'none';
    isShowingImage = false;
  } else {
    mNode.style.display = 'flex';
    iNode.src = img.src;
    var bRes = img.getAttribute('data-src');
    if (bRes !== null) {
      loadingImg.style.display = 'flex';
      img.onload = function () {
        iNode.src = img.src;
        loadingImg.style.display = 'none';
      };
      img.src = bRes;
      img.removeAttribute('data-src');
    }
    isShowingImage = true;
  }
  return true;
}

mNode.className = selector + '-show';
mNode.style.display = 'none';

sNode.className = 'close';
sNode.appendChild(document.createTextNode('X'));

loadingImg.className = 'loading';
loadingImg.style = 'color: white; justify-content: center; position: absolute; left: 50%; font-size: 2rem; -webkit-text-stroke: 1px black;';
loadingImg.style.display = 'none';
loadingImg.appendChild(document.createTextNode('Loading...'));

iNode.className = 'image';

mNode.appendChild(sNode);
mNode.appendChild(iNode);
mNode.appendChild(loadingImg);
mNode.onclick = function () {
  return showImage();
};

document.getElementsByTagName('body')[0].appendChild(mNode);

var _loop = function _loop(i) {
  imgs[i].onclick = function () {
    return showImage(imgs[i]);
  };
};

for (var i = 0; i < imgs.length; i++) {
  _loop(i);
}
