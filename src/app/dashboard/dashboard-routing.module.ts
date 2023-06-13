import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authenticationGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [authenticationGuard()] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
