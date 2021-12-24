import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = "https://randomuser.me";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + "/api");
  }
}
