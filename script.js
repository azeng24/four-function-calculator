function calculate() {
	// Get values from input fields.
	var x = parseInt(document.getElementById('x').value);
	var y = parseInt(document.getElementById('y').value);
	var radios = document.getElementsByName('op');
	var op;
	for (var i = 0; i < radios.length; i++) {
	  if (radios[i].checked) {
	  	op = radios[i].value;
	    break;
	  }
	}

	// Validate input.
	if (isNaN(x) || isNaN(y)) {
		alert('Please enter valid numbers.');
		return;
	}
	if (op == undefined) {
		alert('Please select an operator');
		return;
	}

	// Set up answer variable.
	var ans = 0;

	// TODO: Handle addition, subtraction, multiplication, and division.
	if(radios[0].checked){
		ans = x+y;
	} else if(radios[1].checked){
		ans = x-y;
	} else if(radios[2].checked){
		for(var i = 0; i<y; i++) ans+=x;
	} else if(radios[3].checked){
		var x1 = x
		while(x1>=y){
			ans+=1;
			x1-=y;
		}
		if(x1!=0)
		ans = ans + " R"+x1;
	}

	// Log the equation.
	console.log(x + " " + op + " " + y + " = " + ans);
}