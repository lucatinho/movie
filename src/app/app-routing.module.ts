import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RouteUtils} from "./shared/utils/route.utils";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: RouteUtils.MOVIE.HOME,
    title: 'Home',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule),
    component: HomeComponent
  },
  {
    path: RouteUtils.MOVIE.MOVIE_DETAILS,
    title: 'Home',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then(module => module.MovieDetailsModule),
    component: MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
