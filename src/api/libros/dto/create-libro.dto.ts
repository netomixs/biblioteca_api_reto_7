export class  CreateLibroDto {
    title: string;
    author: string;
    publishedDate: Date;
    genre: string;
    pages: number;
    isbn: string;
    isAvailable?: boolean;   
  }