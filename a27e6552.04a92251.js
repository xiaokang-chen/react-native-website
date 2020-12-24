(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{300:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(8),r=(t(0),t(413)),l=t(417),c=t(418),s=t(419),o={id:"accessibilityinfo",title:"AccessibilityInfo"},d={unversionedId:"accessibilityinfo",id:"accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002AccessibilityInfo\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002",source:"@site/../cndocs/accessibilityinfo.md",slug:"/accessibilityinfo",permalink:"/docs/next/accessibilityinfo",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/accessibilityinfo.md",version:"current",lastUpdatedAt:1608780846,sidebar:"api",next:{title:"Alert",permalink:"/docs/next/alert"}},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>isBoldTextEnabled()</code>",id:"isboldtextenabled",children:[]},{value:"<code>isGrayscaleEnabled()</code>",id:"isgrayscaleenabled",children:[]},{value:"<code>isInvertColorsEnabled()</code>",id:"isinvertcolorsenabled",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:"<code>isReduceTransparencyEnabled()</code>",id:"isreducetransparencyenabled",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],u={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u77e5\u9053\u7528\u6237\u7684\u8bbe\u5907\u662f\u5426\u6b63\u5728\u8fd0\u884c\u8bfb\u5c4f\u5e94\u7528\u3002",Object(r.b)("inlineCode",{parentName:"p"},"AccessibilityInfo"),"\u6b63\u662f\u7528\u4e8e\u6b64\u76ee\u7684\u3002\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u76d1\u542c\u5176\u72b6\u6001\u53d8\u5316\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)(l.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(r.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20_handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20_handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bthis.styles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20%20%20container%3A%20%7B%0A%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20status%3A%20%7B%0A%20%20%20%20%20%20margin%3A%2030%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"isboldtextenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isBoldTextEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isgrayscaleenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isGrayscaleEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isinvertcolorsenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isInvertColorsEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isreducemotionenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceMotionEnabled()\n")),Object(r.b)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isreducetransparencyenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceTransparencyEnabled()\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(r.b)("h3",{id:"isscreenreaderenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isScreenReaderEnabled()\n")),Object(r.b)("p",null,"\u67e5\u8be2\u8bfb\u5c4f\u5e94\u7528\u5f53\u524d\u662f\u5426\u5f00\u542f\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u89e3\u6790\u503c\u4e3a\u4e00\u4e2a\u5e03\u5c14\u503c\u3002",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\u53cd\u4e4b\u3002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"addeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),Object(r.b)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u652f\u6301\u7684\u4e8b\u4ef6\u7c7b\u578b\u5982\u4e0b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"boldTextChanged"),": iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when bold text is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grayscaleChanged"),": iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when a gray scale is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"invertColorsChanged"),": iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reduceMotionChanged"),": Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screenReaderChanged"),": \u8bfb\u5c4f\u5e94\u7528\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u5e03\u5c14\u503c\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"true"),"\u8868\u793a\u5f00\u542f\u72b6\u6001\uff0c",Object(r.b)("inlineCode",{parentName:"li"},"false"),"\u53cd\u4e4b\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reduceTransparencyChanged"),": iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",Object(r.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"announcementFinished"),": \u4ec5 iOS \u53ef\u7528\u3002\u5728\u8bfb\u5c4f\u8f6f\u4ef6\u5b8c\u6210\u4e00\u6b21\u6717\u8bfb\u540e\u89e6\u53d1\u3002\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u4e3a\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4ee5\u4e0b\u4e24\u4e2a\u5b57\u6bb5\uff1a",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"announcement"),": \u8bfb\u5c4f\u8f6f\u4ef6\u6240\u8bfb\u7684\u5b57\u7b26\u4e32\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"success"),": \u6b64\u6b21\u6717\u8bfb\u662f\u5426\u6210\u529f\u5b8c\u6210\u3002")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setaccessibilityfocus"},Object(r.b)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setAccessibilityFocus(reactTag)\n")),Object(r.b)("p",null,"\u5c06\u8bfb\u5c4f\u8f6f\u4ef6\u7684\u7126\u70b9\u8bbe\u7f6e\u5230\u67d0\u4e2a react \u7ec4\u4ef6\u4e0a\u3002\u5728 Android \u7b49\u540c\u4e8e\u8c03\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused);"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": Make sure that any ",Object(r.b)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",Object(r.b)("inlineCode",{parentName:"p"},"accessible={true}"),".")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"announceforaccessibility"},Object(r.b)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static announceForAccessibility(announcement)\n")),Object(r.b)("p",null,"\u53d1\u9001\u4e00\u4e2a\u5b57\u7b26\u4e32\u7ed9\u8bfb\u5c4f\u5e94\u7528\u6717\u8bfb\u3002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")),Object(r.b)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002"))}p.isMDXComponent=!0},413:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),d=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,m=b["".concat(l,".").concat(p)]||b[p]||u[p]||r;return t?i.a.createElement(m,c(c({ref:n},o),{},{components:t})):i.a.createElement(m,c({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<r;o++)l[o]=t[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},414:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},415:function(e,n,t){"use strict";var a=t(0),i=t(416);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},417:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(415),l=t(414),c=t(62),s=t.n(c),o=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,b=e.values,u=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,A=m.setTabGroupChoices,O=Object(a.useState)(c),f=O[0],j=O[1],y=a.Children.toArray(e.children);if(null!=u){var v=h[u];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&j(v)}var g=function(e){j(e),null!=u&&A(u,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===n,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case o:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e)},onFocus:function(){return g(n)},onClick:function(){g(n)}},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},418:function(e,n,t){"use strict";var a=t(3),i=t(0),r=t.n(i);n.a=function(e){var n=e.children,t=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:i}),n)}},419:function(e,n,t){"use strict";var a=t(7),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=i?"ios":"android",c=i?"macos":r?"windows":"linux";n.a={defaultGuide:"native",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);