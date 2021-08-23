import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response extends Array<any> {
  name: string;
  html_url: string;
  description: string;
  owner: {
    html_url: string;
    avatar_url: string;
    login: string;
  }
}

interface repository {
  name: string;
  html_url: string;
  description: string;
}

@Injectable()
export class GithubService {
  dados: Response[] = [];
  profileURL!: string;
  avatarURL!: string;
  login!: string;
  listRepository: Array<repository> = [];

  constructor(private http: HttpClient) { }

  getRepository(){
    this.http.get<Response>('https://api.github.com/users/matheusmisumoto/repos').subscribe(
      data => {
        this.dados = data,
        this.login = data[0].owner.login,
        this.profileURL = this.dados[0].owner.html_url,
        this.avatarURL = this.dados[0].owner.avatar_url
      }
    );
  }
}