"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=f(function(q,a){
var o=require('@stdlib/assert-is-object/dist'),v=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/assert-has-own-property/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e,s){var t,n;if(!o(r))throw new TypeError(u('null3L',r));if(!v(e))throw new TypeError(u('null2H',e));for(n in r)if(l(r,n)&&(t=e.call(s,r[n],n,r),t))return!0;return!1}a.exports=m
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
