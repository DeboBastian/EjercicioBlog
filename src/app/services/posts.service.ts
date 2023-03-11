import { Post } from './../interfaces/post.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  private arrPosts: Post[];

  constructor() { 
    this.arrPosts = [
      {
        titulo: 'La India',
        texto: 'El choque cultural fue enorme, será un viaje que nunca olvidaré',
        autor: 'María Ruiz',
        imagen: 'https://elviajerofeliz.com/wp-content/uploads/2015/04/Taj-Mahal-8.jpg',
        fecha: '4/12/2019',
        categoria: 'Viajes'
      },

      {
        titulo: 'Mejor hamburguesa de España',
        texto: 'III Campeonato de España de Hamburguesas: Burger Food Porn, DOBLE CHEESE BACON',
        autor: 'Pedro Rodríguez',
        imagen: 'https://lamejorhamburguesa.com/html5Upload/server/php/files/medium/898f5ded-579b-4759-83df-e68675064615.jpeg',
        fecha: '10/03/2023',
        categoria: 'Gastronomia'
      },

      {
        titulo: 'Musical MAMMA MIA!',
        texto: 'Vuelve el musical MAMMA MIA! a la capital',
        autor: 'Ignacio López',
        imagen: 'https://edo-entradas-pro-files.s3.amazonaws.com/image_uploads/attachments/000/005/940/mammamia-400x504px.jpg',
        fecha: '27/02/2023',
        categoria: 'Ocio'
      }
    ]

  }



  createPost(pPost: Post) {
    this.arrPosts.push(pPost);
  }


  getAll() {
    return this.arrPosts;
  }


  getByCategory(pCategoria: string) {
    return this.arrPosts.filter(post => post.categoria === pCategoria);
  }



}
