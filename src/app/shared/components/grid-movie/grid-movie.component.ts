import {Component, Input} from '@angular/core';
import {Movie} from "../../../model/movie.model";

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.css']
})
export class GridMovieComponent {

  @Input() moviesList: Movie[];

  public baseUrlImage = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  public indexHover: number = -1;

}
