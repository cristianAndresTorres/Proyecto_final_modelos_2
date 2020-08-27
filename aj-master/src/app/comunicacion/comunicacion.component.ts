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
  verificaJaque="";

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
       this.verificaJaque=data.verificaJaque;


       if(this.verificaJaque=="Jaque Mate :("){
        alert("JAQUE MATE!");
      }else{
        if (this.decision=="true"){
          //guardar lo que este en la posicion final
          var guardar= document.getElementById(this.posIniY+""+this.posIniX).innerHTML;
          //Vacia la posicion
          document.getElementById(this.posIniY+""+this.posIniX).innerHTML = "";
          //se reescribe la nueva posicion
  
          document.getElementById(this.posFinY+""+this.posFinX).innerHTML =guardar;
        
        } else{
          alert("movimiento invalido");
        }
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
