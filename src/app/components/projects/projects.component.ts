import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCardComponent } from './project-card/project-card.component';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS;
}
