$(document).ready(function(){ 
  $("form").submit(function(){
    alert("Submitted");
  });
  $("#bot").click(function(){
    var SendInfo={"nombre":document.getElementById('nombre').value,
		  "apellidos":document.getElementById('apellidos').value,
		  "telefono":document.getElementById('telefono').value,
		  "correo":document.getElementById('correo').value,
		  "dia":document.getElementById('dia').value,
		  "mes":document.getElementById('mes').value,
		  "anyo":document.getElementById('anyo').value,
		  "pais":document.getElementById('pais').value,
		  "estado":document.getElementById('estado').value,
		  "municipio":document.getElementById('municipio').value,
		  "colonia":document.getElementById('colonia').value,
		  "calle":document.getElementById('calle').value,
		  "cp":document.getElementById('cp').value,
		  "username":document.getElementById('usuario').value,
		  "password1":document.getElementById('contrasena').value,
		  "password2":document.getElementById('ocontrasena').value,
		  "cuenta":document.getElementById('cuenta').value};
    $.ajax({
      
      type: 'POST',
      url: 'https://c5068u1n58.execute-api.us-east-1.amazonaws.com/default/creaCuentaProyectoA01373707',
      data: JSON.stringify(SendInfo),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (data) {
        console.log("Response: "+data['result']);
        if(data['result']=='success'){
          location.replace("Homer.html")
        }
      }
  }); 
  });
});