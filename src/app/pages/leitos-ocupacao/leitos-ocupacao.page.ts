import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { PacienteDto } from 'src/app/models/paciente.dto';
import { LeitoService } from 'src/app/services/leito.service';
import { LeitoDto } from 'src/app/models/leito.dto';
import { SexoEnum } from 'src/app/models/Enum/sexo.enum';
import { AlaEnum } from 'src/app/models/Enum/ala.enum';
import { SelectItem } from 'primeng/api';
import { LeitoOcupacaoDto } from 'src/app/models/leito-ocupacao.dto';
import * as jsPDF from 'jspdf';

import { DataUtil } from 'src/app/util/date-util';

@Component({
  selector: 'app-leitos-ocupacao',
  templateUrl: './leitos-ocupacao.page.html',
  styleUrls: ['./leitos-ocupacao.page.scss'],
})
export class LeitosOcupacaoPage implements OnInit {

  title = 'Relatório de Leitos X Ocupação';

  leitos = new Array<LeitoOcupacaoDto>();

  cols;

  jsPDF: any;

  exportColumns: any[];
  selectedLeitos: LeitoDto[];

  setores: SelectItem[];
  alas: SelectItem[];

  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    public leitoService: LeitoService,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {

    this.setores = [
      { label: 'Todos', value: null },
      { label: 'MASCULINO', value: 'MASCULINO' },
      { label: 'FEMININO', value: 'FEMININO' },
    ];

    this.alas = [
      { label: 'Todos', value: null },
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
    ];

    this.leitoService.buscaLeitosPorOcupacao().subscribe(leitos => {
      this.leitos = leitos;
      console.log(this.leitos);
    });

    this.cols = [
      { field: 'numeroLeito', header: 'Leito' },
      { field: 'setor', header: 'Setor' },
      { field: 'ala', header: 'Ala' },
      { field: 'nome', header: 'Nome' },
      { field: 'numeroSES', header: 'SES' },
      { field: 'textoAlta', header: 'Observação' }
    ];

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  exportPdf(dt) {
    console.log(dt.filteredValue);
    const valores = dt.filteredValue ? dt.filteredValue : this.leitos;
    this.jsPDF = new jsPDF('l', 'pt');
    this.jsPDF.autoTable(this.exportColumns, valores);
    this.jsPDF.save(`Leitos_Ocupacao_` + DataUtil.DateParaString(new Date(), 'DD_MM_YYYY_HH:mm') + `.pdf`);
  }

  quantidade(lista: LeitoOcupacaoDto[]){
    let quantidade = 0;
    lista.forEach(leito => {
      if (leito.nome === undefined){
        quantidade += 1;
      }
    });
    return quantidade;
  }

}
