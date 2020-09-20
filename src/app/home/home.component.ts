import { ProductDisplayComponent } from './../product-display/product-display.component';
import { TalkWithDbService } from './../talk-with-db.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }  
}
