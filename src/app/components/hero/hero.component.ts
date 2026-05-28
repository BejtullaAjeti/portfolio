import { Component } from '@angular/core';
import { PERSONAL } from '../../data/personal.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  personal = PERSONAL;
}
