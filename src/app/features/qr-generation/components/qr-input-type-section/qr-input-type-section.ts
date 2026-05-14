import { Component } from '@angular/core';
import { QrInputTypeCard } from "../qr-input-type-card/qr-input-type-card";

@Component({
  selector: 'app-qr-input-type-section',
  imports: [QrInputTypeCard],
  templateUrl: './qr-input-type-section.html',
  styleUrl: './qr-input-type-section.css',
})
export class QrInputTypeSection {

  items: number[] = [1,2,3,4,5]
}
