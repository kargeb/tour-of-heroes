import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Tour of Heroes';
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  constructor(private router: Router) {}

  showMessageBox(): void {
    const url = this.router.url;
    if (url.includes('popup')) {
      this.router.navigate([{ outlets: { popup: null } }]);
    } else {
      this.router.navigate([{ outlets: { popup: ['compose'] } }]);
    }
  }

  // showUrlParams(): boolean {
  //   console.log();
  //   console.log('TO SA PARAMETRY URL:', this.router.url);
  //   const url = this.router.url;

  //   return url.includes('popup')
  // }
}
