import { Component } from '@angular/core';
import { QrCodePreview } from "../../features/qr-generation/components/qr-code-preview/qr-code-preview";
import { QrInputSection } from "../../features/qr-generation/components/qr-input-section/qr-input-section";
import { Header } from '../header/header';
import { RecentHistoryComponent } from "../../shared/components/recent-history.component/recent-history.component";

@Component({
  selector: 'app-home',
  imports: [Header, QrInputSection, QrCodePreview, RecentHistoryComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  qrData: string = '';
  currentInput: string = '';

  onQRInputChange(value: string) {
    this.currentInput = value.trim();

   if (this.currentInput) {
    this.qrData = this.currentInput;
   }
  }
}
