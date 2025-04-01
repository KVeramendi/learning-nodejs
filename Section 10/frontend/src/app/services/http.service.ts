import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from "../models/technology.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private baseUrl: string = environment.BASE_API_URL;
  private baseUrl: string = "http://localhost:3000/api";
  constructor(private readonly _http: HttpClient) { }

  public getTechnologies() {
    return this._http.get<{ data: Technology[] }>(this.baseUrl + "/technologies");
  }

  public getTechnology(id: string) {
    return this._http.get<{ data: Technology }>(this.baseUrl + "/technology/" + id);
  }

  public getSearchTechnology(query: string) {
    return this._http.get<{ data: Technology[] }>(this.baseUrl + "/technology/search/" + query);
  }
}
