let root = new Root($('#root'));

let app = new App(App.createApp('app'));
app.header.center = '<span class="bold">Профиль<span>';

root.add(app.app);

let book = new Book(Book.createBook(['sdfsdfsdfsdfssdffdsfsd', '312', '321'], ['sdfsdfasdfsadfasdfasdfasdfasdfasfdasdfasdfasdfafsdsafasdfsaasfd', 'sdfsdfsdfsfd', 'sdfsdfsdfsdf']));

app.body.append(book.book)
