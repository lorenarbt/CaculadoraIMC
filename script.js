document.addEventListener("DOMContentLoaded", function(event) { 
	const submit = document.getElementById('submit');

	submit.onclick = function(){
		const name = document.getElementById('name').value;
		const height = document.getElementById('height').value;
		const weight = document.getElementById('weight').value;

		const imc = Math.round(weight / (height**2));

		localStorage.setItem("name",name);
		localStorage.setItem("imc",imc);
	}
});