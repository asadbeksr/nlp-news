// https://knowledge.udacity.com/questions/174638

import "babel-polyfill";
import { handleSubmit } from '../js/formHandler';



test("asyncFunction", () => {
    handleSubmit();
    expect.assertions(1);
    function handleSubmit(data) {
      expect(data).toBeUndefined();
    }
  });