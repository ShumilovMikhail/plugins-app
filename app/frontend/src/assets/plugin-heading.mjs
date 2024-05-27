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
        class PluginHeadingComponent {
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginHeadingComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "14.0.0",
              version: "17.3.8",
              type: PluginHeadingComponent,
              isStandalone: true,
              selector: "lib-plugin-heading",
              inputs: { data: "data" },
              ngImport: i0,
              template: `
    <p class="text-4xl text-center pt-4 pb-14">
      {{ data.text }}
    </p>
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
          type: PluginHeadingComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-heading",
                  standalone: true,
                  imports: [],
                  template: `
    <p class="text-4xl text-center pt-4 pb-14">
      {{ data.text }}
    </p>
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
         * Public API Surface of plugin-heading
         */
        registerPlugin({
          slug: "plugin-heading",
          componentType: PluginHeadingComponent,
          defaultData: {
            text: "Products",
          },
        });
      },
    };
  },
);
