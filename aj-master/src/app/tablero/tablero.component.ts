import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import {Pieza} from '../pieza'
import {Celda} from '../Celda'
  import { from } from 'rxjs';
  import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  jugador1 : Jugador = {
    id : 1,
    nombre : "",
    color: "negro"
  };
  jugador2 : Jugador = {
    id : 2,
    nombre : "",
    color: "blanco"
  };

  PeonNegro: Pieza ={
    texto:"&#9823;",
  };
  TorreNegro: Pieza ={
    texto:"&#9820;",
  };
  AlfilNegro: Pieza ={
    texto:"&#9821;",
  };
  CaballoNegro: Pieza ={
    texto:"&#9822;",
  };
  ReyNegro: Pieza ={
    texto:"&#9818;",
  };
  ReinaNegro: Pieza ={
    texto:"&#9819;",
  }
  Vacio: Pieza={
    texto:"",
  }

  
  PeonBlanco: Pieza ={
    texto:"&#9817",
  };
  TorreBlanco: Pieza ={
    texto:"&#9814;",
  };
  AlfilBlanco: Pieza ={
    texto:"&#9815;",
  };
  CaballoBlanco: Pieza ={
    texto:"&#9816;",
  };
  ReyBlanco: Pieza ={
    texto:"&#9813;",
  };
  ReinaBlanco: Pieza ={
    texto:"&#9812",
  }
  filas = [];

  ngOnInit() {

 }

  constructor(private router: Router,private route: ActivatedRoute) { 
      for(var i=0; i<8; i++){
        this.filas[i] = [];
        for(var j=0; j<8; j++){
          var celda : Celda ={
            clase : "",
            id : ""
          };
          celda.id = i+""+j;
          if((i + j) % 2 == 0){
            celda.clase = 'posicion2';
          }else{
            celda.clase = 'posicion1';
          }
          this.filas[i][j] = celda;
          
        }

        
      }
}
 inicializarTablero() {
   for(var j=0;j<8;j++){
    document.getElementById("1"+j).innerHTML = this.PeonBlanco.texto;
   }
   document.getElementById("00").innerHTML = this.TorreBlanco.texto;
   document.getElementById("07").innerHTML = this.TorreBlanco.texto;
   document.getElementById("01").innerHTML = this.AlfilBlanco.texto;
   document.getElementById("06").innerHTML = this.AlfilBlanco.texto;
   document.getElementById("02").innerHTML = this.CaballoBlanco.texto;
   document.getElementById("05").innerHTML = this.CaballoBlanco.texto;
  document.getElementById("04").innerHTML = this.ReyBlanco.texto;
  document.getElementById("03").innerHTML = this.ReinaBlanco.texto;

   for(var j=0;j<8;j++){
    document.getElementById("6"+j).innerHTML = this.PeonNegro.texto;
   }
   document.getElementById("70").innerHTML = this.TorreNegro.texto;
   document.getElementById("77").innerHTML = this.TorreNegro.texto;
   document.getElementById("71").innerHTML = this.AlfilNegro.texto;
   document.getElementById("76").innerHTML = this.AlfilNegro.texto;
   document.getElementById("72").innerHTML = this.CaballoNegro.texto;
   document.getElementById("75").innerHTML = this.CaballoNegro.texto;
  document.getElementById("73").innerHTML = this.ReyNegro.texto;
  document.getElementById("74").innerHTML = this.ReinaNegro.texto;
 }

RecibirJugada(Jugada:string){
  this.PintarNuevaCasilla(Jugada.substr(0,2),Jugada.substr(3,4));
  this.BorrarCasilla(Jugada.substr(0,2));
}
PintarNuevaCasilla(PosIn:string, PosFin){
  var aux= document.getElementById(PosIn).innerHTML;
  document.getElementById(PosFin).innerHTML =aux;
  console.log(aux);

}
BorrarCasilla(Pos:string ){
  document.getElementById(Pos).innerHTML ="";
}
}




