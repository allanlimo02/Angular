import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-description',
  templateUrl: './goal-description.component.html',
  styleUrls: ['./goal-description.component.css']
})
export class GoalDescriptionComponent implements OnInit {


  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  

  
  constructor() { }

  ngOnInit(): void {
  }
  // goals:Goal[] = [
  //   {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  //   {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
  //   {id:3,name:'Get new Phone Case', description:'Diana has her birthday coming up soon'},
  //   {id:4,name:'Get Dog Food', description:'Pupper likes expensive sancks'},
  //   {id:5,name:'Solve math homework', description:'Damn Math'},
  //   {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  // ];
  

}
