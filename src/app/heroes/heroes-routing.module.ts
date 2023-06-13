import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { authenticationGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HeroesComponent, canActivate: [authenticationGuard()] },
  { path: ':id', component: HeroDetailComponent, canActivate: [authenticationGuard()] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
