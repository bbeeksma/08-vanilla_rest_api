'use strict';

const parseURL = require('./parse-url');
const parseJSON = require('./parse-json')

const Router = module.exports = function(){

};


Router.prototype.route = function(){
  return(req,res) =>{
    parseURL(req)
    .then(() =>{
      console.log(req.method, req.url);

      res.write('routed');
      res.end();
    })
    .catch(err => {
      res.writeHead(400, {
        'Content-Type': 'text/plain'
      });
      res.write(err.message);
      res.end();
    });

  };
};
