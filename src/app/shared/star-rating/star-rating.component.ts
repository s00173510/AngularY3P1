import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
@Input() rating: number;
starWidth: number;

@Output() notify: EventEmitter<string> = 
  new EventEmitter<string>();
  constructor() { }

  public ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
    console.log(this.starWidth);
  }
  onClick(): void{
    this.notify.emit('clicked!')
  }
}

