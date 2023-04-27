import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridSkeletonComponent} from './grid-skeleton.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";


@NgModule({
  declarations: [
    GridSkeletonComponent
  ],
  exports: [
    GridSkeletonComponent
  ],
    imports: [
        CommonModule, FlexLayoutModule, NgxSkeletonLoaderModule
    ]
})
export class GridSkeletonModule {
}
