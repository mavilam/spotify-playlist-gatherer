# Spotify playlists gatherer
It all begins with Spotify performing a shitty summary of my musical year. The songs that I play until I'm bored of them when I'm going to run or the ones that I play at my brother's party (sorry, I forgot to turn on the private mode) are not my favourite songs of the year. So this year, every month, I created a playlist with the name "[month] - 2021" with the aim of adding to that playlist my **actual** favourite songs of those months.
This project is intended to group the playlist of every month in one master playlist with the best songs of my year!

This project is intended to group the playlist of every month in one master playlist with the best songs of my year!

## Setup
### Dependencies
You have to install `npm` and `node`, then install the dependencies as follows:
```sh
npm install
```
### Credentials
First, you must get your credentials for using the Spotify API. You can find how to get the credentials [here](https://developer.spotify.com/documentation/general/guides/authorization/), you will have to register an app with specific scopes. After registering the app, you have two places where you can get the token:
1. [Spotify official repo](https://github.com/spotify/web-api-auth-examples), where there are examples of how to get the credentials. I use the **Implicit grant** and `'playlist-modify-private playlist-modify-public playlist-read-private'` as scopes.
2. In this project, in src/credentials, I placed a simple nodejs app, based on the Spotify examples, that launches a web service where you can get your account basic info and your token opening easily open `localhost:8888` on a browser. In order to launch it you only have to execute the following commands:
  ```sh
  cd credentialsWebService
  node app.js
  ```

Once you get the client id, client secret and client token, you have to put them into the src/config.js file.

### Execution
When the previous steps are done, you only have to execute:

```sh
node src/main.js
```
