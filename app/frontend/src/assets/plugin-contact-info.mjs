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
        class PluginContactInfoComponent {
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginContactInfoComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "14.0.0",
              version: "17.3.8",
              type: PluginContactInfoComponent,
              isStandalone: true,
              selector: "lib-plugin-contact-info",
              inputs: { data: "data" },
              ngImport: i0,
              template: `
    <div class="w-full px-11 py-16">
      <div class="bg-yellow-50 flex flex-col justify-between py-8 px-28">
        <span class="text-4xl font-semibold text-orange-950 self-center">Contact Us</span>
        <div class="text-cyan-950 text-xl flex flex-col mt-8 font-mono">
          <span>Phone: {{ data.phone }}</span>
          <span>Email: {{ data.email }}</span>
        </div>
      </div>
    </div>
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
          type: PluginContactInfoComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-contact-info",
                  standalone: true,
                  imports: [],
                  template: `
    <div class="w-full px-11 py-16">
      <div class="bg-yellow-50 flex flex-col justify-between py-8 px-28">
        <span class="text-4xl font-semibold text-orange-950 self-center">Contact Us</span>
        <div class="text-cyan-950 text-xl flex flex-col mt-8 font-mono">
          <span>Phone: {{ data.phone }}</span>
          <span>Email: {{ data.email }}</span>
        </div>
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
         * Public API Surface of plugin-contact-info
         */
        registerPlugin({
          slug: "plugin-contact-info",
          componentType: PluginContactInfoComponent,
          defaultData: {
            phone: "0825 456 858",
            email: "makeup-shop@makeup.com",
          },
        });
      },
    };
  },
);
