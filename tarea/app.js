
// Tarea individual: gestor de tareas pendientes

// Clase Tarea
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }

  descripcion() {
    return this.nombre + " - Prioridad: " + this.prioridad;
  }
}


// Seleccionar elementos del HTML
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const prioridad = document.querySelector("#prioridad");
const listaTareas = document.querySelector("#listaTareas");


// Función para mostrar una tarea
function mostrarTarea(obj) {
  const li = document.createElement("li");
  li.textContent = obj.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);
}


// Evento para agregar tareas
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevaTarea = new Tarea(nombre.value, prioridad.value);

  mostrarTarea(nuevaTarea);

  formulario.reset();
});
