import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TalkWithDbService } from '../talk-with-db.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDisplayComponent } from '../product-display/product-display.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public talkWithDbService: TalkWithDbService,
    public dialog: MatDialog
  ) {}
  category = null;
  data = null;
  

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.category = url[1].path;
      this.data = null;
      this.talkWithDbService
        .filterProduct({ category: this.category })
        .subscribe(
          (data) => {
            console.log(data);
            this.data = data;
          },
          (err) => {
            console.log(err);
          }
        );
    })
    
  }
  openDetails(id) {
    console.log(id);
    console.log(this.data[id]);
    this.dialog.open(ProductDisplayComponent, {
      height: '700px',
      width: '900px',
      backdropClass: 'backdropBackground',
      data: { obj: this.data[id] },
    });
  }
}
