'use strict'

const spotifyServices = require('./spotifyService')
const {logger} = require('./logger')
const config = require('./config')

async function main() {
  const year = config.year
  const playlistName = config.plalistName
  logger.info(`hey there! 😎 let's create your ${playlistName} playlist with the best songs of ${year} 🎺`)
  try {
    var playlistsId = await spotifyServices.getYearPlaylistsId("soyer93", year)

    var arrayOfPromises = []
    playlistsId.forEach(id  => arrayOfPromises.push(spotifyServices.getPlaylistSongs(id))) 
    var idsArray = (await Promise.all(arrayOfPromises)).flatMap(el => el)
    
    spotifyServices.createPlaylistWithSongs(playlistName, idsArray)
  } catch (error) {
    logger.error(error)
  }
}

main()
