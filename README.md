# Spotify playlists gatherer
All begins with Spotify performing a shitty summary of my musical year. The songs that I play until I'm being bored of them when I'm going to run or the ones that plays in the party of my brother (sorry I forgot to turn on the private mode) are not my favourite songs of the year. So this year every month I created a playlist with the name "[month] - 2021" with the aim of add to that playlists my **real** favourites songs of that months.

This project is intended to group the playlist of every month in one master playlist with the best songs of my year!

## Setup
### Dependencies
You have to install `npm` and `node`, then install the dependencies as follows:
```sh
npm install
```
### Credentials
First of all you have to get your credentials for use the Spotify API. 
You can find how to get the credentials [here](https://developer.spotify.com/documentation/general/guides/authorization/). In addition I used [this](https://github.com/spotify/web-api-auth-examples) repo, from Spotify too, to get the credentials. 
I use the **Implicit grant** and `'playlist-modify-private playlist-modify-public playlist-read-private'` as scopes.

Once you get the client id, client secret and client token, you have to put them into the src/config.js file.

### Execution
When the previous steps are done, you just have to execute:

```sh
node src/main.js
```
