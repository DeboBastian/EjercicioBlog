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
        Validators.required,
        Validators.minLength(4)
      ]),
      
      texto: new FormControl(null, [
        Validators.maxLength(300)
      ]),
      
      imagen: new FormControl(null, [
        Validators.required,
        Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)
      ]),

      fecha: new FormControl(null, [
        Validators.required
      ]),
      
      categoria: new FormControl("", [
        Validators.required
      ])

    })
  }


  crearPost() {
    this.postService.createPost(this.formulario.value);
    this.router.navigate(['/posts'])
  }


  checkError(control: string, validator: string) {
return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched
}


}

//CREAR VALIDATOR PARA FECHA QUE SEA ENTRE 2000 Y ESTE AÑO