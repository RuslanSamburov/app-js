class Alert {
    #header;
    constructor(alert) {
        this.alert = alert;
        this.#header;
        this.body = alert.find('.body');
        this.#init.bind(this)();
        this.hide = this.hide.bind(this);
        this.kill = this.kill.bind(this);
    }

    get header() {
        return this.#header;
    }

    set header(value) {
        this.#header = value;
        this.alert.find('.header').html(value);
    }

    static createAlert(id) {
        let alert = $(`
            <div ${id ? 'id="' + id + '"' : ''} class="app-alert shadow">
                <div class="content">
                    <div class="header"></div>
                    <div class="body"></div>
                </div>
            </div>
        `);
        return alert;
    }
    #init() {
        this.alert.on('click', (event) => {
            if(event.target == this.alert[0]) {
                this.hide();
            }
        });
    }
    show(anim = true) {
        if(anim) {
            this.alert.css('opacity');
        }
        this.alert.addClass('active');
    }
    hide(kill = true) {
        if(kill) {
            this.alert.on('transitionend', () => {
                this.kill();
            });
        };
        this.alert.removeClass('active');
    }
    kill() {
        this.alert.remove();
    }
}