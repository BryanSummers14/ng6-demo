import { NgModule } from '@angular/core';
import { MatInputModule,
         MatFormFieldModule,
         MatCardModule,
         MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
