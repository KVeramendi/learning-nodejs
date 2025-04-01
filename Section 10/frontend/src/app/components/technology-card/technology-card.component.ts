import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-technology-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.css'
})
export class TechnologyCardComponent {
  @Input() technology: any = {};
}
