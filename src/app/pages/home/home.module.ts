import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {GridMovieModule} from "../../shared/components/grid-movie/grid-movie.module";
import {GridSkeletonModule} from "../../shared/components/grid-skeleton/grid-skeleton.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GridMovieModule,
    GridSkeletonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ]
})
export class HomeModule {
}
