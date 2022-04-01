"use strict";(self["webpackChunkecoland"]=self["webpackChunkecoland"]||[]).push([[443],{7273:function(){},26:function(e,t,r){r.d(t,{Z:function(){return y}});var s=r(5648),i=r(144),a=r(5827),n=r(8083),l=r(6952),o=r(3536),c=r(1431),d=r(8085),u=r(4589),h=r(3325);const g=(0,h.Z)(l.Z,(0,o.d)(["absolute","fixed","top","bottom"]),c.Z,d.Z);var f=g.extend({name:"v-progress-linear",directives:{intersect:n.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,u.kb)(this.normalizedValue,"%"),width:(0,u.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?a.Z5:a.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,u.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,u.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f,v=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),m=r(6505),y=(0,h.Z)(v,m.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...m.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const e={...s.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=v.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},7118:function(e,t,r){r.d(t,{EB:function(){return o},ZB:function(){return l},h7:function(){return a}});var s=r(26),i=r(4589);const a=(0,i.Ji)("v-card__actions"),n=(0,i.Ji)("v-card__subtitle"),l=(0,i.Ji)("v-card__text"),o=(0,i.Ji)("v-card__title");s.Z},2102:function(e,t,r){r(7273);var s=r(144),i=r(6290),a=r(4589);const n=["sm","md","lg","xl"],l=(()=>n.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>n.reduce(((e,t)=>(e["offset"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>n.reduce(((e,t)=>(e["order"+(0,a.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(c)};function u(e,t,r){let s=e;if(null!=r&&!1!==r){if(t){const r=t.replace(e,"");s+=`-${r}`}return"col"!==e||""!==r&&!0!==r?(s+=`-${r}`,s.toLowerCase()):s.toLowerCase()}}const h=new Map;t["Z"]=s.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:r,children:s,parent:a}){let n="";for(const i in t)n+=String(t[i]);let l=h.get(n);if(!l){let e;for(e in l=[],d)d[e].forEach((r=>{const s=t[r],i=u(e,r,s);i&&l.push(i)}));const r=l.some((e=>e.startsWith("col-")));l.push({col:!r||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(n,l)}return e(t.tag,(0,i.ZP)(r,{class:l}),s)}})},2877:function(e,t,r){r(7273);var s=r(144),i=r(6290),a=r(4589);const n=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return n.reduce(((r,s)=>(r[e+(0,a.jC)(s)]=t(),r)),{})}const c=e=>[...l,"baseline","stretch"].includes(e),d=o("align",(()=>({type:String,default:null,validator:c}))),u=e=>[...l,"space-between","space-around"].includes(e),h=o("justify",(()=>({type:String,default:null,validator:u}))),g=e=>[...l,"space-between","space-around","stretch"].includes(e),f=o("alignContent",(()=>({type:String,default:null,validator:g}))),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,r){let s=v[e];if(null!=r){if(t){const r=t.replace(e,"");s+=`-${r}`}return s+=`-${r}`,s.toLowerCase()}}const y=new Map;t["Z"]=s.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:g},...f},render(e,{props:t,data:r,children:s}){let a="";for(const i in t)a+=String(t[i]);let n=y.get(a);if(!n){let e;for(e in n=[],p)p[e].forEach((r=>{const s=t[r],i=m(e,r,s);i&&n.push(i)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(a,n)}return e(t.tag,(0,i.ZP)(r,{staticClass:"row",class:n}),s)}})},5189:function(e,t,r){var s=r(4561),i=r(2936),a=r(3325),n=r(1824);t["Z"]=(0,a.Z)(s.Z,i.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,n.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let e;return this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):((0,n.Kd)("v-hover should only contain a single element",this),e)}})},5953:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-sheet",{staticClass:"my-6 mx-auto",attrs:{"max-width":"1000"}},[s("img",{staticClass:"my-6",attrs:{alt:"Vue logo",height:"400",src:r(3114)}}),s("h1",[e._v(e._s(e.$t("ឈ្មោះអេកូលែន")))]),s("p",{staticClass:"mt-3"},[e._v(" "+e._s("និយាយអ្វីមួយដែលបំផុសគំនិតអំពិអេកូលែននៅទីនេះ។ ".repeat(12))+" ")]),s("h1",{staticClass:"mb-6"},[e._v(e._s(e.$t("អំពិយើង.ការងារយើង")))]),s("v-row",e._l(9,(function(t){return s("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[s("v-hover",{scopedSlots:e._u([{key:"default",fn:function(r){var i=r.hover;return[s("v-card",{class:{"on-hover":i},attrs:{color:"grey lighten-4","max-width":"600"}},[s("v-img",{staticClass:"grey lighten-2 white--text align-end",attrs:{src:"https://picsum.photos/500/300?image="+(5*t+0),"lazy-src":"https://picsum.photos/10/6?image="+(5*t+10),"aspect-ratio":"1"}},[s("v-card-title",[e._v(" ឈ្មោះកម្រោង ")])],1)],1)]}}],null,!0)})],1)})),1)],1)},i=[],a={name:"AmbiYerng"},n=a,l=r(1001),o=r(3453),c=r.n(o),d=r(26),u=r(7118),h=r(2102),g=r(5189),f=r(7047),p=r(2877),v=r(3385),m=(0,l.Z)(n,s,i,!1,null,"9a1c41b6",null),y=m.exports;c()(m,{VCard:d.Z,VCardTitle:u.EB,VCol:h.Z,VHover:g.Z,VImg:f.Z,VRow:p.Z,VSheet:v.Z})}}]);
//# sourceMappingURL=about.8743dfd3.js.map