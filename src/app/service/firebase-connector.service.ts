import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseConnectorService {

  constructor(private db: AngularFirestore) {}

}
