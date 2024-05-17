import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

interface Product {
  img: string;
  name: string;
  price: string;
}

interface PluginListOfProducts {
  products: Product[];
}

@Component({
  selector: 'lib-plugin-list-of-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="flex flex-col items-center">
        <div class="grid grid-cols-4 gap-8 px-11 max-w-6xl">
          @for (product of data.products; track product) {
            <div
              [ngClass]="{
                hidden: $index >= 4 && !showAllProducts()
              }"
              class="border rounded"
            >
              <div class="h-64 border-b py-4">
                <img class="h-full" [src]="product.img" [alt]="product.name" />
              </div>
              <div class="flex flex-col justify-between h-28 py-2 px-4">
                <div class="text-lg">
                  {{ product.name }}
                </div>
                <div class="text-2xl font-semibold">
                  {{ product.price | currency }}
                </div>
              </div>
            </div>
          }
        </div>
        <button
          class="border bg-white px-4 py-2 mt-8"
          (click)="showAllProducts.set(!showAllProducts())"
        >
          {{ showAllProducts() ? 'HIDE ALL PRODUCTS' : 'VIEW ALL PRODUCTS' }}
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PluginListOfProductsComponent {
  @Input({ required: true }) data!: PluginListOfProducts;

  protected readonly showAllProducts = signal<boolean>(false);
}
