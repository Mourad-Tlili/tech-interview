import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../../services/service.service";
@Component({
  selector: "app-public-aoi",
  templateUrl: "./public-aoi.component.html",
  styleUrls: ["./public-aoi.component.css"],
})
export class PublicAoiComponent implements OnInit {
  variable: string;
  constructor(private ApiService: ServiceService) {}

  ngOnInit() {
    this.retriveEntries();
  }

  retriveEntries(): void {
    this.ApiService.getAll().subscribe((data) => {
      console.log(data);
    }),
      (error) => {
        console.log(error);
      };
  }

  showDetails(id): void {
    this.ApiService.get(id).subscribe(
      (data) => {
        this.variable = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
