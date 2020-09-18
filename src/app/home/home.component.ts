import { TalkWithDbService } from './../talk-with-db.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  data = null;
  constructor(public talkWithDbService:TalkWithDbService) {}

  ngOnInit(): void {
    this.talkWithDbService.filterProduct({ "tag": "shirt" })
      .subscribe((data) => {
        console.log(data);
        this.data = data;
      }, (err) => { 
          console.log(err);
      })

  }
}
