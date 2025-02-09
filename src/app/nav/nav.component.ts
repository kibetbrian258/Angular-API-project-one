import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  categories: string[] = [];
  activeCategory: string = 'all';
  isMobileMenuOpen = false;
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  selectCategory(category: string): void {
    this.activeCategory = category;
    this.categorySelected.emit(category);
    this.isMobileMenuOpen = false;
  }
}
