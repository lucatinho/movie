import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../shared/services/movie.service";
import {Movie} from "../../model/movie.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  idMovie: number = this.route.snapshot.params['idMovie'];
  movie: Movie = new Movie();
  userImage: string = '';
  public baseUrlImage = environment.baseUrlImage;

  constructor(private route: ActivatedRoute, private _movieService: MovieService, private location: Location) {
    this.userImage = 'assets/images/user.svg';
  }

  ngOnInit() {
    this.movieById()
  }

  private movieById() {
    this._movieService.getMovieById(this.idMovie).subscribe((result) => {
      this.movie = result;
    })
  }

  goBack() {
    this.location.back();
  }

}
