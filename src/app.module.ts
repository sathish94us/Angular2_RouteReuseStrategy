import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { CustomReuseStrategy } from './routeresusestrategy';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: "", redirectTo: "/one", pathMatch: "full",  },
        { path: "one", component: ComponentOneComponent },
        { path: "two", component: ComponentTwoComponent }
        // { path: "home", component: ImHomeComponent, data: { rememberScroll: { scrollTop: 0, fixedElementIds: [ 'im-id-main-header', 'im-id-sub-header-home' ] , fixedElementTops: [ '0px', '0px' ] } } },
        // { path: "people", component: ImPeopleComponent },
        // { path: "userprofile", component: ImUserProfileComponent },
        // { path: "comnavigator", component: ImComItemContentNavigatorComponent }
      ],
      { useHash: true }
    ),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy } // Enable RouteReuseStrategy.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
