System.register(
  ["@plugins-common-libraries", "@angular/core", "angular-banner-slider"],
  function (_export, _context) {
    var registerPlugin;
    var i0, Component, Input;
    var AngularBannerSlider;
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
        (lib) => {
          AngularBannerSlider = lib.AngularBannerSlider;
        },
      ],
      execute: function () {
        class PluginBannerSliderComponent {
          onPressedButton(index) {
            alert(index);
          }
          static {
            this.ɵfac = i0.ɵɵngDeclareFactory({
              minVersion: "12.0.0",
              version: "17.3.8",
              ngImport: i0,
              type: PluginBannerSliderComponent,
              deps: [],
              target: i0.ɵɵFactoryTarget.Component,
            });
          }
          static {
            this.ɵcmp = i0.ɵɵngDeclareComponent({
              minVersion: "14.0.0",
              version: "17.3.8",
              type: PluginBannerSliderComponent,
              isStandalone: true,
              selector: "lib-plugin-banner-slider",
              inputs: { data: "data" },
              ngImport: i0,
              template: `
    <angular-banner-slider
      (pressedButton)="onPressedButton($event)"
      [banners]="data.banners"
    ></angular-banner-slider>
  `,
              isInline: true,
              styles: [""],
              dependencies: [
                {
                  kind: "component",
                  type: AngularBannerSlider,
                  selector: "angular-banner-slider",
                  inputs: ["banners"],
                  outputs: ["pressedButton"],
                },
              ],
            });
          }
        }
        i0.ɵɵngDeclareClassMetadata({
          minVersion: "12.0.0",
          version: "17.3.8",
          ngImport: i0,
          type: PluginBannerSliderComponent,
          decorators: [
            {
              type: Component,
              args: [
                {
                  selector: "lib-plugin-banner-slider",
                  standalone: true,
                  imports: [AngularBannerSlider],
                  template: `
    <angular-banner-slider
      (pressedButton)="onPressedButton($event)"
      [banners]="data.banners"
    ></angular-banner-slider>
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
         * Public API Surface of plugin-banner-slider
         */
        registerPlugin({
          slug: "plugin-banner-slider",
          componentType: PluginBannerSliderComponent,
          defaultData: {
            banners: [
              {
                img: "/assets/plugins-assets/banners/2.webp",
                seoText: "3 Step Beauty Ritual",
                button: {
                  color: "#FFF",
                  bgColor: "#000",
                  text: "SHOP NOW",
                },
              },
              {
                img: "/assets/plugins-assets/banners/3.webp",
                seoText: "Best offers this month’s",
                button: {
                  color: "#FFF",
                  bgColor: "#000",
                  text: "ORDER NOW",
                },
              },
            ],
          },
        });
      },
    };
  },
);
