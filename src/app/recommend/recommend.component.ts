import { Component, OnInit } from '@angular/core';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { TalkWithDbService } from '../talk-with-db.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent implements OnInit {
  data;
  constructor(
    public talkWithDbService: TalkWithDbService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.talkWithDbService.filterProduct({ category: 'Recommend' }).subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      },
      (err) => {
        console.log(err);
      }
    );
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
