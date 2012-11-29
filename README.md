Image sharing chatroom ( written by Jay Zeng, @nieksand Niek Sanders )

Just type a keyword in to the search box. We pull the first google image
search result and show it to everyone connected to the webpage.

- socket.io and node.js for broadcasting the images
- jQuery for DOM manipulation
- jsonp for cross-site request to Google API

How to run:
- git clone git@github.com:jayzeng/imagefetcher.git
- npm install
- node server.js
- open http://localhost:8080

TODO:
- Add unit test
- Use twitter bootstrap to improve UI/UX
- User Auth and session management
