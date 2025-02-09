import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepresentation } from '../services/models/product-representation';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  product: ProductRepresentation = {};

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
}
