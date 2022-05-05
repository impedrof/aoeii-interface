import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { Civilizations } from './application/states/civilizations/civilizations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { CivilizationSelected } from './application/states/civilization_selected/civilization_selected';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([Civilizations, CivilizationSelected], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsSelectSnapshotModule.forRoot(),
  ],
  exports: [
    NgxsModule,
    NgxsReduxDevtoolsPluginModule,
    NgxsSelectSnapshotModule,
  ],
})
export class StateModule {}
