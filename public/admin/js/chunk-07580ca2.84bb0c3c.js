(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07580ca2"],{"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},a2c9:function(t,e,a){},a7d4:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userInfo?a("div",{staticClass:"user-created"},["name"!==t.options.display?a("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===t.options.display?t.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"avatar",attrs:{size:32,src:t.src,alt:t.displayValue}}):t._e(),"avatar"!==t.options.display?a("span",{staticClass:"name"},[t._v("\n    "+t._s(t.displayValue)+"\n  ")]):t._e(),a("v-icon",{attrs:{name:"account_box"}})],1):t.newItem?a("v-input",{attrs:{readonly:!0,placeholder:t.$t("interfaces.user.created-you"),"icon-right":"account_box"}}):a("v-input",{attrs:{readonly:!0,placeholder:t.$t("interfaces.user.created-unknown"),"icon-right":"account_box"}})},n=[],s=a("7618"),i=a("8db2"),r=a.n(i),u={mixins:[r.a],computed:{userInfo:function(){return this.value?"object"===Object(s["a"])(this.value)?this.value.first_name?this.value:this.$store.state.users[this.value.id]:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}},o=u,c=(a("f73f"),a("2877")),p=Object(c["a"])(o,l,n,!1,null,"0fbef3ec",null);e["default"]=p.exports},f73f:function(t,e,a){"use strict";var l=a("a2c9"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-07580ca2.84bb0c3c.js.map