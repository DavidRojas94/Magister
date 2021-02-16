import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Information } from '../models/information.interface';
import { map } from 'rxjs/operators';
type CollectionPredicate<T> = string | AngularFirestoreCollection;

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<Information>;
  //private todoCollectionName = 'todos';

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Information>('datosPersonales');

  }
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection {
    return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
  }
  /*getTodos(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.afs.collection<Information>(this.todoCollectionName).get();
   }*/

  saveInformation(newContact: any): void {
    this.contactCollection.add(newContact);
  }
  getInfo(){
    return this.afs.collection("datosPersonales").snapshotChanges();
  }
  getInfo1(){
    return this.afs.collection("modalidades").snapshotChanges();
  }

  mostrarInfo<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs) => {
          return docs.map((d) => {
            const data = d.payload.doc.data();
            const id = d.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

}
