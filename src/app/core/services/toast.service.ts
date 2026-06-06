import { Injectable, signal } from '@angular/core';
import { Toast, ToastType } from '../../shared/toast/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private activeToasts = signal<Toast[]>([]);
  readonly toasts = this.activeToasts.asReadonly();

  private nextToastId = 1;

  success(message: string) {
    this.addToast(message, 'success');
  }

  error(message: string) {
    this.addToast(message, 'error')
  }

  addToast(message: string, type: ToastType) {
    let newToast: Toast = {
      id: this.nextToastId++,
      message: message,
      type: type,
      duration: 3
    }

    this.activeToasts.set([...this.activeToasts(), newToast]);
    
    setTimeout(() => {
      this.removeToast(newToast.id);
    }, newToast.duration * 1000)
  }

  removeToast(id: number) {
    this.activeToasts.set(this.activeToasts().filter(x => x.id != id));
  }
}
