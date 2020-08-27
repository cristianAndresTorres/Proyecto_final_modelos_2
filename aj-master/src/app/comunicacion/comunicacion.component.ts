import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ComandosService } from '../comandos.service';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css'],
  providers: [ComandosService]
})
export class ComunicacionComponent implements OnInit {

  comando = "Prueba";
  resultado = "";
  //---------------------
  posIniX = "";
  posIniY = "";
  posFinX = "";
  posFinY = "";
  decision = "";
  //--------------------

  constructor(private http: ComandosService) { }

  enviarComando(){
    this.http.respuestaLlamdoServlet(this.comando).subscribe((data:any)=>{
      this.resultado = data.comando;
       //--------------------------
       this.posIniX = data.posIniX;
       this.posIniY = data.posIniY;
       this.posFinX = data.posFinX;
       this.posFinY = data.posFinY;
       this.decision = data.decision;
 
       //--------------------------



      if (this.decision== "true"){
        var guardar= document.getElementById(this.posIniX+""+this.posIniY).innerHTML;
        document.getElementById(this.posFinX+""+this.posIniY).innerHTML =guardar;
        document.getElementById(this.posIniX+""+this.posIniY).innerHTML = "";
      }
      else{
        alert("movimiento invalido");
      }

      /*for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
          document.getElementById(i+""+j).innerHTML = "";
        }
      }*/
      
    });
    //alert("ya");
  }

  ngOnInit() {
  }

}
