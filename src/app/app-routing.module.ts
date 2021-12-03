import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilizationsComponent } from './interface/civilizations/civilizations.component';

const routes: Routes = [
  { path: '', redirectTo: '/civilizations', pathMatch: 'full' },
  { path: 'civilizations', component: CivilizationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
