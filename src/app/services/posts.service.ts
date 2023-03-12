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
      },

       {
        titulo: 'Egipto',
        texto: 'Adentrate en este impresionante y apasionante mundo de la antiguedad',
        autor: 'Eduardo Olivares',
         imagen: 'https://cadenaser.com/resizer/hIo8_l1sKWpqCYGb29p2VJI-zH8=/768x576/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/QJY44JN2EJDBJOZ47ZRP5TAGSY.jpg',
        fecha: '6/10/2020',
        categoria: 'Viajes'
      },

      {
        titulo: 'Restaurante Los 5 sentidos',
        texto: 'Guia Restaurant Guru 2022. Restaurante 5 Sentidos de Fran Martinez',
        autor: 'Helena Hurtado',
        imagen: 'https://www.5sentidosfranmartinez.com/images/8d0a3b0bdeec45cae9ab52f786c14f3a.jpg',
        fecha: '11/02/2022',
        categoria: 'Gastronomia'
      },

      {
        titulo: 'Los Chicos del Coro',
        texto: 'Después del exito rotundo de la pelicula "Los chicos del Coro", llega el musical a Los Teatros La Latina de Madrid',
        autor: 'Isidro Aguado',
        imagen: 'https://edo-entradas-pro-files.s3.amazonaws.com/image_uploads/attachments/000/004/300/chicos-del-coro-web_400x504.jpg',
        fecha: '01/10/2022',
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

  delatePost(indice: number) {
    this.arrPosts.splice(indice, 1)
  }



}
