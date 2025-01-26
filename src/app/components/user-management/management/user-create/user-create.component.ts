import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../services/customer/customer.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [CustomerService],
})
export class UserCreateComponent {
  customerName: string = '';

  constructor(private customerService: CustomerService) {}

  saveCustomer() {
    if (this.customerName.trim()) {
      this.customerService
        .saveCustomer(this.customerName)
        .subscribe((response) => {
          console.log('Cliente guardado:', response);
        });
    } else {
      console.error('El nombre del cliente no puede estar vacío');
    }
  }
}
