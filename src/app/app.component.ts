import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "./service/data.service";
import {DocumentToDomainObject} from "./utils/document-to-domain-object";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  unsubscribeArray = [];

  imageTextsObservable: Observable<any[]>;

  constructor(private data: DataService,
              private db: AngularFirestore,
              private fireStorage: AngularFireStorage) {
    this.imageTextsObservable = db.collection('/imageTexts').snapshotChanges();
  }

  ngOnInit(): void {
    this.unsubscribeArray.push(this.imageTextsObservable.subscribe(async val => {
      const imageTexts = val.map(DocumentToDomainObject.map);

      this.populateImageUrls(imageTexts);

      this.data.setImageTexts(imageTexts);
    }));
  }

  populateImageUrls(imageTexts): void {
    imageTexts.forEach(async s => {
      s.imageUrl = await this.loadImageUrl(s.imageName);
    });
  }

  loadImageUrl(imageName): Promise<string> {
    const pathReference = this.fireStorage.storage.ref(imageName);
    return new Promise((resolve) => {
      pathReference.getDownloadURL().then((url) => {
        console.log('url', url);
        resolve(url);
      }).catch((error) => {
        console.log(error);
        resolve('');
      });
    });
  }

  ngOnDestroy(): void {
    for (const us of this.unsubscribeArray) {
      if (us) {
        us.unsubscribe();
      }
    }
  }
}
