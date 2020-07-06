import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { PacienteDto } from 'src/app/models/paciente.dto';
import { LeitoService } from 'src/app/services/leito.service';
import { LeitoDto } from 'src/app/models/leito.dto';
import { SexoEnum } from 'src/app/models/Enum/sexo.enum';
import { AlaEnum } from 'src/app/models/Enum/ala.enum';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-leitos-ocupacao',
  templateUrl: './leitos-ocupacao.page.html',
  styleUrls: ['./leitos-ocupacao.page.scss'],
})
export class LeitosOcupacaoPage implements OnInit {

  title = 'Relatório de Leitos X Ocupação';

  leitos = new Array<LeitoDto>();

  cols;

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

  exportPdf() {
    import('jspdf').then(jsPDF => {
      import('jspdf-autotable').then(x => {
          const doc = new jsPDF.default(0, 0);
          doc.autoTable(this.exportColumns, this.leitos);
          doc.save('primengTable.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.leitos);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'primengTable');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

}
