import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  meuFormulario: any;

  meuFormulario2: any;

  constructor(private formBuilder: FormBuilder) {

    this.meuFormulario = this.formBuilder.group(
      {
        nome: ['drd do jhota', [Validators.required]],
        email: ['', [Validators.required]],
        mensagem: ['vai tomar nao tem escapatoria', [Validators.required]],
        usuarioEnviante: ['']
      });


    this.meuFormulario2 = this.formBuilder.group(
      {
        nome: ['drd do jhota', [Validators.required]],
        email: ['', [Validators.required]],
        mensagem: ['vai tomar nao tem escapatoria', [Validators.required]],
        usuarioEnviante: ['']
      });

  }

  enviar() {

    this.meuFormulario.get('usuarioEnviante')?.setValue('drd do jhota');

  }

}
