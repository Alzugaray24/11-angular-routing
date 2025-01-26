import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../../services/menu/menu.service';
import { MenuResponseDTO } from '../../../../interfaces/menu/menu.response.interface';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menus: MenuResponseDTO[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getAllMenus().subscribe((data) => {
      this.menus = data;
    });
  }
}
