import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // Regex
  passwordPattern = '\W';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.pattern(this.emailPattern)),
      password: new FormControl('', Validators.pattern(this.passwordPattern)),
    });
  }

 
  

  onSubmit(form) {}
}
