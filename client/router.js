Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
    this.render('center', {
        data: function () { return ; }
    });
});


Router.route('/titlepage', function () {
    this.render('titlepage', {
        data: function () { return; }
    });
});