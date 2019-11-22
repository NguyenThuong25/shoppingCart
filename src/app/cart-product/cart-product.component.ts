import { Component, OnInit, Output } from "@angular/core";
import { ProductService } from "../product.service";
import { EventEmitter } from "@angular/core";
@Component({
  selector: "app-cart-product",
  templateUrl: "./cart-product.component.html",
  styleUrls: ["./cart-product.component.css"]
})
export class CartProductComponent implements OnInit {
  listProducts = [];

  constructor(private productService: ProductService) {}
  @Output() postData = new EventEmitter();
  ngOnInit() {
    this.listProducts = this.productService.getdata();
    this.commitProduct(this.listProducts);
  }

  removeProduct(id: number) {
    let index = this.listProducts.findIndex(product => product.id == id);
    var r = confirm("ban có muốn xóa sản phẩm");
    if (r == true) {
      if (index != -1) {
        this.listProducts.splice(index, 1);
      }
    }

    this.commitProduct(this.listProducts);
  }
  inputElement: number;
  changeQuantity(id, inputElement: HTMLInputElement) {
    console.log(this.listProducts);
    console.log(inputElement.value);
    let product = this.listProducts.find(p => p.id === id);
    product.quantity = parseInt(inputElement.value);
    console.log(product.quantity);

    let indexProduct = this.listProducts.findIndex(p => p.id == id);
    this.listProducts[indexProduct] = product;
    this.commitProduct(this.listProducts);
  }
  commitProduct(listProducts) {
    let item = this.sumQuantity(listProducts);
    let sTotal = this.subTotal(listProducts);
    let tax = this.sumTax(listProducts);
    let total = sTotal + tax;
    this.postData.emit({ item: item, sTotal: sTotal, tax: tax, total: total });
  }
  sumQuantity(listProducts) {
    let total = 0;
    for (let i of listProducts) {
      if (!i.quantity) {
        i.quantity = 0;
      }
      total += i.quantity;
    }
    return total;
  }
  subTotal(listProducts) {
    let sTotal = 0;
    for (let i of listProducts) {
      sTotal += i.quantity * i.price;
    }
    return sTotal;
  }
  sumTax(listProducts) {
    let tax = 0;
    for (let i of listProducts) {
      tax += i.tax * i.quantity;
    }
    return tax;
  }
  productNull(listProducts) {
    if (listProducts.length == 0) {
      return true;
    }
    return false;
  }
}
