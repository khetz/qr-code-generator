import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { HistoryPageComponent } from './features/history/pages/history-page.component/history-page.component';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'view-all-history', component: HistoryPageComponent }
];
