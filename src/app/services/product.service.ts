import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from './models/product-representation';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    const productUrl: string = `${this.baseUrl}products`;
    return this.http.get<Array<ProductRepresentation>>(productUrl);
  }

  getProductById(id: number) {
    const productUrl: string = `${this.baseUrl}products/${id}`;
    return this.http.get<ProductRepresentation>(productUrl);
  }

  getCategories(): Observable<string[]> {
    const categoriesUrl: string = `${this.baseUrl}products/categories`;
    return this.http.get<string[]>(categoriesUrl);
  }

  getProductsByCategory(category: string) {
    const categoryUrl: string = `${this.baseUrl}products/category/${category}`;
    return this.http.get<Array<ProductRepresentation>>(categoryUrl);
  }
}
