__d(271,function(e,t,r,o){"use strict";var n=t(76),s=t(268),p=t(270),a=(t(54),t(77)),i=t(99),l=t(205),u=t(265),c=u.Map,y=["Title","LeftButton","RightButton"],f=s,v=function(e){return void 0!==e.presentedIndex?e.presentedIndex:e.observedTopOfStack},g=function(e){function t(){var e,r,o,s;babelHelpers.classCallCheck(this,t);for(var p=arguments.length,a=Array(p),u=0;u<p;u++)a[u]=arguments[u];return r=o=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.immediatelyRefresh=function(){o._reset(),o.forceUpdate()},o._reset=function(){o._key=l(),o._reusableProps={},o._components={},o._descriptors={},y.forEach(function(e){o._components[e]=new c,o._descriptors[e]=new c})},o._getReusableProps=function(e,t){var r=o._reusableProps[e];r||(r=o._reusableProps[e]=[]);var n=r[t];return n||(n=r[t]={style:{}}),n},o._updateIndexProgress=function(e,t,r,n){var s,p=n>r?e:1-e,a=t-r,i=t-n;s=a>0&&0===i||i>0&&0===a?o.props.navigationStyles.Interpolators.RightToCenter:a<0&&0===i||i<0&&0===a?o.props.navigationStyles.Interpolators.CenterToLeft:a===i?o.props.navigationStyles.Interpolators.RightToCenter:o.props.navigationStyles.Interpolators.RightToLeft,y.forEach(function(e){var r=this._components[e].get(this.props.navState.routeStack[t]),o=this._getReusableProps(e,t);r&&s[e](o.style,p)&&(o.pointerEvents=0===o.style.opacity?"none":"box-none",r.setNativeProps(o))},o)},o.updateProgress=function(e,t,r){for(var n=Math.max(t,r),s=Math.min(t,r),p=s;p<=n;p++)o._updateIndexProgress(e,p,t,r)},o._getComponent=function(e,t,r){if(o._descriptors[e].includes(t))return o._descriptors[e].get(t);var s=null,p=o.props.routeMapper[e](o.props.navState.routeStack[r],o.props.navigator,r,o.props.navState);if(!p)return null;var a=r===v(o.props.navState),l=a?o.props.navigationStyles.Stages.Center:o.props.navigationStyles.Stages.Left;return s=n.createElement(i,{ref:function(r){o._components[e]=o._components[e].set(t,r)},pointerEvents:a?"box-none":"none",style:l[e]},p),o._descriptors[e]=o._descriptors[e].set(t,s),s},s=r,babelHelpers.possibleConstructorReturn(o,s)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this._reset()}},{key:"render",value:function(){var e=this,t={height:this.props.navigationStyles.General.TotalNavHeight},r=this.props.navState,o=r.routeStack.map(function(t,r){return y.map(function(o){return e._getComponent(o,t,r)})});return n.createElement(i,{key:this._key,style:[d.navBarContainer,t,this.props.style]},o)}}]),t}(n.Component);g.propTypes={navigator:n.PropTypes.object,routeMapper:n.PropTypes.shape({Title:n.PropTypes.func.isRequired,LeftButton:n.PropTypes.func.isRequired,RightButton:n.PropTypes.func.isRequired}).isRequired,navState:n.PropTypes.shape({routeStack:n.PropTypes.arrayOf(n.PropTypes.object),presentedIndex:n.PropTypes.number}),navigationStyles:n.PropTypes.object,style:i.propTypes.style},g.Styles=f,g.StylesAndroid=s,g.StylesIOS=p,g.defaultProps={navigationStyles:f};var d=a.create({navBarContainer:{position:"absolute",top:0,left:0,right:0,backgroundColor:"transparent"}});r.exports=g});