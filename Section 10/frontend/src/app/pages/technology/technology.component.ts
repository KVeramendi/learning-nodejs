import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [UpperCasePipe, DatePipe, RouterModule, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
  public technology: Technology =
    {
      _id: '',
      name: '',
      description: '',
      logo: '',
      tags: [],
      createdAt: null,
      updatedAt: null
    };
  constructor(private _activatedRouter: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(params => {
      const id: string = params.get('id') ?? '';
      this._httpService.getTechnology(id).subscribe((technology: { data: Technology }) => {
        this.technology = technology.data;
      });
    });
  }
}
