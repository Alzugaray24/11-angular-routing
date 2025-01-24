import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { CustomerResponseDTO } from '../../../../interfaces/customer/customer.response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  customers: CustomerResponseDTO[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
