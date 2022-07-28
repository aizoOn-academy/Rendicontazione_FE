import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandoTableComponent } from './core/bando-table/bando-table.component';
import { DomandaTableComponent } from './core/domanda-table/domanda-table.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthService } from './authentication/auth.service';
import { UserGuardGuard } from './authentication/guards/user-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'bando', component: BandoTableComponent },
      { path: 'domanda', component: DomandaTableComponent },
      { path: 'domanda/:id', component: DomandaTableComponent },
      { path: '**', redirectTo: 'bando' },
    ],
    canActivate: [UserGuardGuard]
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
