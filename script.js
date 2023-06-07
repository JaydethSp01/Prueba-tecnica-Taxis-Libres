// nav en todo momento
window.addEventListener('scroll', function() {
    var nav = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
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




