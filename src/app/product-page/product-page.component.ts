import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalkWithDbService } from '../talk-with-db.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public talkWithDbService: TalkWithDbService
  ) {}
  obj = null;
  specific;
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      console.log(url[0].path);
      this.obj = null;
      this.talkWithDbService.filterPage({ productId: url[0].path }).subscribe(
        (data) => {
          this.obj = data;
          let data2 = <HTMLInputElement>document.getElementById('specificData');
          let overview = <HTMLInputElement>document.getElementById('overview');
          overview.classList.add('btn-primary');
          data2.style.display = "none";
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  overview() {
    let data = <HTMLInputElement>document.getElementById('specificData');
    data.style.display = "none";
    let data2 = <HTMLInputElement>document.getElementById('overviewData');
    data2.style.display = 'block';
    
    let overview = <HTMLInputElement>document.getElementById('overview');
    overview.classList.remove('btn-primary');
    let specifications = <HTMLInputElement>(
      document.getElementById('specifications')
    );
    specifications.classList.remove('btn-primary');
    overview.classList.add('btn-primary');
  }
  specifications() {
     let data = <HTMLInputElement>document.getElementById('specificData');
     data.style.display = 'block';
     let data2 = <HTMLInputElement>document.getElementById('overviewData');
     data2.style.display = 'none';




    let overview = <HTMLInputElement>document.getElementById('overview');
    overview.classList.remove('btn-primary');
    let specifications = <HTMLInputElement>(
      document.getElementById('specifications')
    );
    specifications.classList.remove('btn-primary');
    specifications.classList.add('btn-primary');
  }

  addon(obj) {
    
  }
}
