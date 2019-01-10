import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  OnDestroy,
  AfterViewInit {

  @Input() element : { type: string, name: string, content: string};
  @Input() name : string;
  @ViewChild('heading') heading: ElementRef;

  constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.heading.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!!');
  }

  ngAfterViewInit(){

  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!!');
  }

}
