import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalOrigemDto } from 'src/app/models/local_origem.dto';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { OrigemService } from 'src/app/services/origem.service';
import { LocalOrigemNewDto } from 'src/app/models/local_origem-new.dto';

@Component({
  selector: 'app-origem-cadastrar',
  templateUrl: './origem-cadastrar.page.html',
  styleUrls: ['./origem-cadastrar.page.scss'],
})
export class OrigemCadastrarPage implements OnInit {
  title = 'Cadastrar Origem';
  formulario: FormGroup;

  localOrigem = new LocalOrigemNewDto();
  temId = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private localOrigemService: OrigemService
  ) { }

  ngOnInit() {
    this.criarFormulario();

    const localOrigemId = this.route.snapshot.paramMap.get('id');
    if (localOrigemId !== null){
      this.localOrigemService.buscaPorId(Number(localOrigemId)).subscribe(async resposta => {
        this.localOrigem = await resposta;
        this.montarDTOChegada();
        this.temId = true;
      }, erro => {
        console.log('Deu ruim');
      });
    }
  }

  private criarFormulario(){
    this.formulario = this.fb.group({
      nomeOrigem: ['', [Validators.required]],
    });
  }

  montarDTOChegada(){
    this.formulario.get('nomeOrigem').setValue(this.localOrigem.nomeOrigem);
  }

  montarDTOSalvar(){
    this.localOrigem.nomeOrigem = this.formulario.get('nomeOrigem').value;
  }

  salvar(){
    this.montarDTOSalvar();

    let mensagem = '';
    if (this.localOrigem.id !== undefined ){
      mensagem = 'alterado';
    }else{
      mensagem = 'salvo';
    }

    this.localOrigemService.salvarLocalOrigem(this.localOrigem).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: `Local de Origem ` + mensagem + ` com sucesso!`,
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.limparFormulario();
      if (this.localOrigem.id !== undefined){
        this.navCtrl.back();
      }
    }, async error => {
      const toast = await this.toastController.create({
        header: 'Erro',
        message: `Local de Origem não foi ` + mensagem + `!`,
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
