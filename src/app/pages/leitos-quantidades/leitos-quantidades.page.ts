import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeitoDto } from 'src/app/models/leito.dto';
import { LeitoService } from 'src/app/services/leito.service';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { SexoEnum } from 'src/app/models/Enum/sexo.enum';
import { AlaEnum } from 'src/app/models/Enum/ala.enum';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-leitos-quantidades',
  templateUrl: './leitos-quantidades.page.html',
  styleUrls: ['./leitos-quantidades.page.scss']
})
export class LeitosQuantidadesPage implements OnInit {

  title = 'Relatório Quantitativo de Leitos';

  @ViewChild('conteudo') conteudo: ElementRef;

  leitos = new Array<LeitoDto>();
  quantidadeMasculinoA = 0;
  quantidadeFemininoA = 0;
  quantidadeMasculinoB = 0;
  quantidadeFemininoB = 0;

  quantidadeMasculinoALiberados = 0;
  quantidadeFemininoALiberados = 0;
  quantidadeMasculinoBLiberados = 0;
  quantidadeFemininoBLiberados = 0;

  quantidadeTotal = 0;
  quantidadeTotalLiberado = 0;

  leitosMasculinoA = new Array<LeitoDto>();
  leitosMasculinoB = new Array<LeitoDto>();

  leitosFemininoA = new Array<LeitoDto>();
  leitosFemininoB = new Array<LeitoDto>();

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public leitoService: LeitoService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.leitoService.buscaLeitosQuantitativo().subscribe(leitos => {
      this.leitos = leitos;
      console.log(this.leitos);

      this.leitos.forEach(leito => {
        if (leito.setor.toLowerCase() === SexoEnum.FEMININO.toLowerCase() ){
          if (leito.ala === AlaEnum.A){
            if (leito.emUso){
              this.quantidadeFemininoA += 1;
            }else {
              this.quantidadeFemininoALiberados += 1;
            }
            this.leitosFemininoA.push(leito);
          }else {
            if (leito.emUso){
              this.quantidadeFemininoB += 1;
            }else {
              this.quantidadeFemininoBLiberados += 1;
            }
            this.leitosFemininoB.push(leito);
          }
        } else {
          if (leito.ala === AlaEnum.A){
            if (leito.emUso){
              this.quantidadeMasculinoA += 1;
            }else {
              this.quantidadeMasculinoALiberados += 1;
            }
            this.leitosMasculinoA.push(leito);
          }else {
            if (leito.emUso){
              this.quantidadeMasculinoB += 1;
            }else {
              this.quantidadeMasculinoBLiberados += 1;
            }
            this.leitosMasculinoB.push(leito);
          }
        }
      });
    });
  }

  imprimir(){
    window.print();
  }

  exportPDF(cont){
    const options = {
      name: 'output.pdf',
      image: { type: 'jpeg'},
      html2canvas: {},
      jspdf: { orientation: 'landscape'}
    };
    const element: Element = document.getElementById('conteudo');
    html2pdf()
      .from(element)
      .set(options)
      .save();
  }

}
