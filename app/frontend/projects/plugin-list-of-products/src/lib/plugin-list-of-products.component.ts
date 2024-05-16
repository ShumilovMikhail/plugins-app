import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Product {
  img: string;
  name: string;
  price: string;
}

@Component({
  selector: 'lib-plugin-list-of-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full flex justify-center">
      <div class="flex flex-col items-center">
        <div class="grid grid-cols-4 gap-8 px-11 max-w-6xl">
          @for (product of products; track product) {
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
          VIEW ALL PRODUCTS
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PluginListOfProductsComponent {
  protected readonly products: Product[] = [
    {
      img: '/assets/plugins-assets/products/image-2.png',
      name: 'Lipstick',
      price: '19',
    },
    {
      img: '/assets/plugins-assets/products/image-3.png',
      name: 'Glow Foundation',
      price: '44',
    },
    {
      img: '/assets/plugins-assets/products/image-4.png',
      name: 'Cream concealer',
      price: '67',
    },
    {
      img: '/assets/plugins-assets/products/image-5.png',
      name: 'Eyeshadow Pencil + Primer',
      price: '19',
    },
    {
      img: '/assets/plugins-assets/products/image-6.png',
      name: 'CC+ Cream',
      price: '45',
    },
    {
      img: '/assets/plugins-assets/products/image-7.png',
      name: 'Anti-aging cream',
      price: '55',
    },
    {
      img: '/assets/plugins-assets/products/image-8.png',
      name: 'Сleanser',
      price: '33',
    },
    {
      img: '/assets/plugins-assets/products/image-9.png',
      name: 'Brush Set, Including Cosmetic Bag',
      price: '33',
    },
    {
      img: '/assets/plugins-assets/products/image-10.png',
      name: 'Foundation',
      price: '45',
    },
    {
      img: '/assets/plugins-assets/products/image-11.png',
      name: 'MAKE-UP-SET',
      price: '43',
    },
  ];

  protected readonly showAllProducts = signal<boolean>(false);
}
