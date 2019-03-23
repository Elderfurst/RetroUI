import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit() { }

  generateNewBoard() {
    var guid = this.boardService.getNewBoardIdentifier();
    this.router.navigateByUrl(`/board/${guid}`);
  }
}
