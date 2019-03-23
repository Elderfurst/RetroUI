import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-new-board-dialog',
  templateUrl: './new-board-dialog.component.html',
  styleUrls: ['./new-board-dialog.component.css']
})
export class NewBoardDialogComponent implements OnInit {

  form: FormGroup;
  boardName: string;

  constructor(private fb: FormBuilder, 
    private dialogRef: MatDialogRef<NewBoardDialogComponent>,
    private boardService: BoardService) { }

  ngOnInit() {
    this.form = this.fb.group({
      boardName: [this.boardName, []]
    });
  }

  create() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
