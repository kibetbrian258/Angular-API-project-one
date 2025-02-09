import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input()
  currentPage: number = 1;

  @Input()
  totalPages: number = 1;

  @Output()
  pageChange = new EventEmitter<number>();

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}
