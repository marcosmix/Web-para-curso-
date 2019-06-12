function ejecutar() {
	
	alert("carge");
	document.getElementsByTagName("body")[0].onclick=indentificar;

	document.getElementsById("principal").onclick=indentificar;
}

function indentificar() {
	alert("Soy una etiqueta NAV");
}

window.onload=ejecutar;