import { getHtmlTagDefinition } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component ,AfterViewInit} from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Router} from '@angular/router'; 
import * as firebase from 'firebase/compat';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { analyticsInstanceFactory } from '@angular/fire/analytics/analytics.module';


declare const gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pharmify';
  constructor(analytics: AngularFireAnalytics) {
    analytics.logEvent('custom_event');
  };
}

