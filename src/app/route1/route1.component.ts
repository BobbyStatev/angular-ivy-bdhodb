import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActiveRouteService} from '../service/active-route.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from '../utils/constants';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit, OnDestroy {

  unsubscribeArray = [];

  imageTexts;

  constructor(private data: DataService,
              private activeRouteService: ActiveRouteService) {
    this.activeRouteService.setActiveRoute(Constants.routes[0].id);
  }

  ngOnInit(): void {
    this.unsubscribeArray.push(this.data.imageTexts.subscribe(val => {
      if (!val) {
        return;
      }
      this.imageTexts = val;
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
