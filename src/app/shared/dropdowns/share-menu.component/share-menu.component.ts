import { Component, inject, input, output } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-share-menu',
  imports: [],
  templateUrl: './share-menu.component.html',
  styleUrl: './share-menu.component.css',
})
export class ShareMenuComponent {

  qrlinkToShare = input.required<string>();
  closeMenu = output<void>();

  toastService = inject(ToastService);

  encodeUrl() {
    return encodeURIComponent(this.qrlinkToShare());
  }

  whatsappShare() {
    if (this.qrlinkToShare() == '') {
      this.toastService.error('Cannot share empty qr url');
      return;
    }

    this.closeMenu.emit();
    const encodedUrl = this.encodeUrl();
    window.open(`https://wa.me/?text=${encodedUrl}`)
  }

  emailShare() {
    if (this.qrlinkToShare() == '') {
      this.toastService.error('Cannot share empty qr url');
      return;
    }

    this.closeMenu.emit();
    const encodedSubject = encodeURIComponent('Check this link out');
    let encodedBody = this.encodeUrl();

    const emailLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = emailLink;
  }
}
