(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(8),c=(n(0),n(413)),b={id:"easing",title:"Easing"},r={unversionedId:"easing",id:"version-0.63/easing",isDocsHomePage:!1,title:"Easing",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/easing.md",slug:"/easing",permalink:"/docs/easing",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/easing.md",version:"0.63",lastUpdatedAt:1608734804,sidebar:"version-0.63/api",previous:{title:"Dimensions",permalink:"/docs/dimensions"},next:{title:"InteractionManager",permalink:"/docs/interactionmanager"}},l=[{value:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b",id:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b",children:[]},{value:"\u67e5\u770b\u6807\u51c6\u51fd\u6570",id:"\u67e5\u770b\u6807\u51c6\u51fd\u6570",children:[]},{value:"\u67e5\u770b\u8865\u5145\u51fd\u6570",id:"\u67e5\u770b\u8865\u5145\u51fd\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>step0()</code>",id:"step0",children:[]},{value:"<code>step1()</code>",id:"step1",children:[]},{value:"<code>linear()</code>",id:"linear",children:[]},{value:"<code>ease()</code>",id:"ease",children:[]},{value:"<code>quad()</code>",id:"quad",children:[]},{value:"<code>cubic()</code>",id:"cubic",children:[]},{value:"<code>poly()</code>",id:"poly",children:[]},{value:"<code>sin()</code>",id:"sin",children:[]},{value:"<code>circle()</code>",id:"circle",children:[]},{value:"<code>exp()</code>",id:"exp",children:[]},{value:"<code>elastic()</code>",id:"elastic",children:[]},{value:"<code>back()</code>",id:"back",children:[]},{value:"<code>bounce()</code>",id:"bounce",children:[]},{value:"<code>bezier()</code>",id:"bezier",children:[]},{value:"<code>in()</code>",id:"in",children:[]},{value:"<code>out()</code>",id:"out",children:[]},{value:"<code>inOut()</code>",id:"inout",children:[]}]}],s={toc:l};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Easing"),"\u6a21\u5757\u5b9e\u73b0\u4e86\u5e38\u89c1\u7684\u52a8\u753b\u7f13\u52a8\u51fd\u6570\u3002 This module is used by ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/animated#timing"}),"Animated.timing()")," to convey physically believable motion in animations."),Object(c.b)("p",null,"You can find a visualization of some common easing functions at ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/"}),"http://easings.net/")),Object(c.b)("h3",{id:"\u67e5\u770b\u9884\u7f6e\u52a8\u753b"},"\u67e5\u770b\u9884\u7f6e\u52a8\u753b"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Easing"),"\u6a21\u5757\u901a\u8fc7\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5\u63d0\u4f9b\u4e86\u51e0\u79cd\u9884\u7f6e\u7684\u52a8\u753b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#back"}),Object(c.b)("inlineCode",{parentName:"a"},"back"))," provides a simple animation where the object goes slightly back before moving forward"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#bounce"}),Object(c.b)("inlineCode",{parentName:"a"},"bounce"))," provides a bouncing animation"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#ease"}),Object(c.b)("inlineCode",{parentName:"a"},"ease"))," provides a simple inertial animation"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#elastic"}),Object(c.b)("inlineCode",{parentName:"a"},"elastic"))," provides a simple spring interaction")),Object(c.b)("h3",{id:"\u67e5\u770b\u6807\u51c6\u51fd\u6570"},"\u67e5\u770b\u6807\u51c6\u51fd\u6570"),Object(c.b)("p",null,"\u76ee\u524d\u63d0\u4f9b\u4e86\u4e09\u79cd\u6807\u51c6\u7f13\u52a8\u51fd\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#linear"}),Object(c.b)("inlineCode",{parentName:"a"},"linear"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#quad"}),Object(c.b)("inlineCode",{parentName:"a"},"quad"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#cubic"}),Object(c.b)("inlineCode",{parentName:"a"},"cubic")))),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/easing#poly"}),Object(c.b)("inlineCode",{parentName:"a"},"poly"))," function can be used to implement quartic, quintic, and other higher power functions."),Object(c.b)("h3",{id:"\u67e5\u770b\u8865\u5145\u51fd\u6570"},"\u67e5\u770b\u8865\u5145\u51fd\u6570"),Object(c.b)("p",null,"\u6b64\u5916\u8fd8\u901a\u8fc7\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u6cd5\u63d0\u4f9b\u4e86\u51e0\u79cd\u6570\u5b66\u51fd\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#bezier"}),Object(c.b)("inlineCode",{parentName:"a"},"bezier"))," provides a cubic bezier curve"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#circle"}),Object(c.b)("inlineCode",{parentName:"a"},"circle"))," provides a circular function"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#sin"}),Object(c.b)("inlineCode",{parentName:"a"},"sin"))," provides a sinusoidal function"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#exp"}),Object(c.b)("inlineCode",{parentName:"a"},"exp"))," provides an exponential function")),Object(c.b)("p",null,"The following helpers are used to modify other easing functions."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#in"}),Object(c.b)("inlineCode",{parentName:"a"},"in"))," runs an easing function forwards"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#inout"}),Object(c.b)("inlineCode",{parentName:"a"},"inOut"))," makes any easing function symmetrical"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/easing#out"}),Object(c.b)("inlineCode",{parentName:"a"},"out"))," runs an easing function backwards")),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Easing Demo","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20Easing%2C%20SectionList%2C%20StatusBar%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20let%20opacity%20%3D%20new%20Animated.Value(0)%3B%0A%20%20const%20animate%20%3D%20easing%20%3D%3E%20%7B%0A%20%20%20%20opacity.setValue(0)%3B%0A%20%20%20%20Animated.timing(opacity%2C%20%7B%0A%20%20%20%20%20%20toValue%3A%201%2C%0A%20%20%20%20%20%20duration%3A%201200%2C%0A%20%20%20%20%20%20easing%0A%20%20%20%20%7D).start()%3B%0A%20%20%7D%3B%0A%20%20const%20size%20%3D%20opacity.interpolate(%7B%0A%20%20%20%20inputRange%3A%20%5B0%2C%201%5D%2C%0A%20%20%20%20outputRange%3A%20%5B0%2C%2080%5D%0A%20%20%7D)%3B%0A%20%20const%20animatedStyles%20%3D%20%5B%0A%20%20%20%20styles.box%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20opacity%2C%0A%20%20%20%20%20%20width%3A%20size%2C%0A%20%20%20%20%20%20height%3A%20size%0A%20%20%20%20%7D%0A%20%20%5D%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.title%7D%3E%0A%20%20%20%20%20%20%20%20Press%20rows%20below%20to%20preview%20the%20Easing!%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.boxContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CAnimated.View%20style%3D%7BanimatedStyles%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSectionList%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%0A%20%20%20%20%20%20%20%20sections%3D%7BSECTIONS%7D%0A%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item)%20%3D%3E%20item.title%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20animate(item.easing)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.listRow%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%3E%7Bitem.title%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7B%20section%3A%20%7B%20title%20%7D%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.listHeader%7D%3E%7Btitle%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0Aconst%20SECTIONS%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20%22Predefined%20animations%22%2C%0A%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%7B%20title%3A%20%22Bounce%22%2C%20easing%3A%20Easing.bounce%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Ease%22%2C%20easing%3A%20Easing.ease%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Elastic%22%2C%20easing%3A%20Easing.elastic(4)%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22Standard%20functions%22%2C%0A%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%7B%20title%3A%20%22Linear%22%2C%20easing%3A%20Easing.linear%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Quad%22%2C%20easing%3A%20Easing.quad%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Cubic%22%2C%20easing%3A%20Easing.cubic%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22Additional%20functions%22%2C%0A%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Bezier%22%2C%0A%20%20%20%20%20%20%20%20easing%3A%20Easing.bezier(0%2C%202%2C%201%2C%20-1)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Circle%22%2C%20easing%3A%20Easing.circle%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Sin%22%2C%20easing%3A%20Easing.sin%20%7D%2C%0A%20%20%20%20%20%20%7B%20title%3A%20%22Exp%22%2C%20easing%3A%20Easing.exp%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20%22Combinations%22%2C%0A%20%20%20%20data%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22In%20%2B%20Bounce%22%2C%0A%20%20%20%20%20%20%20%20easing%3A%20Easing.in(Easing.bounce)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Out%20%2B%20Exp%22%2C%0A%20%20%20%20%20%20%20%20easing%3A%20Easing.out(Easing.exp)%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22InOut%20%2B%20Elastic%22%2C%0A%20%20%20%20%20%20%20%20easing%3A%20Easing.inOut(Easing.elastic(1))%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%3B%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20%22%2320232a%22%0A%20%20%7D%2C%0A%20%20title%3A%20%7B%0A%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20color%3A%20%22%2361dafb%22%0A%20%20%7D%2C%0A%20%20boxContainer%3A%20%7B%0A%20%20%20%20height%3A%20160%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20marginTop%3A%2032%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%0A%20%20%7D%2C%0A%20%20list%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23fff%22%0A%20%20%7D%2C%0A%20%20listHeader%3A%20%7B%0A%20%20%20%20paddingHorizontal%3A%208%2C%0A%20%20%20%20paddingVertical%3A%204%2C%0A%20%20%20%20backgroundColor%3A%20%22%23f4f4f4%22%2C%0A%20%20%20%20color%3A%20%22%23999%22%2C%0A%20%20%20%20fontSize%3A%2012%2C%0A%20%20%20%20textTransform%3A%20%22uppercase%22%0A%20%20%7D%2C%0A%20%20listRow%3A%20%7B%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"step0"},Object(c.b)("inlineCode",{parentName:"h3"},"step0()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static step0(n)\n")),Object(c.b)("p",null,"A stepping function, returns 1 for any positive value of ",Object(c.b)("inlineCode",{parentName:"p"},"n"),"."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"step1"},Object(c.b)("inlineCode",{parentName:"h3"},"step1()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static step1(n)\n")),Object(c.b)("p",null,"A stepping function, returns 1 if ",Object(c.b)("inlineCode",{parentName:"p"},"n")," is greater than or equal to 1."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"linear"},Object(c.b)("inlineCode",{parentName:"h3"},"linear()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static linear(t)\n")),Object(c.b)("p",null,"A linear function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t"),". Position correlates to elapsed time one to one."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cubic-bezier.com/#0,0,1,1"}),"http://cubic-bezier.com/#0,0,1,1")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ease"},Object(c.b)("inlineCode",{parentName:"h3"},"ease()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static ease(t)\n")),Object(c.b)("p",null,"A simple inertial interaction, similar to an object slowly accelerating to speed."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cubic-bezier.com/#.42,0,1,1"}),"http://cubic-bezier.com/#.42,0,1,1")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"quad"},Object(c.b)("inlineCode",{parentName:"h3"},"quad()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static quad(t)\n")),Object(c.b)("p",null,"A quadratic function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t * t"),". Position equals the square of elapsed time."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInQuad"}),"http://easings.net/#easeInQuad")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"cubic"},Object(c.b)("inlineCode",{parentName:"h3"},"cubic()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static cubic(t)\n")),Object(c.b)("p",null,"A cubic function, ",Object(c.b)("inlineCode",{parentName:"p"},"f(t) = t * t * t"),". Position equals the cube of elapsed time."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInCubic"}),"http://easings.net/#easeInCubic")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"poly"},Object(c.b)("inlineCode",{parentName:"h3"},"poly()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static poly(n)\n")),Object(c.b)("p",null,"A power function. Position is equal to the Nth power of elapsed time."),Object(c.b)("p",null,"n = 4: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInQuart"}),"http://easings.net/#easeInQuart")," n = 5: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInQuint"}),"http://easings.net/#easeInQuint")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sin"},Object(c.b)("inlineCode",{parentName:"h3"},"sin()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static sin(t)\n")),Object(c.b)("p",null,"A sinusoidal function."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInSine"}),"http://easings.net/#easeInSine")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"circle"},Object(c.b)("inlineCode",{parentName:"h3"},"circle()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static circle(t)\n")),Object(c.b)("p",null,"A circular function."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInCirc"}),"http://easings.net/#easeInCirc")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"exp"},Object(c.b)("inlineCode",{parentName:"h3"},"exp()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static exp(t)\n")),Object(c.b)("p",null,"An exponential function."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInExpo"}),"http://easings.net/#easeInExpo")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"elastic"},Object(c.b)("inlineCode",{parentName:"h3"},"elastic()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static elastic(bounciness)\n")),Object(c.b)("p",null,"A simple elastic interaction, similar to a spring oscillating back and forth."),Object(c.b)("p",null,"Default bounciness is 1, which overshoots a little bit once. 0 bounciness doesn't overshoot at all, and bounciness of N > 1 will overshoot about N times."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInElastic"}),"http://easings.net/#easeInElastic")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"back"},Object(c.b)("inlineCode",{parentName:"h3"},"back()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static back(s)\n")),Object(c.b)("p",null,"Use with ",Object(c.b)("inlineCode",{parentName:"p"},"Animated.parallel()")," to create a simple effect where the object animates back slightly as the animation starts."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"bounce"},Object(c.b)("inlineCode",{parentName:"h3"},"bounce()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static bounce(t)\n")),Object(c.b)("p",null,"Provides a simple bouncing effect."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://easings.net/#easeInBounce"}),"http://easings.net/#easeInBounce")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"bezier"},Object(c.b)("inlineCode",{parentName:"h3"},"bezier()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static bezier(x1, y1, x2, y2)\n")),Object(c.b)("p",null,"Provides a cubic bezier curve, equivalent to CSS Transitions' ",Object(c.b)("inlineCode",{parentName:"p"},"transition-timing-function"),"."),Object(c.b)("p",null,"A useful tool to visualize cubic bezier curves can be found at ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cubic-bezier.com/"}),"http://cubic-bezier.com/")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"in"},Object(c.b)("inlineCode",{parentName:"h3"},"in()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static in easing;\n")),Object(c.b)("p",null,"Runs an easing function forwards."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"out"},Object(c.b)("inlineCode",{parentName:"h3"},"out()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static out(easing)\n")),Object(c.b)("p",null,"Runs an easing function backwards."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"inout"},Object(c.b)("inlineCode",{parentName:"h3"},"inOut()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static inOut(easing)\n")),Object(c.b)("p",null,"Makes any easing function symmetrical. The easing function will run forwards for half of the duration, then backwards for the rest of the duration."))}o.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),o=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,O=p["".concat(b,".").concat(d)]||p[d]||u[d]||c;return n?i.a.createElement(O,r(r({ref:t},s),{},{components:n})):i.a.createElement(O,r({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,b[1]=r;for(var s=2;s<c;s++)b[s]=n[s];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);