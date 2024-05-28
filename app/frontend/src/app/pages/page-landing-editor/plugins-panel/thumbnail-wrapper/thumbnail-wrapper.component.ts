import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { delay, of, take } from 'rxjs';

@Component({
  selector: 'app-thumbnail-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailWrapperComponent implements AfterContentInit {
  @ViewChild('thumbnail', { static: true })
  private readonly thumbnail!: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper', { static: true })
  private readonly wrapper!: ElementRef<HTMLDivElement>;
  protected readonly RENDER_WIDTH = 1280;
  protected readonly SCALE = 0.2;

  setHeight() {
    const wrapper = this.wrapper.nativeElement;
    const thumbnail = this.thumbnail.nativeElement;
    const rect = thumbnail.getBoundingClientRect();
    wrapper.style.width = rect.width + 'px';
    wrapper.style.height = rect.height + 'px';
  }

  ngAfterContentInit(): void {
    const wrapper = this.wrapper.nativeElement;
    const thumbnail = this.thumbnail.nativeElement;
    thumbnail.style.transform = `scale(${this.SCALE})`;
    thumbnail.style.width = `${this.RENDER_WIDTH}px`;
    wrapper.style.width = `${this.RENDER_WIDTH * this.SCALE}px`;
    wrapper.style.height = '0';
    wrapper.style.transition = 'height .2s';
    of(1)
      .pipe(delay(350), take(1))
      .subscribe(() => {
        const wrapper = this.wrapper.nativeElement;
        const thumbnail = this.thumbnail.nativeElement;
        const rect = thumbnail.getBoundingClientRect();
        wrapper.style.width = rect.width + 'px';
        wrapper.style.height = rect.height + 'px';
      });
  }
}
