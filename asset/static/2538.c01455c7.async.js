"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2538],{44771:function(U,E,r){r.d(E,{Z:function(){return u}});var O=r(34041),a=r(25449),v=r(67294),s=r(85893);function u(M){return(0,s.jsx)(a.Z,{label:M.label,name:"restart",initialValue:M.defaultValue?M.defaultValue:"on-failure",children:(0,s.jsx)(O.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u5931\u8D25\u540E\u91CD\u542F\uFF08\u9ED8\u8BA45\u6B21\uFF09"},{value:"unless-stopped",label:"\u672A\u624B\u52A8\u505C\u6B62\u5219\u91CD\u542F"},{value:"always",label:"\u4E00\u76F4\u91CD\u542F"}]})})}},4798:function(U,E,r){var O=r(15009),a=r.n(O),v=r(99289),s=r.n(v),u=r(5574),M=r.n(u),p=r(24963),b=r(14946),f=r(64789),_=r(38345),h=r(17186),P=r(24739),m=r(5966),i=r(62370),g=r(10641),I=r(31418),T=r(25593),w=r(85576),D=r(66309),c=r(42075),o=r(14726),t=r(67294),n=r(85893),d=(0,t.forwardRef)(function(e,k){var N=(0,t.useContext)(p.Z),$=N.notice,Z=(0,t.useState)(!1),S=M()(Z,2),x=S[0],B=S[1],K=(0,t.useRef)(),F=I.Z.useApp();(0,t.useImperativeHandle)(k,function(){return{}});var G=function(j){var l,W,y=!1,A=(l=(W=K.current)===null||W===void 0?void 0:W.getList())!==null&&l!==void 0?l:[];if(A.map(function(C){C.name==j.name&&(y=!0)}),!y){var L;(L=K.current)===null||L===void 0||L.add(j)}};return(0,n.jsxs)(_.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,n.jsx)(h.u,{name:"network",actionRef:K,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(j,l){return!e.siteName||e.siteName==""||typeof e.siteName=="undefined"?($.error("\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(B(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(j,l){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(P.UW,{children:[(0,n.jsx)(m.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:l.record.name}}),(0,n.jsx)(i.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:l.record.alise!=""&&(0,n.jsx)(T.Z.Text,{code:!0,copyable:!0,children:l.record.alise})}),(0,n.jsx)(i.Z,{label:" ",children:j.action})]}),(0,n.jsx)(P.UW,{children:(0,n.jsx)(m.Z,{label:"\u6307\u5B9AIpV4",name:"ipV4",width:"md",fieldProps:{addonAfter:l.record.subnet}})})]})}}),(0,n.jsx)(w.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:x,onCancel:function(){return B(!1)},children:(0,n.jsx)(g.Z,{rowKey:"Name",toolBarRender:!1,columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(j,l,W,y,A){return l.Name=="none"||l.Name=="bridge"||l.Name=="host"?(0,n.jsxs)(n.Fragment,{children:[l.Name," ",(0,n.jsx)(D.Z,{color:"blue",children:"System"})]}):(0,n.jsx)(n.Fragment,{children:j})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Network",search:!1,dataIndex:["IPAM","Config",0,"Subnet"],render:function(j,l,W,y,A){return(0,n.jsxs)(c.Z,{children:[l.IPAM.Config&&l.IPAM.Config[0]&&"".concat(l.IPAM.Config[0].Subnet," - ").concat(l.IPAM.Config[0].Gateway),l.IPAM.Config&&l.IPAM.Config[1]&&"".concat(l.IPAM.Config[1].Subnet," - ").concat(l.IPAM.Config[1].Gateway)]})}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(j,l,W,y,A){return[(0,n.jsx)(o.ZP,{type:"link",onClick:function(){var C;G({name:l.Name,alise:[((C=e.siteName)!==null&&C!==void 0?C:"")+".pod.dpanel.local"],subnet:l.IPAM.Config[0].Subnet}),B(!1)},children:(0,n.jsx)(f.Z,{})},l.Id)]}}],request:function(){var R=s()(a()().mark(function j(l,W,y){var A;return a()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,b.jR)({name:l.Name});case 2:return A=C.sent,C.abrupt("return",{data:A.data.list,success:!0,total:A.data.list.length});case 4:case"end":return C.stop()}},j)}));return function(j,l,W){return R.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})});E.Z=d},80821:function(U,E,r){r.d(E,{Z:function(){return f}});var O=r(5574),a=r.n(O),v=r(24963),s=r(86738),u=r(14726),M=r(83062),p=r(67294),b=r(85893);function f(_){var h=(0,p.useState)(!1),P=a()(h,2),m=P[0],i=P[1],g=(0,p.useContext)(v.Z),I=g.lang,T=g.notice,w=g.message,D=function(){i(!0),_.action().then(function(o){if(i(!1),typeof _.onSuccess=="function"&&_.onSuccess(o),_.messageSuccess){var t="";typeof _.messageSuccess=="function"?t=_.messageSuccess(o):t=_.messageSuccess,t.indexOf(".")>-1&&(t=I(t)),_.asynced?w.info(t):w.success(t)}}).catch(function(o){i(!1),typeof _.onError=="function"&&_.onError(o)})};return _.confirm?(0,b.jsx)(s.Z,{style:{width:500},title:_.confirmTitle?_.confirmTitle:I("notification.title.tip"),description:_.confirm,onConfirm:D,okText:"Yes",cancelText:"No",children:(0,b.jsx)(u.ZP,{disabled:_.disabled,icon:_.icon,loading:m,danger:_.danger,type:_.type,children:_.children})}):(0,b.jsx)(M.Z,{title:_.tips,children:(0,b.jsx)(u.ZP,{disabled:_.disabled,icon:_.icon,loading:m,onClick:D,danger:_.danger,type:_.type,children:_.children})})}},78451:function(U,E,r){r.d(E,{Z:function(){return v}});var O=r(67294),a=r(85893);function v(s){return(0,a.jsx)("span",{style:{wordBreak:"break-word"},children:s.content})}},24963:function(U,E,r){var O=r(67294),a=(0,O.createContext)({});E.Z=a},62597:function(U,E,r){r.d(E,{$G:function(){return M},Ct:function(){return I},Tb:function(){return _},XH:function(){return P},cl:function(){return b},iE:function(){return i},lK:function(){return c},xb:function(){return w}});var O=r(15009),a=r.n(O),v=r(99289),s=r.n(v),u=r(54006);function M(t){return p.apply(this,arguments)}function p(){return p=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/site/create-by-image",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function b(t){return f.apply(this,arguments)}function f(){return f=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/site/get-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),f.apply(this,arguments)}function _(t){return h.apply(this,arguments)}function h(){return h=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.download=!1,e.next=3,(0,u.request)("/api/app/log/run",{method:"POST",data:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},t)})),h.apply(this,arguments)}function P(t){return m.apply(this,arguments)}function m(){return m=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.download=!0,e.next=3,(0,u.request)("/api/app/log/run",{method:"POST",data:n,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},t)})),m.apply(this,arguments)}function i(t){return g.apply(this,arguments)}function g(){return g=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/site/get-detail",{data:n,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function I(t){return T.apply(this,arguments)}function T(){return T=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/container/delete",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),T.apply(this,arguments)}function w(t){return D.apply(this,arguments)}function D(){return D=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/site/delete",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function c(t){return o.apply(this,arguments)}function o(){return o=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/site/update-title",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),o.apply(this,arguments)}},2831:function(U,E,r){r.d(E,{Ll:function(){return b},aF:function(){return M},d6:function(){return _}});var O=r(15009),a=r.n(O),v=r(99289),s=r.n(v),u=r(54006);function M(){return p.apply(this,arguments)}function p(){return p=s()(a()().mark(function P(){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,u.request)("/api/common/home/info",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},P)})),p.apply(this,arguments)}function b(){return f.apply(this,arguments)}function f(){return f=s()(a()().mark(function P(){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,u.request)("/api/common/home/usage",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},P)})),f.apply(this,arguments)}function _(){return h.apply(this,arguments)}function h(){return h=s()(a()().mark(function P(){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,u.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},P)})),h.apply(this,arguments)}},14946:function(U,E,r){r.d(E,{CI:function(){return _},HY:function(){return w},IS:function(){return M},XY:function(){return i},_3:function(){return c},_x:function(){return P},jR:function(){return b},t9:function(){return I}});var O=r(15009),a=r.n(O),v=r(99289),s=r.n(v),u=r(54006);function M(t){return p.apply(this,arguments)}function p(){return p=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/network/get-detail",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function b(t){return f.apply(this,arguments)}function f(){return f=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/network/get-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),f.apply(this,arguments)}function _(){return h.apply(this,arguments)}function h(){return h=s()(a()().mark(function t(){return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,u.request)("/api/app/network/prune",{method:"POST"});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},t)})),h.apply(this,arguments)}function P(t){return m.apply(this,arguments)}function m(){return m=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/network/delete",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),m.apply(this,arguments)}function i(t){return g.apply(this,arguments)}function g(){return g=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/network/create",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),g.apply(this,arguments)}function I(t){return T.apply(this,arguments)}function T(){return T=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/network/disconnect",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),T.apply(this,arguments)}function w(t){return D.apply(this,arguments)}function D(){return D=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.request)("/api/app/network/connect",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function c(t){return o.apply(this,arguments)}function o(){return o=s()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/app/network/get-container-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),o.apply(this,arguments)}},60335:function(U,E,r){r.d(E,{IE:function(){return b},IW:function(){return M},KK:function(){return i},LJ:function(){return I},Re:function(){return w},eE:function(){return P},jV:function(){return _}});var O=r(15009),a=r.n(O),v=r(99289),s=r.n(v),u=r(54006);function M(c){return p.apply(this,arguments)}function p(){return p=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/status",{method:"POST",data:o}));case 1:case"end":return n.stop()}},c)})),p.apply(this,arguments)}function b(c){return f.apply(this,arguments)}function f(){return f=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/get-list",{data:o,method:"POST"}));case 1:case"end":return n.stop()}},c)})),f.apply(this,arguments)}function _(c){return h.apply(this,arguments)}function h(){return h=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/get-detail",{data:o,method:"POST"}));case 1:case"end":return n.stop()}},c)})),h.apply(this,arguments)}function P(c){return m.apply(this,arguments)}function m(){return m=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/update",{data:o,method:"POST"}));case 1:case"end":return n.stop()}},c)})),m.apply(this,arguments)}function i(){return g.apply(this,arguments)}function g(){return g=s()(a()().mark(function c(){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,u.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return t.stop()}},c)})),g.apply(this,arguments)}function I(c){return T.apply(this,arguments)}function T(){return T=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/export",{method:"POST",data:o,responseType:"blob"}));case 1:case"end":return n.stop()}},c)})),T.apply(this,arguments)}function w(c){return D.apply(this,arguments)}function D(){return D=s()(a()().mark(function c(o){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.request)("/api/app/container/commit",{method:"POST",data:o}));case 1:case"end":return n.stop()}},c)})),D.apply(this,arguments)}}}]);