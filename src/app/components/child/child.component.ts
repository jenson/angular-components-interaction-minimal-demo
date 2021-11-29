import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})


export class ChildComponent implements OnInit{
  visible = true;
  @Output() interact = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  ngOnInit(){

  }

  updateParent() {
        this.interact.emit("Event Triggered From Child Component.")
  }
}
