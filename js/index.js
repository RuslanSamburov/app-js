let root = new Root($('#root'));

let app = new App(App.createApp('app'));
app.header.center = '<span class="bold">Профиль<span>';

root.add(app.app);
