import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meme } from '../../../shared/Meme';
import { MemeService } from '../../../services/meme/meme.service';


@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() meme: Meme;
  @Output() chosenMeme: EventEmitter<Meme> = new EventEmitter<Meme>();

  constructor(private memeService: MemeService) { }

  ngOnInit() {
  }

  onChooseMeme(meme: Meme) {
    this.chosenMeme.emit(meme);
  }

}
