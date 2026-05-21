import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-qr-input-type-card',
  imports: [MatIconModule],
  templateUrl: './qr-input-type-card.html',
  styleUrl: './qr-input-type-card.css',
})
export class QrInputTypeCard {
  @Input() icon: string = '';
  @Input() text: string = '';
}
