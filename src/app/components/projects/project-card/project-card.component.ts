import { Component, Input } from '@angular/core';
import { Project } from '../../../data/projects.data';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
