var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');


feiled.onfocus = function(){
	this.setAttribute('placeholder', '');
	this.style.borderColor = '#333'
	btn.style.display = 'block'
}

feild.onblur = function(){
	this.setAttribute('placeholder',backUp)
}