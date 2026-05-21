import { Component } from '@angular/core';
import { QrInputTypeCard } from "../qr-input-type-card/qr-input-type-card";

@Component({
  selector: 'app-qr-input-type-section',
  imports: [QrInputTypeCard],
  templateUrl: './qr-input-type-section.html',
  styleUrl: './qr-input-type-section.css',
})
export class QrInputTypeSection {
  qrTypes = [
    { icon: "link", text: "URL"},
    { icon: "title", text: "Text"},
    { icon: "email", text: "Email"},
    { icon: "phone", text: "Phone"},
    { icon: "wifi", text: "WiFi"}
  ]
}
