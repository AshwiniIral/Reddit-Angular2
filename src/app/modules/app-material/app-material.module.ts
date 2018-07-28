import {
  MatButtonModule,
  MatCardModule, MatGridListModule,
  MatIconModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule
  ],
})
export class AppMaterialModule {
}
