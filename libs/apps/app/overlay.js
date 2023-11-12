class Overlay extends App {
    constructor(app) {
        super(app);
        this.app.addClass('app-overlay');
    }
    show(anim = true) {
        if(anim) {
            this.app.css('opacity');
        }
        this.app.addClass('active');
    }
    hide(kill = true) {
        if(kill) {
            this.app.on('transitionend', () => {
                this.kill();
            });
        };
        this.app.removeClass('active');
    }
}
