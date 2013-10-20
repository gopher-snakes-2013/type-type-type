function racer(){

function bindEventListeners(){}
document.addEventListener("keypress",whatKey,false)	

function whatKey(e){
	((e.keyCode))
}




//on load, get class hella hidden, get string, count, clone
//iterate through, split, wrap each in span and append it to the div
function stringSplitter(){
	var	string = document.getElementById("hella_hidden").innerText
	return string.split("")
}

function stringSpanner(text){
	for(i=0; i<text.length; i++){
		text[i] = '<span>' + i + '</span>'
	}
}
var spanned_string = stringSpanner(stringSplitter());

function stringReplacer(spanned_string){
	//take the spanned string and replace the innerHTML
}

function stringKeyCodeGetter(){	
}

function inputKeyCodeGetter(){
}

function keyCodeMatcher(){	
}



}

window.addEventListener('load',racer,false)