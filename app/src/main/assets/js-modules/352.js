__d(352,function(t,i,n,e){"use strict";function s(t,i){var n=t.navigationState,e=i.layout,s=i.position,a=i.progress,r=i.scenes;return{layout:e,navigationState:n,position:s,progress:a,scenes:r,scene:r.find(o)}}function a(t){return!t.isStale}function o(t){return t.isActive}var r=i(293),p=i(300),l=i(350),u=i(353),h=i(76),c=i(77),v=i(99),d=h.PropTypes,g={duration:250,easing:p.inOut(p.ease),timing:r.timing},_=function(t){function i(t,n){babelHelpers.classCallCheck(this,i);var e=babelHelpers.possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,t,n)),a={height:new r.Value(0),initHeight:0,initWidth:0,isMeasured:!1,width:new r.Value(0)};return e.state={layout:a,position:new r.Value(e.props.navigationState.index),progress:new r.Value(1),scenes:u([],e.props.navigationState)},e._prevTransitionProps=null,e._transitionProps=s(t,e.state),e}return babelHelpers.inherits(i,t),babelHelpers.createClass(i,[{key:"componentWillMount",value:function(){this._onLayout=this._onLayout.bind(this),this._onTransitionEnd=this._onTransitionEnd.bind(this)}},{key:"componentWillReceiveProps",value:function(t){var i=this,n=u(this.state.scenes,t.navigationState,this.props.navigationState);if(n!==this.state.scenes){var e=babelHelpers.extends({},this.state,{scenes:n});this._prevTransitionProps=this._transitionProps,this._transitionProps=s(t,e);var a=e.position,o=e.progress,p=t.configureTransition?t.configureTransition(this._transitionProps,this._prevTransitionProps):null,l=babelHelpers.extends({},g,p),h=l.timing;delete l.timing,o.setValue(0);var c=[h(o,babelHelpers.extends({},l,{toValue:1}))];t.navigationState.index!==this.props.navigationState.index&&c.push(h(a,babelHelpers.extends({},l,{toValue:t.navigationState.index}))),this.setState(e,function(){t.onTransitionStart&&t.onTransitionStart(i._transitionProps,i._prevTransitionProps),r.parallel(c).start(i._onTransitionEnd)})}}},{key:"render",value:function(){return h.createElement(v,{onLayout:this._onLayout,style:[b.main,this.props.style]},this.props.render(this._transitionProps,this._prevTransitionProps))}},{key:"_onLayout",value:function(t){var i=t.nativeEvent.layout,n=i.height,e=i.width;if(this.state.layout.initWidth!==e||this.state.layout.initHeight!==n){var a=babelHelpers.extends({},this.state.layout,{initHeight:n,initWidth:e,isMeasured:!0});a.height.setValue(n),a.width.setValue(e);var o=babelHelpers.extends({},this.state,{layout:a});this._transitionProps=s(this.props,o),this.setState(o)}}},{key:"_onTransitionEnd",value:function(){var t=this,i=this._prevTransitionProps;this._prevTransitionProps=null;var n=babelHelpers.extends({},this.state,{scenes:this.state.scenes.filter(a)});this._transitionProps=s(this.props,n),this.setState(n,function(){t.props.onTransitionEnd&&t.props.onTransitionEnd(t._transitionProps,i)})}}]),i}(h.Component);_.propTypes={configureTransition:d.func,navigationState:l.navigationState.isRequired,onTransitionEnd:d.func,onTransitionStart:d.func,render:d.func.isRequired};var b=c.create({main:{flex:1}});n.exports=_});