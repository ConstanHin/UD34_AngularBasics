import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  operando1: number;
  operando2: number;
  operador: string;
  btnsNumber : NodeListOf<HTMLElement>;

  constructor() {
    this.operando1 = 0;
    this.operando2 = 0;
    this.operador = "";
    this.btnsNumber = document.querySelectorAll(".calc-left-btn");

  }

  ngOnInit(): void {
    this.btnsNumber.forEach(btn => {
      btn.click = this.numberEvent;
    });
  }

  numberEvent(){
    console.log("clicado");

  }


}
