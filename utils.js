"use strict";
// p 123
const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes = require('./Content-types');
module.exports ={
    getFile: (file_path,res) =>{
        fs.readFile(`./${file_path}`, (error,data) =>{
            if (error){
                res.writeHead(
                    httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html
                );
                res.end("<h1>500</h1><h2>SERVER ERROR.</h2>");
            }
            res.end(data);
        });
    },
}