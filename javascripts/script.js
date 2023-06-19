/*!
 * Draggabilly PACKAGED v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */

!function(i,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("jquery")):i.jQueryBridget=e(i,i.jQuery)}(window,function(t,i){"use strict";var c=Array.prototype.slice,e=t.console,p=void 0===e?function(){}:function(t){e.error(t)};function n(d,o,u){(u=u||i||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){u.isPlainObject(t)&&(this.options=u.extend(!0,this.options,t))}),u.fn[d]=function(t){if("string"==typeof t){var i=c.call(arguments,1);return s=i,a="$()."+d+'("'+(r=t)+'")',(e=this).each(function(t,i){var e=u.data(i,d);if(e){var n=e[r];if(n&&"_"!=r.charAt(0)){var o=n.apply(e,s);h=void 0===h?o:h}else p(a+" is not a valid method")}else p(d+" not initialized. Cannot call methods, i.e. "+a)}),void 0!==h?h:e}var e,r,s,h,a,n;return n=t,this.each(function(t,i){var e=u.data(i,d);e?(e.option(n),e._init()):(e=new o(i,n),u.data(i,d,e))}),this},r(u))}function r(t){!t||t&&t.bridget||(t.bridget=n)}return r(i||t.jQuery),n}),function(t,i){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,function(){"use strict";function m(t){var i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}var _,x=!1;function P(t){if(function(){if(!x){x=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(t);var e=E(t);P.isBoxSizeOuter=_=200==m(e.width),i.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=E(t);if("none"==i.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0;i<b;i++)t[y[i]]=0;return t}();var e={};e.width=t.offsetWidth,e.height=t.offsetHeight;for(var n=e.isBorderBox="border-box"==i.boxSizing,o=0;o<b;o++){var r=y[o],s=i[r],h=parseFloat(s);e[r]=isNaN(h)?0:h}var a=e.paddingLeft+e.paddingRight,d=e.paddingTop+e.paddingBottom,u=e.marginLeft+e.marginRight,c=e.marginTop+e.marginBottom,p=e.borderLeftWidth+e.borderRightWidth,f=e.borderTopWidth+e.borderBottomWidth,g=n&&_,l=m(i.width);!1!==l&&(e.width=l+(g?0:a+p));var v=m(i.height);return!1!==v&&(e.height=v+(g?0:d+f)),e.innerWidth=e.width-(a+p),e.innerHeight=e.height-(d+f),e.outerWidth=e.width+u,e.outerHeight=e.height+c,e}}return P}),function(t,i){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",i):"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,function(){function t(){}var i=t.prototype;return i.on=function(t,i){if(t&&i){var e=this._events=this._events||{},n=e[t]=e[t]||[];return-1==n.indexOf(i)&&n.push(i),this}},i.once=function(t,i){if(t&&i){this.on(t,i);var e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this}},i.off=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){var n=e.indexOf(i);return-1!=n&&e.splice(n,1),this}},i.emitEvent=function(t,i){var e=this._events&&this._events[t];if(e&&e.length){e=e.slice(0),i=i||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<e.length;o++){var r=e[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,i)}return this}},i.allOff=function(){delete this._events,delete this._onceEvents},t}),function(i,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("ev-emitter")):i.Unipointer=e(i,i.EvEmitter)}(window,function(o,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindStartEvent=function(t){this._bindStartEvent(t,!0)},e.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},e._bindStartEvent=function(t,i){var e=(i=void 0===i||i)?"addEventListener":"removeEventListener",n="mousedown";o.PointerEvent?n="pointerdown":"ontouchstart"in o&&(n="touchstart"),t[e](n,this)},e.handleEvent=function(t){var i="on"+t.type;this[i]&&this[i](t)},e.getTouch=function(t){for(var i=0;i<t.length;i++){var e=t[i];if(e.identifier==this.pointerIdentifier)return e}},e.onmousedown=function(t){var i=t.button;i&&0!==i&&1!==i||this._pointerDown(t,t)},e.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},e.onpointerdown=function(t){this._pointerDown(t,t)},e._pointerDown=function(t,i){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i))},e.pointerDown=function(t,i){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return e._bindPostStartEvents=function(t){if(t){var i=n[t.type];i.forEach(function(t){o.addEventListener(t,this)},this),this._boundPointerEvents=i}},e._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){o.removeEventListener(t,this)},this),delete this._boundPointerEvents)},e.onmousemove=function(t){this._pointerMove(t,t)},e.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},e.ontouchmove=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerMove(t,i)},e._pointerMove=function(t,i){this.pointerMove(t,i)},e.pointerMove=function(t,i){this.emitEvent("pointerMove",[t,i])},e.onmouseup=function(t){this._pointerUp(t,t)},e.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},e.ontouchend=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerUp(t,i)},e._pointerUp=function(t,i){this._pointerDone(),this.pointerUp(t,i)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i])},e._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},e._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},e.pointerDone=function(){},e.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},e.ontouchcancel=function(t){var i=this.getTouch(t.changedTouches);i&&this._pointerCancel(t,i)},e._pointerCancel=function(t,i){this._pointerDone(),this.pointerCancel(t,i)},e.pointerCancel=function(t,i){this.emitEvent("pointerCancel",[t,i])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(i,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return e(i,t)}):"object"==typeof module&&module.exports?module.exports=e(i,require("unipointer")):i.Unidragger=e(i,i.Unipointer)}(window,function(r,t){function i(){}var e=i.prototype=Object.create(t.prototype);e.bindHandles=function(){this._bindHandles(!0)},e.unbindHandles=function(){this._bindHandles(!1)},e._bindHandles=function(t){for(var i=(t=void 0===t||t)?"addEventListener":"removeEventListener",e=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var o=this.handles[n];this._bindStartEvent(o,t),o[i]("click",this),r.PointerEvent&&(o.style.touchAction=e)}},e._touchActionValue="none",e.pointerDown=function(t,i){this.okayPointerDown(t)&&(this.pointerDownPointer=i,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,i]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},s={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return e.okayPointerDown=function(t){var i=o[t.target.nodeName],e=s[t.target.type],n=!i||e;return n||this._pointerReset(),n},e.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},e.pointerMove=function(t,i){var e=this._dragPointerMove(t,i);this.emitEvent("pointerMove",[t,i,e]),this._dragMove(t,i,e)},e._dragPointerMove=function(t,i){var e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(e)&&this._dragStart(t,i),e},e.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},e.pointerUp=function(t,i){this.emitEvent("pointerUp",[t,i]),this._dragPointerUp(t,i)},e._dragPointerUp=function(t,i){this.isDragging?this._dragEnd(t,i):this._staticClick(t,i)},e._dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,i)},e.dragStart=function(t,i){this.emitEvent("dragStart",[t,i])},e._dragMove=function(t,i,e){this.isDragging&&this.dragMove(t,i,e)},e.dragMove=function(t,i,e){t.preventDefault(),this.emitEvent("dragMove",[t,i,e])},e._dragEnd=function(t,i){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,i)},e.dragEnd=function(t,i){this.emitEvent("dragEnd",[t,i])},e.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},e._staticClick=function(t,i){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,i),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},e.staticClick=function(t,i){this.emitEvent("staticClick",[t,i])},i.getPointerPoint=t.getPointerPoint,i}),function(e,n){"function"==typeof define&&define.amd?define(["get-size/get-size","unidragger/unidragger"],function(t,i){return n(e,t,i)}):"object"==typeof module&&module.exports?module.exports=n(e,require("get-size"),require("unidragger")):e.Draggabilly=n(e,e.getSize,e.Unidragger)}(window,function(r,a,t){function e(t,i){for(var e in i)t[e]=i[e];return t}var n=r.jQuery;function i(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options=e({},this.constructor.defaults),this.option(i),this._create()}var o=i.prototype=Object.create(t.prototype);i.defaults={},o.option=function(t){e(this.options,t)};var s={relative:!0,absolute:!0,fixed:!0};function d(t,i,e){return e=e||"round",i?Math[e](t/i)*i:t}return o._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=e({},this.position);var t=getComputedStyle(this.element);s[t.position]||(this.element.style.position="relative"),this.on("pointerDown",this.onPointerDown),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},o.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},o.dispatchEvent=function(t,i,e){var n=[i].concat(e);this.emitEvent(t,n),this.dispatchJQueryEvent(t,i,e)},o.dispatchJQueryEvent=function(t,i,e){var n=r.jQuery;if(n&&this.$element){var o=n.Event(i);o.type=t,this.$element.trigger(o,e)}},o._getPosition=function(){var t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},o._getPositionCoord=function(t,i){if(-1!=t.indexOf("%")){var e=a(this.element.parentNode);return e?parseFloat(t)/100*e[i]:0}return parseInt(t,10)},o._addTransformPosition=function(t){var i=t.transform;if(0===i.indexOf("matrix")){var e=i.split(","),n=0===i.indexOf("matrix3d")?12:4,o=parseInt(e[n],10),r=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=r}},o.onPointerDown=function(t,i){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[i])},o.dragStart=function(t,i){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[i]),this.animate())},o.measureContainment=function(){var t=this.getContainer();if(t){var i=a(this.element),e=a(t),n=this.element.getBoundingClientRect(),o=t.getBoundingClientRect(),r=e.borderLeftWidth+e.borderRightWidth,s=e.borderTopWidth+e.borderBottomWidth,h=this.relativeStartPosition={x:n.left-(o.left+e.borderLeftWidth),y:n.top-(o.top+e.borderTopWidth)};this.containSize={width:e.width-r-h.x-i.width,height:e.height-s-h.y-i.height}}},o.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},o.onPointerMove=function(t,i,e){this.dispatchJQueryEvent("pointerMove",t,[i,e])},o.dragMove=function(t,i,e){if(this.isEnabled){var n=e.x,o=e.y,r=this.options.grid,s=r&&r[0],h=r&&r[1];n=d(n,s),o=d(o,h),n=this.containDrag("x",n,s),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[i,e])}},o.containDrag=function(t,i,e){if(!this.options.containment)return i;var n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),r=this.containSize[n];return r=d(r,e,"floor"),Math.max(o,Math.min(r,i))},o.onPointerUp=function(t,i){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[i])},o.dragEnd=function(t,i){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[i]))},o.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame(function(){t.animate()})}},o.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},o.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},o.staticClick=function(t,i){this.dispatchEvent("staticClick",t,[i])},o.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},o.enable=function(){this.isEnabled=!0},o.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},o.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},o._init=function(){},n&&n.bridget&&n.bridget("draggabilly",i),i});
/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */;
(function($) {
    $.fn.marquee = function(options) {
        return this.each(function() {
            // Extend the options if any provided
            var o = $.extend({}, $.fn.marquee.defaults, options),
                $this = $(this),
                $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth,
                loopCount = 3,
                playState = 'animation-play-state',
                css3AnimationIsSupported = false,

                // Private methods
                _prefixedEvent = function(element, type, callback) {
                    var pfx = ["webkit", "moz", "MS", "o", ""];
                    for (var p = 0; p < pfx.length; p++) {
                        if (!pfx[p]) type = type.toLowerCase();
                        element.addEventListener(pfx[p] + type, callback, false);
                    }
                },

                _objToString = function(obj) {
                    var tabjson = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            tabjson.push(p + ':' + obj[p]);
                        }
                    }
                    tabjson.push();
                    return '{' + tabjson.join(',') + '}';
                },

                _startAnimationWithDelay = function() {
                    $this.timer = setTimeout(animate, o.delayBeforeStart);
                },

                // Public methods
                methods = {
                    pause: function() {
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, 'paused');
                        } else {
                            // pause using pause plugin
                            if ($.fn.pause) {
                                $marqueeWrapper.pause();
                            }
                        }
                        // save the status
                        $this.data('runningStatus', 'paused');
                        // fire event
                        $this.trigger('paused');
                    },

                    resume: function() {
                        // resume using css3
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, 'running');
                        } else {
                            // resume using pause plugin
                            if ($.fn.resume) {
                                $marqueeWrapper.resume();
                            }
                        }
                        // save the status
                        $this.data('runningStatus', 'resumed');
                        // fire event
                        $this.trigger('resumed');
                    },

                    toggle: function() {
                        methods[$this.data('runningStatus') === 'resumed' ? 'pause' : 'resume']();
                    },

                    destroy: function() {
                        // Clear timer
                        clearTimeout($this.timer);
                        // Unbind all events
                        $this.find("*").addBack().off();
                        // Just unwrap the elements that has been added using this plugin
                        $this.html($this.find('.js-marquee:first').html());
                    }
                };

            // Check for methods
            if (typeof options === 'string') {
                if ($.isFunction(methods[options])) {
                    // Following two IF statements to support public methods
                    if (!$marqueeWrapper) {
                        $marqueeWrapper = $this.find('.js-marquee-wrapper');
                    }
                    if ($this.data('css3AnimationIsSupported') === true) {
                        css3AnimationIsSupported = true;
                    }
                    methods[options]();
                }
                return;
            }

            /* Check if element has data attributes. They have top priority
               For details https://twitter.com/aamirafridi/status/403848044069679104 - Can't find a better solution :/
               jQuery 1.3.2 doesn't support $.data().KEY hence writting the following */
            var dataAttributes = {},
            attr;
            $.each(o, function(key) {
                // Check if element has this data attribute
                attr = $this.attr('data-' + key);
                if (typeof attr !== 'undefined') {
                    // Now check if value is boolean or not
                    switch (attr) {
                        case 'true':
                            attr = true;
                            break;
                        case 'false':
                            attr = false;
                            break;
                    }
                    o[key] = attr;
                }
            });

            // Reintroduce speed as an option. It calculates duration as a factor of the container width
            // measured in pixels per second.
            if (o.speed) {
                o.duration = parseInt($this.width(), 10) / o.speed * 1000;
            }

            // Shortcut to see if direction is upward or downward
            verticalDir = o.direction === 'up' || o.direction === 'down';

            // no gap if not duplicated
            o.gap = o.duplicated ? parseInt(o.gap) : 0;

            // wrap inner content into a div
            $this.wrapInner('<div class="js-marquee"></div>');

            // Make copy of the element
            var $el = $this.find('.js-marquee').css({
                'margin-right': o.gap,
                'float': 'left'
            });

            if (o.duplicated) {
                $el.clone(true).appendTo($this);
            }

            // wrap both inner elements into one div
            $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');

            // Save the reference of the wrapper
            $marqueeWrapper = $this.find('.js-marquee-wrapper');

            // If direction is up or down, get the height of main element
            if (verticalDir) {
                var containerHeight = $this.height();
                $marqueeWrapper.removeAttr('style');
                $this.height(containerHeight);

                // Change the CSS for js-marquee element
                $this.find('.js-marquee').css({
                    'float': 'none',
                    'margin-bottom': o.gap,
                    'margin-right': 0
                });

                // Remove bottom margin from 2nd element if duplicated
                if (o.duplicated) {
		    $this.find('.js-marquee:last').css({
			'margin-bottom': 0
		    });
		}

                var elHeight = $this.find('.js-marquee:first').height() + o.gap;

                // adjust the animation duration according to the text length
                if (o.startVisible && !o.duplicated) {
                    // Compute the complete animation duration and save it for later reference
                    // formula is to: (Height of the text node + height of the main container / Height of the main container) * duration;
                    o._completeDuration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration;

                    // formula is to: (Height of the text node / height of the main container) * duration
                    o.duration = (parseInt(elHeight, 10) / parseInt(containerHeight, 10)) * o.duration;
                } else {
                    // formula is to: (Height of the text node + height of the main container / Height of the main container) * duration;
                    o.duration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration;
                }

            } else {
                // Save the width of the each element so we can use it in animation
                elWidth = $this.find('.js-marquee:first').width() + o.gap;

                // container width
                containerWidth = $this.width();

                // adjust the animation duration according to the text length
                if (o.startVisible && !o.duplicated) {
                    // Compute the complete animation duration and save it for later reference
                    // formula is to: (Width of the text node + width of the main container / Width of the main container) * duration;
                    o._completeDuration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration;

                    // (Width of the text node / width of the main container) * duration
                    o.duration = (parseInt(elWidth, 10) / parseInt(containerWidth, 10)) * o.duration;
                } else {
                    // formula is to: (Width of the text node + width of the main container / Width of the main container) * duration;
                    o.duration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration;
                }
            }

            // if duplicated then reduce the duration
            if (o.duplicated) {
                o.duration = o.duration / 2;
            }

            if (o.allowCss3Support) {
                var elm = document.body || document.createElement('div'),
                    animationName = 'marqueeAnimation-' + Math.floor(Math.random() * 10000000),
                    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
                    animationString = 'animation',
                    animationCss3Str = '',
                    keyframeString = '';

                // Check css3 support
                if (elm.style.animation !== undefined) {
                    keyframeString = '@keyframes ' + animationName + ' ';
                    css3AnimationIsSupported = true;
                }

                if (css3AnimationIsSupported === false) {
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                            var prefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            animationString = prefix + animationString;
                            playState = prefix + playState;
                            keyframeString = '@' + prefix + 'keyframes ' + animationName + ' ';
                            css3AnimationIsSupported = true;
                            break;
                        }
                    }
                }

                if (css3AnimationIsSupported) {
                    animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's infinite ' + o.css3easing;
                    $this.data('css3AnimationIsSupported', true);
                }
            }

            var _rePositionVertically = function() {
                $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? containerHeight + 'px' : '-' + elHeight + 'px') + ')');
            },
            _rePositionHorizontally = function() {
                $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? containerWidth + 'px' : '-' + elWidth + 'px') + ')');
            };

            // if duplicated option is set to true than position the wrapper
            if (o.duplicated) {
                if (verticalDir) {
                    if (o.startVisible) {
                        $marqueeWrapper.css('transform', 'translateY(0)');
                    } else {
                        $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? containerHeight + 'px' : '-' + ((elHeight * 2) - o.gap) + 'px') + ')');
                    }
                } else {
                    if (o.startVisible) {
                        $marqueeWrapper.css('transform', 'translateX(0)');
                    } else {
                        $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? containerWidth + 'px' : '-' + ((elWidth * 2) - o.gap) + 'px') + ')');
                    }
                }

                // If the text starts out visible we can skip the two initial loops
                if (!o.startVisible) {
                  loopCount = 1;
                }
            } else if (o.startVisible) {
                // We only have two different loops if marquee is duplicated and starts visible
                loopCount = 2;
            } else {
                if (verticalDir) {
                    _rePositionVertically();
                } else {
                    _rePositionHorizontally();
                }
            }

            // Animate recursive method
            var animate = function() {
                if (o.duplicated) {
                    // When duplicated, the first loop will be scroll longer so double the duration
                    if (loopCount === 1) {
                        o._originalDuration = o.duration;
                        if (verticalDir) {
                            o.duration = o.direction === 'up' ? o.duration + (containerHeight / ((elHeight) / o.duration)) : o.duration * 2;
                        } else {
                            o.duration = o.direction === 'left' ? o.duration + (containerWidth / ((elWidth) / o.duration)) : o.duration * 2;
                        }
                        // Adjust the css3 animation as well
                        if (animationCss3Str) {
                            animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                        }
                        loopCount++;
                    }
                    // On 2nd loop things back to normal, normal duration for the rest of animations
                    else if (loopCount === 2) {
                        o.duration = o._originalDuration;
                        // Adjust the css3 animation as well
                        if (animationCss3Str) {
                            animationName = animationName + '0';
                            keyframeString = $.trim(keyframeString) + '0 ';
                            animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                        }
                        loopCount++;
                    }
                }

                if (verticalDir) {
                    if (o.duplicated) {

                        // Adjust the starting point of animation only when first loops finishes
                        if (loopCount > 2) {
                            $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? 0 : '-' + elHeight + 'px') + ')');
                        }

                        animationCss = {
                            'transform': 'translateY(' + (o.direction === 'up' ? '-' + elHeight + 'px' : 0) + ')'
                        };
                    } else if (o.startVisible) {
                        // This loop moves the marquee out of the container
                        if (loopCount === 2) {
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                            }
                            animationCss = {
                                'transform': 'translateY(' + (o.direction === 'up' ? '-' + elHeight + 'px' : containerHeight + 'px') + ')'
                            };
                            loopCount++;
                        } else if (loopCount === 3) {
                            // Set the duration for the animation that will run forever
                            o.duration = o._completeDuration;
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                    animationName = animationName + '0';
                                    keyframeString = $.trim(keyframeString) + '0 ';
                                    animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                            }
                            _rePositionVertically();
                        }
                    } else {
                        _rePositionVertically();
                        animationCss = {
                            'transform': 'translateY(' + (o.direction === 'up' ? '-' + ($marqueeWrapper.height()) + 'px' : containerHeight + 'px') + ')'
                        };
                    }
                } else {
                    if (o.duplicated) {

                        // Adjust the starting point of animation only when first loops finishes
                        if (loopCount > 2) {
                            $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? 0 : '-' + elWidth + 'px') + ')');
                        }

                        animationCss = {
                            'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : 0) + ')'
                        };

                    } else if (o.startVisible) {
                        // This loop moves the marquee out of the container
                        if (loopCount === 2) {
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                            }
                            animationCss = {
                                'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')'
                            };
                            loopCount++;
                        } else if (loopCount === 3) {
                            // Set the duration for the animation that will run forever
                            o.duration = o._completeDuration;
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationName = animationName + '0';
                                keyframeString = $.trim(keyframeString) + '0 ';
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                            }
                            _rePositionHorizontally();
                        }
                    } else {
                        _rePositionHorizontally();
                        animationCss = {
                            'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')'
                        };
                    }
                }

                // fire event
                $this.trigger('beforeStarting');

                // If css3 support is available than do it with css3, otherwise use jQuery as fallback
                if (css3AnimationIsSupported) {
                    // Add css3 animation to the element
                    $marqueeWrapper.css(animationString, animationCss3Str);
                    var keyframeCss = keyframeString + ' { 100%  ' + _objToString(animationCss) + '}',
                         $styles = $marqueeWrapper.find('style');

                    // Now add the keyframe animation to the marquee element
                    if ($styles.length !== 0) {
                        // Bug fixed for jQuery 1.3.x - Instead of using .last(), use following
                        $styles.filter(":last").html(keyframeCss);
                    } else {
                        $('head').append('<style>' + keyframeCss + '</style>');
                    }

                    // Animation iteration event
                    _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function() {
                        $this.trigger('finished');
                    });
                    // Animation stopped
                    _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function() {
                        animate();
                        $this.trigger('finished');
                    });

                } else {
                    // Start animating
                    $marqueeWrapper.animate(animationCss, o.duration, o.easing, function() {
                        // fire event
                        $this.trigger('finished');
                        // animate again
                        if (o.pauseOnCycle) {
                            _startAnimationWithDelay();
                        } else {
                            animate();
                        }
                    });
                }
                // save the status
                $this.data('runningStatus', 'resumed');
            };

            // bind pause and resume events
            $this.on('pause', methods.pause);
            $this.on('resume', methods.resume);

            if (o.pauseOnHover) {
                $this.on('mouseenter', methods.pause);
                $this.on('mouseleave', methods.resume);
            }

            // If css3 animation is supported than call animate method at once
            if (css3AnimationIsSupported && o.allowCss3Support) {
                animate();
            } else {
                // Starts the recursive method
                _startAnimationWithDelay();
            }

        });
    }; // End of Plugin
    // Public: plugin defaults options
    $.fn.marquee.defaults = {
        // If you wish to always animate using jQuery
        allowCss3Support: true,
        // works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
        css3easing: 'linear',
        // requires jQuery easing plugin. Default is 'linear'
        easing: 'linear',
        // pause time before the next animation turn in milliseconds
        delayBeforeStart: 1000,
        // 'left', 'right', 'up' or 'down'
        direction: 'left',
        // true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
        // duration in milliseconds of the marquee in milliseconds
        duration: 5000,
        // Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels per second.
        speed: 0,
        // gap in pixels between the tickers
        gap: 20,
        // on cycle pause the marquee
        pauseOnCycle: false,
        // on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
        pauseOnHover: false,
        // the marquee is visible initially positioned next to the border towards it will be moving
        startVisible: false
    };
})(jQuery);

