import { Component, OnInit } from '@angular/core';

interface MenuItem{
  texto:string,
  ruta:string
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  templateMenu:MenuItem[]=[
    {  
      texto:'Básicos',
      ruta:'./template/basicos'  
    },
    {
      texto:'Dinámicos',
      ruta:'./template/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./template/switches'
    }    
  ];
  reactiveMenu:MenuItem[]=[
    {  
      texto:'Básicos',
      ruta:'./reactive/basicos'  
    },
    {
      texto:'Dinámicos',
      ruta:'./reactive/dinamicos'
    },
    {
      texto:'Switches',
      ruta:'./reactive/switches'
    }    
  ];
  validacionesMenu:MenuItem[]=[
    {
      texto:'Registro',
      ruta:'./auth/registo'
    },
    {
      texto:'Login',
      ruta:'./auth/login'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
