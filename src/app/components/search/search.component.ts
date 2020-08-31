import { Component, OnInit,EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() handlesearch:EventEmitter<any>=new EventEmitter()
  username:string
  constructor() { }
handlesubmit(){
  const name=this.username
  this.handlesearch.emit(name)
}

  ngOnInit(): void {
    
  
  }


}
