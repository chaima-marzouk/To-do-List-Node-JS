
// const fs = require('fs');

// function render(res, htmlFile) {
//     console.log("first log : " + res.url)
//      fs.stat(`./${htmlFile}`,  (err, stats) => {
//        res.statusCode = 200;
//        res.setHeader('Content-Type', 'text/html');
//        console.log("second log : " + res.url)
//          if(stats) {
//              fs.createReadStream(htmlFile).pipe(res);
//          } else {
//              res.statusCode = 404;
//              res.end('Sorry, page not found');
//          }
//      });
//      console.log("thrd log : " + res.url)
// }

// module.exports = {
//     render
// }















































































// const http = require('http');
// const fs = require('fs');



// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     const routeMap = {
//         '': 'index.html',
//         'about': 'about.html',
//         'services': 'index.html'
//     }

//     render(res, routeMap[req.url.slice(1)]);
// });

// function render(res, htmlFile) {
//        console.log("first log : " + res.url)
//        fs.stat(`./${htmlFile}`,  (err, stats) => {
//         console.log(`this is html file ${htmlFile}`)
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         console.log("third log : " + res.url)

//           if(stats) {
//               fs.createReadStream(htmlFile).pipe(res);
//           } else {
//               res.statusCode = 404;
//               res.end('Sorry, page not found');
//           }
//       });
// }


// module.exports = 
// { 
//     server , 
//     render
// }








































// var url = require('url');
// var fs = require('fs');

// function renderHTML(path, response){
//     fs.readFile(path,null, function(error, data){
//         if (error) {
//             response.writeHead(404);
//             response.write('File noot found');
//         }else{
//             response.end();
//         }
//     })
// }

// module.exports = {
//     handelRequest: function(request, response){
//         response.writeHead(200, { 'Content-type': 'text/html'})

//         var path = url.parse(request.url).pathname;
//         switch(path){
//             case '/':
//                 renderHTML('../views/home.ejs', response)
//                 break

//             case '/project':
//                 renderHTML('../views/project.ejs',response)
//                 break;

//             default:
//                 response.writeHead(404);
//                 response.write('Sorry ..not found ');
//                 response.end
//         }
//     }
// }