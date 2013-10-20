function racer(){

	function bindEventListeners(){}
	document.addEventListener("keypress",whatKey,false)	

	//grab keycode of event
	function whatKey(e){
		((e.keyCode))
	}

	//on load, get class hella hidden, get string, split
	var	gameText = document.getElementById("gameText").innerText

	function stringSplitter(text){
		return text.split("")
	}

	//wrap each character in span
	function stringSpanner(splitText){
		for(i=0; i<splitText.length; i++){
			splitText[i] = '<span>' + i + '</span>'
		}
		return splitText
	}

	//take the spanned string and replace the innerHTML 
	function stringReplacer(){
		gameText = stringSpanner(stringSplitter(gameText));
	}

	function childAppender(){
		test = document.getElementById("spannedGameText")
		console.log(test)
		console.log(gameText)
		test.appendChild(gameText)
	}


	//better idea. create spans, iterate through string and stick them in.
	

	function stringKeyCodeGetter(){	
	}

	function inputKeyCodeGetter(){
	}

	function keyCodeMatcher(){	
	}

	stringReplacer()
	console.log(childAppender())
	// console.log(gameText)


}

window.addEventListener('load',racer,false)