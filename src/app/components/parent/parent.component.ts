import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childToParentVar : any = false;

  constructor() { }

  ngOnInit(): void {
  }

  parentMethod($val: any){
      this.childToParentVar = $val;
      
  }

}
