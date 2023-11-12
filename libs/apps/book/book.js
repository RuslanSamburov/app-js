class Book {
    constructor(book) {
        this.book = book;
    }
    static createBook(names, body, id) {
        let book = $(`
            <div ${id ? 'id="' + id + '"' : ''} class='app-book'>
                <nav>
                    <div class='slider'></div>
                </nav>
                <section></section>
            </div>
        `);
        let nav = book.find('nav');
        let section = book.find('section');
        let slider = book.find('.slider');
        names.forEach((element, i) => {
            nav.append(`<label data-num='${i}' class='${i == 0 ? 'active' : ''}' >${element}</label>`);
        });
        body.forEach((element, i) => {
            section.append(`<div id='app-book-${i}' class='${i == 0 ? 'active' : ''}'>${element}</div>`);
        });
        slider.css('width', 100 / names.length + '%');
        nav.find('label').on('click', function(e) {
            nav.find('.active').removeClass('active');
            section.find('.active').removeClass('active');
            let procent = e.target.dataset.num * (100 / names.length) + '%';
            slider.css('left', procent);
            e.target.classList.add('active');
            section.find(`#app-book-${e.target.dataset.num}`).addClass('active');
        });
        return book;
    }
}