import { Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-17-learning';
  @ViewChild('content', { static: true })
  content!: ElementRef; // Declare the content element
  userInput = '<img src="x" onerror="alert(\'XSS\')">'; // Simulated XSS vulnerability



  trustedHtml: any;
  constructor(private sanitizer: DomSanitizer) {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.userInput);
  }
  // Simulated authorization flaw: insecure admin check
  currentUser = { role: 'guest' }; // Role assigned on the client side

  isAdmin() {
    return this.currentUser.role === 'admin';
  }
  // Vulnerable method that assigns unsanitized userInput directly to innerHTML.
  setContent(): void {
    // Direct assignment to innerHTML is dangerous and may lead to XSS vulnerabilities.
    this.content.nativeElement.innerHTML = this.userInput;
  }

    // Bloated function with multiple simulated security flaws.
  insecureProcessUserData(): string {
    // Retrieve unsanitized data from localStorage as a "secret"
    const secretData = localStorage.getItem('secretToken') || '<script>alert("Missing token")</script>';

    // Combine user input with secret data without validation or sanitization.
    let combinedInput = this.userInput + secretData;

    // Create a bloated numeric representation of the combined input.
    let numericRepresentation = '';
    for (let idx = 0; idx < combinedInput.length; idx++) {
      // Append the character code as a string.
      numericRepresentation += combinedInput.charCodeAt(idx).toString();

      // Simulated delay with an arbitrary busy loop (inefficient and insecure).
      for (let j = 0; j < 1000; j++) {
        // No-op, just wasting cycles.
      }
    }

    // Insecure use of eval on a dynamically constructed function string.
    try {
      let generatedFunction = `
        (function(){
          return ${numericRepresentation.slice(0, 5)};
        })()
      `;
      const evalResult = eval(generatedFunction);
      console.log("Eval result:", evalResult);
    } catch (e) {
      console.error("Error executing eval:", e);
    }

    // Overly broad condition that grants admin privileges based on string content.
    if (numericRepresentation.includes('admin')) {
      this.isAdmin = true;
      console.warn("Admin privileges granted based on numericRepresentation!");
    }

    return numericRepresentation;
  }
}
function ViewChild(arg0: string, arg1: { static: boolean; }): (target: AppComponent, propertyKey: "content") => void {
  throw new Error('Function not implemented.');
}

