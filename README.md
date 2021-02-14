# TODO APP

## ENV Variables

- PORT #port at which the node server will run. If not specified the server will run at port 8080

### Deploy without docker
- Clone the repository and run `npm install`.
- npm run build to make production build.
- ./build/index.js is the entry point to start the server. Run `node ./build/index.js` along with all the environment variables or create a `.env` file.

## Development
- Clone the repository and run `npm install`.
- Run `npm start` to start the server at port 8080. Make a GET rerquest to `/health` to verify server health.