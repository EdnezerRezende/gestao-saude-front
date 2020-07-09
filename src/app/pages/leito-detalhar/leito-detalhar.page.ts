import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeitoService } from 'src/app/services/leito.service';
import { ToastController, NavController } from '@ionic/angular';
import { LeitoDto } from 'src/app/models/leito.dto';

@Component({
  selector: 'app-leito-detalhar',
  templateUrl: './leito-detalhar.page.html',
  styleUrls: ['./leito-detalhar.page.scss'],
})
export class LeitoDetalharPage implements OnInit {
  title = 'Detalhar Leito';
  leito = new LeitoDto();

  constructor(
    private route: ActivatedRoute,
    private leitoService: LeitoService,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const leitoId = this.route.snapshot.paramMap.get('id');

    this.leitoService.buscaTodosLeitoPorId(Number(leitoId)).subscribe(resposta => {
      this.leito = resposta;
      console.log(this.leito);
    }, erro => {
      console.log('Deu ruim');
    });

  }

}
