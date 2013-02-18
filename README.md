Image sharing chatroom ( written by Jay Zeng, @nieksand Niek Sanders )

Just type a keyword in to the search box. We pull the first google image
search result and show it to everyone connected to the webpage.

- socket.io and node.js for broadcasting the images
- jQuery for DOM manipulation
- jsonp for cross-site request to Google API
- bootstrap for UI

How to run:
- git clone git@github.com:jayzeng/imagefetcher.git
- npm install
- node server.js
- open http://localhost:8080
- or foreman start

TODO:
- Add unit test
- User Auth and session management

Demo app: http://fetchmyimage.herokuapp.com/

Steps to deploy on Heroku:
- heroku apps:create fetchmyimage
- npm install
- git push heroku master
- heroku ps:scale web=1

Heroku references:
- https://devcenter.heroku.com/articles/procfile
- https://devcenter.heroku.com/articles/nodejs#declare-dependencies-with-npm
