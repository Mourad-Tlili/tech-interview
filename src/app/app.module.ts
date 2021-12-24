import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PublicAoiComponent } from "./components/public-aoi/public-aoi.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PublicAoiComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
