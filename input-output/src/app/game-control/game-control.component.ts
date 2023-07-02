import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  gameStarted = false;
  incrementingNumber = 0;
  gameInterval: any;

  preserved = -1;

  @Output() incrementNumberEvent = new EventEmitter<number>();

  onStartGame() {
    this.gameStarted = true;
    this.incrementingNumber++;
    this.gameInterval = setInterval(() => {
      console.log("Game interval passed 1s");
      if (this.stateWasPreserved()) {
        this.restoreState();
      }
      else {
        this.incrementNumberEvent.emit(this.incrementingNumber++);
      }
    }, 1000);
  }

  onStopGame() {
    this.gameStarted = false;
    this.preserveState()
    clearInterval(this.gameInterval);
  }

  preserveState() {
    this.preserved = this.incrementingNumber;
  }

  stateWasPreserved() {
    return this.preserved !== -1;
  }

  restoreState() {
    this.incrementNumberEvent.emit(this.preserved);
    this.incrementingNumber = this.preserved + 1;
    this.preserved = -1;
  }

}

