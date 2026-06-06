import { Component, inject, OnInit, output } from '@angular/core';
import { HistoryService } from '../../../core/services/history.service';
import { HistoryEntryComponent } from '../history-entry.component/history-entry.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-history',
  imports: [HistoryEntryComponent],
  templateUrl: './recent-history.component.html',
  styleUrl: './recent-history.component.css',
})
export class RecentHistoryComponent implements OnInit {
  readonly recentHistoryEntryLimit = 5;

  private readonly historyService = inject(HistoryService);

  readonly historyList = this.historyService.qrHistory;
  private readonly router = inject(Router);
  readonly regenerateQR = output<string>();

  ngOnInit(): void {
    this.historyService.getHistory();
  }

  clearAllHistory() {
    this.historyService.clearAllHistoryEntries();
  }

  goToViewAllPage() {
    this.router.navigateByUrl('view-all-history');
  }

  sendUrlForRegeneration(url: string) {
    this.regenerateQR.emit(url);
  }
}
