import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
interface IMovie {
  id: number;
  ratingNumber: number;
  movieName: string;
  genreName: string;
  year: string;
  description: string;
  editMode?: boolean;
  poster?: File;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieArray: Array<IMovie> = [];


  constructor() { }

  ngOnInit() {
    this.movieArray = [
      {
        id: 1,
        ratingNumber: 7.6,
        movieName: 'Shazam!',
        genreName: 'Action',
        year: '2019',
        description: '- SHAZAM. - this streetwise fourteen-year-old foster kid can turn into the grown-up superhero Shazam',
        editMode: false,
       // poster: 'shazam.jpg'
      }
    ];
  }

}
