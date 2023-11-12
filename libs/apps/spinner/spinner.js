class Spinner {
    constructor(spinner) {
        this.spinner = spinner;
        this.kill = this.kill.bind(this);
    }
    static createSpinner(id) {
        let spinner = $(`
            <div ${id ? 'id="' + id + '"' : ''} class="app-spinner shadow">
                <div class="content">
                    <span class="material-symbols-outlined">
                        progress_activity
                    </span>
                </div>
            </div>
        `);
        return spinner;
    }
    show(anim = true) {
        if(anim) {
            this.spinner.css('opacity');
        }
        this.spinner.addClass('active');
    }
    hide(kill = true) {
        if(kill) {
            this.spinner.on('transitionend', () => {
                this.kill();
            });
        };
        this.spinner.removeClass('active');
    }
    kill() {
        this.spinner.remove();
    }
}
