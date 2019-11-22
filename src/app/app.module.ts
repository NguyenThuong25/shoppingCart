import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CartHeaderComponent } from "./cart-header/cart-header.component";
import { CartProductComponent } from "./cart-product/cart-product.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartProductComponent,
    CartSummaryComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
