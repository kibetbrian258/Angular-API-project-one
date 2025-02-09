import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/models/product-representation';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: ProductRepresentation[] = [];
  isLoading = true;
  filteredProducts: ProductRepresentation[] = [];
  currentPage = 1;
  productsPerPage = 6;
  totalPages = 1;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.isLoading = true;
    this.service.getAllProducts().subscribe({
      next: (result) => {
        this.products = result;
        this.isLoading = false;
        this.updateFilteredProducts();
      },

      error: (error) => {
        console.log('Error fetching products:', error);
        this.isLoading = false;
      },
    });
  }

  onCategorySelected(category: string) {
    this.isLoading = true;
    this.currentPage = 1;

    if (category === 'all') {
      this.loadAllProducts();
    } else {
      this.service.getProductsByCategory(category).subscribe({
        next: (result) => {
          this.products = result;
          this.updateFilteredProducts();
          this.isLoading = false;
        },
        error: (error) => {
          console.log('Error fetching products:', error);
          this.isLoading = false;
        },
      });
    }
  }

  updateFilteredProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.filteredProducts = this.products.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateFilteredProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
