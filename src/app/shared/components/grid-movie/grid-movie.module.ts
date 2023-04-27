import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridMovieComponent} from './grid-movie.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    GridMovieComponent
  ],
  exports: [
    GridMovieComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule
  ]
})
export class GridMovieModule {
}
