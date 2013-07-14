
require(['barman', 'Crafty', 'Colors'], function(barman) {

    var Class = barman.Class;

    // Create sound-component
    Crafty.c('Sound', {

        __sound: null,

        __color: null,

        init: function() {
            this.requires('2D, DOM, Color, Mouse')

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

            this.bind('MouseDown', function() {
                this.color('yellow');
                Crafty.audio.play(this.__sound);
            })

            this.bind('MouseUp', function() {
                this.color(this.__color);
            })

            return this;
        },

    });

    var CDM1 = Class.create({

        constructor: function() {
            Crafty.init(200, 200);
            Crafty.background('green');

            Crafty.e('Sound').sound('bd').shift(0, 100);
            Crafty.e('Sound').sound('sd').shift(100, 100);
            Crafty.e('Sound').sound('ch').shift(0, 0);
            Crafty.e('Sound').sound('oh').shift(100, 0);
        }

    });

    new CDM1();

});




