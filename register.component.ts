import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor() { }

  onRegister() {
    // Effectuer les opérations d'inscription, comme appeler un service d'inscription ou enregistrer les données dans une base de données.
    // Vous pouvez ajouter ici la logique de validation et de traitement des données d'inscription.

    console.log('Formulaire d\'inscription soumis');
    console.log('Nom d\'utilisateur :', this.username);
    console.log('Adresse e-mail :', this.email);
    console.log('Mot de passe :', this.password);
    console.log('Confirmation du mot de passe :', this.confirmPassword);
  }
}

