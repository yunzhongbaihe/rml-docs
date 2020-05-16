// $.fn.layer 模块开始
(function($){
    // 限制条件
    var limitations = {
        minWidth: 450,
        maxWidth: 1000,
        minHeight: 190,
        drawerPos: {
            top: '-100%',
            right: '-100%',
            bottom: '-100%',
            left: '-100%',
        }
    };
    var methods = {
        // 渲染对话框
        render: function(context){
            // TODO：context是用来放置内容的主体，“.layerBody”
            var thisobj = this,
                opts = $.data(context, 'layer').options,
                $layerWrpper = $('#layerWrpper' + opts.isNow);
            if(!context.offsetLeft && !context.offsetTop){
                if($layerWrpper.length){
                    $layerWrpper.show();
                    thisobj.drawerReset(opts, true);
                    return false;
                }else{
                    !opts.closed && document.body.appendChild(context);
                }
            }
            var $mainBodyWrap = $('<div></div>'); // 最外层元素，类名为“layerWrpper”
            var $mainBody = $('<div></div>'); // 主体元素，类名为“layerMain”
            var $content = $(context); // 对话框内容主体元素，类名为“layerBody”
            var $layerTitle = $('<div></div>');
            if(opts.inited && opts.closed){
                if($layerWrpper.length){
                    $layerWrpper.show();
                    thisobj.drawerReset(opts, true);
                }
                return context;
            }
            opts.inited = false;
            $content.addClass('layerBody borderbox');
            // 遮罩层
            if(opts.modal){
                $mainBodyWrap = $('<div id="layerWrpper' + opts.isNow + '" class="layerWrpper" style="display:none;"></div>').insertBefore(context);
                $mainBody = $('<div class="layerMain layerMainAbsolute borderbox"></div>').appendTo($mainBodyWrap);
            }else{
                $mainBody = $('<div id="layerWrpper' + opts.isNow + '" class="layerMain layerMainAbsolute borderbox" style="display:none;"></div>').insertBefore(context);
            }
            // 如果是抽屉类型的对话框，把“layerMain”元素改为固定定位，并且增加一个透明遮罩层，用以点击的时候关闭对话框
            if(opts.type === 'drawer'){
                $mainBody.removeClass('layerMainAbsolute');
                $mainBody.addClass('layerMainFixed layerDrawer_' + opts.drawerPos);
                var $layerDrawerMark = $('<div class="layerDrawerMark"></div>').prependTo($mainBodyWrap);
                if(opts.maskClosable){
                    $layerDrawerMark[0].onclick = function(ev){
                        thisobj.closeLayer(opts, $mainBodyWrap, $mainBody);
                    };
                }
            }
            // 关闭按钮
            if(opts.enableClose){
                var $layerClose = $('<div class="layerClose"></div>').appendTo($mainBody);
                $layerClose[0].onclick = function(ev){
                    thisobj.closeLayer(opts, $mainBodyWrap, $mainBody);
                };
            }
            // 标题栏目
            if(opts.enableTitle){
                $layerTitle = $('<div class="layerTitle borderbox"></div>').appendTo($mainBody);
                $layerTitle.html(opts.title || '');
            }
            // 设置主题的内容
            opts.href && (methods.httpRequest(opts));
            context.innerHTML = '<div class="layerBodyInner">' + (context.innerHTML || (opts.content || '')) + '</div>';
            if(!$content.is(':visible')){
                $content.show();
            }
            $mainBody.append(context);
            // 底部按钮
            if(opts.buttons){
                if($.inArray(opts.buttons)){
                    $content.siblings("div.layerFoot").remove();
                    var $layerFoot = $('<div class="layerFoot borderbox"></div>').appendTo($mainBody);
                    var $layerFootInner = $('<div class="floatright"></div>').appendTo($layerFoot);
                    $.each(opts.buttons, function(index, item){
                        typeof item.closeItNow === 'undefined' && (item.closeItNow = true);
                        var $btn = $('<a href="javascript:void(0);" class="layerFootBtn ' + (item.cls) + '">' + (item.text) + '</a>').appendTo($layerFootInner);
                        if(item.handler){
                            $btn[0].onclick = function(){
                                item.handler.call($mainBodyWrap[0] || $mainBody[0]);
                                // 关闭操作一定要放在后面
                                if(item.closeItNow){
                                    thisobj.closeLayer(opts, $mainBodyWrap, $mainBody);
                                }
                            };
                        }
                    });
                }else{
                    $(opts.buttons).addClass('layerFoot').appendTo($mainBody);
                }
            }else{
                $content.siblings("div.layerFoot").remove();
            }
            if(!opts.closed){
                $mainBodyWrap.show();
                $mainBody.show();
            }
            opts.inited = true;
            thisobj.computedWidthAndHeight(opts, $mainBody);
            this.setStyle(opts, $mainBody);
            this.triggerHandler(opts);
        },
        // 设置对话框样式
        setStyle: function(opts, $mainBody){
            var style = opts.style || {};
            if(opts.type === 'drawer'){
                var obj = {};
                obj[opts.drawerPos] = 0;
                if(opts.drawerPos === 'top' || opts.drawerPos === 'bottom'){
                    $mainBody.height(style.height);
                }else if(opts.drawerPos === 'left' || opts.drawerPos === 'right'){
                    $mainBody.width(style.width);
                }
                $mainBody.animate(obj, 150);
            }else{
                $mainBody.width(style.width);
                $mainBody.height(style.height);
            }

            // 设置“.layerBody”的高度
            var highlySum = 0;
            var layerMainHeight = $mainBody.outerHeight();
            if(opts.type !== 'drawer'){
                layerMainHeight = style.height;
            }
            if($mainBody.find('.layerTitle').length){
                highlySum += $mainBody.find('.layerTitle').outerHeight();
            }
            if($mainBody.find('.layerFoot').length){
                highlySum += $mainBody.find('.layerFoot').outerHeight();
            }
            if(highlySum > 0){
                $mainBody.find('.layerBody').height('calc(100% - ' + highlySum + 'px)');
            }
            if($mainBody.parent('.layerWrpper').length){
                $mainBody.parent('.layerWrpper').css('z-index', $.fn.layer.defaults.zIndex++);
            }else{
                $mainBody.css('z-index', $.fn.layer.defaults.zIndex++);
            }
            if(opts.type !== 'drawer'){
                if(document.documentMode && document.documentMode <= 8){
                    if(layerMainHeight > 0){
                        $mainBody.find('.layerBody').height(layerMainHeight - highlySum);
                    }
                    $mainBody.css({
                        top: 0, right: 0, bottom: 0, left: 0,
                        margin: 'auto'
                    });
                }else{
                    if(style.left || style.right){
                        $mainBody.addClass('transformX_0');
                    }
                    if(style.left){
                        $mainBody.css('left', style.left);
                    }
                    if(style.right){
                        $mainBody.css('right', style.right);
                    }
                    if(style.top || opts.bottom){
                        $mainBody.addClass('transformY_0');
                    }
                    if(style.top){
                        $mainBody.css('top', style.top);
                    }
                    if(style.bottom){
                        $mainBody.css('bottom', style.bottom);
                    }
                }
            }
        },
        // 触发事件
        triggerHandler: function(opts){
            $.type(opts.onOpen) === 'function' && opts.onOpen();
        },
        // 通过AJAX请求获取主体内容
        httpRequest: function(opts){
            var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
            var isIE = navigator.userAgent.indexOf("MSIE") > -1;
            (isFirefox || isIE) && (opts.method = 'get');
            $.ajax({
                url: opts.href,
                type: opts.method,
                data: opts.queryParams,
                async: false,
                cache: false,
                dataType: 'html',
                success: function(data){
                    opts.content = data;
                },
                error: function(){
                    opts.content = null;
                }
            });
        },
        // 关闭对话框
        closeLayer: function(opts, $mainBodyWrap, $mainBody){
            var closeType = opts.closed ? 'hide' : 'remove',
                $closeEle = opts.modal ? $mainBodyWrap : $mainBody;
            $closeEle[closeType]();
            this.drawerReset(opts, false);
        },
        // 重置抽屉类型对话框位置
        drawerReset: function(opts, show){
            if(opts.type === 'drawer'){
                try{
                    var style = opts.style || {};
                    var $layerMain = $('#layerWrpper' + opts.isNow);
                    if($('#layerWrpper' + opts.isNow).find('.layerMain').length){
                        $layerMain = $('#layerWrpper' + opts.isNow).find('.layerMain');
                    }
                    var oldClass = $layerMain.attr('class');
                    var newClass = oldClass.replace(/\s+(layerDrawer_\w+)/g, function(){
                        return '';
                    });
                    if(show){
                        $layerMain.addClass('layerDrawer_' + opts.drawerPos);
                        if(opts.drawerPos === 'top' || opts.drawerPos === 'bottom'){
                            $layerMain.width('100%');
                            $layerMain.height(style.height);
                        }else if(opts.drawerPos === 'left' || opts.drawerPos === 'right'){
                            $layerMain.height('100%');
                            $layerMain.width(style.width);
                        }
                        var obj = {};
                        obj[opts.drawerPos] = !show ? limitations.drawerPos[opts.drawerPos] : '0';
                        $layerMain.stop(true).animate(obj, 150);
                    }else{
                        $layerMain.removeAttr('style');
                        $layerMain.attr('class', newClass);
                    }
                }catch(e){

                }
            }
        },
        // 计算宽高
        computedWidthAndHeight: function(opts, $mainBody){
            var style = opts.style || {};
            var windowW = $(window).width();
            var windowH = $(window).height();

            // 如果是抽屉类型的对话框
            if(opts.type === 'drawer'){
                limitations['minWidth'] = 240;
                limitations['maxWidth'] = windowW - 80;
                limitations['minHeight'] = 300;
                limitations['maxHeight'] = windowH - 80;
            }else{
                limitations['minWidth'] = 450;
                limitations['maxWidth'] = 1200;
                limitations['minHeight'] = 190;
                limitations['maxHeight'] = windowH - 40;
            }
            style.width = parseInt(style.width || 0);
            style.width = isNaN(style.width) ? windowW : style.width;
            style.width > limitations.maxWidth && (style.width = limitations.maxWidth);
            style.width < limitations.minWidth && (style.width = limitations.minWidth);

            style.height = parseInt(style.height || 0);
            style.height = isNaN(style.height) ? windowH : style.height;
            style.height > limitations.maxHeight && (style.height = limitations.maxHeight);
            style.height < limitations.minHeight && (style.height = limitations.minHeight);
            if(opts.type === 'drawer'){
                style.height > limitations.maxHeight && (style.height = limitations.maxHeight);
            }
            if(!opts.style){
                opts['style'] = style;
            }
        }
    };
    $.fn.layer = function(param1, param2){
        if($.type(param1) === 'string'){
            var fn = $.fn.layer.methods[param1];
            if(fn){
                return fn(this, param2);
            }
            return this;
        }
        param1 = param1 || {};
        return this.each(function(){
            var layer = $.data(this, 'layer');
            if(layer){
                $.extend(layer.options, param1);
            }else{
                $.data(this, 'layer', {options: $.extend({}, $.fn.layer.defaults, param1)});
            }
            methods.render(this);
        });
    };
    $.fn.layer.defaults = {
        isNow: 1,
        href: '',
        method: 'post',
        queryParams: {},
        title: "New Layer",
        content: 'New Layer Context',
        enableClose: false, // 是否开启关闭按钮
        enableTitle: false, // 是否开启标题栏目
        modal: true,
        closed: false, // 如果是页面中存在的元素，请设置此参数为true，当这里的参数是true的时候，关闭的时候对话框是隐藏而不是移除
        zIndex: 1000,
        onOpen: Function.prototype,
        fn: Function.prototype,
        drawerPos: 'right', // 抽屉对话框出现位置：top、right、bottom、left
        maskClosable: false, // 点击蒙层是否允许关闭
    };
    $.fn.layer.methods = {
        options: function(context){
            try{
                return $.data(context[0], 'layer').options;
            }catch(e){
                return {};
            }
        },
        show: function(context){
            context.parents('.layerWrpper,.layerMain').show();
        },
        close: function(context){
            context.parents('.layerWrpper,.layerMain').hide();
        },
        destory: function(context){
            context.parents('.layerWrpper,.layerMain').remove();
        }
    };
})(jQuery);
// $.fn.layer 模块结束

