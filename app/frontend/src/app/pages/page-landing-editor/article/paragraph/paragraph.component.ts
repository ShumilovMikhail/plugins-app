import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface PluginParagraphData {
  text: string;
  color: string;
}

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent {
  @Input({ required: true }) data!: PluginParagraphData;
}
