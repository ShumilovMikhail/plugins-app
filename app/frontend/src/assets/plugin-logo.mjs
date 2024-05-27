System.register(
  ["@plugins-common-libraries", "@angular/core"],
  function (_export, _context) {
    var registerPlugin;
    var i0, Component, Input;
    return {
      setters: [
        (lib) => {
          registerPlugin = lib.registerPlugin;
        },
        (lib) => {
          i0 = lib;
          Component = lib.Component;
          Input = lib.Input;
        },
      ],
      execute: function () {
        class PluginLogoComponent {
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginLogoComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "14.0.0",
              version: "17.3.8",
              type: PluginLogoComponent,
              isStandalone: true,
              selector: "lib-plugin-logo",
              inputs: { data: "data" },
              ngImport: i0,
              template: `
    <header class="px-16 py-16">
      <img [src]="data.img" alt="logo" />
    </header>
  `,
              isInline: true,
              styles: [""],
            });
          }
        }
        i0.ɵɵngDeclareClassMetadata({
          minVersion: "12.0.0",
          version: "17.3.8",
          ngImport: i0,
          type: PluginLogoComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-logo",
                  standalone: true,
                  imports: [],
                  template: `
    <header class="px-16 py-16">
      <img [src]="data.img" alt="logo" />
    </header>
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
         * Public API Surface of plugin-logo
         */
        registerPlugin({
          slug: "plugin-logo",
          componentType: PluginLogoComponent,
          defaultData: {
            img: "/assets/plugins-assets/logo.svg",
          },
        });
      },
    };
  },
);
