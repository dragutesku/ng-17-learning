import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MenuModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible: boolean = true
  items = [
    {
      label: 'Navigation',
      items: [
        {
          label: '<span class="text-xl font-bold">Home</span>',
          escape: false,
          icon: "pi pi-refresh",
          iconClass: 'text-xl',
          routerLink: "/"
        }
      ]
    }
  ]
  
}
