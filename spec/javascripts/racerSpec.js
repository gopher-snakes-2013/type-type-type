//never test getter, setter 
//any line of logic should be testing
//test if i can access a span
//if i hit a key, can i get a code
//wpm
//capybara test begin game
//did i append anything to the dom



describe('stringModders',function() {

	it("should split a string", function(){
		var newElement = document.createElement('div')
		newElement.innerHTML = "abc"
		newElement.id = "gameText"
		document.body.appendChild(newElement)

		expect(stringSplitter()).toEqual(['a','b','c'])
	})


	it("should add spans to string", function() {
		expect(stringSpanner(['a','b','c'])).toEqual('<span>a</span><span>b</span><span>c</span>')
	})
})


describe('advanceCharacter', function() {
	it("should add highlight id to span", function() {
		expect() //HERP DERP. how do i do this in javascript only. 

		//http://kernowsoul.com/blog/2010/08/20/programatically-simulating-javascript-events-in-a-test-environment/

		//http://blog.davidpadbury.com/2010/10/11/bdd-testing-of-jquery-plugins-using-jasmine/
	})
})