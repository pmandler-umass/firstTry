//const { remote } = window.require("electron");
// const fs = require("fs");
//const path = require("path");
import {join} from 'path';
//import {readdir} from 'fs';

// joining path of directory 
// const directoryPath = path.join(__dirname, 'Documents');

export const findData =() =>{
    console.log("PAM in findData");
    console.log(__dirname);
    let data_path = join(__dirname, "..", "data");
    console.log(data_path);

    // passing directoryPath and callback function
    /* readdir(data_path, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });
    });*/
    return "x marks the spot";
};

default findData;
