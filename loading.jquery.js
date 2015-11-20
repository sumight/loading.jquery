var Loading = {};

(function($) {

    Loading.defaultCfg = {
        img:"default",
        size:"auto",
        container:'body',
        mask:'none',
        loadingDOM:null
    };

    Loading.init = function(cfg) {
        var self = this;
        cfg = self._cfg = $.extend({}, self.defaultCfg, cfg);

        self.render();
    }

    // 渲染页面
    Loading.render = function() {
        var self = this;
        var cfg = self._cfg;

        var imgsrc = '';
        if(cfg.img === "default"){
            imgsrc = 'data:image/gif;base64,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';
        }else{
            imgsrc = cfg.img;
        }

        var html = '<div class="loading"><div class="middle"><img src="" alt=""></div></div>';



        var loading = $(html).css({
            'width':'100%',
            'height':'100%',
            'display':'table',
            'position':'absolute',
            'left':'0',
            'top':'0',
            'background':cfg.mask,
            'text-align':'center',

        })

        var middle = loading.find('.middle').css({
            'display':'table-cell',
            'vertical-align':'middle'
        })

        var img = loading.find('img')
            .css({
                width:cfg.size,
            })
            .attr('src',imgsrc);


        loading.css({
            display:'none'
        })

        cfg.loadingDOM = loading;
        debugger;

        var $container = $(cfg.container);

        if($container.css("position")==='static'){
            $container.css("position","relative")
        }

        $container.append(loading);
    }

    // 显示loading
    Loading.show = function() {
        var self = this;
        var cfg = self._cfg;

        var containerHeight = $(cfg.container).innerHeight();

        $(cfg.loadingDOM).css({
            display:'table',
            height:containerHeight
        });
    }

    // 隐藏loading
    Loading.hide = function() {
        var self = this;
        var cfg = self._cfg;

        $(cfg.loadingDOM).hide();


    }

})(jQuery);

(function($) {

    $.extend({
        createLoading: function(cfg) {
            var loading = $.extend({},Loading);
            loading.init(cfg);
            return loading;
        }
    });

})(jQuery);
