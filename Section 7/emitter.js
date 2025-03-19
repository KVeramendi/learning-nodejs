function Emmitter() {
    this.events = {};
}

Emmitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emmitter.prototype.emit = function (type) {
    if (!this.events[type]) return;
    this.events[type].forEach(element => element());
}

module.exports = Emmitter;
