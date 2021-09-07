import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { LoggerService } from '../logger.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  email!: string;
  password!: string;

  text!: string;
  listRef: AngularFireList<any>;
  list: Observable<any>;

  constructor(public authService: AuthService, private db: AngularFireDatabase, public logger: LoggerService) {
    this.listRef = db.list("list");
    this.list = this.listRef
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

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
    this.listRef.push({
      text: this.text
    });
    this.text = "";
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }

}
