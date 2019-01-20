import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficulPreturilorComponent } from './pages/graficul-preturilor/graficul-preturilor.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedCustomModule } from './shared-custom.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graficul-preturilor', component: GraficulPreturilorComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    GraficulPreturilorComponent
  ],
  imports: [RouterModule.forRoot(routes), SharedCustomModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
