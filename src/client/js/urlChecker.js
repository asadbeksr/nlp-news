
//references 
// https://knowledge.udacity.com/questions/293440
// https://knowledge.udacity.com/questions/533624


function checkForUrl(inputUrl) {
    var regex = inputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

     if(regex == null){
         return false;
     } else{
     return true;
     }
 }

 export { checkForUrl }