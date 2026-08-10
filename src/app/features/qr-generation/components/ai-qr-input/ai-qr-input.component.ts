import { Component, inject, output, signal } from '@angular/core';
import { QrGenerationResult } from '../../models/qr-generation-result';
import { QrAiService } from '../../services/qr-ai.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-qr-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-qr-input.component.html',
  styleUrl: './ai-qr-input.component.css',
})
export class AiQrInputComponent {
  private readonly qrAiService = inject(QrAiService);

  prompt = '';
  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<QrGenerationResult | null>(null);

  /** Emits the generated content string so the parent can render the QR */
  qrGenerated = output<string>();

  examples = [
    'WiFi QR for MyNetwork, pass: hello123',
    'vCard for John Doe, 082 123 4567',
    'Email to info@company.co.za, subject: Enquiry',
    'Link to my GitHub github.com/vukheta',
  ];

  resultEntries() {
    const r = this.result();
    return r ? Object.entries(r.fields) : [];
  }

  useExample(example: string) {
    this.prompt = example;
    this.generate();
  }

  generate() {
    if (!this.prompt.trim() || this.loading()) return;

    this.loading.set(true);
    this.error.set(null);
    this.result.set(null);

    this.qrAiService.generateFromPrompt(this.prompt.trim()).subscribe({
      next: (res: QrGenerationResult) => {
        this.result.set(res);
        this.qrGenerated.emit(res.content);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to generate QR content. Please try again.');
        this.loading.set(false);
        console.error('QR AI error:', err);
      },
    });
  }
}
