// const songDecoder = (song) => song.replace(/WUB/g, ' ').replace(/  +/g, ' ').slice(0)
const songDecoder = (song) => song.replace(/WUB/g, ' ').replace(/  +/g, ' ').slice(0,(song.length-1))



console.log(songDecoder("JKDWUBWBIRAQKFWUBYEWUBWUBWV"));