import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Information } from '../models/information.interface';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {
  private contactCollection: AngularFirestoreCollection<Information>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Information>('matricula');
  }

  // Con esta funcion conseguimos añadir un nuevo registro a la coleccion datosPersonales
  saveInformation(newContact: any): void {
    this.contactCollection.add(newContact);
  }
  // Con todas estas funciones lo que hacemos es conectarnos a las distintas colecciones para poder mostrar su contenido
  getInfo() {
    return this.afs.collection('datosPersonales').snapshotChanges();
  }
  getInfo1() {
    return this.afs.collection('modalidades').snapshotChanges();
  }
  getInfo2() {
    return this.afs.collection('ramas').snapshotChanges();
  }
  getInfo3() {
    return this.afs.collection('provincias').snapshotChanges();
  }
  getInfo4() {
    return this.afs.collection('horarios').snapshotChanges();
  }
  getInfo5() {
    return this.afs.collection('tarifas').snapshotChanges();
  }
}
