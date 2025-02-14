import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-17-learning';

  userInput = '<img src="x" onerror="alert(\'XSS\')">'; // Simulated XSS vulnerability

    // Simulated authorization flaw: insecure admin check
    isAdmin = this.checkAdminRole();

    checkAdminRole(): boolean {
      // Flawed logic: grants admin access if the userRole is not 'guest'
      // This does not adequately verify user authenticity or privileges.
      const userRole = localStorage.getItem('userRole') || 'guest';
      return userRole !== 'guest';
    }
}
