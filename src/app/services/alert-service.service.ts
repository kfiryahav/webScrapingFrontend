import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  showLoading(message: string) {
    Swal.fire({
      didOpen: () => {
        Swal.showLoading();
        Swal.update({
          titleText: message,
        });
      },
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: message,
    });
  }

  showSuccess(message: string) {
    Swal.fire({
      title: message,
    });
  }
}
