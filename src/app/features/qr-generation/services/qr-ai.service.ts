import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QrGenerationResult } from '../models/qr-generation-result';

@Injectable({ providedIn: 'root' })
export class QrAiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7260/api/qr/generate';

  generateFromPrompt(prompt: string): Observable<QrGenerationResult> {
    return this.http.post<QrGenerationResult>(this.apiUrl, { prompt });
  }
}
