class AppHeader {
    #after;
    #center;
    #before;
    #app;
    constructor(app) {
        this.#after;
        this.#center;
        this.#before;
        this.#app = app;
    }
    #setHeader(name, value) {
        this['#' + name] = value;
        $(this.#app).find('header > div.' + name).html(this['#' + name]);
    }
    get after() {
        return this.#after;
    }
    set after(value) {
        this.#setHeader('after', value);
    }

    get center() {
        return this.#center;
    }
    set center(value) {
        this.#setHeader('center', value);
    }

    get before() {
        return this.#before;
    }
    set before(value) {
        this.#setHeader('before', value);
    }
};

class App {
    constructor(app = null) {
        this.app = app;
        this.header = new AppHeader(app);
        this.body = $(this.app).find('section');
        this.footer = $(this.app).find('footer');
    }

    static createApp(id) {
        let app = $(`
            <div ${id ? 'id="' + id + '"' : ''} class="app">
                <header>
                    <div class="after"></div>
                    <div class="center"></div>
                    <div class="before"></div>
                </header>
                <section></section>
                <footer></footer>
            </div>
        `);
        return app;
    }

    addClass(className) {
        this.app.addClass(className);
    }
    removeClass(className) {
        this.app.removeClass(className);
    }
    kill() {
        this.app.remove();
    }
}
