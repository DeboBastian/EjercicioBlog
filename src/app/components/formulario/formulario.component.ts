import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(
    private postService: PostsService,
    private router: Router) {
    
    
    this.formulario = new FormGroup({

      autor: new FormControl(null, [
        Validators.required
      ]),

      titulo: new FormControl(null, [
        Validators.minLength(4)
      ]),
      
      texto: new FormControl(null, [
        Validators.maxLength(300)
      ]),
      
      imagen: new FormControl(null, [
        Validators.required
      ]),

      fecha: new FormControl(null, [
        Validators.required
      ]),

      //FALTA BUSCAR EXPRESION REGULAR PARA VALIDAR FECHA
      
      categoria: new FormControl(null, [
        Validators.required
      ])

    })
  }

// CREAR UNA FUNCION PARA QUE SALTE UN ALERT CUANDO FALTAN DATOS QUE RELLENAR EN EL FORM 
  
  crearPost() {
    this.postService.createPost(this.formulario.value);
    this.router.navigate(['/posts'])
  }

}