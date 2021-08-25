import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";
import { GoalService } from '../goal-service/goal.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
    goals:Goal[];
    quote!:Quote;


  constructor(goalService:GoalService, private http:HttpClient,private quoteService:QuoteRequestService) {
    this.goals = goalService.getGoals()
  }
  


  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }


//Adding new goal
addNewGoal(goal: Goal){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)
  this.goals.push(goal)
}
//Toggle goal details
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // Delete Goal Details
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  
  ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })

}
}
