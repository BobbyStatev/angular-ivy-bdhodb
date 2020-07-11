import {Component, OnDestroy} from '@angular/core';
import {Constants} from '../utils/constants';
import {ActiveRouteService} from '../service/active-route.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnDestroy {

  unsubscribeArray = [];

  activeRoute;

  navBarArr = Constants.routes;

  constructor(private activeRouteService: ActiveRouteService) {
    this.unsubscribeArray.push(this.activeRouteService.activeRoute.subscribe(activeRoute => {
      this.activeRoute = activeRoute;
    }));
  }

  ngOnDestroy(): void {
    for (const us of this.unsubscribeArray) {
      if (us) {
        us.unsubscribe();
      }
    }
  }

}
