import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('newContent') newContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement){
    this.serverCreated.emit({name: serverName.value, content: this.newContent.nativeElement.value});
  }

  onAddBlueprint(blueprintName: HTMLInputElement){
    this.blueprintCreated.emit({name: blueprintName.value, content: this.newContent.nativeElement.value});
  }

}
