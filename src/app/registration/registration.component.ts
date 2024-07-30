import { Component } from '@angular/core';
import { RegistrationService } from '../servises/registration.service';
import { Registration } from '../interfaces/registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationServ: RegistrationService) {

  }

  createUser: Registration = {   
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: ''
  }


  completeRegistration() {
    this.registrationServ.registrateUser(this.createUser);
  }
}
