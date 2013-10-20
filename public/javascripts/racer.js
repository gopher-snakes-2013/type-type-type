function racer(){

	function bindEventListeners(){}
	document.addEventListener("keypress",whatKey,false)	

	//grab keycode of event
	function whatKey(e){
		((e.keyCode))
	}

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
		document.getElementById("gameText").innerHTML = stringSpanner(stringSplitter());
	}

	//the above 3 methods in one line. #brunostatus #stackoverflowcomments
	//element.innerHTML='<span>'+textNode.data.split('').join('<\/span><span>'+'<\/span>')


	//better idea. create spans, iterate through string and stick them in.

	//documentFragment is a DOM node--it's never a part of the main DOM tree. the usual way they are utilized: create the frag, append elements to it, and then append the frag to the tree. in the tree, the frag is replaced by all of it's children.

	//regarding text nodes/nodeValue--If you want to return the text of an element, remember that text is always inside a Text node, and you will have to return the Text node's node value (element.childNodes[0].nodeValue).

	var	gameText = document.getElementById("gameText")
	var documentFrag = document.createDocumentFragment();
	for(var i=0, stringLength=gameText.innerHTML.length; i<stringLength; i++){
		var span = document.createElement('span')
		span.innerHTML = gameText.innerHTML.charAt(i)
		documentFrag.appendChild(span)
	}	
	gameText.parentNode.replaceChild(documentFrag,gameText)



	function stringKeyCodeGetter(){	
	}

	function inputKeyCodeGetter(){
	}

	function keyCodeMatcher(){	
	}

	// stringReplacer()
	// console.log(document.getElementById("gameText").innerHTML)


}

window.addEventListener('load',racer,false)