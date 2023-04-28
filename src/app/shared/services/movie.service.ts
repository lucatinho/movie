import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseApi} from "../../model/response-api.model";
import {Movie} from "../../model/movie.model";
import {catchError, map, Observable, retry} from "rxjs";
import {HandleObservableService} from "../utils/handle-observable-service.utils";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService extends HandleObservableService {

  private _baseUrlApi = environment.urlApi;
  private _apiKey = environment.apiKey;
  language: string = 'pt-BR';

  constructor(private http: HttpClient) {
    super();
  }

  getPopularMovies(page: number = 1): Observable<ResponseApi> {
    const endpointUrl = `${this._baseUrlApi}/movie/popular?api_key=${this._apiKey}&language=${this.language}&page=${page}`;
    return this.http.get<ResponseApi>(endpointUrl).pipe(
      retry(2),
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getImageById(movie_id: number): Observable<ResponseApi> {
    const endpointUrl = `${this._baseUrlApi}/movie/${movie_id}/images?api_key=${this._apiKey}`;
    return this.http.get<ResponseApi>(endpointUrl).pipe(
      retry(2),
      map((data) => data),
      catchError(this.handleError)
    );
  }

  getMovieById(id: number): Observable<Movie> {
    const endpointUrl = `${this._baseUrlApi}/movie/${id}?api_key=${this._apiKey}&language=${this.language}`;
    return this.http.get<Movie>(endpointUrl).pipe(
      retry(2),
      map((data) => data),
      catchError(this.handleError)
    );
  }

  searchMovie(search: string = 'marvel', page: number = 1): Observable<Movie[]> {
    const endpointUrl = `${this._baseUrlApi}/search/movie?api_key=${this._apiKey}&language=${this.language}&query=${search}&page=${page}`;
    return this.http.get<ResponseApi>(endpointUrl).pipe(
      retry(2),
      map((response: ResponseApi) => {
        return response.results.filter((item) => item.poster_path !== null);
      }),
      catchError(this.handleError)
    );
  }
}
