(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2589],{19243:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});r(27378);var t=r(95494),a=r(91949),i=r(23831),l={label:{type:"text",default:"Label",label:"Label"},description:{type:"text",default:"Description",label:"Description"},children:{type:"text",default:"npm install @leafygreen-ui/copyable",label:"Children"},darkMode:{type:"boolean",default:!1,label:"Dark Mode"},size:{type:"select",options:["default","large"],default:"default",label:"Size"}};function o(){return(0,i.jsx)(a.Z,{knobsConfig:l},(function(e){return(0,i.jsx)("div",null,(0,i.jsx)(t.Z,e))}))}},16717:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/copyable/example",function(){return r(19243)}])},95494:function(e,n,r){"use strict";r.d(n,{Z:function(){return J}});var t=r(27378),a=r(23615),i=r.n(a),l=r(9228),o=r.n(l),s=r(2998),u=r(19463),c=r(17231),d=r(40948),f=r.n(d),p=r(68397),b=r(79303),g=r(46817),y=r(83685),h=r(59726),x=r(23831);function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var C,k,O,N,z,M,_,D,P,Z,H,S,V,T="light",E="dark",L={Default:"default",Large:"large"},A=(v(C={},T,{code:{text:b.D.gray.dark3,background:b.D.gray.light3,border:b.D.gray.light2}}),v(C,E,{code:{text:b.s.white,background:b.s.black,border:b.s.black}}),C),I=(0,c.css)(k||(k=m(["\n  position: relative;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1fr auto;\n  height: 48px;\n  width: 400px;\n  margin: 2px 0;\n"]))),R=(0,c.css)(O||(O=m(["\n  height: 36px;\n"]))),$=(0,c.css)(N||(N=m(["\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding-left: 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  grid-column: 1/-1;\n  grid-row: 1/2;\n"]))),F=(0,c.css)(z||(z=m(["\n  font-size: 15px;\n"]))),G=(0,c.css)(M||(M=m(["\n  overflow: hidden;\n"]))),U=function(e){return(0,c.css)(_||(_=m(["\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n"])),A[e].code.text,A[e].code.background,A[e].code.border)},W=(0,c.css)(D||(D=m(["\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  grid-column: 2/-1;\n  grid-row: 1/2;\n"]))),X=(0,c.css)(P||(P=m(["\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    height: calc(100% - 6px);\n    width: 16px;\n    left: 0px;\n    top: 3px;\n    border-radius: 100%;\n    box-shadow: 0 0 10px 0 ",";\n    transition: box-shadow 100ms ease-in-out;\n  }\n\n  &:hover:before {\n    box-shadow: 0 0 12px 0 ",";\n  }\n"])),(0,s.DZ)(.65,b.D.gray.dark1),(0,s.DZ)(.6,b.D.gray.dark1)),q=(0,c.css)(Z||(Z=m(["\n  height: 100%;\n  border-radius: 0 6px 6px 0;\n\n  // The ripple element\n  & > :first-child {\n    border-radius: 0 6px 6px 0;\n  }\n"]))),B=(0,c.css)(H||(H=m(["\n  padding-right: 6px;\n"])));function J(e){var n,r,a=e.darkMode,i=void 0!==a&&a,l=e.children,s=e.label,d=e.description,b=e.className,w=e.copyable,C=void 0===w||w,k=e.size,O=void 0===k?L.Default:k,N=e.shouldTooltipUsePortal,z=void 0===N||N,M=i?E:T,_=j((0,t.useState)(!1),2),D=_[0],P=_[1],Z=j((0,t.useState)(!1),2),H=Z[0],A=Z[1],J=j((0,t.useState)(),2),K=J[0],Q=J[1],Y=(0,h.Wt)().portalContainer;(0,t.useEffect)((function(){A(C&&o().isSupported())}),[C]);var ee,ne=(0,p.ue)({prefix:"code"});if(H){var re=(0,x.jsx)(u.ZP,{ref:Q,variant:"default",darkMode:i,className:q,onClick:function(){return P(!0)},leftGlyph:(0,x.jsx)(f(),{size:"large",className:B})},"Copy");ee=(0,x.jsx)(g.ZP,{open:D,darkMode:i,align:g.xM.Top,justify:g.WD.Middle,trigger:re,triggerEvent:g.jx.Click,usePortal:z},"Copied!")}return(0,t.useEffect)((function(){if(K){var e=new(o())(K,{text:function(){return l},container:Y});if(D){var n=setTimeout((function(){P(!1)}),1500);return function(){return clearTimeout(n)}}return function(){return e.destroy()}}}),[K,l,D,Y]),(0,x.jsx)(t.Fragment,null,s&&(0,x.jsx)(y.__,{darkMode:i,htmlFor:ne},s),d&&(0,x.jsx)(y.dk,{darkMode:i},d),(0,x.jsx)("div",{className:(0,c.cx)(I,(n={},v(n,R,H),v(n,G,!H),n),b)},(0,x.jsx)(y.ZM,{id:ne,className:(0,c.cx)($,U(M),(r={},v(r,F,O===L.Large),v(r,(0,c.css)(S||(S=m(["\n              font-size: 14px;\n            "]))),i),v(r,(0,c.css)(V||(V=m(["\n              font-size: 16px;\n            "]))),i&&O===L.Large),r))},l),(0,x.jsx)("span",{className:(0,c.cx)(W,v({},X,!0))},ee)))}J.displayName="Copyable",J.propTypes={darkMode:i().bool,size:i().oneOf(Object.values(L)),children:i().string.isRequired,label:i().string,description:i().string,className:i().string,copyable:i().bool}},40948:function(e,n,r){e.exports=function(e,n,r,t){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(n);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var c,d,f={small:14,default:16,large:20,xlarge:24},p=["className","size","title","aria-label","aria-labelledby","fill","role"],b=function(e){var n,a=e.className,i=e.size,b=void 0===i?16:i,g=e.title,y=e["aria-label"],h=e["aria-labelledby"],x=e.fill,v=e.role,m=void 0===v?"img":v,j=s(e,p),w=r.css(c||(c=u(["\n    color: ",";\n  "])),x),C=r.css(d||(d=u(["\n    flex-shrink: 0;\n  "]))),k=function(e,n,r){var t,a,i=r["aria-label"],o=r["aria-labelledby"],s=r.title;switch(e){case"img":return i||o||s?(l(t={},"aria-labelledby",o),l(t,"aria-label",i),l(t,"title",s),t):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(m,"Copy",(l(n={title:g},"aria-label",y),l(n,"aria-labelledby",h),n));return t.jsx("svg",o({className:r.cx(l({},w,null!=x),C,a),height:"number"==typeof b?b:f[b],width:"number"==typeof b?b:f[b],role:m},k,j,{viewBox:"0 0 16 16"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 5.71428V10.2857C1 11.2325 1.76751 12 2.71429 12H5.75V7.10957C5.75 6.54414 5.97724 6.00244 6.38065 5.60623L8.67403 3.35381C8.77447 3.25516 8.88376 3.16757 9 3.09182V2.71429C9 1.76751 8.23249 1 7.28571 1H5.8V4.42857C5.8 5.13865 5.22437 5.71428 4.51429 5.71428H1ZM9 4.78571L7.25654 6.49804C7.24689 6.50752 7.23749 6.5172 7.22834 6.52708C7.22208 6.53383 7.21594 6.54068 7.20991 6.54762C7.07504 6.70295 7 6.90234 7 7.10957V7.79762H9H10.0095C10.4829 7.79762 10.8667 7.41386 10.8667 6.94047V4H10.1505C9.92587 4 9.7102 4.0882 9.54992 4.24562L9 4.78571ZM4.86667 1H4.15053C3.92587 1 3.7102 1.0882 3.54992 1.24562L1.25654 3.49804C1.09244 3.65921 1 3.87957 1 4.10957V4.79762H4.00952C4.48291 4.79762 4.86667 4.41386 4.86667 3.94047V1ZM7 12V8.71428H9H10.5143C11.2244 8.71428 11.8 8.13865 11.8 7.42857V4H13.2857C14.2325 4 15 4.76751 15 5.71429V13.2857C15 14.2325 14.2325 15 13.2857 15H8.71429C7.76751 15 7 14.2325 7 13.2857V12Z",fill:"currentColor"}))};return b.displayName="Copy",b.isGlyph=!0,b.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},b}(r(27378),r(23615),r(17231),r(23831))}},function(e){e.O(0,[6469,7690,1949,2888,9774,179],(function(){return n=16717,e(e.s=n);var n}));var n=e.O();_N_E=n}]);