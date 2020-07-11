import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {
  private imageTextsSource = new BehaviorSubject(null);

  imageTexts = this.imageTextsSource.asObservable();

  setImageTexts(imageTexts) {
    this.imageTextsSource.next(imageTexts);
  }
}
