import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CustomerResponseDTO } from '../../../../interfaces/customer/customer.response.interface';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  customers: CustomerResponseDTO[] = [];
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .getAllCustomers()
      .pipe(
        tap(
          (data) => {
            this.customers = data;
            this.message = 'Clientes cargados exitosamente';
            this.messageType = 'success';
          },
          (error) => {
            console.error('Error al cargar los clientes:', error);
            this.message = 'Error al cargar los clientes';
            this.messageType = 'error';
          }
        )
      )
      .subscribe();
  }
}
