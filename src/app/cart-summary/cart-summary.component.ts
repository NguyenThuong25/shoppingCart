import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cart-summary",
  templateUrl: "./cart-summary.component.html",
  styleUrls: ["./cart-summary.component.css"]
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;
  @Input() totalItem: number;
  promoCode;
  constructor() {}

  maCode = ["giam10", "giam20"];

  changeTotal() {
    this.promoCode = this.promoCode.split(" ");
    for (let i of this.promoCode) {
      if (i == this.maCode[0]) {
        this.total = this.total * 0.9;
        alert("bạn được giảm 10%");
      }
      if (i == this.maCode[1]) {
        this.total *= 0.8;
        alert("bạn được giảm 20%");
      }
    }
    this.promoCode = "";
  }
  isShow() {
    if (this.totalItem > 0) {
      return true;
    }
    return false;
  }
  ngOnInit() {}
}
