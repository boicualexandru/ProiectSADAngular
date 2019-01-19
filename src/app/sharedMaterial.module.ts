import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
})
export class SharedMaterialModule {}
