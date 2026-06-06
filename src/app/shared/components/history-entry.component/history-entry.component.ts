import { Component, input } from '@angular/core';
import { History } from '../../models/history.model';

@Component({
  selector: 'app-history-entry',
  imports: [],
  templateUrl: './history-entry.component.html',
  styleUrl: './history-entry.component.css',
})
export class HistoryEntryComponent {
  readonly history = input.required<History>();
}
