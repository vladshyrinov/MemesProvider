import { Component, OnInit, Input } from '@angular/core';
import { Meme } from '../../../shared/Meme';


@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() meme: Meme;

  constructor() { }
  
  ngOnInit() {
  }

}
