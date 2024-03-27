"use strict";
const contentType = require('./Content-types');
const utils = require('./utils');

const httpStatus = require('http-status-codes'),
  htmlContentType = {
    "Content-Type": "text/html"
  },
 
  routes = {
    GET: {},
  POST:{}
  };

exports.handle = (req,res) => {
  try { 
    routes[req.method][req.url](req,res);
}catch(e){
    console.log("error: " +e);
    res.writeHead(httpStatus.OK,contentType.html);
    utils.getFile("views/error.html", res);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};
