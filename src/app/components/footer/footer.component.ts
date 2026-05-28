import { Component } from '@angular/core';
import { PERSONAL } from '../../data/personal.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  personal = PERSONAL;
  year = new Date().getFullYear();
}
