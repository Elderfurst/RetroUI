import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { BoardService } from '../board.service';
import { Board } from '../models/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.css']
})
export class NewBoardDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
    private dialogRef: MatDialogRef<NewBoardDialogComponent>,
    private boardService: BoardService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      boardName: new FormControl()
    });
  }

  create() {
    let board: Board = {
      name: this.form.get('boardName').value
    };

    this.boardService.createNewBoard(board).subscribe(newBoard => {
      board = newBoard;      
      this.dialogRef.close(this.form.value);
      this.router.navigateByUrl(`/board/${board.id}`);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
