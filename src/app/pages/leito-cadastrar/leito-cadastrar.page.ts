import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlaEnum } from 'src/app/models/Enum/ala.enum';
import { SexoEnum } from 'src/app/models/Enum/sexo.enum';
import { LeitoService } from 'src/app/services/leito.service';
import { LeitoDto } from 'src/app/models/leito.dto';

@Component({
  selector: 'app-leito-cadastrar',
  templateUrl: './leito-cadastrar.page.html',
  styleUrls: ['./leito-cadastrar.page.scss'],
})
export class LeitoCadastrarPage implements OnInit {
  title = 'Cadastrar Leito';

  formulario: FormGroup;

  alasDTO = Object.keys(AlaEnum);
  setores = Object.keys(SexoEnum);
  leito = new LeitoDto();
  temId = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private leitoService: LeitoService
  ) { }

  ngOnInit() {
    this.criarFormulario();

    const leitoId = this.route.snapshot.paramMap.get('id');
    if (leitoId !== null){
      this.leitoService.buscaTodosLeitoPorId(Number(leitoId)).subscribe(async resposta => {
        this.leito = await resposta;
        this.montarDTOChegada();
        this.temId = true;
      }, erro => {
        console.log('Deu ruim');
      });
    }
  }

  private criarFormulario(){
    this.formulario = this.fb.group({
      numeroLeito: ['', [Validators.required]],
      ala: ['', [Validators.required]],
      setor: ['', [Validators.required]],
    });
  }

  montarDTOChegada(){
    this.formulario.get('numeroLeito').setValue(this.leito.numeroLeito);
    this.formulario.get('ala').setValue(this.leito.ala);
    this.formulario.get('setor').setValue(this.leito.setor);
  }

  montarDTOSalvar(){
    this.leito.numeroLeito = this.formulario.get('numeroLeito').value;
    this.leito.ala = this.formulario.get('ala').value;
    this.leito.setor = this.formulario.get('setor').value;
  }

  salvar(){
    this.montarDTOSalvar();

    let mensagem = '';
    if (this.leito.id !== undefined ){
      mensagem = 'alterado';
    }else{
      mensagem = 'salvo';
    }

    this.leitoService.salvarLeito(this.leito).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: `Leito ` + mensagem + ` com sucesso!`,
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.limparFormulario();
      if (this.leito.id !== undefined){
        this.navCtrl.back();
      }
    }, async error => {
      const toast = await this.toastController.create({
        header: 'Erro',
        message: `Leito não foi ` + mensagem + `!`,
        position: 'top',
        animated: true,
        color: 'danger',
        duration: 2000
      });
      toast.present();
    });
  }
  compareFn(e1: string, e2: string): boolean {
    return e1 && e2 ? e1 === e2 : e1 === e2;
  }

  limparFormulario(){
    this.formulario.reset();
    this.criarFormulario();
  }


}
