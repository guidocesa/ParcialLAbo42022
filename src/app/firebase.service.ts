import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  agregarElemento(coleccion:string,documento:string,data:any){
    let ref = this.db.collection(coleccion);
    ref.doc(documento).set(data);
  }

  traerColeccion(coleccion:string){
    return this.db.collection(coleccion, ref => ref.orderBy('nombre','asc')).valueChanges();
}
  
}
