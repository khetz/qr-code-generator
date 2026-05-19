import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-code-preview',
  imports: [QRCodeComponent],
  templateUrl: './qr-code-preview.html',
  styleUrl: './qr-code-preview.css',
})
export class QrCodePreview {
  @Input() qrData = '';
}
