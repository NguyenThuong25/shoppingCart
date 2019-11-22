import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  data = [
    {
      id: 0,
      name: "GIÀY BẢO HỘ LAO ĐỘNG",
      description: "giày được làm bằng vải giúp bảo vệ chân",
      image: "./assets/sp1.jpg",
      price: 15000,
      tax: 1000,
      quantity: 1
    },
    {
      id: 1,
      name: "GIÀY THỜI TRANG NAM",
      description: "giày nam đẹp giá rẻ",
      image: "./assets/sp2.jpg",
      price: 90000,
      tax: 2000,
      quantity: 1
    }
  ];
  constructor() {}
  getdata() {
    return this.data;
  }
}
