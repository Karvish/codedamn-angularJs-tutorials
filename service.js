app.service('random', function() {
    this.generate = function() {
        return Math.floor(Math.random()*10);
    }
});
