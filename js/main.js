(function(e){function t(t){for(var i,s,r=t[0],c=t[1],l=t[2],d=0,_=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&_.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(_.length)_.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"010f":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("vuescroll",{staticClass:"vueScroll"},["list_sectors"==e.side_content?n("secteur"):e._e(),"list_posts"==e.side_content?n("list-posts"):e._e(),"show_post"==e.side_content?n("single-post"):e._e()],1)],1)},a=[],o=n("77a0"),s=n.n(o),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-left bg-white"},[n("div",{staticClass:"px-3 py-2 mini-fiche-title"},[e._v(" "+e._s(e.$t("categories"))+" ")]),e._l(e.sectors,(function(t,i){return n("b-list-group",{key:i,staticStyle:{"border-radius":"0px",height:"100%"}},[t.count>0?n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",on:{click:function(n){return e.listPosts(t)}}},[n("span",{staticClass:"mini-fiche-categories",domProps:{innerHTML:e._s(t.name)}}),n("span",{staticClass:"mini-fiche-categories-count"},[e._v(e._s(t.count))])]):e._e()],1)}))],2)},c=[],l={data:function(){return{}},computed:{sectors:function(){return this.$store.state.category}},mounted:function(){},methods:{listPosts:function(e){return this.$store.dispatch("listPosts",e)}}},u=l,d=(n("cd42"),n("2877")),_=Object(d["a"])(u,r,c,!1,null,null,null),f=_.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-left bg-white mt-4"},[n("div",{class:"header-back mini-fiche-icon-back-color pl-4 \n  "+e.button_back_icon_size},[n("span",{class:""+e.button_back_icon,on:{click:function(t){return e.goBack()}}})]),n("div",{staticClass:"pt-3 pl-3 mini-fiche-content"},[n("i",[e._v(e._s(e.search_key))])]),e.posts.length>0?n("b-list-group",e._l(e.posts,(function(e){return n("b-list-group-item",{key:e.id},[n("card",{attrs:{data:e}})],1)})),1):n("b-list-group",[n("div",{staticClass:"px-4"},[e._v(" "+e._s(e.$t("404"))+" ")])])],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:function(t){return e.showPost(e.data)}}},[n("div",{staticClass:"mb-1 mini-fiche-title"},[e._v(e._s(e.acf.titre_de_la_solution))]),n("div",{staticClass:"text-muted mb-2 mini-fiche-date"},[e._v(" "+e._s(e.$t("last-update"))+" : "+e._s(e.getDate(e.data.modified))+" ")]),e.acf.pays_enreg_structure?n("div",{staticClass:"d-flex align-items-center mb-2"},[n("div",{class:"terms-icon-style "+e.icon_size},[n("span",{class:e.country_registrement_icon+" mr-2"})]),n("div",{staticClass:"mr-1 mini-fiche-content"},[e._v(" "+e._s(e.acf.pays_enreg_structure)+" ")])]):e._e(),e.is_terms_and_category_valid?n("div",{staticClass:"d-flex align-items-baseline mt-2"},[n("div",{class:"terms-icon-style "+e.icon_size},[n("span",{class:e.category_icon+" mr-2"})]),n("div",{staticStyle:{"margin-top":"-5px"}},[e.acf.categorie_solution?n("div",{staticClass:"small mini-fiche-content w-100",domProps:{innerHTML:e._s(e.acf.categorie_solution)}}):e._e(),e._l(e.terms[0],(function(t,i){return n("span",{key:"pays"+i,staticClass:"text-pays mr-1 mt-n1"},[0!=i?n("span",{staticClass:"mini-fiche-content"},[e._v(" | ")]):e._e(),n("span",{staticClass:"d-inline mini-fiche-content",domProps:{innerHTML:e._s(t.name)}})])}))],2)]):e._e(),n("p",{staticClass:"mt-3 mini-fiche-content",domProps:{innerHTML:e._s(e.resume(e.acf.description_solution))}}),n("b-button",{staticClass:"button-more mini-fiche-more-button",attrs:{variant:"light"},on:{click:function(t){return e.showPost(e.data)}}},[e._v(" "+e._s(e.$t("more"))+" "),n("span",{class:e.more_button_icon_size},[n("span",{class:e.more_button_icon+" ml-2"})])])],1)},b=[],v={props:["data"],data:function(){return{acf:{},terms:[],is_terms_and_category_valid:!1,country_registrement_icon:window.country_registrement_icon,category_icon:window.category_icon,icon_size:window.mini_fiche_terms_icon_size,more_button_icon:window.more_button_icon,more_button_icon_size:window.more_button_icon_size}},mounted:function(){this.acf=this.data.acf,this.terms=this.data._embedded["wp:term"]?this.data._embedded["wp:term"]:[],(this.terms.length>0||this.acf.categorie_solution)&&(this.is_terms_and_category_valid=!0)},computed:{},methods:{showPost:function(e){return this.$store.commit("SHOW_POST",e)},resume:function(e){return e?e.substr(0,130)+"...":""},getDate:function(e){var t=new Date(e),n=t.getMonth()+1;return n=n>=10?n:"0"+n,t.getDate()+"/"+n+"/"+t.getFullYear()}}},g=v,S=(n("6633"),Object(d["a"])(g,h,b,!1,null,null,null)),y=S.exports,w={props:["data"],components:{Card:y},data:function(){return{button_back_icon:window.button_back_icon,button_back_icon_size:window.button_back_icon_size}},mounted:function(){},computed:{search_key:function(){return this.$store.state.search_key},posts:function(){return this.$store.state.posts},base_filter:function(){return this.$store.state.base_filter}},methods:{goBack:function(){return this.$store.dispatch("resetMap"),this.$store.commit("SET_SEARCH_VALUE",null),this.$store.commit("SET_FILTER_BASE",this.base_filter[0]),this.$store.commit("SHOW_LIST_SECTORS","list_sectors")},showPost:function(e){return this.$store.commit("SHOW_POST",e)}},watch:{}},C=w,T=(n("a748"),Object(d["a"])(C,p,m,!1,null,null,null)),E=T.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-left"},[n("div",[n("div",{class:"header-back pl-4 mini-fiche-icon-back-color mt-4 "+e.button_back_icon_size,on:{click:function(t){return e.goBack()}}},[n("span",{class:""+e.button_back_icon})]),n("div",{staticClass:"card",staticStyle:{border:"none !important"}},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"text-muted small mini-fiche-date"},[e._v(" "+e._s(e.$t("last-update"))+" : "+e._s(e.getDate(e.data.modified))+" ")]),n("div",{staticClass:"mt-3 mini-fiche-title",domProps:{innerHTML:e._s(e.data.title.rendered)}}),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[e.data.featured_media_src_url?n("div",{staticClass:"col-6"},[n("img",{staticStyle:{width:"200px",height:"auto","object-fit":"cover"},attrs:{src:e.data.featured_media_src_url}})]):e._e(),n("div",{staticClass:"col-3 ml-3 mt-3"},[n("div",{staticClass:"mb-4 d-flex justify-content-start align-items-center"},[e.acf.lien_vers_la_solution?n("icon-button",{attrs:{data:e.acf.lien_vers_la_solution,label:e.$t("site_web.textes"),icon:""+e.mini_fiche_word_icon}}):e._e(),e.acf.adress_mail_contact?n("icon-button",{attrs:{data:"mailto:"+e.acf.adress_mail_contact,label:e.acf.adress_mail_contact,icon:""+e.mini_fiche_email_icon}}):e._e(),e.acf.liens_ext?n("icon-button",{attrs:{data:e.acf.liens_ext,label:e.$t("autre_lien"),icon:""+e.mini_fiche_link_icon}}):e._e()],1)])])]),n("mini-card",{attrs:{option:1,icon:""+e.country_registrement_icon,data:e.acf.pays_enreg_structure}}),n("mini-card",{attrs:{option:3,icon:e.category_icon,data:e.terms,termIndex:0,acf:e.acf}}),n("mini-card",{attrs:{option:2,data:e.acf.pays_solution_deployee,label:e.$t("pays_deploiement")}}),n("mini-card",{attrs:{option:0,data:e.acf.annee_creation_entreprise,label:e.$t("annee_creation")}}),n("mini-card",{attrs:{option:0,data:e.acf.nombre_employe,label:e.$t("nbre_employee")}}),n("mini-card",{attrs:{option:0,data:e.acf.description_solution,label:e.$t("description")}}),n("mini-card",{attrs:{option:0,data:e.acf.categorie_solution,label:"Categorie"}}),n("mini-card",{attrs:{option:0,data:e.acf.stade_de_developpement,label:e.$t("stade")}}),e.acf.type_fonds&&e.acf.montant_fonds>0?n("mini-card",{attrs:{option:0,data:e.acf.type_fonds+" pour "+e.acf.montant_fonds+" $",label:e.$t("besoin_financement")}}):e._e(),n("mini-card",{attrs:{option:0,data:e.acf.investisseur,label:e.$t("investisseur")}}),n("mini-card",{attrs:{option:0,data:e.acf.accompagnement_par_une_structure,label:e.$t("accompagnement")}}),n("mini-card",{attrs:{option:0,data:e.acf.prix_et_distinctions_,label:e.$t("prix")}}),n("mini-card",{attrs:{option:0,data:e.acf.un_chiffre__mot_cle,label:e.$t("mot clé")}}),n("div",{staticClass:"a-lire",staticStyle:{width:"100%",overflow:"hidden"}},[e.acf.a_lire&&""!=e.acf.a_lire?n("mini-card",{attrs:{option:0,data:"<a class='mb-2 mini-fiche-label link-mini-fiche-label' href='"+e.acf.a_lire+"'>"+e.$t("a lire")+"</a>",label:""}}):e._e()],1)],1)])])])},L=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.data?n("a",{class:"mr-2 mini-fiche-link-icon-button p-2 "+e.size,attrs:{href:e.data,target:"_blank",title:e.label}},[n("span",{class:e.icon})]):e._e()])},M=[],$={props:["icon","data","label","custom","custom_icon"],data:function(){return{size:window.button_icon_size}}},x=$,R=Object(d["a"])(x,O,M,!1,null,null,null),A=R.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0==e.option&&e.data?n("div",{staticClass:"mt-4"},[n("div",{staticClass:"mb-2 mini-fiche-label"},[e._v(e._s(e.label))]),n("div",{staticClass:"mini-fiche-content",domProps:{innerHTML:e._s(e.data)}})]):e._e(),1==e.option&&e.data?n("div",{staticClass:"mt-4 d-flex align-items-center"},[n("div",{class:"terms-icon-style "+e.size},[n("span",{class:e.icon+" mr-2"})]),n("span",{staticClass:"mr-1 mini-fiche-content"},[e._v(e._s(e.data))])]):e._e(),2==e.option&&e.data.length>0?n("div",{staticClass:"mt-4"},[n("div",{staticClass:"mb-2 mini-fiche-label"},[e._v(e._s(e.label))]),e._l(e.data,(function(t,i){return n("span",{key:"country"+i},[0!=i?n("span",{staticClass:"mini-fiche-content"},[e._v(" | ")]):e._e(),n("span",{staticClass:"d-inline mini-fiche-content",domProps:{innerHTML:e._s(t)}})])}))],2):e._e(),3==e.option&&e.data.length>0?n("div",{staticClass:"mt-4 d-flex align-items-baseline mb-4"},[n("div",{class:"terms-icon-style "+e.size},[n("span",{class:e.icon+" mr-2"})]),e.is_terms_and_category_valid?n("div",[e.acf.categorie_solution?n("div",{staticClass:"mini-fiche-content w-100",domProps:{innerHTML:e._s(e.acf.categorie_solution)}}):e._e(),e._l(e.data[e.termIndex],(function(t,i){return n("span",{key:"terms"+i,staticClass:"text-pays mr-1 mt-n1"},[0!=i?n("span",{staticClass:"mini-fiche-content"},[e._v(" | ")]):e._e(),n("span",{staticClass:"d-inline mini-fiche-content",domProps:{innerHTML:e._s(t.name)}})])}))],2):e._e()]):e._e()])},I=[],N={props:["data","label","option","icon","termIndex","acf"],data:function(){return{is_terms_and_category_valid:!1,size:window.mini_fiche_terms_icon_size}},mounted:function(){3==this.option&&(this.data.length>0||this.acf.categorie_solution)&&(this.is_terms_and_category_valid=!0)}},q=N,j=(n("c96a"),Object(d["a"])(q,P,I,!1,null,null,null)),z=j.exports,D={components:{MiniCard:z,IconButton:A},data:function(){return{button_back_icon:window.button_back_icon,button_back_icon_size:window.button_back_icon_size,category_icon:window.category_icon,country_registrement_icon:window.country_registrement_icon,mini_fiche_word_icon:window.mini_fiche_word_icon,mini_fiche_email_icon:window.mini_fiche_email_icon,mini_fiche_link_icon:window.mini_fiche_link_icon}},mounted:function(){""!=this.acf.autre_zone&&this.acf.pays_solution_deployee.push(this.acf.autre_zone)},computed:{tags:function(){return[]},terms:function(){return this.$store.state.post._embedded["wp:term"]?this.$store.state.post._embedded["wp:term"]:[]},data:function(){return this.$store.state.post},acf:function(){return this.$store.state.post.acf}},methods:{getDate:function(e){var t=new Date(e),n=t.getMonth()+1;return n=n>=10?n:"0"+n,t.getDate()+"/"+n+"/"+t.getFullYear()},goBack:function(){return this.$store.commit("SHOW_LIST_POSTS","list_posts")}}},G=D,H=(n("95bd"),Object(d["a"])(G,k,L,!1,null,null,null)),F=H.exports,B={components:{Secteur:f,SinglePost:F,ListPosts:E,vuescroll:s.a},data:function(){return{solutions:[]}},computed:{side_content:function(){return this.$store.state.side_content}},methods:{}},U=B,Y=(n("f093"),Object(d["a"])(U,i,a,!1,null,null,null));t["default"]=Y.exports},"034f":function(e,t,n){"use strict";n("85ec")},"082e":function(e,t,n){"use strict";n("f911")},"0e51":function(e,t,n){"use strict";n("ba2f")},"2ed6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-search active-cyan-4 mb-4"},[n("div",{staticClass:"container-search"},[n("div",{staticClass:"container-input position-relative"},[n("search")],1)])])},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-wrappper"},[n("form",{on:{submit:e.research}},[e.search?n("font-awesome-icon",{staticClass:"ico-search ico-close",attrs:{icon:"times"},on:{click:function(t){return e.resetSearch()}}}):n("font-awesome-icon",{staticClass:"ico-search",attrs:{icon:"search"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control input-search",attrs:{type:"text",placeholder:e.$t("search-text"),"aria-label":"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})],1)])},s=[],r=(n("ac1f"),n("841c"),{data:function(){return{search:null}},computed:{search_value:function(){return this.$store.state.search_value},base_filter:function(){return this.$store.state.base_filter}},watch:{},methods:{resetSearch:function(){this.search=null,this.$store.commit("SET_SEARCH_VALUE",this.search),this.$store.commit("SHOW_LIST_SECTORS","list_sectors"),this.$store.dispatch("resetMap")},research:function(e){if(e.preventDefault(),""==this.search||!this.search)return this.search=null,this.resetSearch(),!1;this.$store.commit("SET_FILTER_BASE",this.base_filter[0]),this.$store.commit("SET_SEARCH_VALUE",this.search),this.$store.dispatch("searchKey",this.search)}}}),c=r,l=(n("082e"),n("2877")),u=Object(l["a"])(c,o,s,!1,null,"6c197ae1",null),d=u.exports,_={components:{search:d},data:function(){return{}},computed:{},watch:{},methods:{}},f=_,p=(n("98c0"),Object(l["a"])(f,i,a,!1,null,null,null));t["default"]=p.exports},"47dc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100",style:"position:relative;height:"+e.height+"px",attrs:{id:"app"}},[n("Maps",{staticClass:"maps-position"}),n("div",{staticClass:"container-search"},[n("map-search",{staticClass:"search"})],1),n("div",{staticClass:"container-side"},[n("side-content")],1)],1)},o=[],s={name:"App",data:function(){return{height:window.height}},components:{},mounted:function(){this.$store.dispatch("loadGeoCoordinate",window.geo_json),this.$store.dispatch("loadData"),this.$store.commit("SET_LANG",this.$i18n.locale)},methods:{select_filter:function(e){e&&(this.$store.commit("SET_FILTER_BASE",e),this.search_value?this.$store.dispatch("searchKey",this.search_value):this.$store.dispatch("search_key_with_null",e.option))}},computed:{base_filter:function(){return this.$store.state.base_filter},search_value:function(){return this.$store.state.search_value}}},r=s,c=(n("034f"),n("2877")),l=Object(c["a"])(r,a,o,!1,null,null,null),u=l.exports,d=n("2f62"),_=n("5530"),f={SET_FILTER_OPTIONS:function(e,t){e.filter_options=t,e.filter_search={value:null,active:!1},e.filter_range={active:!1,value:null}},SET_FILTER_RANGE:function(e,t){e.filter_range=t,e.filter_options={active:!1,value:null,placeholder:null,options:[]},e.filter_search={value:null,active:!1}},SET_FILTER_SEARCH:function(e,t){e.filter_options={active:!1,value:null,placeholder:null,options:[]},e.filter_range={active:!1,value:null},e.filter_search=t},SET_FILTER:function(e,t){e.main_filter_options_selected=t}},p={LIST_POSTS:function(e,t){e.posts=t,e.side_content="list_posts"},SHOW_POST:function(e,t){e.post=t,e.side_content="show_post"}},m={SET_DATA:function(e,t){e.data=t},SET_LOADING:function(e,t){e.loading=t},SET_LOADING_SECTOR:function(e,t){e.loading_sector=t,e.side_content="list_sectors"},SET_SECTORS:function(e,t){e.sectors=t},SET_SECTORS_LIST:function(e,t){e.secteurs_list=t},SHOW_LIST_SECTORS:function(e,t){e.side_content=t},SHOW_LIST_POSTS:function(e,t){e.side_content=t}},h=Object(_["a"])(Object(_["a"])(Object(_["a"])(Object(_["a"])({},f),m),p),{},{SET_HTTP_REQUEST_DONE:function(e){e.http_request_done++},SET_COUNTRY:function(e,t){e.countries=t},SET_FILTER_BASE:function(e,t){e.base_filter_selected=t},SET_SEARCH_VALUE:function(e,t){e.search_value=t},SET_SEARCH_KEY:function(e,t){e.search_key=t},SET_CATEGORIES:function(e,t){e.category=t},SET_GEO_COORDINATES:function(e,t){e.geo_coordinates=t},SET_LANG:function(e,t){e.lang=t}}),b={side_content:null,http_request_done:0,geo_coordinates:[],posts:[],post:[],sectors:[],category:[],filter_search:{value:null,active:!0},filter_options:{active:!1,placeholder:null,options:[]},filter_range:{active:!1,value:null},financement_type_list:["Financement par dettes","Financement par fonds propres","Subventions publiques","Crédits commerciaux"],main_filter_options_selected:null,main_filter_options:["Pays d'origine","Secteur","Pays de deploiement","Année de création","Nombre d'employé","Stade","Besoin de financement"],country_list:[{option:"Afrique du Sud",en:"South Africa",label:"Afrique du Sud"},{option:"Algérie",en:"Algeria",label:"Algérie"},{option:"Angola",en:"Angola",label:"Angola"},{option:"Bénin",en:"Benign",label:"Bénin"},{option:"Botswana",en:"Botswana",label:"Botswana"},{option:"Burkina Faso",en:"Burkina Faso",label:"Burkina Faso"},{option:"Burundi",en:"Burundi",label:"Burundi"},{option:"Cameroun",en:"Cameroon",label:"Cameroun"},{option:"Cap-Vert",en:"Green cap",label:"Cap-Vert"},{option:"République centrafricaine",en:"Central African Republic",label:"République centrafricaine"},{option:"Comores",en:"Comoros",label:"Comores"},{option:"République du Congo",en:"Republic of Congo",label:"République du Congo"},{option:"République démocratique du Congo",en:"Democratic Republic of the Congo",label:"République démocratique du Congo"},{option:"Côte d’Ivoire",en:"Ivory Coast",label:"Côte d’Ivoire"},{option:"Djibouti",en:"Djibouti",label:"Djibouti"},{option:"Égypte",en:"Egypt",label:"Égypte"},{option:"Érythrée",en:"Eritrea",label:"Érythrée"},{option:"Éthiopie",en:"Ethiopia",label:"Éthiopie"},{option:"Gabon",en:"Gabon",label:"Gabon"},{option:"Gambie",en:"Gambia",label:"Gambie"},{option:"Ghana",en:"Ghana",label:"Ghana"},{option:"Guinée",en:"Guinea",label:"Guinée"},{option:"Guinée-Bissau",en:"Guinea-Bissau",label:"Guinée-Bissau"},{option:"Guinée équatoriale",en:"Equatorial Guinea",label:"Guinée équatoriale"},{option:"Kenya",en:"Kenya",label:"Kenya"},{option:"Lesotho",en:"Lesotho",label:"Lesotho"},{option:"Liberia",en:"Liberia",label:"Liberia"},{option:"Libye",en:"Libya",label:"Libye"},{option:"Madagascar",en:"Madagascar",label:"Madagascar"},{option:"Malawi",en:"Malawi",label:"Malawi"},{option:"Mali",en:"Mali",label:"Mali"},{option:"Maroc",en:"Morocco",label:"Maroc"},{option:"Maurice",en:"Maurice",label:"Maurice"},{option:"Mauritanie",en:"Mauritania",label:"Mauritanie"},{option:"Mozambique",en:"Mozambique",label:"Mozambique"},{option:"Namibie",en:"Namibia",label:"Namibie"},{option:"Niger",en:"Niger",label:"Niger"},{option:"Nigeria",en:"Nigeria",label:"Nigeria"},{option:"Ouganda",en:"Uganda",label:"Ouganda"},{option:"Rwanda",en:"Rwanda",label:"Rwanda"},{option:"São Tomé-et-Principe",en:"Sao Tome and Principe",label:"São Tomé-et-Principe"},{option:"Sénégal",en:"Senegal",label:"Sénégal"},{option:"Seychelles",en:"Seychelles",label:"Seychelles"},{option:"Sierra Leone",en:"Sierra Leone",label:"Sierra Leone"},{option:"Somalie",en:"Somalia",label:"Somalie"},{option:"Soudan",en:"Sudan",label:"Soudan"},{option:"Soudan du Sud",en:"South Sudan",label:"Soudan du Sud"},{option:"Eswatini (ex. Swaziland)",en:"Eswatini (ex. Swaziland)",label:"Eswatini (ex. Swaziland)"},{option:"Tanzanie",en:"Tanzania",label:"Tanzanie"},{option:"Tchad",en:"Chad",label:"Tchad"},{option:"Togo",en:"Togo",label:"Togo"},{option:"Tunisie",en:"Tunisia",label:"Tunisie"},{option:"Zambie",en:"Zambia",label:"Zambie"},{option:"Zimbabwe",en:"Zimbabwe",label:"Zimbabwe"}],stade_list:["Pré-seed","Seed","Pré-série A","Série A","Série B","Série C"],secteurs_list:[],category_list:["E-santé et bien-être","Éducation, formation professionnelle et emploi","Agriculture et technologie alimentaire","Services financiers et paiements","Commerce électronique et vente au détail","Logistique et chaînes d'approvisionnement","Nouvelles mobilités et transports"]},v=Object(_["a"])({uri:{url:"https://resilient.digital-africa.co/",api:"/wp-json/wp/v2/mini_fiche?_embed=author,wp:term,wp:featuredmedia&per_page=100",secteur_api:"wp-json/wp/v2/mf_secteurs"},filter:null,sub_filter:null,search_value:null,search_key:null,base_filter_selected:{label:"Filtrer par pays d'origine",option:1},base_filter:[{label:"Filtrer par pays d'origine",option:1},{label:"Filtrer par pays de déploiement",option:2}],search:[],data:{},countries:[],loading:!1,lang:"fr"},b),g=(n("d81d"),n("b0c0"),n("ac1f"),n("5319"),n("4de4"),n("c740"),n("4160"),n("caad"),n("45fc"),n("d3b7"),n("25f0"),n("2532"),n("841c"),n("1276"),n("159b"),function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}),S=function(e){var t=e.toLowerCase(),n=g(t);return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},y=function(e){var t=[];return e.forEach((function(e){var n=t.findIndex((function(t){return t.name.toLowerCase()==e.acf.categorie_solution.toLowerCase()}));-1!=n?t[n].count++:e.acf.categorie_solution&&"- Select a category -"!=e.acf.categorie_solution&&t.push({name:e.acf.categorie_solution,count:1})})),t},w=function(e,t){var n=S(t);return e.filter((function(e){return-1!=S(e.acf.pays_solution_deployee.toString()).search(n)||-1!=S(e.acf.pays_enreg_structure).search(n)||-1!=S(e.acf.titre_de_la_solution).search(n)||-1!=S(e.acf.autre_zone).search(n)||-1!=S(e.acf.annee_creation_entreprise).search(n)||-1!=S(e.acf.nombre_employe).search(n)||-1!=S(e.acf.la_solution).search(n)||-1!=S(e.acf.categorie_solution).search(n)||-1!=S(e.acf.autre_categorie_solution).search(n)||-1!=S(e.acf.stade_de_developpement).search(n)||-1!=S(e.acf.type_fonds).search(n)||-1!=S(e.acf.solution_prix).search(n)||-1!=S(e.acf.description_solution).search(n)||-1!=S(e.acf.investisseur).search(n)||-1!=S(e.acf.accompagnement_par_une_structure).search(n)||-1!=S(e.acf.prix_et_distinctions_).search(n)}))},C=function(e,t){var n=[];return n=e.filter((function(e){return S(e.acf.pays_enreg_structure)==S(t)})),n},T=function(e,t,n,i){var a=[];return null==t?a:"all_country"==i?(a=e.filter((function(e){return e.acf.pays_enreg_structure.toLowerCase()==t.toLowerCase()||e.acf.pays_solution_deployee.some((function(e){return e.toLowerCase()==t.toLowerCase()}))})),a):(i==n[0]&&(a=e.filter((function(e){return e.acf.pays_enreg_structure==t}))),i==n[1]&&(a=e.filter((function(e){return t.includes(e.acf.categorie_solution)}))),i==n[2]&&(a=e.filter((function(e){return e.acf.pays_solution_deployee.some((function(e){return t.includes(e)}))}))),i==n[3]&&(a=e.filter((function(e){return e.acf.annee_creation_entreprise==t}))),i==n[4]&&(a=e.filter((function(e){return e.acf.nombre_employe<=t[0]&&e.acf.nombre_employe<=t[1]}))),i==n[5]&&(a=e.filter((function(e){return t.includes(e.acf.stade_de_developpement)}))),i==n[6]&&(a=e.filter((function(e){return e.acf.type_fonds==t.type&&e.acf.montant_fonds<=t.amount[0]&&e.acf.montant_fonds<=t.amount[1]}))),a)},E=function(e){var t=[],n=[];return e.map((function(e,i){t[i]={id:e.id,count:e.count,name:e.name,taxonomy:e.taxonomy},n[i]={label:e.name.replace("&amp;","&"),options:e.id}})),{sectors:t,options:n}},k=function(e,t){var n=e.filter((function(e){return e.acf.categorie_solution==t}));return n},L=function(e){var t=[];return e.forEach((function(e){var n=t.findIndex((function(t){return t.name.toLowerCase()==e.acf.pays_enreg_structure.toLowerCase()}));-1!=n?t[n].count++:t.push({name:e.acf.pays_enreg_structure,count:1})})),t},O=function(e){var t=[];return e.forEach((function(e){var n=t.findIndex((function(t){return-1!=e.acf.pays_solution_deployee.toString().toLowerCase().search(t.name.toLowerCase())}));-1!=n?t[n].count++:e.acf.pays_solution_deployee.map((function(e){t.push({name:e,count:1})}))})),t},M=function(e){return e.map((function(e){if(""!=e.acf.pays_solution_deployee&&e.acf.pays_solution_deployee){var t=e.acf.pays_solution_deployee.split(", ");e.acf.pays_solution_deployee=t}else e.acf.pays_solution_deployee=[]})),e},$=function(e,t){return e==t[0]?{acf:"pays_enreg_structure",conditon:"equal"}:e==t[1]?{acf:"categorie_solution",condition:"includes"}:e==t[2]?{acf:"pays_solution_deployee",condition:"includes"}:e==t[3]?{acf:"annee_creation_entreprise",condition:"equal"}:e==t[4]?{acf:"nombre_employe",condition:"range"}:e==t[5]?{acf:"stade_de_developpement",condition:"includes"}:e==t[6]?{acf:["type_fonds","montant_fonds"],conditon:"range_equal"}:void 0},x=n("595b"),R=n("bc3a").default,A={loadGeoCoordinate:function(e,t){var n=e.commit;R.get(t).then((function(e){var t=e.data,i=null,a=[];t.features.map((function(e){switch(e.geometry.type){case"MultiPolygon":i=x["multiPolygon"](e.geometry.coordinates);break;case"Polygon":i=x["polygon"](e.geometry.coordinates);break;default:break}var t=x["centerOfMass"](i);a.push({name_fr:e.properties["name-fr"],name_en:e.properties["name-en"],coordinates:t.geometry.coordinates})})),n("SET_GEO_COORDINATES",a),n("SET_HTTP_REQUEST_DONE")}))},loadData:function(e){var t=e.commit,n=e.state,i="fr-FR"==window.lang||"fr"==window.lang?"":"en";R.get(n.uri.url+i+n.uri.api).then((function(e){var n=e.data,i=M(n);t("SET_DATA",i),t("SET_CATEGORIES",y(i)),t("SET_COUNTRY",L(i)),t("SET_LOADING_SECTOR",!1),t("SET_LOADING",!1),t("SET_HTTP_REQUEST_DONE")}))},loadSectors:function(e){var t=e.commit,n=e.state;t("SET_LOADING_SECTOR",!0),R.get(n.uri.url+n.uri.secteur_api).then((function(e){var n=e.data;t("SET_SECTORS",E(n).sectors),t("SET_SECTORS_LIST",E(n).options),t("SET_LOADING_SECTOR",!1)}))},searchKey:function(e,t){var n=e.state,i=e.commit,a=t.toLowerCase(),o=w(n.data,a);i("LIST_POSTS",o),i("SET_SEARCH_KEY","".concat(t));var s=n.base_filter_selected.option;i("SET_COUNTRY",1==s?L(o):O(o))},search_key_with_null:function(e,t){var n=e.state,i=e.commit;i("SET_COUNTRY",1==t?L(n.data):O(n.data))},resetMap:function(e){var t=e.state,n=e.commit;n("SET_COUNTRY",L(t.data))},mapFilter:function(e,t){var n=e.state,i=e.commit,a=C(n.data,t);i("LIST_POSTS",a),i("SET_SEARCH_KEY","Pays : ".concat(t))},listPosts:function(e,t){var n=e.state,i=e.commit,a=k(n.data,t.name);i("SET_SEARCH_KEY","".concat(t.name.replace("&amp;","&"))),i("SET_COUNTRY",L(a)),i("LIST_POSTS",a)},filterBy:function(e,t){var n=e.state,i=e.commit,a=t;if(!a||a.length<=0)return i("SET_COUNTRY",L(n.data,"pays_solution_deployee",null,"default")),!1;var o=n.main_filter_options_selected,s=n.main_filter_options,r=T(n.data,a,s,o),c=$(o,s);i("SET_COUNTRY",L(r,c.acf,a,c.condition))},setActiveSecteur:function(e,t){var n=e.commit;n("SET_ACTIVE_SECTEUR",t)},setMenu:function(e,t){var n=e.commit;n("SET_MENU",t)},setSolutionsActive:function(e,t){var n=e.commit;n("SET_SOLUTIONS_ACTIVE",t)}},P={posts:function(e){return e.posts},post:function(e){return e.posts}};i["default"].use(d["a"]);var I=new d["a"].Store({state:v,mutations:h,actions:A,getters:P,modules:{}}),N=n("5f5b"),q=n("b1e0"),j=n("ecee"),z=n("c074"),D=n("ad3d"),G=n("77a0"),H=n.n(G),F=n("a925"),B={en:{secteurs:"Sectors",categories:"Categories",secteur:"Sector",loading:"Loading...","search-text":"Search...",404:"No Mini-Fiche found",more:"Read more","last-update":"Last update",site_web:"Website",pays_origine:"Native country",pays_deploiement:"Regions impacted",annee_creation:"Year of establishment",nbre_employee:"Number of employees",investisseur:"Curent investor(s)",accompagnement:"Support(s) via hubs, incubations, programs",prix:"Awards and honors","site_web.textes":"Solution website",autre_lien:"Other link",etiquette:"Label",tous_champs:"All fields",besoin_financement:"Fundraising need",description:"Description",type:"Type",stade:"Maturity level","mot clé":"Key figure or keyword","a lire":" Read more"},fr:{stade:"Stade",secteurs:"Secteurs",categories:"Catégories",secteur:"Secteur",loading:"Chargement...","search-text":"Recherche...",404:"Aucune Mini-Fiche trouvée",more:"Voir plus","last-update":"Date de mise à jour",site_web:"Site Web",pays_origine:"Pays  d'origine",pays_deploiement:"Pays de déploiement",annee_creation:"Année de création de l'entreprise",nbre_employee:"Nombre d'employé.e.s",investisseur:"Investisseur",accompagnement:"Accompagnement par une structure",prix:"Prix et distinctions","site_web.textes":"Site internet de la solution",autre_lien:"Autre lien",etiquette:"Etiquette",tous_champs:"Tous les champs",besoin_financement:"Besoin en financement",description:"Description",type:"Type","mot clé":"Un chiffre ou mot-clé ","a lire":"À lire"}},U=B,Y=n("4a7a"),V=n.n(Y),K=n("abb2"),W=n.n(K),Z=n("4971"),Q=n.n(Z);n("f9e3"),n("2dd8"),n("6dfc"),n("fe87"),n("3e39");i["default"].use(H.a,{ops:{bar:{keepShow:!0,background:"#DA4039"}},name:"vuescroll"}),i["default"].use(x),i["default"].use(F["a"]),i["default"].use(N["a"]),i["default"].use(q["a"]),j["c"].add(z["a"]),i["default"].config.productionTip=!1,i["default"].config.productionTip=!1,i["default"].component("font-awesome-icon",D["a"]),i["default"].component("MapSearch",n("2ed6").default),i["default"].component("Maps",n("c00d").default),i["default"].component("SideContent",n("010f").default),i["default"].component("v-select",V.a),i["default"].component("VueSimpleRangeSlider",W.a),i["default"].component("VueSlider",Q.a);var J=null;document.querySelector("html")&&(J=document.querySelector("html").lang),J="fr-FR"==J||"fr"==J?"fr":"en";var X=new F["a"]({locale:J,messages:U});new i["default"]({store:I,i18n:X,render:function(e){return e(u)}}).$mount("#app")},"660f":function(e,t,n){},6633:function(e,t,n){"use strict";n("8896")},"85ec":function(e,t,n){},8896:function(e,t,n){},"95bd":function(e,t,n){"use strict";n("cafc")},9813:function(e,t,n){},9863:function(e,t,n){},"98c0":function(e,t,n){"use strict";n("47dc")},a748:function(e,t,n){"use strict";n("eb39")},ba2f:function(e,t,n){},c00d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-wrapper w-100 h-100"},[e.loading?n("div",{staticClass:"loader-map"},[e._m(0)]):n("div",{staticClass:"w-100 h-100"},[n("div",{staticClass:"w-100 h-100",attrs:{id:"map"}}),n("div",{staticClass:"geocoder",attrs:{id:"geocoder"}})])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],o=(n("4de4"),n("c740"),n("4160"),n("d81d"),n("b0c0"),n("159b"),n("e192")),s=n.n(o),r=n("595b"),c={data:function(){return{map:null,hoveredStateId:null,mapboxClient:null,markerClick:!1}},computed:{lang:function(){return"fr-FR"==window.lang||"fr"==window.lang?"fr":"en"},countries:function(){return this.$store.state.countries},loading:function(){return this.$store.state.loading},geo_coordinates:function(){return this.$store.state.geo_coordinates},country_list:function(){return this.$store.state.country_list},http_request_done:function(){return this.$store.state.http_request_done}},mounted:function(){this.initMap()},watch:{http_request_done:function(){var e=this;this.http_request_done>=2&&(document.querySelectorAll("#marker-nbre-post").forEach((function(e){return e.remove()})),this.countries.forEach((function(t){e.setMarker(t.name,t.count)})))},countries:function(){var e=this;this.http_request_done>=2&&(document.querySelectorAll("#marker-nbre-post").forEach((function(e){return e.remove()})),this.countries.forEach((function(t){e.setMarker(t.name,t.count)})))}},methods:{turfCenter:function(e,t){var n=[];return n="MultiPolygon"==e?r["multiPolygon"](t):r["polygon"](t),r["centerOfMass"](n).geometry.coordinates},filterMap:function(e){return this.$store.dispatch("mapFilter",e)},initMap:function(){var e=this;s.a.accessToken=window.window.access_token,this.mapboxClient=window.mapboxSdk({accessToken:s.a.accessToken}),this.map=new s.a.Map({container:"map",style:window.map_url_style,center:[window.position_lat,window.position_lng],zoom:window.zoom}),this.map.addControl(new s.a.NavigationControl,"bottom-right");var t=this.countries,n="name_"+this.lang;this.map.on("load",(function(){e.map.setLayoutProperty("country-label","text-field",["get",n]),t.forEach((function(t){e.setMarker(t.name,t.count)})),e.countrieShap()}))},countrieShap:function(){var e=this.hoveredStateId,t=this.lang,n=this.map,i=this.filterMap,a=this.turfCenter,o=this.getMarkerClick;this.map.addSource("states",{type:"geojson",data:window.geo_json}),this.map.addLayer({id:"state-fills",type:"fill",source:"states",layout:{},paint:{"fill-color":window.fill_color,"fill-opacity":["case",["boolean",["feature-state","hover"],!1],.2,0]}}),this.map.addLayer({id:"state-borders",type:"line",source:"states",layout:{},paint:{"line-color":window.border_color,"line-width":.5}}),this.map.on("mousemove","state-fills",(function(t){t.features.length>0&&(e&&n.setFeatureState({source:"states",id:e},{hover:!1}),e=t.features[0].id,n.setFeatureState({source:"states",id:e},{hover:!0}))})),this.map.on("mouseleave","state-fills",(function(){e&&n.setFeatureState({source:"states",id:e},{hover:!1}),e=null})),this.map.on("click","state-fills",(function(e){if(!o()){n.flyTo({center:a(e.features[0].geometry.type,e.features[0].geometry.coordinates),zoom:2.5});var s="name-"+t,r=e.features[0].properties[s],c=document.querySelector("#marker-nbre-post."+r);if(i(r),c)c.click();else{var l=document.querySelector(".activeMarker");l&&l.classList.remove("activeMarker")}}}))},setMarker:function(e,t){var n=this.map,i=this.geo_coordinates,a=this.setMarkerClick,o=this.filterMap,r=i.findIndex((function(t){return t.name_fr.toLowerCase()==e.toLowerCase()||t.name_en.toLowerCase()==e.toLowerCase()}));if(-1!=r){var c=document.createElement("div");c.innerHTML=t,c.id="marker-nbre-post",c.classList.add(e.toLowerCase().replaceAll(" ","")),c.addEventListener("click",(function(t){var s=i.filter((function(t){return t.name_fr.toLowerCase()==e.toLowerCase()||t.name_en.toLowerCase()==e.toLowerCase()}));n.flyTo({center:s[0].coordinates,zoom:2.5}),a(!0);var r=document.querySelector(".activeMarker");r&&r.classList.remove("activeMarker"),t.target.classList.add("activeMarker"),o(e),setTimeout((function(){a(!1)}),100)}));var l=new s.a.Marker(c).setLngLat(i[r].coordinates);l.remove(n),l.addTo(n)}},setMarkerClick:function(e){this.markerClick=e},getMarkerClick:function(){return this.markerClick}}},l=c,u=(n("0e51"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,null,null);t["default"]=d.exports},c96a:function(e,t,n){"use strict";n("9813")},cafc:function(e,t,n){},cd42:function(e,t,n){"use strict";n("660f")},eb39:function(e,t,n){},f093:function(e,t,n){"use strict";n("9863")},f911:function(e,t,n){}});
//# sourceMappingURL=app.3d0fdcd0.js.map