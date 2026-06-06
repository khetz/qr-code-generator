import { Injectable, signal } from '@angular/core';
import { History } from '../../shared/models/history.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private qrGenerationHistory = signal<History[]>([]);
  readonly qrHistory = this.qrGenerationHistory.asReadonly();
  private readonly historyCountLimit = 20;

  private readonly localStorageHistoryName = "history";

  getHistory() {
    let history = localStorage.getItem(this.localStorageHistoryName);

    if (!history) return;

    this.qrGenerationHistory.set(JSON.parse(history) as History[]);
  }

  addHistoryEntry(historyEntry: History) {
    if (this.qrGenerationHistory().length == this.historyCountLimit) {
      this.qrGenerationHistory.update(entries => entries.slice(1));
    }

    let history = localStorage.getItem(this.localStorageHistoryName);
    let urlExistsInMemory = false;
    let currentHistoryEntries: History[] = [];

    if (history) {
      currentHistoryEntries = JSON.parse(history) as History[];
      urlExistsInMemory = currentHistoryEntries.some(entry => entry.url == historyEntry.url);
    }

    if (urlExistsInMemory) {
      currentHistoryEntries = currentHistoryEntries.map(entry => entry.url == historyEntry.url
        ? { ...entry, creationTime: "Updated time" } : entry);

      this.qrGenerationHistory.set(currentHistoryEntries);
      return;
    }

    this.qrGenerationHistory.set([...this.qrGenerationHistory(), historyEntry]);
    localStorage.setItem(this.localStorageHistoryName, JSON.stringify(this.qrGenerationHistory()));
  }

  clearAllHistoryEntries() {
    this.qrGenerationHistory.set([]);
    localStorage.setItem(this.localStorageHistoryName, JSON.stringify(this.qrGenerationHistory()));
  }
}
