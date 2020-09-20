import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  obj;

  constructor(
    private dialogRef: MatDialogRef<ProductDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.obj = data.obj;
  }

  ngOnInit(): void {}
}
