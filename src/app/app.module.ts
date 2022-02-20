import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CivilizationRepo } from './application/repo/civilization.repo';
import { CivilizationDataRepo } from './infrastructure/repo/civilization-data.repo';
import { AppComponent } from './interface/app.component';
import { CivilizationsComponent } from './interface/civilizations/civilizations.component';
import { StateModule } from './state.module';

@NgModule({
  declarations: [
    AppComponent,
    CivilizationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: CivilizationRepo, useClass: CivilizationDataRepo },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
