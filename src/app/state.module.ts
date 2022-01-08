import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { Civilizations } from './application/states/civilizations/civilizations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([Civilizations], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  exports: [
    NgxsModule,
    NgxsReduxDevtoolsPluginModule, 
  ],
})
export class StateModule { }
