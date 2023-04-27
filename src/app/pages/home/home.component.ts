import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap
} from "rxjs";
import {Movie} from "../../model/movie.model";
import {AutoUnsubscribe} from "../../shared/utils/auto-unsubscribe.utils";
import {ResponseApi} from "../../model/response-api.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AutoUnsubscribe implements OnInit {
  searchForm: FormGroup;
  filteredOptions$: Observable<any>;
  movies: Movie[] = [];
  isLoading: boolean = false;
  isSeeking: boolean = false;
  userImage: string = '';

  constructor(private _formBuilder: FormBuilder, private _movieService: MovieService) {
    super();
    this.userImage = 'assets/images/user.svg';
  }

  ngOnInit(): void {
    this.initForm();
    this.movieSearch();
    this.comicList();
  }

  initForm() {
    this.searchForm = this._formBuilder.group({
      search: [''],
    });
  }

  private movieSearch() {
    // this.searchForm.controls['search'].patchValue('marvel');
    this.filteredOptions$ = this.searchForm.get('search')!.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1500),
      filter((result) => {
        if (result.length === 0) {
          this.onReset();
          return false;
        }
        return result.length > 2;
      }),
      tap(() => (this.isLoading = true)),
      switchMap((value) =>
        this._movieService.searchMovie(value.toLowerCase()).pipe(
          finalize(() => {
            this.isLoading = false;
            this.isSeeking = true;
          }),
          this.unsubsribeOnDestroy
        )
      )
    );
  }

  private comicList() {
    this.isLoading = true;

    this._movieService
      .getPopularMovies()
      .pipe(
        switchMap((movies: ResponseApi) => {
          if (movies.results.length > 0) {
            return this.joinImages(movies);
          }
          return of([]);
        }),
        this.unsubsribeOnDestroy
      )
      .subscribe(
        (response: Movie[]) => {
          this.movies = response;
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }

  private joinImages(movies: ResponseApi) {
    return forkJoin(
      movies.results.map((movie: Movie) => {
        return this._movieService.getImageById(movie.id).pipe(
          map((image: any) => {
            movie.image = image;
            return movie;
          })
        );
      })
    );
  }

  private onReset() {
    this.isLoading = false;
    this.isSeeking = false;
  }

}
