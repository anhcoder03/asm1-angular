import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(data: IProduct) {
    return this.http.post('http://localhost:3000/products', data);
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getProductById(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  removeProduct(id: any) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  updateProduct(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `http://localhost:3000/products/${data.id}`,
      data
    );
  }
}
