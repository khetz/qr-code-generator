import { Component, input } from '@angular/core';
import { History } from '../../models/history.model';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-history-entry',
  imports: [],
  templateUrl: './history-entry.component.html',
  styleUrl: './history-entry.component.css',
})
export class HistoryEntryComponent {
  readonly history = input.required<History>();

  private readonly urlLengthLimit = 10;

  formatUrl(url: SafeUrl): string {
    const stringUrl = url.toString();

    return stringUrl.length > this.urlLengthLimit 
    ? url.toString().substring(0, this.urlLengthLimit) + "..."
    : stringUrl;
  }
}
