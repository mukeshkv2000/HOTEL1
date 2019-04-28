import { NgModule } from '@angular/core';
import {MatBadgeModule, MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatSelectModule} from '@angular/material/select';
@NgModule(
    {
        imports: [MatBadgeModule,
             MatCardModule,
              MatListModule,
              MatGridListModule,
              MatDatepickerModule,
              MatFormFieldModule,
              MatSelectModule,
               MatToolbarModule , MatTabsModule, MatIconModule, MatSidenavModule, MatButtonModule],
        exports: [MatBadgeModule,
            MatCardModule,
            MatListModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatGridListModule,
            MatSelectModule,
            MatSidenavModule , MatTabsModule, MatToolbarModule, MatButtonModule, MatIconModule, ]
    } )
    export class MaterialModule {

    }
