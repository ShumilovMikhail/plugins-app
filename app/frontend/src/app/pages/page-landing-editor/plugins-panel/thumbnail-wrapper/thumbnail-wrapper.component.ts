import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-thumbnail-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-wrapper.component.html',
})
export class ThumbnailWrapperComponent implements AfterViewChecked {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);
  @ViewChild('thumbnail', { static: true })
  private readonly thumbnail!: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper', { static: true })
  private readonly wrapper!: ElementRef<HTMLDivElement>;
  protected readonly RENDER_WIDTH = 1280;
  protected readonly SCALE = 0.2;

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this.platformId)) {
      const wrapper = this.wrapper.nativeElement;
      const thumbnail = this.thumbnail.nativeElement;
      const rect = thumbnail.getBoundingClientRect();
      wrapper.style.width = rect.width + 'px';
      wrapper.style.height = rect.height + 'px';
      this.changeDetectorRef.detectChanges();
    }
  }
}
