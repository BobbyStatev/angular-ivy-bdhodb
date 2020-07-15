import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActiveRouteService} from '../service/active-route.service';
import {Constants} from '../utils/constants';
import {DataService} from '../service/data.service';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit, OnDestroy {

  unsubscribeArray = [];

  imageTexts;

  description;

  constructor(private data: DataService,
              private activeRouteService: ActiveRouteService,
              private remoteConfig: AngularFireRemoteConfig) {
    this.activeRouteService.setActiveRoute(Constants.routes[0].id);
  }

  ngOnInit(): void {

    this.remoteConfig.fetchAndActivate().then(() => {
      this.remoteConfig.getValue('description').then(res => {
        console.log(res);
        console.log(res['_value']);
        this.description = res['_value'];
      }).catch(err => {
        console.log('Error retrieving the remote config description', err);
      });
    }).catch(err => {
      console.log('Error fetching the remote config description', err);
    });

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
