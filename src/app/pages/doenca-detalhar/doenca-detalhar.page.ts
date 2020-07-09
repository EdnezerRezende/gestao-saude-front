import { Component, OnInit } from '@angular/core';
import { DoencaDto } from 'src/app/models/doenca.dto';
import { ActivatedRoute } from '@angular/router';
import { DoencaService } from 'src/app/services/doenca.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doenca-detalhar',
  templateUrl: './doenca-detalhar.page.html',
  styleUrls: ['./doenca-detalhar.page.scss'],
})
export class DoencaDetalharPage implements OnInit {
  title = 'Detalhar Doença';
  doenca = new DoencaDto();

  constructor(
    private route: ActivatedRoute,
    private doencaService: DoencaService,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const doencaId = this.route.snapshot.paramMap.get('id');

    this.doencaService.buscaDoencaPorId(Number(doencaId)).subscribe(resposta => {
      this.doenca = resposta;
      console.log(this.doenca);
    }, erro => {
      console.log('Deu ruim');
    });

  }
}
