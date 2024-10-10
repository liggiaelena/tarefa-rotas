import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  username: string = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.router.snapshot.params['user'] || 0;
  }
}
