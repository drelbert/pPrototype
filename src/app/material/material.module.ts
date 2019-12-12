import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule,
         MatToolbarModule,
         MatCardModule,
         MatListModule,
         MatExpansionModule,
         MatTableModule,
         MatInputModule,
         MatSelectModule,
          } from '@angular/material';


const MaterialComponents = [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTabsModule
  ];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]

})
export class MaterialModule { }
