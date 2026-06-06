import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../../../layout/header/header';
import { Router } from '@angular/router';
import { HistoryService } from '../../../../core/services/history.service';
import { HistoryEntryComponent } from '../../../../shared/components/history-entry.component/history-entry.component';
import { History } from '../../../../shared/models/history.model';

@Component({
  selector: 'app-history-page',
  imports: [Header, HistoryEntryComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly historyService = inject(HistoryService);
  readonly historyList = this.historyService.qrHistory;

  ngOnInit(): void {
    this.historyService.getHistory();
  }

  goBackToHome() {
    this.router.navigateByUrl('');
  }

  clearAllHistory() {
    this.historyService.clearAllHistoryEntries();
  }

  get reversedList(): History[] {
    return [...this.historyList()].reverse();
  }
}
