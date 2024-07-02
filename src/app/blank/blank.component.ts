// blank.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {
  product: any; // Cambiamos a un solo producto en lugar de una lista

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProductById(1); // Obtener el producto con id = 1 al inicializar el componente
  }

  fetchProductById(id: number): void {
    this.productsService.getProductById(id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }
}

