Contact Page Interactivity

What it does:
The contact page has a live character counter under the message box. As a visitor types, the counter shows how many characters they have used out of the 500 allowed, so they can see the limit before they submit.

Associated files:
- HTML: contact.html in the within the form in the class field section. 
- Script: js/contact-counter.js (linked with the defer attribute in the head of contact.html)
- Markup hooks: the textarea with id="message" and the counter with id="message-count"

How to test it:
1. Open contact.html in a browser.
2. Type in the Message box. The counter should update on every keystroke and stop at 500.
3. Open the browser console. There should be no errors.
4. Turn JavaScript off (in Chrome: DevTools > Settings > Debugger > Disable JavaScript), reload the page, and confirm the fallback text "Up to 500 characters." still shows and the form still works without the live count.