document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573113421910";

  let fecha = document.querySelector("#fecha").value;
  let cliente = document.querySelector("#cliente").value;  
  let edad = document.querySelector("#edad").value;
  let numero = document.querySelector("#numero").value;
  let examen = document.querySelector("#examen").value;
  let medico = document.querySelector("#medico").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_IMAGEN ORAL 3D_*%0A
		*Citas*%0A%0A
		*Fecha Remision*%0A
		${fecha}%0A
		*Clinica o Doctor(a)*%0A
		${medico}%0A
		*Datos Paciente*%0A
		*Nombre Completo del Paciente*%0A
		${cliente}%0A
		*Edad*%0A
		${edad}%0A
		*Numero de telefono*%0A
		${numero}%0A
		*Examenes por realizar*%0A
		${examen}%0A`;

  if (cliente === "" || fecha === "" || medico === "" || edad === "" || numero === "" || examen === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu cita, ${cliente}`;

  window.open(url);
});
