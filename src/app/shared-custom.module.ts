import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule
    ],
})
export class SharedCustomModule {}
