/**
 * @author: admin
 * @description:
 * @Date: 2017/2/12 19:16
 */
(function($){
    'use strict'

    window.App = window.App || {}

    App.about = {

        init() {
            this.backToTop()
            this.__initVue()
        },

        backToTop: function () {
            $("#back-to-top").on('click', function () {
                $('body, html').animate({ scrollTop: 0 }, 600);
            });
        },

        __initVue: function () {
            var vm = new Vue({
                el: '#user-list',
                data: {
                    userInfo: {}
                },
                created: function () {
                    this._setData()
                },
                methods: {
                    _setData: function () {
                        var self = this
                        $.get('data/user.json', function(data){
                            self.userInfo = data
                        })
                    }
                }
            })
        }

    }

    App.about.init()

}(jQuery))