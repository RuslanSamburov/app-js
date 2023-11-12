class Menu {
    constructor(menu) {
        this.menu = menu;
        this.body = menu.find('.body');
        this.full = this.full.bind(this);
        this.hide = this.hide.bind(this);
        this.kill = this.kill.bind(this);
        this.#init.bind(this)();
    }
    static createMenu(id) {
        let menu = $(`
            <div ${id ? 'id="' + id + '"' : ''} class="app-menu shadow">
                <div class="content">
                    <div class="header"></div>
                    <div class="body"></div>
                </div>
            </div>
        `);
        return menu;
    }
    #init() {
        this.menu.on('click', (event) => {
            if(event.target == this.menu[0]) {
                this.hide();
            }
        });
        let header = this.menu.find('.header');
        header.on('click', (event) => {
            if(event.target == header[0]) {
                this.full();
            }
        });
    }
    full() {
        this.menu[0].classList.toggle('full');
    }
    show(anim = true) {
        if(anim) {
            this.menu.css('opacity');
        }
        this.menu.addClass('active');
    }
    hide(kill = true) {
        if(kill) {
            this.menu.on('transitionend', () => {
                this.kill();
            });
        };
        this.menu.removeClass('active');
    }
    kill() {
        this.menu.remove();
    }
}