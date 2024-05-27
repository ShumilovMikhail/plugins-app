System.register(
  ["@plugins-common-libraries", "@angular/core", "@angular/common"],
  function (_export, _context) {
    var SafeHtmlPipe, registerPlugin;
    var i1;
    var CommonModule;
    var i0;
    var Component, Input;
    return {
      setters: [
        (lib) => {
          registerPlugin = lib.registerPlugin;
          SafeHtmlPipe = lib.SafeHtmlPipe;
        },
        (lib) => {
          i0 = lib;
          Component = lib.Component;
          Input = lib.Input;
        },
        (lib) => {
          i1 = lib;
          CommonModule = lib.CommonModule;
        },
      ],
      execute: function () {
        class PluginBannerComponent {
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginBannerComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "14.0.0",
              version: "17.3.8",
              type: PluginBannerComponent,
              isStandalone: true,
              selector: "lib-plugin-banner",
              inputs: { data: "data" },
              ngImport: i0,
              template: `
    <div class="relative">
      <img [src]="data.img" alt="main-banner" class="w-full" />
      <div
        class="absolute h-full w-full top-0 left-0 flex items-center justify-center text-center"
      >
        <div
          class="text-6xl text-white font-semibold"
          [ngStyle]="{ fontFamily: 'Montserrat', color: data.color }"
          [innerHTML]="data.text | safeHtml"
        ></div>
      </div>
    </div>
  `,
              isInline: true,
              styles: [""],
              dependencies: [
                { kind: "ngmodule", type: CommonModule },
                {
                  kind: "directive",
                  type: i1.NgStyle,
                  selector: "[ngStyle]",
                  inputs: ["ngStyle"],
                },
                { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" },
              ],
            });
          }
        }
        i0.ɵɵngDeclareClassMetadata({
          minVersion: "12.0.0",
          version: "17.3.8",
          ngImport: i0,
          type: PluginBannerComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-banner",
                  standalone: true,
                  imports: [CommonModule, SafeHtmlPipe],
                  template: `
    <div class="relative">
      <img [src]="data.img" alt="main-banner" class="w-full" />
      <div
        class="absolute h-full w-full top-0 left-0 flex items-center justify-center text-center"
      >
        <div
          class="text-6xl text-white font-semibold"
          [ngStyle]="{ fontFamily: 'Montserrat', color: data.color }"
          [innerHTML]="data.text | safeHtml"
        ></div>
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
         * Public API Surface of plugin-banner
         */
        registerPlugin({
          slug: "plugin-banner",
          componentType: PluginBannerComponent,
          defaultData: {
            img: "/assets/plugins-assets/banner.png",
            text: "Discover the World of <br> Beauty with GlitterGlow",
            color: "#FEF9C3",
          },
        });
      },
    };
  },
);
