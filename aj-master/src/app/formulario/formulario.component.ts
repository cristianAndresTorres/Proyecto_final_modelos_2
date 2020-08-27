import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { 
 
  }

  ngOnInit() {
  }
  changeLabelName(lbl, val,lb2,val2) {
    document.getElementById(lbl).innerHTML = val;
    document.getElementById(lb2).innerHTML= val2;

  }
}
