import { Component, inject } from '@angular/core';
import { HistoryService } from '../../../core/services/history.service';
import { HistoryEntryComponent } from '../history-entry.component/history-entry.component';

@Component({
  selector: 'app-recent-history',
  imports: [HistoryEntryComponent],
  templateUrl: './recent-history.component.html',
  styleUrl: './recent-history.component.css',
})
export class RecentHistoryComponent {
  historyService = inject(HistoryService);
  readonly historyList = this.historyService.qrHistory;
}
