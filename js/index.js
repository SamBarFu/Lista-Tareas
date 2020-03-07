/* var tarea = document.getElementsByClassName("tarea");
var tarea1 = document.getElementById("segundaTarea");
var btn_basura = document.querySelector("#btn_basura");

console.log(btn_basura);

tarea[0].innerHTML = `<h1>Hola Mundo</h1>`;

tarea[0].innerText = `<h1>Hola Mundo</h1>`;

tarea[1].style.marginTop = '10em';

function nombre_funcion(){
    return 5;
}

/* nombre_funcion2(){
    return 6;
} */
/* 
const nombre_funcion3 = () => {
    return 4;    
}

console.log(()=>{
    return "JavaScript es un infierno";
});

btn_basura.addEventListener('click',()=>{
    console.log("Click");
}); */

let no_completadas = document.querySelector(".no_completadas");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("tareas") === null) {
    tareas = [];
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }

  tareas.forEach(tarea => {
      no_completadas.innerHTML += 
      ` <div class="tarea">
            <div class="tarea_descripcion">
                <h4>${tarea.tarea}</h4>
                <p>${tarea.desc}</p>
                <h6>${tarea.fecha}</h6>
            </div>
            <div class="cont_iconos">
                <i class="far fa-trash-alt" onclick="borrarTarea(this)"></i>
                <i class="fas fa-check" onclick="completarTarea(this)"></i>
            </div>
        </div>`;
  });


});

function borrarTarea(element) {
  var parent = element.parentNode.parentNode;
  parent.remove();
}

function completarTarea(element) {
  var parent = element.parentNode.parentNode;
  var completadas = document.querySelector(".completadas");
  element.remove();
  parent.remove();
  completadas.appendChild(parent);
}
