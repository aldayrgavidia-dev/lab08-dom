# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El titulo cambio a Hola TECSUP | Si |
| style.color | El titulo cambio a color azul | Si |

## Ejercicio 3: Evento click
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic sobre el boton | 1 |
| dblclick | Un doble clic sobre el boton | 1 |
| mouseover | Pasar el puntero sobre el boton | 1 |

- evento.type: mostro el tipo de evento que ocurrio (click).
- evento.target: mostro el elemento que genero el evento (el boton Sumar 1).

## Ejercicio 4: Eventos input y submit
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo cambio letra por letra mientras escribia | No |
| Enviar sin preventDefault | Aparecio el mensaje Enviado y luego desaparecio al recargarse la pagina | Si |
| Enviar con preventDefault, correo sin @ | Aparecio el mensaje Correo no valido: falta @ en rojo | No |
| Enviar con preventDefault, correo con @ | Aparecio el mensaje Enviado con el correo ingresado | No |


## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |

Usar una clase permite crear varios productos con los mismos atributos y métodos sin repetir todo el código.
También facilita agregar nuevos productos, como el monitor, sin modificar el HTML.