import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = SKILLS;
}
