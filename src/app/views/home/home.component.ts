import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];
  constructor(private configservice: ConfigService) { }
  ngOnInit(): void {
    this.configservice.listuser().subscribe((result: any) => {
      this.posts = result;
    })
  }
}
