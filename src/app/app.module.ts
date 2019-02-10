import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedCustomModule } from './shared-custom.module';
import { CarModelsService } from './services/car-models.service';
import { HttpClientModule } from '@angular/common/http';
import { PricesChartService } from './services/prices-chart.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedCustomModule
  ],
  providers: [CarModelsService, PricesChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
