import { Component } from '@angular/core';
import { Invoice, InvoiceService } from './invoice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Invoice;

  valid$: Observable<boolean> = this.invoiceService.valid$;

  constructor(private invoiceService: InvoiceService) { }

  clearCache() {
    localStorage.clear();
  }

  downloadPDF(element) {
  }
}