import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-searchbar',
  templateUrl: './app-searchbar.component.html',
  styleUrls: ['./app-searchbar.component.scss'],
})
export class AppSearchbarComponent implements OnInit {
  @Input()
  listaPesquisa: any;

  @Output()
  retornoPesquisa = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  retorno(event){
    this.retornoPesquisa.emit(event);
  }

}
