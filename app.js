var app = null;

window.addEventListener('load', function() {
    app = new Vue({
        el: '#app',
        data: {
            page: 'home',
            sidebarOpened: false,
            browse: 'catalog'
        },
        watch: {
            page: function() {
                this.sidebarOpened = false;
            }
        }
    });
});
