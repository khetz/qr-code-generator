import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';
import { ToastComponent } from '../toast.component/toast.component';

@Component({
  selector: 'app-toast-container',
  imports: [ToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.css',
})
export class ToastContainerComponent {
  private readonly toastService = inject(ToastService);
  readonly toasts = this.toastService.toasts;
}
