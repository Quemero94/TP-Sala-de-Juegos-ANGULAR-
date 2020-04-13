import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  private mPrincipal: Principal[] = [
    {
      img: "./assets/imagenes/saladejuegos.png",
      nombre: "Juegos",
      descripcion:
        "El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.",
      link: "/Juegos"
    },
    {
      img: "./assets/imagenes/listado.png",
      nombre: "Listados de resultados",
      descripcion: "Los listados de los resultados con ordenamiento y busqueda",
      link: "/Listado"
    },
    {
      img: "./assets/imagenes/Configuracion.png",
      nombre: "Configuración",
      descripcion: "Ajustes de la aplicacion y los métodos de autentificación",
      link: "/Juegos"
    },
    {
      img: "./assets/imagenes/jugadores.png",
      nombre: "Jugadores",
      descripcion: "Listado de jugadores",
      link: "/Jugadores"
    }
  ];

  constructor() { }
}



export interface Principal {
  img: string;
  nombre: string;
  descripcion: string;
  link: string;
}