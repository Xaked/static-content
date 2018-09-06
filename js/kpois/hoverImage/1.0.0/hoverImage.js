/*
 * Created on Fri Jul 20 2018
 * Copyright © 2018 Mikhail K. (iSm1le)
 * Version 1.0.0
 * Licensed under the Apache License, Version 2.0
 */


let mNode = document.createElement("div");
let sNode = document.createElement("span");
let iNode = document.createElement("img");
let isShowingImage = false;
let imgs = document.getElementsByClassName("news-topic-image");

mNode.className = "news-topic-show-image";
mNode.style.display = "none";

sNode.className = "close";
sNode.appendChild(document.createTextNode("X"));

iNode.className = "image";

mNode.appendChild(sNode);
mNode.appendChild(iNode);
mNode.onclick = function() {showImage()};

document.getElementsByTagName("body")[0].appendChild(mNode);

for (let i = 0; i < imgs.length; i++) {
	imgs[i].onclick = function() {showImage(this)};
}

function showImage(img) {
	if (isShowingImage) {
		mNode.style.display = "none";
		isShowingImage = false;
	} else {
		mNode.style.display = "flex";
		iNode.src = img.src;
		isShowingImage = true;
	}
	return true;
}