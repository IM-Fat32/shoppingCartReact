(this.webpackJsonpshopcart=this.webpackJsonpshopcart||[]).push([[0],{49:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t.n(i),o=t(23),c=t.n(o),d=t(9),s=t(8),u=t(18),l=t(19),m="ADD_TO_CART",p="DELETE_FROM_CART",j="EDIT_NUMBER_CART",f="CLEAR_CART",b=function(n){var e=n.nameOfProduct,t=n.numOfProduct,r=void 0===t?1:t,i=n.price,a=n.id,o=n.image,c=n.magazine;return{type:m,payload:{nameOfProduct:e,numOfProduct:r,price:i,id:a,image:o,magazine:c}}},h=function(n){var e=n.nameOfProduct,t=n.numOfProduct,r=n.price,i=n.id,a=n.image,o=n.magazine;return{type:j,payload:{nameOfProduct:e,numOfProduct:t,price:r,id:i,image:a,magazine:o}}},O=function(n){return{type:p,payload:{id:n}}},g={showImage:t.p+"static/media/Huawei_P30_Pro_128GB_Opal1.56fb8dbb.jpg",frontImage:t.p+"static/media/Huawei_P30_Pro_128GB_Opal2.66783b0a.jpg",backImage:t.p+"static/media/Huawei_P30_Pro_128GB_Opal3.ec4d1a60.jpg"},x={showImage:t.p+"static/media/Apple_iPhone_SE_64GB_Black1.6b734968.jpg",frontImage:t.p+"static/media/Apple_iPhone_SE_64GB_Black2.a42f5b68.jpg",backImage:t.p+"static/media/Apple_iPhone_SE_64GB_Black3.c88f309e.jpg"},A={showImage:t.p+"static/media/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri1.3c254b41.jpg",frontImage:t.p+"static/media/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri2.e1f6ed03.jpg",backImage:t.p+"static/media/Motorola_Moto_G8_Power_64GB_Dual_SIM_Capri3.cfafb15e.jpg"},v={showImage:t.p+"static/media/Huawei_Y5_2019_czarny1.06226e42.jpg",frontImage:t.p+"static/media/Huawei_Y5_2019_czarny2.630160d8.jpg",backImage:t.p+"static/media/Huawei_Y5_2019_czarny3.a85096cf.jpg"},y={showImage:t.p+"static/media/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey1.1ebdcc99.jpg",frontImage:t.p+"static/media/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey2.fcd8e47d.jpg",backImage:t.p+"static/media/Xiaomi_Redmi_Note_9_128GB_Midnight_Grey3.d8e6a09a.jpg"},w={showImage:t.p+"static/media/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey1.94f1651b.jpg",frontImage:t.p+"static/media/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey2.2814f5a7.jpg",backImage:t.p+"static/media/Xiaomi_Redmi_Note_8_PRO_64GB_Mineral_Grey3.73e77f61.jpg"},P={showImage:t.p+"static/media/Apple_iPhone_8_64GB_Gold1.03fb5de7.jpg",frontImage:t.p+"static/media/Apple_iPhone_8_64GB_Gold2.3872ca6b.jpg",backImage:"data:image/jpeg;base64,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"},z=[{nameOfProduct:"Huawei P30 Pro 128GB Opal",price:2400,id:101,magazine:10,images:g,screen:6.47,processor:"Kirin 980",memory:128,system:"Android 9.0 Pie",color:"Opal"},{nameOfProduct:"Apple iPhone SE 64GB Black",price:2080,id:102,magazine:10,images:x,screen:4.7,processor:"Apple A13 Bionic",memory:64,system:"iOS 13",color:"Czarny"},{nameOfProduct:"Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue",price:799,id:103,magazine:10,images:A,screen:6.4,processor:"Qualcomm Snapdragon 665",memory:64,system:"Android 10",color:"Niebieski"},{nameOfProduct:"Huawei Y5 2019 czarny",price:499,id:104,magazine:10,images:v,screen:5.7,processor:"MediaTek MT6761",memory:16,system:"Android 9.0 Pie",color:"Czarny"},{nameOfProduct:"Xiaomi Redmi Note 9 4/128GB Midnight Grey",price:799,id:105,magazine:10,images:y,screen:6.53,processor:"MediaTek Helio G85",memory:128,system:"Android 10",color:"Szary"},{nameOfProduct:"Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey",price:1099,id:106,magazine:10,images:w,screen:6.53,processor:"MediaTek Helio G90T",memory:64,system:"Android 9.0 Pie",color:"Szary"},{nameOfProduct:"Apple iPhone 8 64GB Gold",price:1899,id:107,magazine:10,images:P,screen:4.7,processor:"Apple A11 Bionic z koprocesorem M11",memory:64,system:"ty",color:"Szary"},{nameOfProduct:"Huawei P30 Pro 128GB Opal Copy",price:2400,id:201,magazine:10,images:g,screen:6.47,processor:"Kirin 980",memory:128,system:"Android 9.0 Pie",color:"Opal"},{nameOfProduct:"Apple iPhone SE 64GB Black Copy",price:2080,id:202,magazine:10,images:x,screen:4.7,processor:"Apple A13 Bionic",memory:64,system:"iOS 13",color:"Czarny"},{nameOfProduct:"Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue Copy",price:799,id:203,magazine:10,images:A,screen:6.4,processor:"Qualcomm Snapdragon 665",memory:64,system:"Android 10",color:"Niebieski"},{nameOfProduct:"Huawei Y5 2019 czarny Copy",price:499,id:204,magazine:10,images:v,screen:5.7,processor:"MediaTek MT6761",memory:16,system:"Android 9.0 Pie",color:"Czarny"},{nameOfProduct:"Xiaomi Redmi Note 9 4/128GB Midnight Grey Copy",price:799,id:205,magazine:10,images:y,screen:6.53,processor:"MediaTek Helio G85",memory:128,system:"Android 10",color:"Szary"},{nameOfProduct:"Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey Copy",price:1099,id:206,magazine:10,images:w,screen:6.53,processor:"MediaTek Helio G90T",memory:64,system:"Android 9.0 Pie",color:"Szary"},{nameOfProduct:"Apple iPhone 8 64GB Gold Copy",price:1899,id:207,magazine:10,images:P,screen:4.7,processor:"Apple A11 Bionic z koprocesorem M11",memory:64,system:"ty",color:"Szary"},{nameOfProduct:"Huawei P30 Pro 128GB Opal Copy2",price:2400,id:301,magazine:10,images:g,screen:6.47,processor:"Kirin 980",memory:128,system:"Android 9.0 Pie",color:"Opal"},{nameOfProduct:"Apple iPhone SE 64GB Black Copy2",price:2080,id:302,magazine:10,images:x,screen:4.7,processor:"Apple A13 Bionic",memory:64,system:"iOS 13",color:"Czarny"},{nameOfProduct:"Motorola Moto G8 Power 4/64GB Dual SIM Capri Blue Copy2",price:799,id:303,magazine:10,images:A,screen:6.4,processor:"Qualcomm Snapdragon 665",memory:64,system:"Android 10",color:"Niebieski"},{nameOfProduct:"Huawei Y5 2019 czarny Copy2",price:499,id:304,magazine:10,images:v,screen:5.7,processor:"MediaTek MT6761",memory:16,system:"Android 9.0 Pie",color:"Czarny"},{nameOfProduct:"Xiaomi Redmi Note 9 4/128GB Midnight Grey Copy2",price:799,id:305,magazine:10,images:y,screen:6.53,processor:"MediaTek Helio G85",memory:128,system:"Android 10",color:"Szary"},{nameOfProduct:"Xiaomi Redmi Note 8 PRO 6/64GB Mineral Grey Copy2",price:1099,id:306,magazine:10,images:w,screen:6.53,processor:"MediaTek Helio G90T",memory:64,system:"Android 9.0 Pie",color:"Szary"},{nameOfProduct:"Apple iPhone 8 64GB Gold Copy2",price:1899,id:307,magazine:10,images:P,screen:4.7,processor:"Apple A11 Bionic z koprocesorem M11",memory:64,system:"ty",color:"Szary"}],k="EDIT_PRODUCT_NUMBER",B="DELETE_PRODUCT",R="CHANGE_FILTR",G=function(n){return{type:R,payload:{filtr:n}}},K=Object(u.b)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return[];case m:var t=!1;return n.forEach((function(n){n.id===e.payload.id&&(t=!0)})),t?Object(l.a)(n):[].concat(Object(l.a)(n),[e.payload]);case p:console.log("here");var r=!1;return n.forEach((function(n){n.id===e.payload.id&&n.numOfProduct>1&&(n.numOfProduct-=1,r=!0)})),r?Object(l.a)(n):n.filter((function(n){return n.id!==e.payload.id}));case j:var i=!1;return n.forEach((function(n){n.id===e.payload.id&&(n.numOfProduct+=1,i=!0)})),i?Object(l.a)(n):[].concat(Object(l.a)(n),[e.payload]);default:return console.warn("Brak akcji ".concat(e.type," w cartActions")),n}},products:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:var t=e.payload.id;return n.filter((function(n){return n.id!==t}));case k:var r=n.map((function(n){return n.id===e.payload.id&&(n.magazine-=e.payload.numOfProduct),n}));return r;default:return n}},filtr:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R:var t=e.payload.filtr;return n=t;default:return console.warn("Brak akcji ".concat(e.type," w fitlrActions")),n}}}),H=Object(u.c)(K),C=t(7),_=t(6),F=t(13),U=t(2),S=t(15),I=t(3),M="#12232e",T="#4da8da";function E(){var n=Object(U.a)(["\n  text-decoration: none;\n  display: block;\n  color: white;\n  padding: 2rem 2rem;\n  font-size: 1.5rem;\n  text-align: center;\n  width: 100%;\n"]);return E=function(){return n},n}function Q(){var n=Object(U.a)(["\n  list-style: none;\n"]);return Q=function(){return n},n}function D(){var n=Object(U.a)(["\n  position: sticky;\n  background-color: ",";\n  top: 0;\n  left:0;\n  height: 100vh;\n  z-index: 55;\n"]);return D=function(){return n},n}var X=I.a.nav(D(),M),J=I.a.ul(Q()),N=Object(I.a)(d.c)(E()),V=function(n){var e=n.path,t=n.icon;return Object(r.jsx)(_.b.li,{whileHover:{scale:1.2},whileTap:{scale:.9},children:Object(r.jsx)(N,{to:e,exact:!0,children:Object(r.jsx)(S.a,{icon:t})})})},W=function(){return Object(r.jsx)(X,{children:Object(r.jsxs)(J,{children:[Object(r.jsx)(V,{path:"/",icon:F.d}),Object(r.jsx)(V,{path:"/shop/1",icon:F.f})]})})};function L(){var n=Object(U.a)(["\n"]);return L=function(){return n},n}var Z=Object(I.a)(_.b.div)(L()),q={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.5}},exit:{opacity:0}};function Y(){var n=Object(U.a)(["\n  padding: 3rem;\n  text-align: justify;\n  font-size: 1.2rem;\n  position: absolute;\n  bottom: 5%;\n"]);return Y=function(){return n},n}function $(){var n=Object(U.a)(["\n  color: red;\n  font-size: 1.5rem;\n  font-weight: 600;\n  position: absolute;\n  top:42%;\n"]);return $=function(){return n},n}function nn(){var n=Object(U.a)(["\n  color: red;\n  font-size: 2.5rem;\n  font-weight: 600;\n  position: absolute;\n  top: 30%;\n  width: 100%;\n  text-align: end;\n"]);return nn=function(){return n},n}function en(){var n=Object(U.a)(["\n  position: absolute;\n  font-size: 4rem;\n  font-weight: 600;\n  top: 15%;\n"]);return en=function(){return n},n}function tn(){var n=Object(U.a)(["\n  position: relative;\n  margin: auto auto;\n  width: 80%;\n  min-height: 100vh;\n  overflow: hidden;\n"]);return tn=function(){return n},n}var rn=I.a.div(tn()),an=Object(I.a)(_.b.p)(en()),on=Object(I.a)(_.b.p)(nn()),cn=Object(I.a)(_.b.p)($()),dn=Object(I.a)(_.b.p)(Y()),sn=function(){return Object(r.jsx)(Z,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:Object(r.jsxs)(rn,{children:[Object(r.jsx)(an,{initial:{x:"-100vw"},animate:{x:0},transition:{duration:1},children:"Cze\u015b\u0107, jestem Dawid"}),Object(r.jsx)(on,{initial:{x:"100vw"},animate:{x:0},transition:{duration:1,delay:1},children:"Witryna pe\u0142ni funkcj\u0119 portfolio!"}),Object(r.jsx)(cn,{initial:{x:"-100vw"},animate:{x:0},transition:{duration:1,delay:2},children:"Co oznacza, \u017ce nie mo\u017cna zakupi\u0107 umieszczonego w portfolio towaru!"}),Object(r.jsxs)(dn,{initial:{y:"100vh"},animate:{y:0},transition:{duration:1,delay:3},children:["Strona powsta\u0142a przy u\u017cyciu React, React-Redux, Javascript, HTML5, Framer Motion API oraz CSS. Wykorzystane zdj\u0119cia, opisy produkt\xf3w oraz cena s\u0105 przypadkowe. Nie jest to witryna oferuj\u0105ca towar z oferty! W razie jakichkolwiek zastrze\u017ce\u0144 prosz\u0119 o kontakt na mail ",Object(r.jsx)("b",{children:"dawid.neumann.official@gmail.com"}),"."]})]})})};function un(){var n=Object(U.a)(["\n  color : #119e58;\n  text-decoration: none;\n  padding: 2rem  0;\n"]);return un=function(){return n},n}function ln(){var n=Object(U.a)(["\n  padding : 0 .4rem;\n  margin-left: .5rem;\n  border: none;\n  background-color: ",";\n  color: white;\n  border-radius: .3rem;\n  cursor: pointer;\n  outline: none;\n  font-size: .9rem;\n"]);return ln=function(){return n},n}function mn(){var n=Object(U.a)(["\n  display: flex;\n  margin-left: .5rem;\n"]);return mn=function(){return n},n}function pn(){var n=Object(U.a)(["\n  display: flex;\n  margin-left: .5rem;\n"]);return pn=function(){return n},n}function jn(){var n=Object(U.a)(["\n  display: flex;\n"]);return jn=function(){return n},n}function fn(){var n=Object(U.a)(["\n  color: green;\n  font-weight: 300;\n"]);return fn=function(){return n},n}function bn(){var n=Object(U.a)(["\n  letter-spacing: 0.1rem;\n"]);return bn=function(){return n},n}function hn(){var n=Object(U.a)(["\n  background-color: white;\n  position: fixed;\n  top: 4rem;\n  right: 1rem;\n  padding: 1rem 2rem;\n  z-index: 30;\n  transition: .5s;\n  min-width: 30rem;\n"]);return hn=function(){return n},n}function On(){var n=Object(U.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: .8rem;\n  padding: 0.3rem 0.4rem;\n  border: none; \n  color: ",";\n  background-color: white;\n  cursor: pointer;\n  font-weight: 600;\n  outline: none;\n"]);return On=function(){return n},n}function gn(){var n=Object(U.a)(["\n  display: flex;\n  flex-basis: 60%;\n  justify-content: center;\n  flex-direction: column;\n"]);return gn=function(){return n},n}function xn(){var n=Object(U.a)(["\n  display: flex;\n"]);return xn=function(){return n},n}function An(){var n=Object(U.a)(["\n  display : block;\n  max-width: 7rem;\n  max-height:7rem;\n"]);return An=function(){return n},n}function vn(){var n=Object(U.a)(["\n  flex-basis: 30%;\n  position: relative;\n"]);return vn=function(){return n},n}function yn(){var n=Object(U.a)(["\n  border-bottom: 1px solid black;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 0;\n"]);return yn=function(){return n},n}var wn=I.a.div(yn()),Pn=I.a.div(vn()),zn=I.a.img(An()),kn=I.a.div(xn()),Bn=I.a.div(gn()),Rn=I.a.button(On(),M),Gn=Object(I.a)(_.b.div)(hn()),Kn=I.a.p(bn()),Hn=I.a.p(fn()),Cn=I.a.div(jn()),_n=I.a.div(pn()),Fn=I.a.div(mn()),Un=Object(I.a)(_.b.button)(ln(),(function(n){var e=n.add;return void 0!==e&&e?"#05D88E":"#c40015"})),Sn=Object(I.a)(d.b)(un()),In=function(n,e){return e>=n},Mn=function(n){var e=n.callback,t=n.state,i=0,a=Object(s.c)((function(n){return n.cart})),o=Object(s.b)();(a=a.slice(Math.max(a.length-3,0))).reverse();var c=a.map((function(n){var e=n.nameOfProduct,t=n.numOfProduct,a=n.id,c=n.price,d=n.image,s=n.magazine;return i+=n.price*n.numOfProduct,Object(r.jsx)(wn,{children:Object(r.jsxs)(kn,{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(zn,{src:d,alt:"opis"})}),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Kn,{children:e}),Object(r.jsxs)(Hn,{children:[c," z\u0142"]}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)("p",{children:"Ilo\u015b\u0107: "}),Object(r.jsxs)(_n,{children:[Object(r.jsxs)(Un,{onClick:function(){!function(n){o(O(n))}(a)},whileHover:{scale:1.1},whileTap:{scale:.8},children:[" ",t>1?"-":"x"," "]}),Object(r.jsx)(Fn,{children:t}),Object(r.jsx)(Un,{add:"true",onClick:function(){o(h({nameOfProduct:e,numOfProduct:t,id:a,price:c}))},disabled:In(s,t),whileHover:{scale:1.1},whileTap:{scale:.8},children:" + "})]})]})]})]})},a)}));return Object(r.jsxs)(Gn,{variants:{open:{x:0},closed:{x:"100vw"}},initial:{x:"40rem"},animate:t?"open":"closed",transition:{duration:.1},children:[c.length>0?Object(r.jsxs)(r.Fragment,{children:[c,Object(r.jsx)(Sn,{to:"/cart",children:"Zobacz ca\u0142y koszyk"}),Object(r.jsxs)("p",{children:["Total: ",i,"z\u0142"]})]}):Object(r.jsx)("p",{children:"Tw\xf3j koszyk jest pusty"}),Object(r.jsx)(Rn,{onClick:e,children:" X"})]})};function Tn(){var n=Object(U.a)(["\n  position: relative;\n  height: 40vh;\n  width: 35vh;\n  left: 50%;\n  object-fit: cover;\n  transform: translate(-50%, 0);\n  padding: 20px;\n"]);return Tn=function(){return n},n}function En(){var n=Object(U.a)(["\n  font-weight: 500;\n"]);return En=function(){return n},n}function Qn(){var n=Object(U.a)(["\n  padding: .4rem; \n  font-size: 0.8rem;\n  text-transform: uppercase;\n"]);return Qn=function(){return n},n}function Dn(){var n=Object(U.a)(['\n  text-decoration: "none";\n']);return Dn=function(){return n},n}function Xn(){var n=Object(U.a)(["\n  background-color: #05D88E;\n  border: none;\n  border-radius: .4rem;\n  color: white;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: .1rem .5rem ;\n  outline: none;\n"]);return Xn=function(){return n},n}function Jn(){var n=Object(U.a)([" //styl dla pojemnika na interaktywne elementy\n  display: flex;\n  width: 90%;\n  justify-content: space-around;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  position: absolute;\n  bottom: 2rem;\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(U.a)([" //styl dla nazwy produktu\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: black;\n  max-width: 20rem;\n  text-overflow: ellipsis;\n  //usuniecie text decoration bezposrednio w Link\n"]);return Nn=function(){return n},n}function Vn(){var n=Object(U.a)([" //wraper na ca\u0142y obiekt produktu\n  flex-basis: 40%;\n  padding: 30px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  cursor: pointer;\n  transition: .3s;\n  min-height: 30rem;\n"]);return Vn=function(){return n},n}var Wn=I.a.div(Vn()),Ln=I.a.p(Nn()),Zn=I.a.div(Jn()),qn=Object(I.a)(_.b.button)(Xn()),Yn=Object(I.a)(d.b)(Dn()),$n=I.a.span(Qn()),ne=I.a.p(En()),ee=I.a.img(Tn()),te=function(n){var e=n.nameOfProduct,t=n.price,i=n.image,a=n.id,o=n.magazine,c=n.numOfProducts,d=Object(s.b)();return Object(r.jsxs)(Wn,{children:[Object(r.jsxs)(Yn,{to:"/shop/product/".concat(a),style:{textDecoration:"none"},children:[Object(r.jsx)(Ln,{children:e}),Object(r.jsx)(ee,{src:i,alt:"".concat(e)})]}),Object(r.jsxs)(Zn,{children:[Object(r.jsxs)(qn,{onClick:function(){d(b({nameOfProduct:e,price:t,id:a,image:i,magazine:o}))},disabled:In(o,c),whileHover:{scale:1.1},whileTap:{scale:.8},children:[Object(r.jsx)(S.a,{icon:F.c}),Object(r.jsx)($n,{children:"dodaj do koszyka"})]}),Object(r.jsxs)(ne,{children:["Cena: ",t,"z\u0142"]})]})]})};function re(){var n=Object(U.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 90vh;\n  justify-content: space-around;\n  padding: 6rem 4rem 0 4rem;\n  flex-grow: 1;\n  height: 100%;\n"]);return re=function(){return n},n}function ie(){var n=Object(U.a)(["\n  width: 100%;\n  text-align: center;\n  padding: 40px;\n  align-self: flex-end;\n"]);return ie=function(){return n},n}function ae(){var n=Object(U.a)(["\n  padding: 1rem .5rem;\n  text-decoration: none;\n  color: black;\n  transition: .3s; \n  &.active{\n    font-weight: 600;\n  }\n"]);return ae=function(){return n},n}var oe=Object(I.a)(d.c)(ae()),ce=I.a.div(ie()),de=I.a.div(re()),se=function(n){for(var e=[],t=[],i=n.props.match.params.page,a=Object(s.c)((function(n){return n.filtr})),o=6*i-6,c=6*i,d=(e=Object(s.c)((function(n){return n.products})).map((function(n){if(n.nameOfProduct.includes(a)){var e=n.nameOfProduct,t=n.price,i=n.id,o=n.images,c=n.magazine;return Object(r.jsx)(te,{nameOfProduct:e,price:t,image:o.showImage,id:i,magazine:c},i)}return null})).filter((function(n){return null!==n}))).length/6,u=0;u<d;u++)t.push(Object(r.jsx)(oe,{to:"/shop/".concat(u+1),children:u+1},"page".concat(u+1)));return e=e.slice(o,c),Object(r.jsxs)(de,{children:[e.length>0?e:Object(r.jsx)("p",{children:"Brak produkt\xf3w"}),Object(r.jsx)(ce,{children:t})]})},ue=t(22);function le(){var n=Object(U.a)(["\n  display: none;\n  @media (min-width: 1024px) {\n  position: fixed;\n  top: 0;\n  z-index: 9;\n  display: flex;\n  padding: 1rem 3rem;\n  width:100%;\n  }\n"]);return le=function(){return n},n}function me(){var n=Object(U.a)(["\n  padding: 0.2rem 0.3rem;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  margin-right: 50px;\n"]);return me=function(){return n},n}function pe(){var n=Object(U.a)(["\n  font-size: 0.8rem;\n  padding: 0px 1rem;\n  height: 2rem;\n  border: 1px solid ",";\n  min-width: 15rem;\n  outline:none;\n"]);return pe=function(){return n},n}function je(){var n=Object(U.a)(["\n  background-color: ",";\n  color: white;\n  font-size: 1.5rem;\n  padding: 0.2rem 0.4rem;\n  border: none;\n  cursor: pointer;\n  outline:none;\n"]);return je=function(){return n},n}function fe(){var n=Object(U.a)(["\n    background-color: black;\n    opacity: .7;\n    position: fixed;\n    z-index: 10;\n    width: 100vw;\n    height: 100vh;\n  "]);return fe=function(){return n},n}function be(){var n=Object(U.a)(["\n  text-decoration: none;\n  font-size: 1.5rem;\n  padding: .2rem .6rem;\n  color: ",";\n  border: .2rem solid black;\n  font-weight: 600;\n  border-radius: 20%;\n  align-self:flex-start;\n"]);return be=function(){return n},n}function he(){var n=Object(U.a)(["\n  z-index: 30;\n  overflow: hidden;\n"]);return he=function(){return n},n}Object(I.a)(_.b.div)(he());var Oe=Object(I.a)(d.b)(be(),M),ge=Object(I.a)(_.b.div)(fe()),xe=Object(I.a)(_.b.button)(je(),M),Ae=I.a.input(pe(),M),ve=I.a.div(me(),M),ye=I.a.div(le()),we=function(){var n=Object(s.b)(),e=Object(i.useState)(""),t=Object(ue.a)(e,2),a=t[0],o=t[1],c=Object(i.useState)(!1),d=Object(ue.a)(c,2),u=d[0],l=d[1],m=function(){l((function(n){return!n})),console.log(u)},p=function(){n(G(a))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ge,{initial:{x:"100vw"},animate:u?{x:0}:{x:"100vw"},transition:{duration:.5}}),Object(r.jsxs)(ye,{children:[Object(r.jsx)(Oe,{to:"/shop/1",onClick:function(){n(G("")),o("")},children:"D"}),Object(r.jsx)("div",{style:{flexGrow:.9}}),Object(r.jsxs)(ve,{children:[Object(r.jsx)(Ae,{type:"text",onChange:function(n){o(n.target.value)},value:a,onKeyUp:function(n){13===n.keyCode&&p()}}),Object(r.jsx)(xe,{whileHover:{scale:.8},whileTap:{scale:1},children:Object(r.jsx)(S.a,{icon:F.e,onClick:p})})]}),Object(r.jsx)("label",{children:Object(r.jsx)(ve,{style:{cursor:"pointer"},children:Object(r.jsx)(xe,{onClick:m,whileHover:{scale:.8},children:Object(r.jsx)(S.a,{icon:F.g})})})})]}),Object(r.jsx)(Mn,{callback:m,state:u})]})},Pe=function(n){return Object(r.jsxs)(Z,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:[Object(r.jsx)(we,{}),Object(r.jsx)(se,{props:n})]})};function ze(){var n=Object(U.a)(["\n"]);return ze=function(){return n},n}function ke(){var n=Object(U.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 2.5rem;\n  line-height: 2.5rem;\n"]);return ke=function(){return n},n}function Be(){var n=Object(U.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding : .5rem 5rem;\n"]);return Be=function(){return n},n}function Re(){var n=Object(U.a)(["\n  font-size: 1rem;\n  margin-top: 1rem;\n  font-weight:500;\n"]);return Re=function(){return n},n}function Ge(){var n=Object(U.a)(["\n  font-size: .7rem;\n"]);return Ge=function(){return n},n}function Ke(){var n=Object(U.a)(["\n  font-size: 1.4rem;\n  color: green;\n  font-weight: 500;\n"]);return Ke=function(){return n},n}function He(){var n=Object(U.a)(["\n  font-weight: 400;\n  font-size: 1.3rem;\n  letter-spacing: .1rem;\n"]);return He=function(){return n},n}function Ce(){var n=Object(U.a)(["\n  display: inline-block;\n  width: 6rem;\n  height: 4.5rem;\n  padding: 0;\n  border: 2px solid ",";\n  border-radius: .5rem;\n  margin-left: 1rem;\n  cursor: pointer;\n\n  ",";\n"]);return Ce=function(){return n},n}function _e(){var n=Object(U.a)(["\nwidth: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]);return _e=function(){return n},n}function Fe(){var n=Object(U.a)(["\n  width: 40rem;\n  height: 30rem;\n\n"]);return Fe=function(){return n},n}function Ue(){var n=Object(U.a)(["\n  position: absolute;\n  top: 50%;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return Ue=function(){return n},n}function Se(){var n=Object(U.a)(["\n  font-size: 2rem;\n  cursor: pointer;\n  color: ",";\n"]);return Se=function(){return n},n}function Ie(){var n=Object(U.a)(["\nposition: relative;\nwidth: 60%;\nmargin: auto;\nuser-select: none;\ntext-align: center;\n"]);return Ie=function(){return n},n}function Me(){var n=Object(U.a)(["\n  padding: 4rem 7rem;\n  min-height: 100vh;\n"]);return Me=function(){return n},n}var Te=I.a.div(Me()),Ee=I.a.div(Ie()),Qe=Object(I.a)(S.a)(Se(),M),De=I.a.div(Ue()),Xe=I.a.img(Fe()),Je=I.a.div(_e()),Ne=I.a.img(Ce(),M,(function(n){return n.active?"border-color: ".concat(T):null})),Ve=I.a.h4(He()),We=I.a.h4(Ke()),Le=I.a.p(Ge()),Ze=I.a.p(Re()),qe=I.a.div(Be()),Ye=Object(I.a)(_.b.div)(ke()),$e=Object(I.a)(_.b.div)(ze());function nt(){var n=Object(U.a)(["\n  font-size: 1.4rem;\n  padding: 1rem 2rem;\n  text-transform: uppercase;\n  background-color: #05D88E;\n  border: none;\n  border-radius: 1rem;\n  color: white;\n"]);return nt=function(){return n},n}function et(){var n=Object(U.a)(["\n  width: 50%;\n  margin: auto;\n  padding: 1rem 0;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n"]);return et=function(){return n},n}function tt(){var n=Object(U.a)(["\n  margin-top: 4rem;\n  position: relative;\n  min-height: 85vh;\n"]);return tt=function(){return n},n}function rt(){var n=Object(U.a)(["\n  border-bottom: 1px solid black;\n  padding: 1rem 1rem;\n  display: flex;\n  position: relative;\n  width: 60%;\n  margin: auto;\n  justify-content: space-around;\n"]);return rt=function(){return n},n}function it(){var n=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return it=function(){return n},n}function at(){var n=Object(U.a)(["\n  height: 10rem;\n  width: 12rem;\n  display: block;\n  padding: 1rem;\n"]);return at=function(){return n},n}function ot(){var n=Object(U.a)(["\nfont-size: 1.1rem;\n"]);return ot=function(){return n},n}function ct(){var n=Object(U.a)(["\nfont-size: 1rem;\nwidth: 25rem;\ntext-overflow: ellipsis;\npadding: 1rem 0;\n"]);return ct=function(){return n},n}function dt(){var n=Object(U.a)(["\n  display: flex;\n"]);return dt=function(){return n},n}var st=I.a.div(dt()),ut=Object(I.a)(Ve)(ct()),lt=Object(I.a)(We)(ot()),mt=I.a.img(at()),pt=I.a.div(it()),jt=I.a.div(rt()),ft=Object(I.a)(Z)(tt()),bt=I.a.div(et()),ht=I.a.button(nt()),Ot=function(){var n=Object(s.b)(),e=Object(s.c)((function(n){return n.cart})),t=0,i=[],a=e.map((function(e){var a=e.nameOfProduct,o=e.price,c=e.image,d=e.numOfProduct,s=e.id,u=e.magazine;i.push({id:s,numOfProduct:d,magazine:u});return t+=o*d,Object(r.jsxs)(jt,{children:[Object(r.jsxs)(pt,{children:[Object(r.jsx)(ut,{children:a}),Object(r.jsxs)(lt,{children:[o," z\u0142"]}),Object(r.jsxs)(st,{children:[Object(r.jsx)(Un,{onClick:function(){n(O(s))},children:d>1?"-":"x"}),Object(r.jsxs)(Fn,{children:[" ",d]}),Object(r.jsx)(Un,{onClick:function(){n(h(e))},add:"true",disabled:In(u,d),children:"+"})]})]}),Object(r.jsx)(mt,{src:c,alt:""})]},s)}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Z,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:[Object(r.jsx)(we,{}),Object(r.jsx)(ft,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:a.length>0?Object(r.jsxs)(r.Fragment,{children:[" ",a.reverse(),Object(r.jsxs)(bt,{children:[Object(r.jsxs)(We,{children:["\u0141\u0105czna kwota: ",t," z\u0142"]}),Object(r.jsx)(d.b,{to:"/done",children:Object(r.jsx)(ht,{onClick:function(){i.forEach((function(e){e.numOfProduct===e.magazine?n(function(n){var e=n.id;return{type:B,payload:{id:e}}}(e)):n(function(n){var e=n.id,t=n.numOfProduct;return{type:k,payload:{id:e,numOfProduct:t}}}(e)),n({type:f,payload:{}})}))},children:"Kup teraz"})})]})]}):Object(r.jsx)("p",{children:"Koszyk jest pusty, dodaj troch\u0119 produkt\xf3w"})})]})})},gt=function(n){var e=Object(s.b)(),t=Number(n.match.params.id),a=Object(s.c)((function(n){return n.products})),o="",c=[];a.map((function(n){return n.id===t&&(o=n),null}));for(var d=o,u=d.nameOfProduct,l=d.price,m=d.images,p=d.magazine,j=d.id,f=d.screen,h=d.processor,O=d.memory,g=d.color,x=[m.showImage,m.frontImage,m.backImage],A=m.showImage,v=Object(i.useState)(0),y=Object(ue.a)(v,2),w=y[0],P=y[1],z=function(n){c.push(Object(r.jsx)(Ne,{src:x[n],active:w===n&&"true",onClick:function(){P(n)}},n))},k=0;k<x.length;k++)z(k);return Object(r.jsxs)(Z,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:[Object(r.jsx)(we,{}),Object(r.jsxs)(Te,{children:[Object(r.jsx)(Ve,{children:u}),Object(r.jsxs)(We,{children:[l," z\u0142"]}),Object(r.jsxs)(Ee,{children:[Object(r.jsxs)(De,{children:[Object(r.jsx)($e,{whileHover:{scale:1.3},whileTap:{scale:1},children:Object(r.jsx)(Qe,{icon:F.a,left:"true",onClick:function(){P(0!==w?function(n){return n-1}:2)},children:"prev"})}),Object(r.jsx)($e,{whileHover:{scale:1.3},whileTap:{scale:1},children:Object(r.jsx)(Qe,{icon:F.b,left:"false",onClick:function(){P(2!==w?function(n){return n+1}:0)},children:"next"})})]}),Object(r.jsx)(Xe,{src:x[w],alt:""}),Object(r.jsx)(Je,{children:c})]}),"'",Object(r.jsxs)(qe,{children:[Object(r.jsxs)(Ze,{children:["Dost\u0119pne sztuki: ",p," "]}),Object(r.jsx)(Ye,{whileHover:{scale:1.2},whileTap:{scale:1},children:Object(r.jsxs)(qn,{onClick:function(){e(b({nameOfProduct:u,price:l,id:j,image:A,magazine:p}))},children:[Object(r.jsx)(S.a,{icon:F.c}),Object(r.jsx)($n,{children:"add to cart"})]})})]}),Object(r.jsx)(Ze,{style:{marginBottom:".5rem"},children:"Specyfikacja:"}),Object(r.jsxs)(Le,{children:["Ekran: ",f,'"']}),Object(r.jsxs)(Le,{children:["Procesor: ",h]}),Object(r.jsxs)(Le,{children:["Pami\u0119\u0107: ",O,"GB"]}),Object(r.jsxs)(Le,{children:["Kolor: ",g]})]})]})},xt=function(){return Object(r.jsx)(Z,{variants:q,initial:"hidden",animate:"visible",exit:"exit",children:Object(r.jsx)("h4",{children:"Gratulacje transakcja zako\u0144czona"})})},At=function(){return Object(r.jsx)("footer",{children:Object(r.jsx)("p",{style:{textAlign:"center",padding:"1rem 0"},children:"All rights reserved | Dawid Neumann"})})};t(49);var vt=function(){var n=Object(C.f)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(W,{}),Object(r.jsxs)("div",{className:"context--container",children:[Object(r.jsx)(_.a,{children:Object(r.jsxs)(C.c,{location:n,children:[Object(r.jsx)(C.a,{path:"/",exact:!0,component:sn}),Object(r.jsx)(C.a,{path:"/shop/:page",exact:!0,component:Pe}),Object(r.jsx)(C.a,{path:"/shop/product/:id",component:gt}),Object(r.jsx)(C.a,{path:"/cart",component:Ot}),Object(r.jsx)(C.a,{path:"/done",component:xt})]},n.key)}),Object(r.jsx)(At,{})]})]})})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{store:H,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(vt,{})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.3318aa1c.chunk.js.map