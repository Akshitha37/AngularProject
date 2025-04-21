import { Component, computed, Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
 /* @Input({required:true}) id!: string;
 @Input({required:true}) avatar!: string;
 @Input({required:true}) name!: string; */
 @Input({required: true}) user!: User;
 @Input({required:true}) selected!: boolean;
 @Output() select = new EventEmitter();


 get imagePath(){
  return 'assets/users/' + this.user.avatar;
 }

 onSelectUser() {
    this.select.emit(this.user.id); 
 }
}
