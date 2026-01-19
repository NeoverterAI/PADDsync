/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var HTML5AudioSoundManager = require('./html5/HTML5AudioSoundManager');
var NoAudioSoundManager = require('./noaudio/NoAudioSoundManager');
var WebAudioSoundManager = require('./webaudio/WebAudioSoundManager');

/**
 * Creates a Web Audio, HTML5 Audio or No Audio Sound Manager based on config and device settings.
 *
 * Be aware of https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
 *
 * @function PADDsync.Sound.SoundManagerCreator
 * @since 3.0.0
 *
 * @param {PADDsync.Game} game - Reference to the current game instance.
 *
 * @return {(PADDsync.Sound.HTML5AudioSoundManager|PADDsync.Sound.WebAudioSoundManager|PADDsync.Sound.NoAudioSoundManager)} The Sound Manager instance that was created.
 */
var SoundManagerCreator = {

    create: function (game)
    {
        var audioConfig = game.config.audio;
        var deviceAudio = game.device.audio;

        if (audioConfig.noAudio || (!deviceAudio.webAudio && !deviceAudio.audioData))
        {
            return new NoAudioSoundManager(game);
        }

        if (deviceAudio.webAudio && !audioConfig.disableWebAudio)
        {
            return new WebAudioSoundManager(game);
        }

        return new HTML5AudioSoundManager(game);
    }

};

module.exports = SoundManagerCreator;
