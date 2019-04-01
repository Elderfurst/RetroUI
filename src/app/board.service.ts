import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board } from './models/board.model';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  createNewBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(environment.retroService + '/board', board);
  }

  getBoard(boardId: number): Observable<Board> {
    return this.http.get<Board>(environment.retroService + `/board/${boardId}`);
  }
}
