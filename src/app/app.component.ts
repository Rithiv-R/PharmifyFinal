import { getHtmlTagDefinition } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component ,AfterViewInit} from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Router} from '@angular/router'; 

declare const gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pharmify';
  constructor(private router:Router){
  }

}

