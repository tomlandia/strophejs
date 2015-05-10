/* jshint ignore:start */
if (callback) {
    return callback(window.Strophe, window.$build, window.$msg, window.$iq, window.$pres);
}


})(function (Strophe, build, msg, iq, pres) {
    window.Strophe = Strophe;
    window.$build = build;
    window.$msg = msg;
    window.$iq = iq;
    window.$pres = pres;
});
/* jshint ignore:end */
