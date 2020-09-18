import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eShopping';
  constructor(public dialog: MatDialog) {}
  openLogin() {
    this.dialog.open(LoginComponent, {
      height: '500px',
      width: '800px',
      backdropClass: 'backdropBackground',
    });
  }
}
