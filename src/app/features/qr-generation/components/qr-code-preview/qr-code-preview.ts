import { Clipboard } from '@angular/cdk/clipboard';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-code-preview',
  imports: [QRCodeComponent],
  templateUrl: './qr-code-preview.html',
  styleUrl: './qr-code-preview.css',
})
export class QrCodePreview implements OnInit {
  readonly qrData = input<string>('');
  qrCodeWidth = 150;

  svgDownloadUrl: SafeUrl = '';
  pngDownloadUrl: SafeUrl = '';

  private breakpointObserver = inject(BreakpointObserver);
  private readonly clipboard = inject(Clipboard);

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

  onSvgUrlChange(url: SafeUrl) {
    this.svgDownloadUrl = url;
  }

  onPngUrlChange(url: SafeUrl) {
    this.pngDownloadUrl = url;
  }

  downloadImage(safeUrl: any, fileName: string) {
    // 1. Extract the raw string payload from Angular's SafeUrl wrapper
    let rawUrl = safeUrl?.changingThisBreaksApplicationSecurity || safeUrl;

    if (!rawUrl || typeof rawUrl !== 'string') {
      console.error('Invalid QR Code URL data');
      return;
    }

    let finalUrl = rawUrl;

    // 2. Fix the SVG structure if downloading an SVG file
    if (fileName.endsWith('.svg')) {
      try {
        // angularx-qrcode wraps SVG data in a base64 DataURI inside an img src.
        // We extract just the base64 portion.
        if (rawUrl.includes('base64,')) {
          const base64Data = rawUrl.split('base64,')[1];
          // Decode base64 back into raw <svg>...</svg> XML text
          const decodedSvgText = atob(base64Data);

          // Package the raw XML string inside a clean, browser-readable Blob
          const blob = new Blob([decodedSvgText], { type: 'image/svg+xml;charset=utf-8' });
          finalUrl = URL.createObjectURL(blob);
        }
      } catch (error) {
        console.error('Failed to parse and clean SVG string:', error);
      }
    }

    // 3. Execute the browser download
    const link = document.createElement('a');
    link.href = finalUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up memory if we generated an object URL for the SVG
    if (fileName.endsWith('.svg') && finalUrl.startsWith('blob:')) {
      URL.revokeObjectURL(finalUrl);
    }
  }

  copyLink() {
    let link = this.qrData();
    this.clipboard.copy(link);
  }

}
