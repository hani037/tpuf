import {BookModel} from './book.model';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  book: BookModel[];
}
