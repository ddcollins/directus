(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11358888"],{8485:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.error||!e.relation?a("div",{staticClass:"translation error"},[a("p",[a("v-icon",{attrs:{name:"warning"}}),e._v("\n    "+e._s(e.$t("interfaces.translation.translation_not_setup"))+"\n  ")],1)]):e.languages&&0!==e.languages.length?null!=e.activeLanguage?a("div",{staticClass:"translation"},[a("v-simple-select",{staticClass:"language-select",attrs:{placeholder:e.$t("interfaces.translation.choose_language")},model:{value:e.activeLanguage,callback:function(t){e.activeLanguage=t},expression:"activeLanguage"}},e._l(e.languages,(function(t){return a("option",{key:t.code,domProps:{value:t.code}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),0),a("hr"),a("v-form",{key:e.activeLanguage,ref:"form",staticClass:"form",attrs:{fields:e.relatedFields,values:e.langValue,collection:e.relation.collection_many.collection,"new-item":e.isNew},on:{"stage-value":e.stageValue}})],1):e._e():a("div",{staticClass:"translation error"},[a("p",[a("v-icon",{attrs:{name:"warning"}}),e._v("\n    "+e._s(e.$t("interfaces.translation.translation_no_languages"))+"\n  ")],1)])},i=[],l=(a("8e6e"),a("456d"),a("bd86")),r=a("75fc"),s=(a("ac6a"),a("7514"),a("8db2")),o=a.n(s);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={mixins:[o.a],data:function(){return{activeLanguage:null,languages:null}},computed:{error:function(){return!this.options.languagesCollection||!this.options.translationLanguageField},primaryKeyField:function(){return _.find(this.fields,{primary_key:!0}).field},primaryKey:function(){return this.values[this.primaryKeyField]},relatedFields:function(){return this.relation?this.relation.collection_many.fields:null},languageFields:function(){return this.options.languagesCollection?this.$store.state.collections[this.options.languagesCollection].fields:null},langValue:function(){return this.languages&&this.activeLanguage&&this.value&&this.valuesByLang[this.activeLanguage]||{}},isNew:function(){return void 0!==this.valuesByLang[this.activeLanguage]},valuesByLang:function(){if(!this.value)return{};var e=this.options.translationLanguageField,t=this.options.languagesPrimaryKeyField;return _(this.value).map((function(a){return a[e]=a[e][t]||a[e],a})).keyBy(this.options.translationLanguageField).value()},fieldManyName:function(){return this.relation.field_many.field}},created:function(){this.fetchLanguages()},methods:{fetchLanguages:function(){var e=this;if(!this.options.languagesCollection||!this.options.translationLanguageField)return null;this.$api.getItems(this.options.languagesCollection,{limit:-1}).then((function(e){return e.data})).then((function(t){if(0!==t.length){var a=e.options.languagesPrimaryKeyField,n=e.options.languagesNameField;e.languages=t.map((function(e){return{code:e[a],name:e[n]}})),null==e.values.translation?e.activeLanguage=e.options.defaultLanguage?e.options.defaultLanguage:0:e.activeLanguage=t[0][_.find(e.languageFields,{primary_key:!0}).field]}}))},stageValue:function(e){var t,a,n,i=this,s=e.field,o=e.value;this.valuesByLang[this.activeLanguage]?t=this.value.map((function(e){var t=e[i.options.translationLanguageField];return t==i.activeLanguage||t[i.options.languagesPrimaryKeyField]==i.activeLanguage?c({},e,Object(l["a"])({},s,o)):e})):t=this.newItem?[].concat(Object(r["a"])(this.value||[]),[(a={},Object(l["a"])(a,this.options.translationLanguageField,this.activeLanguage),Object(l["a"])(a,s,o),a)]):[].concat(Object(r["a"])(this.value||[]),[(n={},Object(l["a"])(n,this.relation.field_many.field,this.primaryKey),Object(l["a"])(n,this.options.translationLanguageField,this.activeLanguage),Object(l["a"])(n,s,o),n)]);return t=t.map((function(e){var t=Object.assign({},e);return delete t[i.fieldManyName],t})),this.$emit("input",t)}}},f=g,d=(a("a44e"),a("2877")),p=Object(d["a"])(f,n,i,!1,null,"11f14bab",null);t["default"]=p.exports},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},a44e:function(e,t,a){"use strict";var n=a("afac"),i=a.n(n);i.a},afac:function(e,t,a){}}]);
//# sourceMappingURL=chunk-11358888.fefe5346.js.map