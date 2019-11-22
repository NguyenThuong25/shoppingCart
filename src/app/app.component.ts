import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  totalItem: number = 2;
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;
  sumItem(data) {
    this.totalItem = data.item;
    this.subTotal = data.sTotal;
    this.tax = data.tax;
    this.total = data.total;
  }

  ngOnInit() {}
}
