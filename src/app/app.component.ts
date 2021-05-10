import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AutoStateService } from './shared/auto-state.service';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convertHtmlToAngular';

  constructor (
    private auth: AutoStateService,
    public router: Router,
    public token: TokenService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });

    this.router.events.pipe(  
      filter(event => event instanceof NavigationEnd),  
    ).subscribe(() => {  
      const rt = this.getChild(this.activatedRoute);  
      rt.data.subscribe(data => {  
        console.log(data);  
        this.titleService.setTitle(data.title)});  
    }); 
  }

  getChild(activatedRoute: ActivatedRoute) {  
    if (activatedRoute.firstChild) {  
      return this.getChild(activatedRoute.firstChild);  
    } else {  
      return activatedRoute;  
    }  
  }

  isSignedIn : boolean | undefined;  

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
