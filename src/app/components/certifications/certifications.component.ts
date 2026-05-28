import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/certifications.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  certifications = CERTIFICATIONS;
}
