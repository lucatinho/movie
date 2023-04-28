import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class MovieDetailsModule { }
