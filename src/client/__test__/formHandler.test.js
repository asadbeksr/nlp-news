// Import the js to test
import { handleSubmit } from "../js/formHandler"

//references 
// https://jestjs.io/docs/getting-started
//


test('Testing the function', () => {
    expect(handleSubmit).toBeInstanceOf(Function);
})
