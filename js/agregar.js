function agregarTarea(e){
    e.preventDefault();

    var tarea = document.querySelector('#tarea');
    var desc = document.querySelector('#descripcion');
    var fecha = document.querySelector('#fecha');

    if(localStorage.getItem("tareas")===null){
        tareas = [];
    }else{
        tareas = JSON.parse(localStorage.getItem("tareas"));
    }

    const tareaAg = {
        tarea: tarea.value,
        desc: desc.value,
        fecha: fecha.value
    }

    tareas.push(tareaAg);

    localStorage.setItem("tareas", JSON.stringify(tareas));

    window.location.href = 'to-do.html';
}