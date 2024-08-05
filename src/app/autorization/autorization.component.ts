import { Component } from '@angular/core';
import { Autorization } from '../interfaces/autorization';
import { AutorizationService } from '../servises/autorization.service';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})
export class AutorizationComponent {

  user: Autorization = {
    username: '',
    password: ''
  }
  isChecked: boolean = false

  constructor(private autorizationServ: AutorizationService) { }

  autorize() {
    this.autorizationServ.authorizeUser(this.user, this.isChecked);
  }
}
