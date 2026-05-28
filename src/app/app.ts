import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
