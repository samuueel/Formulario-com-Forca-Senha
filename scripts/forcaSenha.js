const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

//-------- FUNCTION VERIFICAR A FORÇA DA SENHA -------//

function validarSenhaForca(){
	var senha = document.getElementById('senhaForca').value;
	var forca = 0;

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

    mostrarForca(forca);
}

function mostrarForca(forca){
	document.getElementById("impForcaSenha").innerHTML = "Senha"+ " ";

	if(forca < 30 ){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #b00808'>fraca</span>";
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #b08c08'>média</span>";
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #148108'>forte</span>";
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #0d5205'>excelente</span>";
	}
}

//-----BLOQUEDOR DE NUMEROS E SIMBOLOS NO INPUT TEXT ------//

var input = document.querySelector(".input-name");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  	}
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);

    var pattern = '[a-zA-Z]';
    if (char.match(pattern)) {
      return true;
  }
}

input.addEventListener('keyup', function() {
	if (input.value.length <= 2) {
		input.setAttribute('style', 'border: 2px solid red;');
	} else {
		input.setAttribute('style', 'border: 2px solid green;');
	}
})

//-----BLOQUEDOR DE MEMORES DE IDADE ------//

const inputIdade = document.querySelector('#idade')
inputIdade.addEventListener('keyup', function() {
	if (inputIdade.value <= 18) {
		inputIdade.setAttribute('style', 'border: 2px solid red;');
	} else {
		inputIdade.setAttribute('style', 'border: 2px solid green;');
	}
})
