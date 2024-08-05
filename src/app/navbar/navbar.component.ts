import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../servises/app.service';
import { Store } from '@ngxs/store';
import { AuthState } from '../store/auth.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public appServ: AppService,
    private store: Store
  ) { }

  

  currentAuth = this.store.selectSnapshot(AuthState.getAuth)
  ngOnInit() {
    this.store.select(AuthState.getAuth).subscribe({
      next: (value) => {
        console.log(value)
        this.currentAuth.username = value.username;
        this.currentAuth.role = value.role;       
        if(this.currentAuth.role ==='admin'){
          this.appServ.menu = true;   
          this.appServ.admin_btn = true     
        } else if( this.currentAuth.role ==='user') {
          this.appServ.menu = true; 
          this.appServ.admin_btn = false;  
        }

      }
    })
  }

}
