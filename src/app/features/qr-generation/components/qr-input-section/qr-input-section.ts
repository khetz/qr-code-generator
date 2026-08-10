import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AiQrInputComponent } from "../ai-qr-input/ai-qr-input.component";

@Component({
  selector: 'app-qr-input-section',
  imports: [MatIconModule, AiQrInputComponent],
  templateUrl: './qr-input-section.html',
  styleUrl: './qr-input-section.css',
})
export class QrInputSection {
  @Output() qrInputChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.qrInputChange.emit(value);
  }
}
