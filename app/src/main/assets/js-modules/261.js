__d(261,function(e,t,i,n){"use strict";var r=t(262),s=t(263),u=t(264),a=t(209),o=t(22),h=t(18),l=r.AT_TARGET,v=r.BUBBLING_PHASE,_=r.CAPTURING_PHASE,p=new a(["willfocus","didfocus"]),c=function(){function e(){babelHelpers.classCallCheck(this,e),this._bubbleEventEmitter=new s(this),this._captureEventEmitter=new s(this),this._currentRoute=null,this.__node=new u(this),this._emitCounter=0,this._emitQueue=[],this.addListener("willfocus",this._onFocus),this.addListener("didfocus",this._onFocus)}return babelHelpers.createClass(e,[{key:"appendChild",value:function(e){this.__node.appendChild(e.__node)}},{key:"addListener",value:function(e,t,i){p.has(e)&&(i=!1);var n=i?this._captureEventEmitter:this._bubbleEventEmitter;return n?n.addListener(e,t,this):{remove:o}}},{key:"emit",value:function(e,t,i){var n=this;if(this._emitCounter>0){var s=Array.prototype.slice.call(arguments);return void this._emitQueue.push(s)}if(this._emitCounter++,p.has(e))this.__emit(e,t,null,{defaultPrevented:!1,eventPhase:l,propagationStopped:!0,target:this});else{for(var u=[this],a=this.parent;a;)u.unshift(a),a=a.parent;var o=!1,h=!1,c=function(e){o=o||e.isPropagationStopped(),h=h||e.defaultPrevented};u.some(function(i){if(o)return!0;var r={defaultPrevented:h,eventPhase:_,propagationStopped:o,target:n};i.__emit(e,t,c,r)},this),u.reverse().some(function(i){if(o)return!0;var r={defaultPrevented:h,eventPhase:v,propagationStopped:o,target:n};i.__emit(e,t,c,r)},this)}if(i){var d=r.pool(e,this,t);o&&d.stopPropagation(),h&&d.preventDefault(),i.call(this,d),d.dispose()}for(this._emitCounter--;this._emitQueue.length;){var s=this._emitQueue.shift();this.emit.apply(this,s)}}},{key:"dispose",value:function(){this._bubbleEventEmitter&&this._bubbleEventEmitter.removeAllListeners(),this._captureEventEmitter&&this._captureEventEmitter.removeAllListeners(),this._bubbleEventEmitter=null,this._captureEventEmitter=null,this._currentRoute=null}},{key:"__emit",value:function(e,t,i,n){var r;switch(n.eventPhase){case _:r=this._captureEventEmitter;break;case l:r=this._bubbleEventEmitter;break;case v:r=this._bubbleEventEmitter;break;default:h(!1,"invalid event phase %s",n.eventPhase)}n.target===this&&(n.eventPhase=l),r&&r.emit(e,t,i,n)}},{key:"_onFocus",value:function(e){h(e.data&&e.data.hasOwnProperty("route"),'event type "%s" should provide route',e.type),this._currentRoute=e.data.route}},{key:"parent",get:function(){var e=this.__node.getParent();return e?e.getValue():null}},{key:"top",get:function(){for(var e=null,t=this.__node.getParent();t;)e=t.getValue(),t=t.getParent();return e}},{key:"currentRoute",get:function(){return this._currentRoute}}]),e}();i.exports=c});