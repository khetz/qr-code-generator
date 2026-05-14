import { Component } from '@angular/core';
import { Header } from '../header/header';
import { QrInputTypeSection } from "../../features/qr-generation/components/qr-input-type-section/qr-input-type-section";
import { QrInputSection } from "../../features/qr-generation/components/qr-input-section/qr-input-section";

@Component({
  selector: 'app-home',
  imports: [Header, QrInputTypeSection, QrInputSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
