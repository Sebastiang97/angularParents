import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() 
  variableHija: string= '';
  
  @Input() 
  otroNombre: string= '';

  @Input()
  width: number = 12

  @Output()
  infoDelHijo: EventEmitter<number> = new EventEmitter()

  miString: string = "cualquier variable "

  constructor() { }

  ngOnInit(): void {
    console.log('Hijo')
    this.infoDelHijo.emit(5)
  }

}



