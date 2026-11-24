
# Tarea: Mi componente interactivo

## Componente elegido

Gestor de tareas pendientes. Permite agregar tareas indicando su nombre y prioridad, y eliminarlas mediante un botón.

## Codigo principal


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


## Pruebas realizadas

| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Agregar una tarea con prioridad Alta | La tarea aparece en la lista con su prioridad | Si |
| Agregar una segunda tarea con prioridad Media | Las dos tareas aparecen en la lista | Si |
| Presionar el boton Borrar de una tarea | Desaparece solamente la tarea seleccionada | Si |

## Por que disene asi mi clase

La clase Tarea tiene los atributos nombre y prioridad porque permiten identificar cada actividad y conocer su importancia. El metodo descripcion() muestra la informacion de cada objeto de forma clara.

