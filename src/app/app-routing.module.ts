import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RouteUtils} from "./shared/utils/route.utils";

const routes: Routes = [
  {
    path: RouteUtils.MOVIE.HOME,
    title: 'Home',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule),
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
