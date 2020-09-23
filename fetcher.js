const args = process.argv.slice(2);
const request = require('request');
const fs = require("fs")
request(args.toString(), (error, response, body) => {
  fs.writeFile(args[1], body, {flag: "wx"}, function(err) {
    if (err) {
      console.log("err", err)
   } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  } 
  })
});


// retrieve arguments from command line and replace url and file path;
// check for missing stuff (if arguments aren't provided, how to handle it, what if there's an error when downloading webpage, handle if an error if can't write to file);






