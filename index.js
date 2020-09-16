module.exports = {

  set: function (name, value, days, samesite) {

    var cookie = name + "=" + value;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      cookie += "; expires=" + date.toGMTString();
    }

    if (samesite) {
      cookie += "; samesite=" + samesite;
    }

    cookie += '; path=/';

    document.cookie = cookie;

  },

  get: function (name) {

    if (document.cookie.length > 0) {

      var cookieNameStart = document.cookie.indexOf(name + "=");

      if (cookieNameStart !== -1) {

        var cookieNameEnd = cookieNameStart + name.length + 1;
        var cookieEnd = document.cookie.indexOf(";", cookieNameEnd);

        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length;
        }

        return document.cookie.substring(cookieNameEnd, cookieEnd);
      }

    }

    return null;
  }

}
