import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TalkWithDbService } from '../talk-with-db.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  data = null;
  totalCost = 0;
  sz = 0;

  constructor(
    public talkWithDbService: TalkWithDbService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.talkWithDbService.filterCart({}).subscribe(
      (data) => {
        this.data = data;
        this.data.forEach((element) => {
          this.totalCost += parseInt(element.cost);
        });
        this.sz = this.data.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  shop() {
    this.router.navigateByUrl('/');
  }
  remove() {}
  edit() {}
}
