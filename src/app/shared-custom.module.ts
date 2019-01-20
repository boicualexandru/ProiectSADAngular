import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        ChartsModule,
        WavesModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatRadioModule,
        MatSelectModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        ChartsModule,
        WavesModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
})
export class SharedCustomModule {}
