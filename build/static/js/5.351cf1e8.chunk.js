(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";var n=a(20),l=a(2),s=a.n(l),r=a(36),o=a(1),c=a.n(o),u=(Object(r.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])}),a(21)),i=a(146),m=a(147),d=a(25),g=a(5),h=a.n(g),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},b=function(e){var t,a=e.tag,l=e.className,r=e.type,o=Object(n.a)(e,["tag","className","type"]),c=h()(Object(d.a)({},r,!!r),l);return t=a||(!a&&p[r]?p[r]:"p"),s.a.createElement(t,Object.assign({},o,{className:c}))};b.defaultProps={type:"p"};var f=b,y=u.a.create("page"),v=function(e){var t=e.title,a=e.breadcrumbs,l=e.tag,r=e.className,o=e.children,c=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=y.b("px-3",r);return s.a.createElement(l,Object.assign({className:u},c),s.a.createElement("div",{className:y.e("header")},t&&"string"===typeof t?s.a.createElement(f,{type:"h1",className:y.e("title")},t):t,a&&s.a.createElement(i.a,{className:y.e("breadcrumb")},s.a.createElement(m.a,null,"uz"==localStorage.getItem("lang")?"Admin":"en"==localStorage.getItem("lang")?"Admin":"A\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return s.a.createElement(m.a,{key:t,active:n},a)}))),o)};v.defaultProps={tag:"div",title:""};t.a=v},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";var n=a(4),l=a(6),s=a(2),r=a.n(s),o=a(1),c=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.m,listTag:m.m,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},g=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,o=e.children,c=e.tag,u=e.listTag,d=e["aria-label"],g=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(m.i)(i()(t),s),p=Object(m.i)(i()("breadcrumb",a),s);return r.a.createElement(c,Object(n.a)({},g,{className:h,"aria-label":d}),r.a.createElement(u,{className:p},o))};g.propTypes=d,g.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=g},147:function(e,t,a){"use strict";var n=a(4),l=a(6),s=a(2),r=a.n(s),o=a(1),c=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.m,active:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,s=e.active,o=e.tag,c=Object(l.a)(e,["className","cssModule","active","tag"]),u=Object(m.i)(i()(t,!!s&&"active","breadcrumb-item"),a);return r.a.createElement(o,Object(n.a)({},c,{className:u,"aria-current":s?"page":void 0}))};g.propTypes=d,g.defaultProps={tag:"li"},t.a=g},148:function(e,t,a){"use strict";var n=a(4),l=a(6),s=a(2),r=a.n(s),o=a(1),c=a.n(o),u=a(5),i=a.n(u),m=a(3),d={tag:m.m,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},g=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,c=e.form,u=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.i)(i()(t,s?"no-gutters":null,c?"form-row":"row"),a);return r.a.createElement(o,Object(n.a)({},u,{className:d}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},149:function(e,t,a){"use strict";var n=a(4),l=a(6),s=a(38),r=a.n(s),o=a(2),c=a.n(o),u=a(1),i=a.n(u),m=a(5),d=a.n(m),g=a(3),h=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(g.f)(h,'Please use the prop "order"'),pull:Object(g.f)(h,'Please use the prop "order"'),order:h,offset:h})]),b={tag:g.m,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,u=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach(function(t,n){var l=e[t];if(delete u[t],l||""===l){var s=!n;if(r()(l)){var o,c=s?"-":"-"+t+"-",m=y(s,t,l.size);i.push(Object(g.i)(d()(((o={})[m]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o)),a))}else{var h=y(s,t,l);i.push(h)}}}),i.length||i.push("col");var m=Object(g.i)(d()(t,i),a);return c.a.createElement(o,Object(n.a)({},u,{className:m}))};v.propTypes=b,v.defaultProps=f,t.a=v},164:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(13),s=a(15),r=a(14),o=a(16),c=a(142),u=(a(145),a(2)),i=a.n(u),m=a(148),d=a(149),g=a(37),h=(a(47),a(144),a(63)),p=(h.lang,h.language1,function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={category:[],product:[],subCategory:[],aksiya:[],data:[],file:[],file2:[],lang1:null==localStorage.getItem("lang")?"ru":localStorage.getItem("lang")},a.getcategory=function(){Object(g.k)().then(function(e){a.setState({category:e.data})})},a.getProduct1=function(){Object(g.q)().then(function(e){a.setState({product:e.data})})},a.getSubCategory=function(){Object(g.v)().then(function(e){a.setState({subCategory:e.data})})},a.getImaga=function(){Object(g.t)().then(function(e){a.setState({aksiya:e.data})})},a.postContact=function(){var e={name:document.querySelector("")};Object(g.m)(e).then(function(e){a.getContact()})},a.getCompanys=function(){Object(g.l)().then(function(e){document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo})},a.postCompanys=function(){var e={created_at:"123324.2342342000000000000000000",modified_at:"123324.2342342000000000000000000",logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value,longitude:"123324.2342342000000000000000000",latitude:"12432432.2343530000000000000000000",created:1,modified:1};Object(g.x)(e).then(function(e){a.getCompanys()})},a.putCompanys=function(){var e={logo:a.state.file2,phone:document.querySelector("#phone").value,about_img:a.state.file,team:document.querySelector("#team").value,team_story:document.querySelector("#team_story").value};Object(g.B)(e).then(function(e){document.querySelector("#phone").value=e.data.phone,document.querySelector("#team").value=e.data.team,document.querySelector("#team_story").value=e.data.team_story,document.querySelector("#longitude").value=e.data.longitude,document.querySelector("#latitude").value=e.data.latitude,a.state.file2=e.data.logo})},a.Dollor=function(){var e={value:document.querySelector("#dataDollor").value};Object(g.C)(e).then(function(e){})},a.getDollors=function(){Object(g.n)().then(function(e){document.querySelector("#dataDollor").value=e.data.value})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleFile",value:function(e){var t=e.target.files[0];this.setState({file:t})}},{key:"handleFile2",value:function(e){var t=e.target.files[0];this.setState({file2:t})}},{key:"componentDidMount",value:function(){this.getImaga(),this.getSubCategory(),this.getProduct1(),this.getCompanys(),this.getcategory(),this.getDollors()}},{key:"render",value:function(){var e=this;return i.a.createElement(c.a,{className:"DashboardPage",title:"uz"==this.state.lang1?"Bosh sahifa":"ru"==this.state.lang1?"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430":"Homepage",breadcrumbs:[{name:"".concat("uz"==this.state.lang1?"Bosh sahifa":"ru"==this.state.lang1?"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430":"Homepage"),active:!0}]},i.a.createElement(m.a,{className:"Dashboard"},i.a.createElement(d.a,{className:"Column-dashboard"},i.a.createElement("div",{class:"bg-info w-100 card12"},i.a.createElement("h1",null,this.state.product.length),i.a.createElement("p",null,"uz"==this.state.lang1?"Maxsulot":"ru"==this.state.lang1?"\u0422\u043e\u0432\u0430\u0440":"Product"))),i.a.createElement(d.a,{className:"Column-dashboard"},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.category.length),i.a.createElement("p",null,"uz"==this.state.lang1?"Turlar":"ru"==this.state.lang1?"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"Category"))),i.a.createElement(d.a,{className:"Column-dashboard"},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.subCategory.length),i.a.createElement("p",null,"uz"==this.state.lang1?"Qo`shimcha tur":"ru"==this.state.lang1?"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f":"SubCategory"))),i.a.createElement(d.a,{className:"Column-dashboard"},i.a.createElement("div",{className:"card12"},i.a.createElement("h1",null,this.state.aksiya.length),i.a.createElement("p",null,"uz"==this.state.lang1?"Aksiyalar":"ru"==this.state.lang1?"\u041f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435":"Promotion")))),i.a.createElement("div",{className:"InputGroup"},i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Telefon raqam":"ru"==this.state.lang1?"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":"Phone Number"),i.a.createElement("input",{type:"number",id:"phone",placeholder:"uz"==this.state.lang1?"":(this.state.lang1,"")})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Jamoa":"ru"==this.state.lang1?"\u041a\u043e\u043c\u0430\u043d\u0434\u0430":"Team"),i.a.createElement("input",{type:"text",id:"team",placeholder:"uz"==this.state.lang1?"Jamoa":"ru"==this.state.lang1?"\u041a\u043e\u043c\u0430\u043d\u0434\u0430":"Team",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Tariximiz":"ru"==this.state.lang1?"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b":"Team Story"),i.a.createElement("input",{type:"text",id:"team_story",placeholder:"uz"==this.state.lang1?"Tariximiz":"ru"==this.state.lang1?"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b":"Team Story",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Uzunlik xaritadagi":"ru"==this.state.lang1?"\u0414\u043b\u0438\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Length is on the map"),i.a.createElement("input",{type:"text",id:"longitude",placeholder:"uz"==this.state.lang1?"Uzunlik xaritadagi":"ru"==this.state.lang1?"\u0414\u043b\u0438\u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Length is on the map"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Kenglik xaritadagi":"ru"==this.state.lang1?"\u0428\u0438\u0440\u043e\u0442\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Latitude on the map"),i.a.createElement("input",{type:"text",id:"latitude",placeholder:"uz"==this.state.lang1?"Kenglik xaritadagi":"ru"==this.state.lang1?"\u0428\u0438\u0440\u043e\u0442\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435":"Latitude on the map",requiered:!0})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Kompaniya logotipi":"ru"==this.state.lang1?"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":"Company logo"),i.a.createElement("input",{className:"d-block mt-2",onInput:function(t){return e.handleFile2(t)},type:"file",placeholder:"logo",name:"",id:"logo"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("h5",null,"uz"==this.state.lang1?"Biz haqimizda rasm":"ru"==this.state.lang1?"\u043a\u0430\u0440\u0442\u0438\u043d\u0430 \u043e \u043d\u0430\u0441":"Picture about us"),i.a.createElement("input",{type:"file",onInput:function(t){return e.handleFile(t)},id:"aboutImg",requiered:!0}))),i.a.createElement("button",{className:"btn btn-primary mt-2 btn-send",onClick:function(){return e.putCompanys()}},"uz"==this.state.lang1?"Yuborish":"ru"==this.state.lang1?"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430":"Sending"),i.a.createElement("div",{className:"dollor12 mt-3"},i.a.createElement("h5",null,"Dollar kursi"),i.a.createElement("input",{className:"input-dollar",type:"number",id:"dataDollor"}),i.a.createElement("button",{onClick:function(){e.Dollor()},className:"btn btn-primary"},"uz"==this.state.lang1?"Qiymatni yuborish":"ru"==this.state.lang1?"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":"Send value")))}}]),t}(i.a.Component));t.default=p}}]);
//# sourceMappingURL=5.351cf1e8.chunk.js.map