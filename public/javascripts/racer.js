function racer(){
	var	gameText = document.getElementById("gameText")


	function bindEventListeners(){}
	document.addEventListener("keypress",advanceCharacter,false)	


	//below 3 methods in one line. #brunostatus 
	//element.innerHTML='<span>'+textNode.data.split('').join('<\/span><span>'+'<\/span>')

	//on load, get string, split
	function stringSplitter(){
		var	gameText = document.getElementById("gameText").innerHTML
		return gameText.split("")
	}

	//wrap each character in span, join to remove the commas
	function stringSpanner(splitText){
		for(i=0; i<splitText.length; i++){
			splitText[i] = '<span>' + splitText[i] + '</span>'
		}
		return splitText.join('')
	}
	

	//take the spanned string and replace the innerHTML 
	function stringReplacer(){
		var spannedText = stringSpanner(stringSplitter());
		document.getElementById("gameText").innerHTML = spannedText
	}


//************************************************************************
	//different idea for spanning the string. create spans, iterate through string and stick characters in.

	//regarding text nodes/nodeValue--If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (element.childNodes[0].nodeValue). *!*!* nodeValue only works for text , returns null for other elements


	//documentFragment is a DOM node--it's never a part of the main DOM tree. the usual way they are utilized: create the frag, append elements to it, and then append the frag to the tree. in the tree, the frag is replaced by all of it's children.
	function fragmentSpanner(){
		// var	gameText = document.getElementById("gameText")
		var documentFrag = document.createDocumentFragment();


		for(var i=0, stringLength=gameText.innerHTML.length; i<stringLength; i++){
			var span = document.createElement('span')
			span.innerHTML = gameText.innerHTML.charAt(i)
			documentFrag.appendChild(span)
		}	

		gameText.parentNode.replaceChild(documentFrag,gameText)
	}
//************************************************************************	

	//grab keyCode of keypress event
	function inputKeyCodeGetter(event){
		// console.log(event.keyCode)
		return event.keyCode
	}
	
	//grab char within gametext, change to charCode
	function characterGetter(){
		// var	gameText = document.getElementById("gameText")
		return gameText.innerText.substring(correctCounter-1,correctCounter).charCodeAt()
	}

	var correctCounter = 1
	function advanceCharacter(event){
		var selectedSpan = gameText.children[correctCounter - 1]
		var character = characterGetter()

		inputKeyCodeGetter(event)

		if(character == inputKeyCodeGetter(event)){
			selectedSpan.id = "highlight"
			correctCounter += 1
		}
	}


	stringReplacer()
}


window.addEventListener('load',racer,false)