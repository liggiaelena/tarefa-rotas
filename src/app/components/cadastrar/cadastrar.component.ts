import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  submitted = false;
  message: string = '';
  name: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.message = `Usuário ${this.name} cadastrado com sucesso!`;
    }
  }
}
