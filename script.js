
// nav en todo momento
window.addEventListener('scroll', function() {
    var nav = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// efecto de carga
window.addEventListener('load', () =>{
  const preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  preloader.style.visibility = "hidden";

  
}); 


//menu despegable

const icon1 = document.querySelectorAll(".cambio");
const icon2 = document.querySelectorAll(".cambio2");
const submenu = document.querySelectorAll(".sub-menu");

for (let i = 0; i < icon1.length; i++) {
  
  icon1.forEach((element, index) => {
    element.addEventListener("click", function(event) {
      if (window.innerWidth < 937) {
        const parentLi = this.parentElement;
        const sub = parentLi.querySelector(".sub-menu");
        const siblingIcons = Array.from(icon1).slice(index + 1);
        const height = sub.scrollHeight;
        this.style.display = "none";
        icon2[index].style.display = "block";
        sub.style.height = height + "px";
  
        if (sub.style.height !== "0px") {
          siblingIcons.forEach((icon, siblingIndex) => {
            icon.style.marginTop = "50px";
            
            
            if (index === 2) {
              icon.style.marginTop ="245px"
            } else if (index === 3) {
              icon.style.marginTop ="300px"
            }
          });
        } 
      }
    });
  });
  icon2[i].addEventListener("click", function(event) {
    this.style.display = "none";
    icon1[i].style.display = "block";
    const parentLi = this.parentElement;
    const sub = parentLi.querySelector(".sub-menu");
    const siblingIcons = Array.from(icon1).slice(i + 1);
    sub.style.height = "0";

    if (sub.style.height === "0px") {
      siblingIcons.forEach((icon) => {
        icon.style.marginTop = "initial";
      });
    }
    
  });
}

//formulario

const tipoInscripcion = document.getElementById("tipo_inscripcion");
const campoGrupo = document.getElementById("campo_grupo");
const campoStartup = document.getElementById("campo_startup");

tipoInscripcion.addEventListener("change", function() {
  if (tipoInscripcion.value === "Grupos") {
    campoGrupo.style.display = "block";
    campoStartup.style.display = "none";
    document.getElementById("nombre").required = false;
    document.getElementById("nombre_grupo").required = true;
    document.getElementById("numero_participantes").required = true;
  } else if (tipoInscripcion.value === "Startup") {
    campoGrupo.style.display = "none";
    campoStartup.style.display = "block";
    document.getElementById("nombre").required = false;
    document.getElementById("nombre_startup").required = true;
    document.getElementById("numero_participantes_startup").required = true;
  } else {
    campoGrupo.style.display = "none";
    campoStartup.style.display = "none";
    document.getElementById("nombre").required = true;
    document.getElementById("nombre_grupo").required = false;
    document.getElementById("numero_participantes").required = false;
    document.getElementById("nombre_startup").required = false;
    document.getElementById("numero_participantes_startup").required = false;
  }
});

//validación de formulario

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  const tipoInscripcion = document.getElementById("tipo_inscripcion").value;
  const nombre = document.getElementById("nombre").value;
  const nombreGrupo = document.getElementById("nombre_grupo").value;
  const numeroParticipantes = document.getElementById("numero_participantes").value;
  const nombreStartup = document.getElementById("nombre_startup").value;
  const numeroParticipantesStartup = document.getElementById("numero_participantes_startup").value;
  const email = document.getElementById("email").value;
  const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
  const fechaExpedicion = document.getElementById("fecha_expedicion").value;
  const especializacion = document.getElementById("especializacion").value;
  const reto = document.getElementById("reto").value;
  const ciudad = document.getElementById("ciudad").value;
  const tipoDocumento = document.getElementById("tipo_documento").value;
  const numeroDocumento =document.getElementById("numero_documento").value;

  let valid = true;


  const regexNombre = /^[A-Za-z\s]+$/;

  if (tipoInscripcion === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, selecciona el tipo de inscripción",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  }

  if (tipoInscripcion === "Individual" && nombre === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa tu nombre",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  } else if (tipoInscripcion === "Individual" && !regexNombre.test(nombre)) {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El nombre solo puede contener letras y espacios",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  }

  if (tipoInscripcion === "Grupo") {
    if (nombreGrupo === "") {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa el nombre del grupo",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    }
    if (numeroParticipantes === "") {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa el número de participantes (de 1 a 5)",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    } else if (numeroParticipantes < 1 || numeroParticipantes >= 5) {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El número de participantes debe ser de 1 a 5",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    }
  }

  
  if (tipoInscripcion === "Startup") {
    if (nombreStartup === "") {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa el nombre de la startup o emprendimiento",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    }
    if (numeroParticipantesStartup === "") {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingresa el número de participantes (de 3 a 5)",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    } else if (numeroParticipantesStartup < 1 || numeroParticipantesStartup >= 5) {
      valid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El número de participantes debe ser de 1 a 5",
        footer: "Haz clic en el botón para cerrar",
        timer: 5000,
        timerProgressBar: true
      });
    }
  }

 
  if (email === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa tu correo electrónico",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  } else if (!validateEmail(email)) {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa un correo electrónico válido",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  }
  if (fechaNacimiento === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa tu fecha de nacimiento",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  } else if (!isAdult(fechaNacimiento)) {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debes ser mayor de edad para participar en el Hackathon",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  }

  // Validar fecha de expedición
  if (fechaExpedicion === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, ingresa la fecha de expedición del documento",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  }

  if (tipoInscripcion === "" || nombre === "" || email === "" || ciudad === "" || tipoDocumento === "" || numeroDocumento === "" || fechaNacimiento === "" || fechaExpedicion === "" || especializacion === "" || reto === "") {
    valid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor, completa todos los campos antes de enviar el formulario",
      footer: "Haz clic en el botón para cerrar",
      timer: 5000,
      timerProgressBar: true
    });
  } else if (valid) {
    Swal.fire({
      icon: "success",
      title: "¡Inscripción exitosa!",
      text: "Te has inscrito correctamente en el Hackathon. Pronto recibirás un correo con los pasos a seguir.",
      footer: "Haz clic en el botón para cerrar",
      timer: 8000,
      timerProgressBar: true
    });
  }
  

  }
);


function validateEmail(email) {
  const regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(email);
}


function isAdult(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  const edad = hoy.getFullYear() - nacimiento.getFullYear();
  const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
  if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad >= 18;
}

//efecto de scrool
window.sr = ScrollReveal();
 sr.reveal(' .texto-header' , {
    duration:4000,
    origin:'bottom',
    distance:'-150px'
 })
 sr.reveal(' .container-1' , {
    duration:4000,
    origin:'left',
    distance:'400px'
 })
 sr.reveal(' .galeria-cont' , {
  duration:4000,
  origin:'bottom',
  distance:'-150px'
})
sr.reveal(' .info' , {
  duration:4000,
  origin:'left',
  distance:'400px'
})
sr.reveal(' .texto-elemento' , {
  duration:4000,
  origin:'left',
  distance:'400px'
})
sr.reveal(' .titulo-scrool' , {
  duration:4000,
  origin:'bottom',
  distance:'-100px'
})
sr.reveal(' .form' , {
  duration:3000,
  origin:'left',
  distance:'400px'
})


