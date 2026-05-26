import { Component, inject, Input, OnInit } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-qr-code-preview',
  imports: [QRCodeComponent],
  templateUrl: './qr-code-preview.html',
  styleUrl: './qr-code-preview.css',
})
export class QrCodePreview implements OnInit {
  @Input() qrData = '';
  qrCodeWidth = 150;

  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Handset]) {
        this.qrCodeWidth = 150;
      } else if (result.breakpoints[Breakpoints.Tablet]) {
        this.qrCodeWidth = 200;
      } else {
        this.qrCodeWidth = 300;
      }
      
    })
  }
}
