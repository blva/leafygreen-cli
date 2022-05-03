(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8433],{56921:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});r(27378);var t=r(55492),l=r(91949),a=r(23831),o={variant:{type:"select",options:Object.values(t.$),default:t.$.Info,label:"Variant"},dismissible:{type:"boolean",default:!1,label:"Dismissible"},children:{type:"area",default:"To avoid disrupting majority writes, new members are now added to replica sets as priority=0, votes=0 until they reach secondary state, after which Cloud Manager automatically updates the configuration to match the priority and votes value specified in the deployment.",label:"Children"}};function i(){return(0,a.jsx)(l.Z,{knobsConfig:o},(function(e){return(0,a.jsx)(t.Z,e)}))}},52209:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/banner/example",function(){return r(56921)}])},58702:function(e,n){"use strict";var r=60103,t=60106,l=60107,a=60108,o=60114,i=60109,c=60110,s=60112,u=60113,f=60120,b=60115,d=60116,p=60121,g=60122,y=60117,h=60129,m=60131;if("function"===typeof Symbol&&Symbol.for){var v=Symbol.for;r=v("react.element"),t=v("react.portal"),l=v("react.fragment"),a=v("react.strict_mode"),o=v("react.profiler"),i=v("react.provider"),c=v("react.context"),s=v("react.forward_ref"),u=v("react.suspense"),f=v("react.suspense_list"),b=v("react.memo"),d=v("react.lazy"),p=v("react.block"),g=v("react.server.block"),y=v("react.fundamental"),h=v("react.debug_trace_mode"),m=v("react.legacy_hidden")}function x(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case l:case o:case a:case u:case f:return e;default:switch(e=e&&e.$$typeof){case c:case s:case d:case b:case i:return e;default:return n}}case t:return n}}}n.isFragment=function(e){return x(e)===l}},19185:function(e,n,r){"use strict";e.exports=r(58702)},55492:function(e,n,r){"use strict";r.d(n,{$:function(){return B},Z:function(){return J}});var t=r(27378),l=r(73007),a=r.n(l),o=r(4951),i=r.n(o),c=r(67604),s=r.n(c),u=r(81635),f=r.n(u),b=r(47364),d=r.n(b),p=r(17231),g=r(79303),y=r(37414),h=r(23831);function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},v.apply(this,arguments)}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O,w,j,C,k,D,N,z,P,_,I,L,S,Z,R,$,E,T,M=["variant","dismissible","onClose","image","children","className"],B={Info:"info",Warning:"warning",Danger:"danger",Success:"success"},W=(0,p.css)(O||(O=x(["\n  position: relative;\n  display: flex;\n  min-height: 40px;\n  padding: 10px 12px 10px 20px;\n  border-width: 1px 1px 1px 0px;\n  border-style: solid;\n  border-radius: 12px;\n  font-size: 13px;\n  line-height: 20px;\n  font-family: 'Euclid Circular A', Helvetica, Arial, sans-serif; // TODO: Refresh \u2013 remove when fonts are updated\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 13px;\n    top: -1px;\n    bottom: -1px;\n    left: 0px;\n    border-radius: 12px 0px 0px 12px;\n  }\n"]))),H=(0,p.css)(w||(w=x(["\n  &:focus {\n    color: ",";\n    outline: 2px solid ",";\n    border: 2px solid ",";\n  }\n"])),g.D.gray.dark3,g.D.blue.light1,g.D.white),A=(0,p.css)(j||(j=x(["\n  flex-shrink: 0;\n"]))),V=(0,p.css)(C||(C=x(["\n  cursor: pointer;\n"]))),X=(0,p.css)(k||(k=x(["\n  // this margin is set to control text alignment with the base of the renderedImage\n  margin-top: 3px;\n  margin-bottom: 3px;\n\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n"]))),G=(m(Z={},B.Info,{body:(0,p.css)(D||(D=x(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.blue.dark2,g.D.blue.light2,g.D.blue.base,g.D.blue.light3,g.D.blue.base),dismissButton:(0,p.css)(N||(N=x(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.blue.dark2,g.D.blue.dark2,g.D.blue.light2,g.D.blue.light2)}),m(Z,B.Warning,{body:(0,p.css)(z||(z=x(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.yellow.dark2,g.D.yellow.light2,g.D.yellow.base,g.D.yellow.light3,g.D.yellow.base),dismissButton:(0,p.css)(P||(P=x(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.yellow.dark2,g.D.yellow.dark2,g.D.yellow.light2,g.D.yellow.light2)}),m(Z,B.Danger,{body:(0,p.css)(_||(_=x(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.red.dark2,g.D.red.light2,g.D.red.base,g.D.red.light3,g.D.red.base),dismissButton:(0,p.css)(I||(I=x(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.red.dark2,g.D.red.dark2,g.D.red.light2,g.D.red.light2)}),m(Z,B.Success,{body:(0,p.css)(L||(L=x(["\n      color: ",";\n      border-color: ",";\n      border-left-color: ",";\n      background-color: ",";\n\n      &:before {\n        background: linear-gradient(\n          to left,\n          transparent 6px,\n          "," 6px\n        );\n      }\n    "])),g.D.green.dark2,g.D.green.light2,g.D.green.base,g.D.green.light3,g.D.green.dark1),dismissButton:(0,p.css)(S||(S=x(["\n      color: ",";\n\n      &:active,\n      &:hover {\n        color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:focus {\n        &:before {\n          background-color: ",";\n        }\n      }\n    "])),g.D.green.dark2,g.D.green.dark2,g.D.green.light2,g.D.green.light2)}),Z),F=(m(R={},B.Info,{color:g.D.blue.base,icon:i()}),m(R,B.Warning,{color:g.D.yellow.dark2,icon:a()}),m(R,B.Danger,{color:g.D.red.base,icon:s()}),m(R,B.Success,{color:g.D.green.dark1,icon:f()}),R),q=function(e,n){var r={marginLeft:void 0,marginRight:void 0};return e?(r.marginLeft="17px",r.marginRight="4px",n&&(r.marginRight="".concat(28,"px"))):(r.marginLeft="13px",r.marginRight="10px",n&&(r.marginRight="".concat(32,"px"))),(0,p.css)($||($=x(["\n    align-self: center;\n    flex-grow: 1;\n    margin-left: ",";\n    margin-right: ",";\n  "])),r.marginLeft,r.marginRight)};function J(e){var n=e.variant,r=void 0===n?B.Info:n,l=e.dismissible,a=void 0!==l&&l,o=e.onClose,i=void 0===o?function(){}:o,c=e.image,s=e.children,u=e.className,f=function(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}(e,M),b=F[r],g=b.icon,m=b.color,O=c?t.cloneElement(c,{className:X}):(0,h.jsx)(g,{fill:m,className:(0,p.cx)(A,(0,p.css)(E||(E=x(["\n          margin-top: 3px;\n        "]))))});return(0,h.jsx)("div",v({role:"alert",className:(0,p.cx)(W,G[r].body,u)},f),O,(0,h.jsx)("div",{className:q(null!=c,a)},s),a&&(0,h.jsx)(y.Z,{className:(0,p.cx)(A,V,(0,p.css)(T||(T=x(["\n              margin-top: -3px;\n              left: 8px;\n            "]))),G[r].dismissButton,H),"aria-label":"Close Message",onClick:i},(0,h.jsx)(d(),null)))}},73007:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,y=e["aria-label"],h=e["aria-labelledby"],m=e.fill,v=e.role,x=void 0===v?"img":v,O=c(e,d),w=r.css(u||(u=s(["\n    color: ",";\n  "])),m),j=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,l,a=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=n,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"ImportantWithCircle",(o(n={title:g},"aria-label",y),o(n,"aria-labelledby",h),n));return t.jsx("svg",i({className:r.cx(o({},w,null!=m),j,l),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:x},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return p.displayName="ImportantWithCircle",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(r(27378),r(23615),r(17231),r(23831))},4951:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,y=e["aria-label"],h=e["aria-labelledby"],m=e.fill,v=e.role,x=void 0===v?"img":v,O=c(e,d),w=r.css(u||(u=s(["\n    color: ",";\n  "])),m),j=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,l,a=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=n,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"InfoWithCircle",(o(n={title:g},"aria-label",y),o(n,"aria-labelledby",h),n));return t.jsx("svg",i({className:r.cx(o({},w,null!=m),j,l),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:x},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return p.displayName="InfoWithCircle",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(r(27378),r(23615),r(17231),r(23831))},47364:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(n);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var u,f,b={small:14,default:16,large:20,xlarge:24},d=["className","size","title","aria-label","aria-labelledby","fill","role"],p=function(e){var n,l=e.className,a=e.size,p=void 0===a?16:a,g=e.title,y=e["aria-label"],h=e["aria-labelledby"],m=e.fill,v=e.role,x=void 0===v?"img":v,O=c(e,d),w=r.css(u||(u=s(["\n    color: ",";\n  "])),m),j=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,n,r){var t,l,a=r["aria-label"],i=r["aria-labelledby"],c=r.title;switch(e){case"img":return a||i||c?(o(t={},"aria-labelledby",i),o(t,"aria-label",a),o(t,"title",c),t):{"aria-label":(l=n,"".concat(l.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"X",(o(n={title:g},"aria-label",y),o(n,"aria-labelledby",h),n));return t.jsx("svg",i({className:r.cx(o({},w,null!=m),j,l),height:"number"==typeof p?p:b[p],width:"number"==typeof p?p:b[p],role:x},C,O,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2028 3.40381C11.8123 3.01329 11.1791 3.01329 10.7886 3.40381L8.3137 5.87869L5.83883 3.40381C5.44831 3.01329 4.81514 3.01329 4.42462 3.40381L3.71751 4.11092C3.32699 4.50144 3.32699 5.13461 3.71751 5.52513L6.19238 8.00001L3.71751 10.4749C3.32699 10.8654 3.32699 11.4986 3.71751 11.8891L4.42462 12.5962C4.81514 12.9867 5.44831 12.9867 5.83883 12.5962L8.3137 10.1213L10.7886 12.5962C11.1791 12.9867 11.8123 12.9867 12.2028 12.5962L12.9099 11.8891C13.3004 11.4986 13.3004 10.8654 12.9099 10.4749L10.435 8.00001L12.9099 5.52513C13.3004 5.13461 13.3004 4.50144 12.9099 4.11092L12.2028 3.40381Z",fill:"currentColor"}))};return p.displayName="X",p.isGlyph=!0,p.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},p}(r(27378),r(23615),r(17231),r(23831))}},function(e){e.O(0,[7690,1949,2888,9774,179],(function(){return n=52209,e(e.s=n);var n}));var n=e.O();_N_E=n}]);