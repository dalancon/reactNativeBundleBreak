__d(195,function(e,t,n,s){"use strict";var a=function(){function e(){babelHelpers.classCallCheck(this,e),this._parts=[]}return babelHelpers.createClass(e,[{key:"append",value:function(e,t){this._parts.push([e,t])}},{key:"getParts",value:function(){return this._parts.map(function(e){var t=babelHelpers.slicedToArray(e,2),n=t[0],s=t[1],a='form-data; name="'+n+'"',r={"content-disposition":a};return"object"==typeof s?("string"==typeof s.name&&(r["content-disposition"]+='; filename="'+s.name+'"'),"string"==typeof s.type&&(r["content-type"]=s.type),babelHelpers.extends({},s,{headers:r,fieldName:n})):{string:String(s),headers:r,fieldName:n}})}}]),e}();n.exports=a});