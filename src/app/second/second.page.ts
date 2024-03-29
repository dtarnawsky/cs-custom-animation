import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { customAnimation } from '../custom-animation';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SecondPage implements OnInit {
  myAnimation: any;
  constructor() { }

  ngOnInit() {
    this.myAnimation = customAnimation;
  }

}
