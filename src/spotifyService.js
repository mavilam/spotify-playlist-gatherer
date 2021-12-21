'use strict'

const SpotifyWebApi = require('spotify-web-api-node')
const logger = require('./logger')
const config = require('./config')

var spotifyApi = new SpotifyWebApi(config.spotifyCredentials)

async function getYearPlaylistsId(user, year) {
  const data = await spotifyApi.getUserPlaylists(user, { limit: 40, offset: 0 })
  logger.info(`Fetching all your playlists`)
  return data.body.items.filter(el => el.name.includes(` - ${String(year)}`)).map(el => el.id)
}

async function getPlaylistSongs(playlistId) {
  const playlist = await spotifyApi.getPlaylist(playlistId)
  logger.info(`Gathering songs from the playlists subset`)
  return playlist.body.tracks.items.map(el => el.track.id)
}

async function createPlaylistWithSongs(title, songList) {
  const playlistInfo = await spotifyApi.createPlaylist(title, { 'description': title, 'public': false })
  const playlistId = playlistInfo.body.id
  logger.info(`${title} playlist created with id: ${playlistId}`)

  const songListSpotifyFormat = songList.map(song => `spotify:track:${song}`)
  await spotifyApi.addTracksToPlaylist(playlistId, songListSpotifyFormat)
  logger.info(`${songList.length} songs added to ${title}`)
}

module.exports = {getYearPlaylistsId, getPlaylistSongs, createPlaylistWithSongs}
