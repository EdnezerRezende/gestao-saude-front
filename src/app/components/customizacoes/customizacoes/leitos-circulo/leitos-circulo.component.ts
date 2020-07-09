import { Component, OnInit, Input } from '@angular/core';
import { LeitoDto } from 'src/app/models/leito.dto';

@Component({
  selector: 'app-leitos-circulo',
  templateUrl: './leitos-circulo.component.html',
  styleUrls: ['./leitos-circulo.component.scss'],
})
export class LeitosCirculoComponent implements OnInit {
  @Input()
  leitos: LeitoDto[];

  constructor() { }

  ngOnInit() {}

  retornaNumero(numero){
    return ('00' + numero).slice(-2);
  }

}
