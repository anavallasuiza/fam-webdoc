'use strict';

var subtitles = {
    viewer: {
        init: function($element) {
            this.$element = $element;
        },
        show: function(text) {
            if(this.hideTimeout) {
                clearTimeout(this.hideTimeout);
            }

            this.$element.show().text(text);

            this.hideTimeout = setTimeout(this.hide.bind(this), 5000);
        },
        hide: function() {
            this.$element.hide();
        }
    },
    handler: {
        init: function($media, viewer) {
            this.$media = $media;
            this.media = this.$media.get(0);
            this.subs = $media.data('subtitles');
            this.viewer = viewer;

            this.$media.on('ended', () => this.viewer.hide());

        },
        listen: function() {
            if (this.subs.length) {
                this.$media.on('timeupdate.subtitles', () => {
                    const t = this.media.currentTime * 1000;

                    const sub = this.subs.filter(s => {
                        return (t > s.startTime && t < s.endTime);
                    })[0];

                    if (sub) {
                        if (sub.text !== this.currentSub) {
                            this.viewer.show(sub.text);
                            this.currentSub = sub.text;
                        }
                    } else {
                        this.viewer.hide();
                    }

                });
            }
        },
        destroy: function() {
            this.$media.off('timeupdate.subtitles');
            this.viewer.hide();
        }
    }
};

module.exports = subtitles;
