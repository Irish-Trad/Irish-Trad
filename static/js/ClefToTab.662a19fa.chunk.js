(this["webpackJsonpirish-trad.net"]=this["webpackJsonpirish-trad.net"]||[]).push([[3],{44:function(e,t,n){"use strict";n.d(t,"h",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"k",(function(){return v})),n.d(t,"a",(function(){return k})),n.d(t,"g",(function(){return T})),n.d(t,"f",(function(){return E})),n.d(t,"j",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return D})),n.d(t,"b",(function(){return x}));var r=n(2),a=n(3),o=n(11);function i(){var e=Object(r.a)([""]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n  text-align: center;\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n  @media screen and (min-width: 960px) {\n    padding: 0em 12.5em;\n  }\n"]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n  color: black;\n  cursor: pointer;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)([""]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n  text-align: center;\n"]);return f=function(){return e},e}function h(){var e=Object(r.a)(["\n  width: 50%;\n\n  @media screen and (min-width: 960px) {\n    width: 25%;\n  }\n"]);return h=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function b(){var e=Object(r.a)(["\n  font-size: 1.125em;\n\n  @media screen and (min-width: 960px) {\n    font-size: 1.5em;\n  }\n"]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0.625em 0em;\n  text-align: center;\n"]);return p=function(){return e},e}function y(){var e=Object(r.a)(["\n  text-align: center;\n  font-family: meathflfregular;\n  font-size: 3.4375em;\n  margin: 0.625em;\n"]);return y=function(){return e},e}var g=a.a.h1(y()),w=a.a.h2(p()),v=a.a.p(b()),k=a.a.b(m()),T=a.a.figure(d()),E=(a.a.img(h()),a.a.figcaption(f())),j=Object(a.a)(o.Link)(s()),O=a.a.a(l()),A=a.a.section(c()),D=Object(a.a)(v)(u()),x=a.a.button(i())},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(46),i=function(e){var t=e.title,n=e.metaTitle,r=e.metaKeywords,i=e.metaDescription;return a.a.createElement(o.a,null,a.a.createElement("link",{rel:"canonical",href:"".concat(window.location)}),t?a.a.createElement("title",null,t):null,n?a.a.createElement("meta",{name:"title",content:n}):null,r?a.a.createElement("meta",{name:"keywords",content:r}):null,i?a.a.createElement("meta",{name:"description",content:i}):null)}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NavHashLink=t.HashLink=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.genericHashLink=b;var o=c(n(0)),i=c(n(1)),u=n(11);function c(e){return e&&e.__esModule?e:{default:e}}var l="",s=null,f=null,h=null;function d(){l="",null!==s&&s.disconnect(),null!==f&&(window.clearTimeout(f),f=null)}function m(){var e=document.getElementById(l);return null!==e&&(h(e),d(),!0)}function b(e){return o.default.forwardRef((function(t,n){t.scroll,t.smooth;var i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scroll","smooth"]);return o.default.createElement(e,r({},i,{onClick:function(e){d(),t.onClick&&t.onClick(e),"string"===typeof t.to?l=t.to.split("#").slice(1).join("#"):"object"===a(t.to)&&"string"===typeof t.to.hash&&(l=t.to.hash.replace("#","")),""!==l&&(h=t.scroll||function(e){return t.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},window.setTimeout((function(){!1===m()&&(null===s&&(s=new MutationObserver(m)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),f=window.setTimeout((function(){d()}),1e4))}),0))},ref:n}),t.children)}))}var p=t.HashLink=b(u.Link),y=t.NavHashLink=b(u.NavLink),g={onClick:i.default.func,children:i.default.node,scroll:i.default.func,to:i.default.oneOfType([i.default.string,i.default.object])};p.propTypes=g,y.propTypes=g},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(0),a=n.n(r),o=n(45),i=n(44),u=n(2),c=n(3),l=n(47);function s(){var e=Object(u.a)(["\n  width: 100%;\n  border: 1px solid black;\n"]);return s=function(){return e},e}function f(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n"]);return f=function(){return e},e}function h(){var e=Object(u.a)(["\n  color: black;\n"]);return h=function(){return e},e}function d(){var e=Object(u.a)(["\n  color: black;\n"]);return d=function(){return e},e}function m(){var e=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n  margin: 5px;\n"]);return m=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 75px;\n  color: white;\n  background: #006400;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  padding: 5px;\n  cursor: pointer;\n"]);return b=function(){return e},e}function p(){var e=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n"]);return p=function(){return e},e}var y=c.a.div(p()),g=c.a.button(b()),w=c.a.a(m()),v=Object(c.a)(l.HashLink)(d()),k=c.a.a(h()),T=c.a.div(f()),E=c.a.img(s()),j=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"Irish-Trad.net - Cleft to TAB",metaTitle:"Irish-Trad.net - Cleft to TAB",metaKeywords:"Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature",metaDescription:"Treble Cleft to TAB - GDAE & GDAD for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"}),a.a.createElement(i.h,null,"Cleft to Tablature"),a.a.createElement(y,null,a.a.createElement(v,{to:"#clef-to-tab-GDAE"},a.a.createElement(g,null,"GDAE")),a.a.createElement(v,{to:"#clef-to-tab-GDAD"},a.a.createElement(g,null,"GDAD"))),a.a.createElement(i.d,null,a.a.createElement(i.k,null,"The most popular system used for presenting musical notation is sheet music. The following diagram can be used to convert any piece of sheet music into tablature - as long as the sheet music is within the Irish Bouzouki's capabilities. The full sounding range of a 24 fret Irish Bouzouki tuned GDAE is G2 (98Hz) to E6 (1319Hz) - slightly less than 4 octaves."),a.a.createElement(i.k,null,"Sheet music for traditional Irish tunes can be found on websites such as",a.a.createElement(k,{href:"https://www.thesession.org/",target:"_blank"},"The Session"),". Music books that are found in music shops tend to showcase sheet music only. Looking at books that are designed specifically for the Irish Bouzouki or the Mandolin are good places to start because they are designed with the instruments range in mind. However even the music books scored for piano can be converted to the Irish Bouzouki using the diagram found on this page."),a.a.createElement(i.k,null,"The lowest pitch that the Irish Bouzouki is able to produce naturally is the G note found by playing the thickest string open. When looking at the conversion diagram there is only one way to play this note when it is notated on a treble clef. There is also one way to play the highest note the Irish Bouzouki can produce - the 24th fret on the E string. In the mid-range of the Irish Bouzouki there begins to be multiple ways of producing the same note. In some instances there are 2 ways and other times there is 4 ways. Normally a couple of these are simple impractical to attempt. An example of two ways to play an A note is the open A string and the same note can be produced by playing the 7th fret of the G string. These notes are exactly the same pitch. However this is a slight difference in timbre due to the thickness of each string."),a.a.createElement(i.k,null,"Learning to read sheet music quickly and efficiently requires continuous practice. This tends to be a tedious activity which is why many musicians such as guitarists rely heavily or solely on tablature to instruct them what to play. Sheet music is the universal language and alphabet of musicians as such it is an incredibly valuable tool to learn and understand as it would enable you the ability to transcribe for other musicians your own work."),a.a.createElement(T,null,a.a.createElement(w,{href:"assets/high-quality/GDAE - Clef To TAB.pdf",target:"_blank"},a.a.createElement(E,{id:"clef-to-tab-GDAE",src:"assets/low-quality/GDAE - Clef To TAB.jpg",alt:"GDAE Treble Clef to TAB",width:"100%",height:"100%"})),a.a.createElement(w,{href:"assets/high-quality/GDAD - Clef To TAB.pdf",target:"_blank"},a.a.createElement(E,{id:"clef-to-tab-GDAD",src:"assets/low-quality/GDAD - Clef To TAB.jpg",alt:"GDAD Treble Clef to TAB",width:"100%",height:"100%"})))))}}}]);
//# sourceMappingURL=ClefToTab.662a19fa.chunk.js.map