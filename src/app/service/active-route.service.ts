import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ActiveRouteService {

  private activeRouteSource = new BehaviorSubject(0);

  activeRoute = this.activeRouteSource.asObservable();

  setActiveRoute(route: number) {
    this.activeRouteSource.next(route);
  }
}
