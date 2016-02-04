/**
 * Created by Artem_Timoshenko on 2/4/2016.
 */

var fs = require('fs');
var ytdl = require('ytdl-core');

module.exports = function() {
    ytdl('https://www.youtube.com/watch?v=T7SWETadMn0',
        {
            filter: function(format) {
                return format.container === 'mp4';
            }
        })
        .pipe(fs.createWriteStream('video.mp4'));
};