const swalCustomStyle = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-warning btn-lg',
    cancelButton: 'btn btn-primary btn-lg ml-3',
    input: 'border-warning'
  },
  buttonsStyling: false,
});
// function SetCwinHeight() {
//   let iframeid = document.getElementById("mainframe"); //iframe id  
//   // iframeid.height = iframeid.contentDocument.body.offsetHeight;
//   console.log(iframeid.contentDocument.body.offsetHeight)


// if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
//   iframeid.height = iframeid.contentDocument.body.offsetHeight;
// } else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
//   iframeid.height = iframeid.Document.body.scrollHeight;
// }
// };

$(function () {
  $('#mainframe').on('load', function () {
    // let iframeid = document.getElementById("mainframe"); //iframe id  
    this.height = this.contentWindow.document.body.offsetHeight;
    // console.log(this.contentWindow.document.body.offsetHeight +','+ this.contentDocument.body.offsetHeight)
  });

  $('.marquee').marquee({
    duration: 16000,
    gap: 8,
    // // delayBeforeStart: 1500,
    startVisible: true,
    duplicated: true,
    pauseOnHover: true

  });

  $('.toggle-aside').on('click', function () {
    $(this)
      .toggleClass('active')
      .parents()
      .find('.play-aside, .play-game')
      .toggleClass('active');
  });

  var $draggable = $('.touchBar').draggabilly({
    axis: 'y',
    containment: true,
    handle: '.handle'
  });
  // $draggable.draggabilly( 'setPosition', 0, 10 )
  $(window).on("orientationchange", function () {
    $draggable.draggabilly('setPosition', 0, 0).removeClass('on');
  });
  $draggable.on('staticClick', function () {
    $(this).toggleClass('on');
  });
  $draggable.on('dragMove', function () {
    $(this).removeClass('on')
  });

  // if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   $(".play-aside").removeClass('d-none');
  //   $('.touchBar').addClass('d-none');

  // } else {
  //   $(".play-aside").addClass('d-none');
  //   $('.touchBar').removeClass('d-none');
  // }



  // VIP等級 swal
  $('.js-vip').on('click', function () {
    swalCustomStyle.fire({
      title: '- VIP機制 -',
      width: 800,
      padding: '1rem',
      // showCancelButton: true,
      // showConfirmButton: false,
      showCloseButton: true,
      confirmButtonText: '確定',
      html:
        `<div class="table-responsive mt-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">貴賓等級</th>
            <th scope="col">押分yy幣到達</th>
            <th scope="col">每日可贈送yy幣</th>
            <th scope="col">贈點手續費</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">VIP</th>
            <td>500,000</td>
            <td>500,000</td>
            <td>2%</td>
          </tr>
          <tr>
            <th scope="row">VVIP</th>
            <td>5,000,000</td>
            <td>5,000,000</td>
            <td>2%</td>
          </tr>
          <tr>
            <th scope="row">MVIP</th>
            <td>10,000,000</td>
            <td>無上限</td>
            <td>1%</td>
          </tr>
        </tbody>
      </table>
    </div>`,
    })
  });
  // 隱私政策 swal
  $('.footer-nav a:first-child').on('click', function (event) {
    event.preventDefault();
    swalCustomStyle.fire({
      title: '- 隱私政策 -',
      width: 960,
      padding: '1rem',
      confirmButtonText: '確定',
      showCloseButton: true,
      // showClass: {
      //   popup: 'swal2-show',
      // },
      // hideClass: {
      //   popup: 'swal2-hide',
      // },
      // showCancelButton: true,
      // showConfirmButton: false,
      html:
        `
        <div class='text-left px-3' style="max-height: 450px; overflow-y: scroll;">
        <p class='mb-4'>《173yy 遊戲》為服務平台，為提供更完善以及多元的服務及商品，在法令許可下，在此將依個人資料保 護法之規定對您的個人資料蒐集、使用、管理，及提供您的資料給服務供應商或關係企業，以確保提供給您更好的服務品質，並致力監管及確保員工在處理資料時有 絕對的嚴謹及保密性。</p>
        <h5>一、蒐集個人資料的目的</h5>
        <p>使用《173yy 遊戲》時，可能會需求提供一些個人資料，以繼續使用173yy 遊戲之會員相關服務，其主要蒐集個人資料的目的如下：</p>
        <ul>
          <li>核實173yy 遊戲會員持有人身份 – 因而在登記時需向閣下蒐集諸如姓名、身份證號碼、地址、電郵、電話號碼等資料。</li>
          <li>提供173yy 遊戲的服務及支援 - 這些資料包括聯絡資料（地址、電話號碼或電郵等），而為配合您要求的服務或支援，這些資料亦會用於為您提供產品和服務等最新資料。</li>
          <li>在討論區發表意見或著就調查作出回答 - 本公司將蒐集電郵地址或姓名。</li>
          <li>為提供優質的服務進行數據統計 - 有關服務的使用資料可能被用於綜合統計數據和進行分析，有利本公司制訂最適合用戶而且最容易使用的內容。</li>
          <li>市場推廣用途 – 包括直接聯絡您，或透過其他途徑將最新消息通知您。我們致力遵循公司嚴格指引，挑選信譽良好的夥伴提供服務，但本公司的隱私保障並不涵蓋您直接向第三方 （網上拍賣的買方 / 賣方、網上商店或其他連結網站）提供的資料，173yy 遊戲建議您在提供任何個人資料之前，先向有關方面諮詢其守則及指引。</li>
        </ul>
        <h5>二、蒐集的資料內容類別</h5>
        <ul>
          <li>基本資料：如姓名、性別、出生年月日、身分證統一編號、護照號、電話、地址、電子郵件信箱、婚姻、家庭狀況、法定監護人姓名，或其他得以直接或間接識別您個人之資料；並於必要時，將要求供正本或影本查核。</li>
          <li>帳務資料：如金融機構帳號、信用卡號、交易往來資訊，以及其他財務情況等；並於必要時，將要求提供正本或影本查核。</li>
        </ul>
        <h5>三、個人資料利用期間</h5>
        <p>173yy 遊戲得於營運期間內使用您的資料</p>
        <h5>四、個人資料利用地區</h5>
        <p>173yy 遊戲利用您的個人資料區域為全球</p>
        <h5>五、透露所收集到的資料</h5>
        <p>您確認並授權173yy 遊戲保留並儲存您提供的所有資料並置於本公司一個或多個資料庫中。我們將會按照嚴格的保安和保密標準對這些資料庫內的所有資料維持全面控制和保護，並不會透露給第三方，但以下人士或機構除外：</p>
        <ul>
          <li>曾經接受正式訓練處理客戶資料並獲授權之173yy 遊戲僱員。</li>
          <li>提供支援服務的第三方服務供應商。這些供應商受合同約束須遵守本文所列的隱私標準。</li>
          <li>173yy 遊戲按適用的法律、政府或監管規定需要向之透露資料的任何人士。</li>
          <li>在公司業務重整、重組或類似情況發生時，任何獲本公司利益的受託人或承讓人。</li>
          <li>您透過173yy 遊戲服務與之交易的人士或機構，如金流服務、銀行、金融或其他機構等。</li>
          <li>173yy 遊戲如遇有下列情形，將保留公開您個人資訊的權利予特定人：
              <div>
                <ul>
                  <li>173yy 遊戲有足夠理由相信揭露該資訊係屬辨識或與您聯絡所必要。</li>
                  <li>違反173yy 遊戲網站或產品之使用者條款等時；或因您的行為對於173yy 遊戲之網站、權利、產品、其他用戶造成損害或干擾時；或受損害干擾人因而對您採取法律行動時。</li>
                  <li>173yy 遊戲有足夠理由相信您涉及詐欺，或其他違法、違約行為時。◦您所發現任何與173yy 遊戲網站連結的廣告商或其他網站也有可能會蒐集您的個人資料，本隱私權政策並無適用該廣告商或其他網站，也無法控制它們的行為。</li>
                </ul>
              </div>
          </li>
        </ul>
        <h5>六、不提供資料或提供不真實資料的影響</h5>
        <p>加入173yy 遊戲網站會員或申請其他服務時，而有必須填入個人資料時，若您所提供的資料，經他人檢舉或173yy 遊戲發現不足以確認您的身分真實性，173yy 遊戲得暫停 對您的服務；倘經您的補正後，若能確認真實性173yy 遊戲將恢復您的服務，若仍無法確認您的身分真實性，173yy 遊戲將無法處理您的請求。</p>
        <p>於加入173yy 遊戲網站會員或申請其他服務時，有得任意填入個人資料部分時，您可以自由選擇是否提供，但您同時也可能將無法使用需要註冊或需要相關資料方得使用之服務或特 定產品（如訂閱電子報、生日優惠等）；此外若有發生帳號遭冒用、資料遭盜用時，因您未提供或提供不實資料情形時，以致於無法確認您的身分真實性，173yy 遊戲 將無法處理您的請求。</p>
        <h5>七、用戶的選擇</h5>
        <p>173yy 遊戲會不定期透過電郵向用戶提供最新消息或在未經您要求而發生的通訊。 倘若您以後不欲再接收在未經您要求而發出的通訊時，您可以電郵聯絡我們的客戶關係人員，他們將會把您姓名從上述通訊的聯絡名單中刪除。我們只會為提供客戶 服務而保留您的聯絡詳情，例如通知您最新優惠，有關會員服務之改動等等。</p>
        <h5>八、使用"Cookies"收集資料</h5>
        <p>我們可能使用「Cookies檔案」收集用戶對服務的使用資料，這樣有助於用戶再度到訪網站時之用。「Cookies檔案」是由網絡伺服器發出的一小段資 料，儲存於網絡瀏覽器之中，使日後可從該瀏覽器閱讀該段資料。目前，從Cookies檔案收集到的資料用於提高服務的功能。173yy 遊戲服務所提供的資料，是 根據本公司就用戶對服務的累積使用進行分析，然後加以組織和編排的。Cookies檔案有助同時能使登入程序更順暢更快捷，以及保存通話期之間的資料。</p>
        <p>您可以關閉您瀏覽器上的Cookies檔案功能而不影響到您瀏覽本公司網站，但Cookies檔案確實可使我們服務更方便。關閉Cookies檔案功能可 能會造成使用的複雜程度和涉及較多的輸入手續。您亦應留意，若您清除Cookies檔案功能，則可能影響到173yy 遊戲服務的某些功能。</p>
        <h5>九、資料保安</h5>
        <p>我們關注到所收集資料的保安，並已落實措施防止他人擅自查閱或使用該等資料。173yy 遊戲的系統使用適當的保安規約進行鑑別和授權，以保障電子通訊的安全性。儘管如此，對於任何違反保安措施或擅自透露或使用該等資料，我們概不負責。</p>
        <h5>十、用戶張貼注意</h5>
        <ul>
          <li>任何在《173yy 遊戲》可被一般公眾進入的地方，都有可能會被搜尋器索引得到。</li>
          <li>若你選擇於公眾可進入的地方披露個人資料，用戶應加倍小心注意。</li>
          
        </ul>
        <h5>十一、私隱政策的更新</h5>
        <p>我們非常關心用戶的私隱問題，並且知道當本公司提供新的功能或商業服務時，有需要更新本政策，我們會在修改本政策前通知用戶有關修改。</p>
        <h5>十二、其他權利</h5>
        <p>您的個人資料，在經過173yy 遊戲確認係本人下，得主張請求如下事項：</p>
        <ul>
          <li>查詢本公司有否持有您任何個人資料。</li>
          <li>查閱本公司所持有的您的資料。</li>
          <li>要求更正您的資料。</li>
          <li>查明本公司在持有的資料及資料類型方面不時實行的政策及慣例。</li>
          <li>禁止查閱或使用您的資料，並要求獲知173yy 遊戲就任何上述要求所採取的行動，173yy 遊戲會保留權利就遵循上述的要求而收取合理的費用。</li>
        </ul>
        </div>
        `
    })
  });
  // 服務條款 swal
  $('.footer-nav a:nth-child(2)').on('click', function (event) {
    event.preventDefault();
    swalCustomStyle.fire({
      title: '- 服務條款 -',
      width: 960,
      padding: '1rem',
      confirmButtonText: '確定',
      showCloseButton: true,
      html:
        `
        <div class='text-left px-3' style="max-height: 450px; overflow-y: scroll;">
        <p class='mb-4'>為保障會員（以下簡稱消費者）使用173yy遊戲平台（以下簡稱企業經營者）提供之遊戲服務（以下簡稱本遊戲）的相關權益，請於使用本遊戲之服務前，詳細閱讀以下規定。由於此處之條款隨時可能變更，為保障消費者的權益，敬請定期查閱！</p>
        <h5>第一條、申請線上遊戲服務</h5>
        <p>消費者瞭解一旦消費者按下「我同意」之按鍵，即表示消費者已經詳細審閱並瞭解本合約書的所有條款達三日以上，並願意完全遵守本合約書與本遊戲相關之遊戲管理規章、規則。</p>
        <p>本遊戲服務之申請，若消費者為無行為能力人，應由其法定代理人為之；若為限制行為能力人，應得法定代理人之同意。</p>
        <p>消費者對本合約書之同意及其他意思表示，均視為已取得法定代理人之同意或符合法律行為之要件。</p>
        <h5>第二條、法定代理人</h5>
        <p>消費者為限制行為能力人者，本契約訂定時，應經消費者之法定代理人同意，本契約始生效力；消費者為無行為能力人者，本契約之訂定，應由消費者之法定代理人代為之。</p>
        <p>若有限制行為能力人未經同意或無行為能力人未由法定代理人代為付費購買點數致生法定代理人主張退費時，法定代理人得依官網公告流程，備妥證明文件並提出申請，經企業經營者確認後，退還消費者未使用之遊戲費用。</p>
        <p>企業經營者應於官網首頁、遊戲登入頁面或購買頁面以中文明顯標示，若消費者為限制行為能力人或無行為能力人，除應符合第一項規定外，並應於消費者之法定代理人閱讀、瞭解並同意本契約之所有內容後，方得使用本遊戲服務，本契約條款變更時亦同。</p>
        <h5>第三條、契約之內容</h5>
        <p>以下視為本契約之一部分，與本契約具有相同之效力：</p>
        <ul>
          <li>企業經營者有關本服務之廣告或宣傳內容。</li>
          <li>費率表及遊戲管理規則、規章。</li>
        </ul>
        <p>前項契約內容相互間有衝突者，應為消費者有利之解釋。</p>
        <h5>第四條、契約解除權規定</h5>
        <p>消費者得於開始遊戲後七日內，以書面告知企業經營者解除本契約，消費者無需說明理由及負擔任何費用。</p>
        <p>前項情形，消費者扣除必要成本30%後得就未使用之付費購買點數向企業經營者請求退費。</p>
        <h5>第五條、遊戲登錄</h5>
        <p>消費者申請使用本遊戲，應登錄與身分証明文件相符之個人資料。消費者所登錄之個人資料，有錯誤或已變更時，應立即更正之。</p>
        <p>如消費者未提供正確之個人資料或原提供之資料已不符合真實而未更新，企業經營者得於消費者提供真實資料或更新資料前，暫停本服務（包含但不限於暫停消費者遊戲進行及遊戲歷程查詢之服務）。</p>
        <p>如消費者未提供正確之個人資料或原提供之資料已不符合真實而未更新，企業經營者無須對消費者因本合約所發生的任何損害負責。</p>
        <p>消費者應確保留存於企業經營者電子郵件地址之正確，若有變更，消費者應即時通知企業經營者。企業經營者以消費者所留存之電子郵件地址為本合約相關通知之發出時，即視為已合法送達。</p>
        <p>消費者得於開始遊戲後七日內，以電子郵件或書面告知企業經營者解除本契約，消費者無需說明理由及負擔任何費用。解除契約後，消費者得就未使用之儲值向企業經營者請求退費。</p>
        <p>消費者就前項契約之解除，需負擔回復原狀之義務（包含但不限於刪除消費者之遊戲帳號、角色、電磁紀錄等）。</p>
        <h5>第六條、計費標準</h5>
        <p>費率調整時，企業經營者應於預定調整生效日三十日前於遊戲網站、遊戲進行中及遊戲登入頁面公告；若消費者於註冊帳號時已登錄電子郵件者，並以電子郵件通知消費者。</p>
        <p>費率如有調整時，應自調整生效日起按新費率計收；若新費率高於舊費率時，消費者在新費率生效日前已於遊戲網站中登錄之儲值應依舊費率計收。</p>
        <h5>第七條、本遊戲應載明之資訊</h5>
        <p>企業經營者應於官網首頁、遊戲登入頁面或購買頁面及遊戲套件包裝上載明以下事項：</p>
        <ul>
          <li>依遊戲軟體分級管理辦法規定標示遊戲分級級別及禁止或適合使用之年齡層。</li>
          <li>進行本遊戲服務之最低軟硬體需求。</li>
          <li>有提供安全裝置者，其免費或付費資訊。</li>
          <li>本遊戲不提供「現金交易賭博」，也沒有機會贏得現金或實體獎品。</li>
          <li>在社交類遊戲中的練習狀況或成就，不代表日後在「現金交易賭博」中會獲得成功。</li>
          <li>遊戲幣一經購入後無法以任何理由退換現金。</li>
        </ul>
        <h5>第八條、契約之生效</h5>
        <p>消費者於契約審閱期過後初次註冊帳號，進入顯示本契約條款之網頁，並按「同意」之選項後，即推定消費者同意本契約條款之規定。</p>
        <p>本合約若任何一條無效，不影響其他部份之效力。</p>
        <h5>第九條、帳號與密碼之使用</h5>
        <p>企業經營者於消費者完成註冊程序後，應核發一組帳號及密碼；該組帳號一經設定即不得變更，且僅供消費者使用。消費者不得將該組帳號、密碼轉讓或出借予第三人使用，如因而產生糾紛，由消費者自行負責。</p>
        <p>前項之密碼得依企業經營者提供之修改機制進行變更。企業經營者人員(含客服人員、遊戲管理員)絕不會主動詢問消費者之密碼。消費者就本條之帳號及密碼的保管負全責，如因保管不周致帳號、密碼遭他人非法使用，此屬可歸責於消費者之情形，亦由消費者自行負責。</p>
        <p>本遊戲之帳號、密碼需由消費者自行保管，若因消費者故意或過失所引起的帳號損失相關問題，消費者應自行承擔責任，企業經營者亦無法提供協助。</p>
        <h5>第十條、帳號與密碼之非法使用通知與處理</h5>
        <p>任一方發現第三人非法使用消費者之帳號，或有使用安全遭異常破壞之情形時，應立即通知對方。企業經營者接獲消費者通知，或企業經營者通知消費者後，經消費者確認有前述情事，企業經營者得暫停該組帳號或密碼之使用權限，並更換新帳號或密碼予消費者。</p>
        <p>前項情形，企業經營者應返還消費者已扣除之儲值，或補償相當之遊戲費用，但可歸責於消費者，不在此限。</p>
        <h5>第十一條、電磁紀錄被不當移轉時之處理方式</h5>
        <p>消費者如發現帳號、密碼被非法使用，且遊戲電磁紀錄遭不當移轉時，應立即通知企業經營者查證，經企業經營者以檢視IP位址等方式查證並核對消費者之個人身分無誤後，企業經營者得暫時凍結該組帳號，並限制相關線上遊戲使用人就本服務之使用權利。</p>
        <p>企業經營者如知悉前項電磁紀錄移轉之歷程或持有該電磁紀錄第三人之身分資料，企業經營者應於暫時限制遊戲使用權利之時起，即刻以電子郵件通知持有前項電磁紀錄之第三人提出說明。如該第三人未於接獲通知時起七日內提出說明，企業經營者得直接回復遭不當移轉之電磁紀錄予消費者，並於回復後解除對相關線上遊戲使用人之限制。</p>
        <p>持有第一項電磁紀錄之第三人不同意企業經營者前項之處理，得依報案程序，循司法途徑處理。</p>
        <p>企業經營者依第一項規定限制消費者之使用權時，在限制使用期間內，企業經營者不得向消費者收取費用。</p>
        <p>消費者如有申告不實之情形致生企業經營者或其他線上遊戲使用人權利受損時，應負一切法律責任。</p>
        <h5>第十二條、遊戲歷程之保存與查詢</h5>
        <p>若本遊戲企業經營者系統可得提供相關電磁紀錄之保存功能，企業經營者應保存消費者之個人遊戲歷程紀錄，且保存期間為三十天，以供消費者查詢。如逾電磁紀錄保存期限三十天者，恕企業經營者無法受理消費者之查詢申請。</p>
        <p>消費者得以書面、網路，或親自至企業經營者之服務中心申請調閱消費者之個人遊戲歷程，且須提出與身份証明文件相符之個人資料以供查驗，企業經營者得酌收查詢服務費用（不得超過新台幣200元）。</p>
        <p>企業經營者接獲消費者之查詢申請，應提供第一項所列之消費者個人遊戲歷程，並於七日內以光碟、磁片或檔案等儲存媒介以書面或電子郵件方式提供資料。</p>
        <h5>第十三條、個人資料</h5>
        <p>關於個人資料之保護，依相關法令規定處理。</p>
        <p>於法令許可範圍內，企業經營者或其關係企業或合作夥伴，得使用消費者之個人資訊以提供消費者其他服務，包括但不限於提供企業經營者之會員電子報。</p>
        <p>消費者同意企業經營者得就消費者之個人資料作成會員統計資料。如該統計資料不涉及揭露消費者之個人身分，消費者同意並允許企業經營者為任何合法公開之使用。</p>
        <p>於下列情形發生時，企業經營者得依法公開消費者之個人資訊或遊戲歷程：</p>
        <ul>
          <li>應法令或相關政府機關之要求。</li>
          <li>保障企業經營者之財產及權益。</li>
          <li>緊急情況下為保障企業經營者會員或公眾人身安全與權益時。</li>
          <li>第三人相關之遊戲歷程，經企業經營者依法提供時。</li>
        </ul>
        <h5>第十四條、電磁記錄</h5>
        <p>本遊戲之所有電磁紀錄均屬企業經營者所有，企業經營者並應維持消費者相關電磁紀錄之完整。</p>
        <p>消費者對於前項電磁記錄有支配之權利。</p>
        <p>消費者了解本遊戲之所有電磁紀錄，僅為娛樂過程中提供之遊戲樂趣與體驗，並不具有金錢交易價值。</p>
        <h5>第十五條、資訊公開</h5>
        <p>企業經營者應於遊戲網站上提供本遊戲相關資訊，並定期更新。</p>
        <h5>第十六條、連線品質</h5>
        <p>企業經營者各項系統設備因預先計畫所需之系統維護停機，應於七日前於遊戲網站中公告，且於消費者登入時通知，並於遊戲進行中發佈停機訊息。</p>
        <p>企業經營者應確保其系統設備，無發生錯誤、畫面暫停、遲滯、中斷或不能進行連線的情形。如因而致不能提供消費者服務時，企業經營者應返還消費者已扣除之儲值，或免收相當之遊戲費用，或遞延消費者得進行遊戲之時間。</p>
        <p>若因不可歸責於企業經營者所造成系統障礙、機線阻斷，以致發生錯誤、遲滯、中斷或不能傳遞而造成損害時，企業經營者將不負賠償責任。</p>
        <h5>第十七條、系統安全</h5>
        <p>企業經營者應依本契約之規定負有於提供本服務時，維護其自身電腦系統，符合當時科技或專業水準可合理期待之安全性。</p>
        <p>電腦系統或電磁記錄受到破壞，或電腦系統運作異常時，企業經營者應於採取合理之措施後儘速予以回復。</p>
        <p>企業經營者違反前二項規定，致生消費者損害時，應依消費者之受損害情形，負損害賠償責任，但企業經營者能證明其無過失者，得減輕其賠償責任。</p>
        <p>企業經營者電腦系統發生第二項所稱情況時，於完成修復並正常運作之前，企業經營者不得向消費者收取費用。</p>
        <p>若企業經營者伺服器超載致有電磁紀錄無法寫入或相類似情況發生時，企業經營者得重開伺服器，將本遊戲回復至伺服器未發生狀況前之狀態。</p>
        <h5>第十八條、程式漏洞</h5>
        <p>因遊戲程式漏洞致消費者受損時，企業經營者應依消費者之受損害情形，負損害賠償責任。但企業經營者證明其無過失者，得減輕其賠償責任。</p>
        <h5>第十九條、遊戲管理規則</h5>
        <p>為規範遊戲進行之方式，企業經營者應訂立合理公平之遊戲管理規則，消費者應遵守企業經營者公告之遊戲管理規則、一切國際網際網路之規定與慣例，並應對其透過本服務傳輸之一切內容負責。</p>
        <p>消費者保證不得於本服務中公佈、傳送任何毀謗、不實、猥褻、不法或侵害他人相關權益、權利、智慧財產權之言論或資訊。</p>
        <p>遊戲管理規則之變更應依第二十三條之程序為之。</p>
        <p>遊戲管理規則有下列情形之一者，其規定無效：</p>
        <ul>
          <li>抵觸本契約之規定。</li>
          <li>剝奪或限制消費者之契約上權利。但企業經營者依第二十一條之規定處理者，不在此限。</li>
        </ul>
        <h5>第二十條、違反遊戲管理規則之處理</h5>
        <p>除本契約另有規定外，有事實足證消費者於本遊戲中違反遊戲管理規則時，企業經營者應於遊戲網站或遊戲進行中公告，並以線上即時通訊方式或電子郵件通知消費者。經企業經營者通知改善而未改善者，企業經營者得依遊戲管理規則，按其情節輕重限制消費者之遊戲使用權利。</p>
        <p>企業經營者依遊戲管理規則停止消費者進行遊戲之權利，每次不得超過七日。</p>
        <p>除構成契約終止事由外，企業經營者依遊戲管理規則對消費者所為之處置，不得影響消費者依本契約應享之權利。</p>
        <h5>第二十一條、申訴權利</h5>
        <p>消費者不滿意企業經營者提供之連線品質、遊戲管理、費用計費、其他相關之服務品質，或對企業經營者依遊戲管理規則之處置不服時，得於收到通知之翌日起七日內至企業經營者之服務中心或以電子郵件或書面提出申訴，企業經營者應於接獲申訴後，於十五日內回覆處理結果。</p>
        <p>企業經營者應於遊戲網站或遊戲管理規則中明訂申訴服務管道與電子郵件位址。</p>
        <h5>第二十二條、契約之變更</h5>
        <p>企業經營者修改本契約時，應於遊戲網站首頁及遊戲之登入頁面公告之，並以書面或電子郵件通知消費者。</p>
        <p>企業經營者未依前項進行公告及通知者，其契約之變更無效。消費者於第一項通知到達後十五日內：</p>
        <ul>
          <li>消費者未為反對之表示或繼續使用本服務者，視為消費者接受企業經營者契約變更之內容。</li>
          <li>消費者為反對之表示者，視為消費者對企業經營者終止本契約之通知。</li>
        </ul>
        <h5>第二十三條、契約之終止及退費</h5>
        <p>消費者得隨時通知企業經營者終止本契約。</p>
        <p>契約終止時，企業經營者於扣除必要成本30%後，應於三十日內將消費者未使用之儲值以現金、匯票或掛號寄發支票方式退還消費者未使用之儲值。</p>
        <p>消費者有下列重大情事之一者，企業經營者得於通知消費者後，立即終止本契約：</p>
        <ul>
          <li>利用任何系統或工具對企業經營者電腦系統之惡意攻擊或破壞。</li>
          <li>以利用外掛程式、病毒程式、遊戲程式漏洞或其他違反公平合理之方式進行遊戲。</li>
          <li>經司法機關查獲從事任何不法之行為。</li>
        </ul>
        <p>企業經營者對前項事實認定產生錯誤或無法舉證時，企業經營者應對消費者因終止契約所生之損害負賠償責任。</p>
        <h5>第二十四條、送達</h5>
        <p>有關本契約所有事項之通知，消費者同意企業經營者得以消費者登錄之連絡地址或電子郵件地址為送達。</p>
        <p>前項登錄地址若有變更，消費者應立即通知企業經營者。如怠於為地址變更之通知或因其他事由致通知無法到達或拒收時，以企業經營者通知發出時，視為已合法送達。</p>
        <p>因消費者之故意或過失致企業經營者無法為送達者，企業經營者對消費者因無法送達所致之損害不負任何賠償責任。</p>
        <h5>第二十五條、準據法</h5>
        <p>本契約以中華民國法律為準據法。</p>
        <h5>第二十六條、管轄法院</h5>
        <p>因本契約涉及的一切爭訟，雙方合意以臺灣台北地方法院為第一審管轄法院。</p>
        </div>
        `
    })
  });


  // VIP進度條
  let nowNum = $('.progress-bar').data('nownum')
    , firstNum = $('.vip-level dd:first-child').find('.num').text().replace(/,/g, "")
    , lastNum = $('.vip-level dd:last-child').find('.num').text().replace(/,/g, "");
  if (firstNum == false) {
    firstNum = 0
  }
  let w = (nowNum - firstNum) / (lastNum - firstNum);
  $('.progress-bar').css('width', w * 100 + '%');
  // console.log(firstNum, lastNum);

  $('.link-chat').on('click', function (event) {
    event.preventDefault();
    $('.chat').addClass('open')
  });
  $('.chat-close').on('click', function (event) {
    event.preventDefault();
    $('.chat').removeClass('open')
  });

  //表單驗証
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
});

//# sourceMappingURL=script.js.map
