(this["webpackJsonpirish-trad.net"]=this["webpackJsonpirish-trad.net"]||[]).push([[5],{46:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(47),o=n(1),a=function(e){var t=e.title,n=e.metaTitle,a=e.metaKeywords,r=e.metaDescription;return Object(o.jsxs)(i.a,{children:[Object(o.jsx)("link",{rel:"canonical",href:"".concat(window.location)}),t?Object(o.jsx)("title",{children:t}):null,n?Object(o.jsx)("meta",{name:"title",content:n}):null,a?Object(o.jsx)("meta",{name:"keywords",content:a}):null,r?Object(o.jsx)("meta",{name:"description",content:r}):null]})}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var a=n(0),r=o(a),s=o(n(52)),l=o(n(2)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var i=!0;i;){var o=e,a=t,r=n;i=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(r)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=r,i=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"===typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return r.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(a.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},52:function(e,t,n){(function(t){var n="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,h=Math.max,p=Math.min,f=function(){return u.Date.now()};function m(e,t,i){var o,a,r,s,l,c,u=0,d=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=o,i=a;return o=a=void 0,u=t,s=e.apply(i,n)}function j(e){return u=e,l=setTimeout(O,t),d?g(e):s}function w(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-u>=r}function O(){var e=f();if(w(e))return x(e);l=setTimeout(O,function(e){var n=t-(e-c);return m?p(n,r-(e-u)):n}(e))}function x(e){return l=void 0,y&&o?g(e):(o=a=void 0,s)}function T(){var e=f(),n=w(e);if(o=arguments,a=this,c=e,n){if(void 0===l)return j(c);if(m)return l=setTimeout(O,t),g(c)}return void 0===l&&(l=setTimeout(O,t)),s}return t=v(t)||0,b(i)&&(d=!!i.leading,r=(m="maxWait"in i)?h(v(i.maxWait)||0,t):r,y="trailing"in i?!!i.trailing:y),T.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=a=l=void 0},T.flush=function(){return void 0===l?s:x(f())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?s(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,i){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return b(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),m(e,t,{leading:o,maxWait:t,trailing:a})}}).call(this,n(17))},54:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var i,o,a,r,s,l,c=n(46),u=n(51),d=n.n(u),h=n(3),p=n(4),f=n.p+"static/media/session.1f7265be.jpg",m=p.a.a(i||(i=Object(h.a)(["\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n"]))),b=p.a.h1(o||(o=Object(h.a)(["\n  font-size: 3em;\n  text-align: center;\n  font-family: meathflfregular;\n  margin: 0.625em;\n\n  @media screen and (min-width: 960px) {\n    font-size: 5em;\n  }\n\n  @media screen and (min-width: 1281px) {\n    font-size: 10em;\n  }\n"]))),v=p.a.div(a||(a=Object(h.a)(["\n  @media screen and (min-width: 960px) {\n    background: black;\n    background-image: url(",");\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    flex-flow: column nowrap;\n    height: 100vh;\n  }\n\n  @media screen and (min-width: 1281px) {\n    padding: 0em 200px;\n  }\n"])),f),y=p.a.h2(r||(r=Object(h.a)(["\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0.625em 0em;\n  text-align: center;\n  text-decoration: underline green 5px;\n  text-underline-offset: 15px;\n  padding-top: 1.25em;\n\n  @media screen and (min-width: 960px) {\n    margin: 0em;\n    padding: 20px 0px;\n  }\n\n  @media screen and (min-width: 1281px) {\n    padding-top: 0;\n  }\n"]))),g=p.a.p(s||(s=Object(h.a)(["\n  font-size: 1.125em;\n\n  @media screen and (min-width: 960px) {\n    font-size: 1.5em;\n    padding: 0em 3.125em;\n  }\n"]))),j=p.a.section(l||(l=Object(h.a)(["\n  box-shadow: inset 0 5px 0 0 rgba(0, 0, 0, 0.05),\n    inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);\n\n  @media screen and (min-width: 1281px) {\n    padding: 3.125em 12.5em;\n  }\n"]))),w=n(1),O=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(c.a,{title:"Irish-Trad.net - Home",metaTitle:"Irish-Trad.net - Home",metaKeywords:"Irish, Irish Trad, Irish Traditional Music, Irish Folk Music, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature",metaDescription:"Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandola/Irish Tenor Banjo"}),Object(w.jsx)(v,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(b,{children:"Irish-Trad.net"}),Object(w.jsx)(g,{children:"Irish-Trad.net provides free online resources and lessons for a variety of stringed instruments commonly found in traditional Irish sessions such as the Irish Bouzouki, Mandolin, Octave Mandola and Irish Tenor Banjo."})]})}),Object(w.jsx)(j,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(y,{children:"Introduction"}),Object(w.jsx)(g,{children:"The resources found on Irish-Trad.net such as chord diagrams and scales refer to any instrument that can be tuned to the standard GDAE or alternative GDAD tuning."}),Object(w.jsx)(g,{children:"Most people who decide to learn traditional Irish music for the first time do so having already played a different stringed instrument such as the guitar. For guitar players, the most popular method of teaching is through tablature because of the simplicity and ability to get a person playing quickly. The lessons and resources on Irish-Trad.net are presented in tablature (TAB) alongside traditional sheet music to satisfy the absolute beginner and the musically trained."}),Object(w.jsxs)(g,{children:["Irish-Trad.net will not be hosting any copyrighted tunes or songs and instead aims to provide all the information and musical theory required to bring a player to the level where they can use a website such as",Object(w.jsxs)(m,{href:"https://thesession.org/",children:[" ","The Session"]}),"to play any of the tunes available there."]})]})}),Object(w.jsx)(j,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(y,{children:"Lessons"}),Object(w.jsx)(g,{children:"The lessons section will provide information such as open chords, basic scales, moveable chords (barre) and additional information such as how to use accessories like a capo or how to change and tune strings. Music theory will also be used to reinforce an understanding of how chords and scales are construced."})]})}),Object(w.jsx)(j,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(y,{children:"Chords"}),Object(w.jsx)(g,{children:"The chords section provides chord charts for the two most common tunings - GDAE and GDAD. The section covers basic triads such as Major and Minor and extended chords such as Major 7th, Minor 7th and Dominant 7th. The section will be expanded to include 'quick' moveable chords."})]})}),Object(w.jsx)(j,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(y,{children:"Clef to TAB"}),Object(w.jsx)(g,{children:"The Cleft-to-TAB section provides a conversion chart that allows for any piece of sheet music found in a book or online to be converted into tablature - as long as the piece music covers less than 4 octaves (the range of the Irish Bouzouki)."})]})}),Object(w.jsx)(j,{children:Object(w.jsxs)(d.a,{animateIn:"animate__fadeIn",scrollableParentSelector:"#top",children:[Object(w.jsx)(y,{children:"Terminology"}),Object(w.jsx)(g,{children:"The terminology section provides an A-Z of common phrases, names and abbreviations that can be found across traditional irish music and session settings."})]})})]})}}}]);
//# sourceMappingURL=Homepage.1489c192.chunk.js.map