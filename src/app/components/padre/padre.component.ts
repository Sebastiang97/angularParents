import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  empiezaAqui : string = "Variable del padre"
  numeroPadre: number = 0
  constructor() { }

  ngOnInit(): void {
    console.log('Padre')
    this.numeroPadre = 1
  }

  eventoDelPadre($event: any){
    //this.numeroPadre = $event
    console.log("vacio")

    console.log($event)

  }

}

