document.addEventListener("DOMContentLoaded", function(event) { 
	const name = localStorage.getItem("name");
	const imc = localStorage.getItem("imc");

	// const terms = ["Classificação", "IMC(kg/m²)", "Risco de Comorbidades"];

	const table = [
		[0, 18.5, "Baixo Peso", "Baixo"],
		[18.6, 24.9, "Peso Normal", "Médio"],
		[25, 29.9, "Pré-Obeso", "Aumentado"],
		[30, 34.9, "Obeso I", "Moderado"],
		[35, 39.9, "Obeso II", "Grave"],
		[40, 100, "Obeso III", "Muito Grave"]
	];

	table.forEach(element => {
		if (element[0] < imc && imc < element[1]){
			showResult(element[2],element[3]);
			return;
		}

	});

	function showResult (classification,risk){
		document.getElementById("result").innerHTML = "Sua Classificação: " + classification + "<br><br>Risco de Comorbidades: " + risk;
	}
	
});