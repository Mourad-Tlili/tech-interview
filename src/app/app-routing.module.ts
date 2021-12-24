import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicAoiComponent } from "./components/public-aoi/public-aoi.component";

const routes: Routes = [{ path: "public-api", component: PublicAoiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
