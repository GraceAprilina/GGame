import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  scores = [0 , 0]
  playerSelected = -1
  loading= false
  isResultShow = false

  theResult = 0 
  enemySelected  = -1

  finalResult = -1
  done = false

  ngOnInit(){
  // setTimeout(()=>{
  //   if(this.playerSelected == -1){
  //    const randomNum =  Math.floor(Math.random() * 3 )
  //       this.playerSelected = randomNum
  //     this.pick(this.playerSelected, 'p1')
  //   }
  //  else if(this.enemySelected == -1){
  //    const randomNum =  Math.floor(Math.random() * 4 )
  //       this.enemySelected = randomNum
  //     this.pick(this.enemySelected, 'p2')
  //   }
  // }, 1500)
  }

 pick( weapon: number, player): void {
   console.log(weapon)
  //  if(this.loading) return
   this.loading = true

   if(player == 'p1'){
    this.playerSelected = weapon
    
   }

   if(player == 'p2'){
    //  const randomNum =  Math.floor(Math.random() * 4 )
   this.enemySelected = weapon
     
   }
  
   this.checkResult()
   this.isResultShow = true 
   this.loading = false;
 }

 nextRound(){
  this.ngOnInit() 
  // this.playerSelected = -1
  // this.enemySelected = -1
 }

 reset(): void {
  this.scores = [0,0];
  this.finalResult = -1
  this.done = false
  this.isResultShow = false
  this.loading = false
  this.playerSelected = -1
  this.enemySelected = -1
 }
 checkResult(): void {
   const playerPick = this.playerSelected;
   const enemyPick = this.enemySelected;
   if( playerPick ==  enemyPick)
    {
    this.theResult = 2;
    // this.playerSelected = -1
    // this.enemySelected = -1
    }
    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
      // this.playerSelected = -1
      // this.enemySelected = -1
    }
    else{
      this.theResult = 1;
        this.scores[1] = this.scores[1]+1;
        // this.playerSelected = -1
        // this.enemySelected = -1
    }

    this.checkScores()
 }

 checkScores(){
   console.log(this.scores)
   if(this.scores[0] == 3){
     console.log("player 1 win")
      this.finalResult = 1
      this.done = true
   }
   else if(this.scores[1] == 3){
    console.log("player 2 win")
     this.finalResult = 2
     this.done = true
   }
 }
}
