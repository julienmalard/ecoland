"use strict";(self["webpackChunkecoland"]=self["webpackChunkecoland"]||[]).push([[443],{2102:function(t,e,n){var r=n(3796),a=n(4367),o=(n(1539),n(9653),n(7941),n(4916),n(5306),n(1532),n(8783),n(3948),n(6699),n(4747),n(6755),n(7273),n(144)),s=n(6290),l=n(4589),u=["sm","md","lg","xl"],i=function(){return u.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),c=function(){return u.reduce((function(t,e){return t["offset"+(0,l.jC)(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return u.reduce((function(t,e){return t["order"+(0,l.jC)(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(i),offset:Object.keys(c),order:Object.keys(d)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var v=new Map;e["Z"]=o.Z.extend({name:"v-col",functional:!0,props:(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({cols:{type:[Boolean,String,Number],default:!1}},i),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,o=e.children,l=(e.parent,"");for(var u in n)l+=String(n[u]);var i=v.get(l);return i||function(){var t,e;for(e in i=[],f)f[e].forEach((function(t){var r=n[t],a=h(e,t,r);a&&i.push(a)}));var a=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!a||!n.cols},(0,r.Z)(t,"col-".concat(n.cols),n.cols),(0,r.Z)(t,"offset-".concat(n.offset),n.offset),(0,r.Z)(t,"order-".concat(n.order),n.order),(0,r.Z)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),v.set(l,i)}(),t(n.tag,(0,s.ZP)(a,{class:i}),o)}})},5189:function(t,e,n){var r=n(4561),a=n(2936),o=n(3325),s=n(1824);e["Z"]=(0,o.Z)(r.Z,a.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,s.Kd)("v-hover should only contain a single element",this),t)):((0,s.Kd)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},5953:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"my-6 mx-auto",attrs:{"max-width":"1000"}},[r("img",{staticClass:"my-6",attrs:{alt:"Vue logo",height:"400",src:n(3114)}}),r("h1",[t._v(t._s(t.$t("ឈ្មោះអេកូលែន")))]),r("p",{staticClass:"mt-3"},[t._v(" "+t._s("និយាយអ្វីមួយដែលបំផុសគំនិតអំពិអេកូលែននៅទីនេះ។ ".repeat(12))+" ")]),r("h1",{staticClass:"mb-6"},[t._v(t._s(t.$t("អំពិយើង.ការងារយើង")))]),r("v-row",t._l(9,(function(e){return r("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var a=n.hover;return[r("v-card",{class:{"on-hover":a},attrs:{color:"grey lighten-4","max-width":"600"}},[r("v-img",{staticClass:"grey lighten-2 white--text align-end",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+0),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"}},[r("v-card-title",[t._v(" ឈ្មោះកម្រោង ")])],1)],1)]}}],null,!0)})],1)})),1)],1)},a=[],o={name:"AmbiYerng"},s=o,l=n(1001),u=n(3453),i=n.n(u),c=n(26),d=n(7118),f=n(2102),h=n(5189),v=n(7047),p=n(2877),g=n(3385),m=(0,l.Z)(s,r,a,!1,null,"9a1c41b6",null),y=m.exports;i()(m,{VCard:c.Z,VCardTitle:d.EB,VCol:f.Z,VHover:h.Z,VImg:v.Z,VRow:p.Z,VSheet:g.Z})}}]);
//# sourceMappingURL=about-legacy.9b3dca9a.js.map