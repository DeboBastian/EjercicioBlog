import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      autor: new FormControl(),
      titulo: new FormControl(),
      texto: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl()
      
    })
  }


  onSubmit() {
    console.log(this.formulario.value)
  }

}