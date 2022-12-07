import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //TODO: Temporal
  nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Santiago Rosero',
      email:'test1@test.com'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    
    this.miFormulario.markAllAsTouched();
  }

}