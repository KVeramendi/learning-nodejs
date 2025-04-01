import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';
import { TechnologyCardComponent } from '../../components/technology-card/technology-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [TechnologyCardComponent, CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[] = [];
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.getTechnologies().subscribe((response: { data: Technology[] }) => {
      this.technologies = response.data;
    });
  }
}
