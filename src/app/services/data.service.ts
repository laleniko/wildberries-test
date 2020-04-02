import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerData } from '../models/data.type';
import { Product } from '../models/product.type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getData(): Observable<Product[]> {
    return this.http.get<ServerData>('./assets/items.json').pipe(
      map((data: ServerData) => {
        return data.data;
      })
    );
  }
}
