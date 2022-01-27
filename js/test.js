$(function () {
    function test() {
        console.log('OK, I am the external js file hosted on GitHub and I am accessed.');
    }
    function init () {
        test();
    }
    init();
});
