import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { getDatabase, ref, onValue, DatabaseReference, push, set, remove, Database } from "firebase/database";
import { LoggerService } from '../logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  email!: string;
  password!: string;

  text!: string;
  database: Database;
  listRef: DatabaseReference;
  list: Observable<any>;

  constructor(public authService: AuthService, public logger: LoggerService) {
    this.database = getDatabase();
    this.listRef = ref(this.database, 'list');

    this.list = new Observable((observer) => {
      onValue(this.listRef, (snapshot) => {
        const data = snapshot.val();
        if(data){
          const changes = Object.keys(data).map(key => ({ key, ...data[key] }));
          observer.next(changes);
        } else {
          observer.next([])
        }
      }, (error) => {
        observer.error(error);
      });
    });
    
    this.logger.add('FirebaseComponent constructed');
  }

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.password);
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.logger.add('FirebaseComponent initialized');
  }

  addItem() {
    const newItemRef = push(this.listRef);
    set(newItemRef, {
      text: this.text
    });
    this.text = "";
  }

  deleteItem(key: string) {
    remove(ref(this.database, 'list/' + key));
  }

}
