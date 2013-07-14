
define(['Crafty', 'Colors'], function() {

    // Create sound-component
    Crafty.c('Sound', {

        __sound: null,

        __color: null,


        __play: function() {
            this.color('yellow');
            Crafty.audio.play(this.__sound);
        },


        __mute: function() {
            this.color(this.__color);
        },


        init: function() {
            this.requires('2D, DOM, Color, Mouse, KeyboardEvent')

            this.attr({
                w: 100,
                h: 100
            });

            this.__color = Colors.rand();
            this.color(this.__color);
        },

        sound: function(sound) {
            this.__sound = sound;

            Crafty.audio.add(sound, [
                'sounds/' + sound + '.mp3',
                'sounds/' + sound + '.ogg',
                'sounds/' + sound + '.wav'
            ]);

            // set play- and mute event
            this.bind('MouseDown', this.__play);
            this.bind('MouseUp', this.__mute);

            return this;
        },

        key: function(key) {
            key = key.toUpperCase();

            // play sound
            this.bind('KeyDown', function(e) {
                if (e.key == Crafty.keys[key]) {
                    this.__play();
                }
            });

            // mute sound
            this.bind('KeyUp', function(e) {
                if (e.key == Crafty.keys[key]) {
                    this.__mute();
                }
            });
        }

    });

    return {

        run: function() {
            Crafty.init(200, 200);

            Crafty.e('Sound').sound('bd').shift(0, 100).key('G');
            Crafty.e('Sound').sound('sd').shift(100, 100).key('H');
            Crafty.e('Sound').sound('ch').shift(0, 0).key('T');
            Crafty.e('Sound').sound('oh').shift(100, 0).key('Z');
        }
    };

});




