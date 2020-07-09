import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DoencaService } from 'src/app/services/doenca.service';
import { DoencaDto } from 'src/app/models/doenca.dto';

@Component({
  selector: 'app-doenca-cadastrar',
  templateUrl: './doenca-cadastrar.page.html',
  styleUrls: ['./doenca-cadastrar.page.scss'],
})
export class DoencaCadastrarPage implements OnInit {
  title = 'Cadastrar Doença';

  formulario: FormGroup;
  doenca = new DoencaDto();

  temId = false;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastController: ToastController,
    private route: ActivatedRoute,
    private doencaService: DoencaService
  ) { }

  ngOnInit() {
    this.criarFormulario();
    const doencaId = this.route.snapshot.paramMap.get('id');
    if (doencaId !== null){
      this.doencaService.buscaDoencaPorId(Number(doencaId)).subscribe(async resposta => {
        this.doenca = await resposta;
        this.montarDTOChegada();
        this.temId = true;
      }, erro => {
        console.log('Deu ruim');
      });
    }
  }

  montarDTOChegada(){
    this.formulario.get('nomeDoenca').setValue(this.doenca.nomeDoenca);
  }

  private criarFormulario(){
    this.formulario = this.fb.group({
      nomeDoenca: ['', [Validators.required]]
    });
  }

  salvar(){
    let mensagem = '';
    if (this.doenca.id !== undefined ){
      mensagem = 'alterado';
    }else{
      mensagem = 'salvo';
    }

    this.doenca.nomeDoenca = this.formulario.get('nomeDoenca').value;

    this.doencaService.salvarDoenca(this.doenca).subscribe(async resposta => {
      const toast = await this.toastController.create({
        header: 'Sucesso',
        message: `Doença ` + mensagem + ` com sucesso!`,
        position: 'top',
        animated: true,
        color: 'success',
        duration: 2000
      });
      toast.present();
      this.limparFormulario();
      if (this.doenca.id !== undefined){
        this.navCtrl.back();
      }
    }, async error => {
      const toast = await this.toastController.create({
        header: 'Erro',
        message: `Doença não foi ` + mensagem + `!`,
        position: 'top',
        animated: true,
        color: 'danger',
        duration: 2000
      });
      toast.present();
    });
  }

  limparFormulario(){
    this.formulario.reset();
    this.criarFormulario();
  }
}
