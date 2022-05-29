import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { NgModule } from "@angular/core";
import {
  BrowserModule,
  BrowserTransferStateModule,
} from "@angular/platform-browser";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  bootstrap: [AppComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: "app-root" }),

    BrowserTransferStateModule,
    TranslateModule,
    AppModule,
  ],
})
export class AppBrowserModule {}
