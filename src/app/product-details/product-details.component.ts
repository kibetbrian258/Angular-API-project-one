import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepresentation } from '../services/models/product-representation';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductRepresentation = {};
  isLoading = true;

  constructor(private route: ActivatedRoute, private service: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductById(id).subscribe({
      next: (result) => {
        this.product = result;
        this.isLoading = false;
      },
    });
  }
}
