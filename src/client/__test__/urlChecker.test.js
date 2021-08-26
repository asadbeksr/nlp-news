// Import the js to test
import { checkForUrl } from "../js/urlChecker"

//references 
// https://jestjs.io/docs/getting-started
//
test('Testing URL', () => {
    window.alert = () => {};  
    expect(checkForUrl('This is not URL')).toBe(false);
    expect(checkForUrl('https:/https://betterprogramming.pub/javascript-es2021-a-look-at-the-new-features-7d5770288648')).toBe(true);
})

