import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gestao-title-header',
  templateUrl: './gestao-title-header.component.html',
  styleUrls: ['./gestao-title-header.component.scss'],
})
export class GestaoTitleHeaderComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  rota = '';

  constructor() { }

  ngOnInit() {}

}
