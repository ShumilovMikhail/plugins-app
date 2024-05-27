System.register(
  ["@plugins-common-libraries", "@angular/core", "@angular/common"],
  function (_export, _context) {
    var registerPlugin;
    var i0, Component, Input, signal;
    var i1, CommonModule;
    return {
      setters: [
        (lib) => {
          registerPlugin = lib.registerPlugin;
        },
        (lib) => {
          i0 = lib;
          Component = lib.Component;
          Input = lib.Input;
          signal = lib.signal;
        },
        (lib) => {
          i1 = lib;
          CommonModule = lib.CommonModule;
        },
      ],
      execute: function () {
        class PluginListOfProductsComponent {
          constructor() {
            this.showAllProducts = signal(false);
          }
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginListOfProductsComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "17.0.0",
              version: "17.3.8",
              type: PluginListOfProductsComponent,
              isStandalone: true,
              selector: "lib-plugin-list-of-products",
              inputs: { data: "data" },
              ngImport: i0,
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
              isInline: true,
              styles: [""],
              dependencies: [
                { kind: "ngmodule", type: CommonModule },
                {
                  kind: "directive",
                  type: i1.NgClass,
                  selector: "[ngClass]",
                  inputs: ["class", "ngClass"],
                },
                { kind: "pipe", type: i1.CurrencyPipe, name: "currency" },
              ],
            });
          }
        }
        i0.ɵɵngDeclareClassMetadata({
          minVersion: "12.0.0",
          version: "17.3.8",
          ngImport: i0,
          type: PluginListOfProductsComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-list-of-products",
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
                },
              ],
            },
          ],
          propDecorators: {
            data: [
              {
                type: Input,
                args: [{ required: true }],
              },
            ],
          },
        });

        /*
         * Public API Surface of plugin-list-of-products
         */
        registerPlugin({
          slug: "plugin-list-of-products",
          componentType: PluginListOfProductsComponent,
          defaultData: {
            products: [
              {
                img: "/assets/plugins-assets/products/image-2.png",
                name: "Lipstick",
                price: "19",
              },
              {
                img: "/assets/plugins-assets/products/image-3.png",
                name: "Glow Foundation",
                price: "44",
              },
              {
                img: "/assets/plugins-assets/products/image-4.png",
                name: "Cream concealer",
                price: "67",
              },
              {
                img: "/assets/plugins-assets/products/image-5.png",
                name: "Eyeshadow Pencil + Primer",
                price: "19",
              },
              {
                img: "/assets/plugins-assets/products/image-6.png",
                name: "CC+ Cream",
                price: "45",
              },
              {
                img: "/assets/plugins-assets/products/image-7.png",
                name: "Anti-aging cream",
                price: "55",
              },
              {
                img: "/assets/plugins-assets/products/image-8.png",
                name: "Сleanser",
                price: "33",
              },
              {
                img: "/assets/plugins-assets/products/image-9.png",
                name: "Brush Set, Including Cosmetic Bag",
                price: "33",
              },
              {
                img: "/assets/plugins-assets/products/image-10.png",
                name: "Foundation",
                price: "45",
              },
              {
                img: "/assets/plugins-assets/products/image-11.png",
                name: "MAKE-UP-SET",
                price: "43",
              },
            ],
          },
        });
      },
    };
  },
);
