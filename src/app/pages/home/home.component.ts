import { Component } from '@angular/core';
import { PageComponent } from 'src/app/components/layout/page/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
