declare global {
    interface Date {
        addHour(h): Date;
        addMinutes(m): Date;
        addSeconds(s): Date;
    }
    interface Number {
        format2Digits(): String;
    }
}

Date.prototype.addHour = function (h): Date {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

Date.prototype.addMinutes = function (m): Date {
    this.setTime(this.getTime() + (m * 60 * 1000));
    return this;
}

Date.prototype.addSeconds = function (s): Date {
    this.setTime(this.getTime() + (s * 1000));
    return this;
}

Number.prototype.format2Digits = function (): String {
    return ("0" + this).slice(-2);
}

export { }; 