// $.layer 模块开始
(function($){
    var CLASS_ACTIVE = 'active';
    var methods = {
        render: function(opts){
            var $div = $('<div></div>').appendTo('body');
            if(!opts.isPrompt){
                opts['content'] = this.createDialogBody(opts); // 把“content”参数替换掉
            }
            $div.layer($.extend({}, opts));
            return $div;
        },
        handler: function(opts, flag){
            $.type(opts.fn) === 'function' && opts.fn(flag);
        },
        createDialogBody: function(opts){
            var htmlArr = [];
            htmlArr.push('<div class="layerBodySub">');
            if(opts.enableIcon){
                htmlArr.push('<div class="layerIcon layerIcon_' + opts.layerIcon + '"></div>');
            }
            htmlArr.push('<div>');
            htmlArr.push('<div class="layerBodySubTitle">' + (opts.title || '') + '</div>');
            if(typeof opts.content !== 'undefined'){
                htmlArr.push('<div class="layerBodySubContent">' + (opts.content || '') + '</div>');
            }
            htmlArr.push('</div>');
            htmlArr.push('</div>');
            return htmlArr.join('');
        }
    };
    $.layer = {
        alert: function(params, msg, fn){
            var opts = ($.type(params) === 'object') ? params : {title: params, content: msg, fn: fn};
            opts = $.extend(true, {}, $.layer.defaults, opts);
            if(!opts.buttons){
                opts.buttons = [{
                    text: opts.ok,
                    cls: 'btnOk',
                    handler: function(){
                        methods.handler(opts, true);
                    }
                }];
            }
            return methods.render(opts);
        },
        confirm: function(params, msg, fn){
            var opts = ($.type(params) === 'object') ? params : {title: params, content: msg, fn: fn};
            opts = $.extend(true, {}, $.layer.defaults, opts);
            if(!opts.buttons){
                opts.buttons = [
                    {
                        text: opts.cancel, cls: 'btnCancel',
                        handler: function(){
                            methods.handler(opts, false);
                        }
                    },
                    {
                        text: opts.ok, cls: 'btnOk',
                        handler: function(){
                            methods.handler(opts, true);
                        }
                    }
                ];
            }
            return methods.render(opts);
        },
        drawer: function(params, msg, fn){
            var opts = ($.type(params) === 'object') ? params : {title: params, content: msg, fn: fn};
            opts = $.extend(true, {type: 'drawer'}, $.layer.defaults, opts);
            if(!opts.buttons){
                opts.buttons = [
                    {
                        text: opts.cancel, cls: 'btnCancel',
                        handler: function(){
                            methods.handler(opts, false);
                        }
                    },
                    {
                        text: opts.ok, cls: 'btnOk',
                        handler: function(){
                            methods.handler(opts, true);
                        }
                    }
                ];
            }
            return methods.render(opts);
        },
        prompt: function(params, fn){
            var opts = ($.type(params) === 'object') ? params : {title: params, fn: fn};
            opts = $.extend(
                true,
                {
                    enableTitle: true,
                    isPrompt: true,
                    content: '<input type="text" id="layerInput" class="layerInput borderbox" autocomplete="off"/>'
                },
                $.layer.defaults,
                opts
            );
            if(!opts.buttons){
                opts.buttons = [
                    {
                        text: opts.cancel, cls: 'btnCancel', handler: function(){
                            methods.handler(opts, null);
                        }
                    },
                    {
                        text: opts.ok, cls: 'btnOk', handler: function(){
                            methods.handler(opts, $.trim($('#layerInput').val()));
                        }
                    }
                ];
            }
            return methods.render(opts);
        },
        toast: function(msg, opts){
            var durations = {
                    'long': 3500,
                    'short': 2000
                },
                duration = 0;
            // 计算显示时间
            opts = $.extend({duration: 'short'}, opts || {});
            if(typeof opts.duration === 'number'){
                duration = opts.duration > 0 ? opts.duration : durations['short'];
            }else{
                duration = durations[opts.duration];
            }
            if(!duration){
                duration = durations['short'];
            }
            var layerToast = document.createElement('div');
            layerToast.className = 'layerToastCont';
            layerToast.innerHTML = '<div class="layerToastMessage">' + msg + '</div>';
            layerToast.onclick = function(){
                layerToast && $(layerToast).remove();
                layerToast = null;
            };
            document.body.appendChild(layerToast);
            if(document.documentMode && document.documentMode < 9){
                layerToast.style.marginLeft = -layerToast.clientWidth * 0.5 + 'px';
            }
            var timer = setTimeout(function(){
                $(layerToast).addClass(CLASS_ACTIVE);
                clearTimeout(timer);
            }, 0);
            var timeout = setTimeout(function(){
                clearTimeout(timeout);
                timeout = null;
                layerToast && $(layerToast).remove();
            }, duration);
        }
    };
    $.layer.defaults = {
        ok: "确定",
        cancel: "取消",
        enableIcon: true, // 是否开启显示图标
        layerIcon: 'warn', // 目前拥有：warn、error、question、success
        style: {
            width: 450
        },
        fn: Function.prototype,
    };
})(jQuery);
// $.layer 模块结束