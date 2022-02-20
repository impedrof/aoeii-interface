import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilizationComponent } from './interface/civilizations/civilization/civilization.component';
import { CivilizationsComponent } from './interface/civilizations/civilizations.component';

const routes: Routes = [
  { path: '', redirectTo: '/civilizations', pathMatch: 'full' },
  { path: 'civilizations', component: CivilizationsComponent },
  { path: 'civilizations/:id', component: CivilizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
