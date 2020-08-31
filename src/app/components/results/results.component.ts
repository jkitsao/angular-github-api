import { Component, OnInit } from '@angular/core';
import {FetchuserService} from '../../services/fetchuser.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
user:any
repo:any
username='jkitsao'

  constructor(private getuser:FetchuserService) { }

  ngOnInit(): void {
    this.getuser.getUser(this.username).subscribe(data=>{
      this.user=data
      console.log(this.user)
    })
    this.getuser.getRepos(this.username).subscribe(data=>{
      this.repo=data
      console.log(this.repo)
    })
  }
  handlesearch(name:string){
    this.getuser.getUser(name).subscribe(data=>{
      this.user=data
      console.log(this.user)
  })
  this.getuser.getRepos(this.username).subscribe(data=>{
    this.repo=data
    console.log(this.repo)
  })
}

}
