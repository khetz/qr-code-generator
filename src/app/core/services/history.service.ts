import { Injectable, signal } from '@angular/core';
import { History } from '../../shared/models/history.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private qrGenerationHistory = signal<History[]>([]);
  readonly qrHistory = this.qrGenerationHistory.asReadonly();

  private readonly localStorageHistoryName = "history";

  getHistory() {
    let history = localStorage.getItem(this.localStorageHistoryName);

    if (!history) return;

    this.qrGenerationHistory.set(JSON.parse(history) as History[]);
  }

  addHistoryEntry(historyEntry: History) {
    this.qrGenerationHistory.set([...this.qrGenerationHistory(), historyEntry]);
    localStorage.setItem(this.localStorageHistoryName, JSON.stringify(this.qrGenerationHistory()));
  }

  clearHistoryEntry() {
    this.qrGenerationHistory.set([]);
    localStorage.setItem(this.localStorageHistoryName, JSON.stringify(this.qrGenerationHistory()));
  }
}
