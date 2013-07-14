
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
            this.requires('2D, DOM, Color, Mouse, KeyboardEvent, Text')

            this.attr({
                w: DCM1.width / 2,
                h: DCM1.height / 2
            });

            this.__color = Colors.rand('hex');
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

            // show text
            this.text(sound.toUpperCase());
            this.textColor(Colors.complement(this.__color));
            this.textFont('family', 'monospace');
            this.textFont('size', DCM1.height / 6 + 'px');
            this.css('textAlign', 'center');

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

            return this;
        }

    });

    var DCM1 = {

        width: 0,

        height: 0,

        run: function(width, height) {
            DCM1.width = width;
            DCM1.height = height;

            Crafty.init(width, height);
            Crafty.e('Sound').sound('bd').shift(0, height / 2).key('g');
            Crafty.e('Sound').sound('sd').shift(width / 2, height / 2).key('h');
            Crafty.e('Sound').sound('ch').shift(0, 0).key('t');
            Crafty.e('Sound').sound('oh').shift(width / 2, 0).key('z');
        }
    };

    return DCM1;

});




