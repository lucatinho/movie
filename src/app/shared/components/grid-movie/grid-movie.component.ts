import {Component, Input} from '@angular/core';
import {Movie} from "../../../model/movie.model";
import {Router} from "@angular/router";
import {RouteUtils} from "../../utils/route.utils";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-grid-movie',
  templateUrl: './grid-movie.component.html',
  styleUrls: ['./grid-movie.component.css']
})
export class GridMovieComponent {

  @Input() moviesList: Movie[];

  public baseUrlImage = environment.baseUrlImage;
  public indexHover: number = -1;

  constructor(private router: Router) {
  }

  datails(movie: Movie): void {
    this.router.navigate([(RouteUtils.MOVIE.MOVIE_DETAILS).replace(':idMovie', String(movie.id))]);
  }

}
