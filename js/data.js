$(document).ready(function(){
    $('.datepicker').datepicker();
  });

  function ValidarNombre() {
	var elemento = $('#txtNombre');
	var nombre = $(elemento).val();

	if (nombre != undefined && nombre != '') {
		var patron = /^[a-zA-Z]+$/;
		
		if(patron.test(nombre))
			$(elemento).css('background','');
		else
        $(elemento).css('background', '#b71c1c');
	} else {
		$(elemento).css('background', '#b71c1c');
	}
}

function ValidarApellido() {
	var elemento = $('#txtGerente');
	var nombre = $(elemento).val();

	if (nombre != undefined && nombre != '') {
		var patron = /^[a-zA-Z]+$/;
		
		if(patron.test(nombre))
			$(elemento).css('background','');
		else
        $(elemento).css('background', '#b71c1c');
	} else {
		$(elemento).css('background', '#b71c1c');
	}
}

function validarCorreo() {
	var elemento = $('#txtCorreo');
	var correo = $(elemento).val();

	if (correo != undefined && correo != '') {
		var patron = /^([A-Za-z0-9\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if(patron.test(correo))
			$(elemento).css('background','');
		else
			$(elemento).css('background', '#b71c1c');
	} else {
			$(elemento).css('background', '#b71c1c');
	}
}

function validarUsuario() {
	var elemento = $('#txtUser');
	var nombreUsuario = $(elemento).val();

	if (nombreUsuario != undefined && nombreUsuario != '') {
		var patron = /^[a-zA-Z][a-zA-Z0-9\.]*$/
		if(patron.test(nombreUsuario))
			$(elemento).css('background','');
		else
			$(elemento).css('background', '#b71c1c');
	} else {
		$(elemento).css('background', '#b71c1c');
	}
}

function validarPassword() {
	var elemento = $('#txtPassword');
	var nombreC = $(elemento).val();

	if (nombreC != undefined && nombreC != '') {
		/^[a-zA-Z][a-zA-Z0-9\.]*$/
		if(patron.test(nombreC))
			$(elemento).css('background','');
		else
			$(elemento).css('background', '#b71c1c');
	} else {
		$(elemento).css('background', '#b71c1c');
	}
}