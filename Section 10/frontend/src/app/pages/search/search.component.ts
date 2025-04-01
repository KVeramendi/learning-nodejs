import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';
import { CommonModule } from '@angular/common';
import { TechnologyCardComponent } from "../../components/technology-card/technology-card.component";

@Component({
  selector: 'app-search',
  imports: [CommonModule, TechnologyCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService.getSearchTechnology(this.query).subscribe((technologies: { data: Technology[] }) => {
        this.technologies = technologies.data;
      });
    });
  }
}
