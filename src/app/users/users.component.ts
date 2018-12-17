import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  posts: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getUsers(3).subscribe(
      data => this.posts = data 
    );
  }

}
