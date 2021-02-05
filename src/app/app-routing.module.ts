import { MaterialUiComponent } from './material-ui/material-ui.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TDFormsComponent } from './tdforms/tdforms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch:'full'}, 
  {path:'',component:NavBarComponent}, 
  {path:'mat-ui',component:MaterialUiComponent}, 
  {path:'template-driven-form', component:TDFormsComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavBarComponent, MaterialUiComponent, TDFormsComponent, ReactiveFormComponent, PageNotFoundComponent]

