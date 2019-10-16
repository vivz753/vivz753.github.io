(window["webpackJsonpvleung-app"]=window["webpackJsonpvleung-app"]||[]).push([[0],{113:function(e,t,n){e.exports=n(186)},118:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},184:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=(n(84),n(56)),l=n(57),u=n(61),m=n(58),s=n(62),d=(n(118),n(31)),p=Object(a.createContext)(),E=function(e){var t=e.children,n=Object(a.useState)("ABOUT"),c=Object(d.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),m=u[0],s=u[1],E=Object(a.useState)("BIO"),f=Object(d.a)(E,2),y=f[0],h=f[1],b=Object(a.useState)("BIO"),g=Object(d.a)(b,2),S=g[0],k=g[1];return r.a.createElement(p.Provider,{value:{selectedMenuItem:i,setSelectedMenuItem:o,selectedSiderGroup:m,setSelectedSiderGroup:s,selectedSiderItem:y,setSelectedSiderItem:h,contentPage:S,setContentPage:k}},t)},f=function(){return Object(a.useContext)(p)},y=[{key:"ABOUT",name:"About"},{key:"PROJECTS",name:"Projects"}],h=[{key:"BIO",name:"Bio",icon:"user"},{key:"RESUME",name:"Resume",icon:"solution"},{key:"CUBE",name:"Cube",icon:"codepen"}],b=[{key:"WEBAPPS",name:"Web Apps",icon:"laptop",submenu:[{key:"TODOIST",name:"Todoist: Check List"},{key:"BUNKER",name:"Bunker: Hotel Booking"}]},{key:"2D/3D",name:"2D/3D",icon:"picture",submenu:[{key:"PUMPKINCAT",name:"Pumpkin Cat & the Skulls"},{key:"OCTREE",name:"Raytracing in 3D using an Octree"},{key:"UNBARRELBLE",name:"Unbarrelble: A 3D Unity Game"}]}],g=n(187),S=n(82),k=n(13),O=g.a.Sider,v=S.a.SubMenu,w=function(){var e=f(),t=e.selectedMenuItem,n=e.selectedSiderGroup,a=e.setSelectedSiderGroup,c=e.selectedSiderItem,i=e.setSelectedSiderItem,o=e.setContentPage,l=[];return l="PROJECTS"===t?b:h,console.log(t),console.log(n),console.log(c),r.a.createElement(O,{width:300,style:{background:"#fff"}},r.a.createElement(S.a,{mode:"inline",defaultSelectedKeys:[c],defaultOpenKeys:[n],selectedKeys:[c],style:{height:"100%",textAlign:"left"},onClick:function(e){var n,r=e.key;"PROJECTS"===t&&a((n=r,b.find((function(e){return e.submenu.find((function(e){return e.key===n}))}))).key),i(r),o(r)}},"PROJECTS"===t&&l.map((function(e){return r.a.createElement(v,{key:e.key,title:r.a.createElement("span",null,r.a.createElement(k.a,{type:e.icon}),e.name),onTitleClick:function(e){var t=e.key;a(t),i("")}},e.submenu.map((function(e){return r.a.createElement(S.a.Item,{key:e.key},e.name)})))})),"ABOUT"===t&&l.map((function(e){return r.a.createElement(S.a.Item,{key:e.key},r.a.createElement(k.a,{type:e.icon}),e.name)}))))},I=n(2),C=n(108),j={height:"600px",width:"100%"},B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).sceneSetup=function(){var e=n.mount.clientWidth,t=n.mount.clientHeight;n.scene=new I.j,n.camera=new I.g(75,e/t,.1,1e3),n.camera.position.z=5,n.controls=new C.a(n.camera,n.mount),n.renderer=new I.o,n.renderer.setSize(e,t),n.mount.appendChild(n.renderer.domElement)},n.addCustomSceneObjects=function(){var e=new I.a(2,2,2),t=new I.f({color:1401481,emissive:468276,side:I.b,flatShading:!0});n.cube=new I.e(e,t),n.scene.add(n.cube);var a=[];a[0]=new I.h(16777215,1,0),a[1]=new I.h(16777215,1,0),a[2]=new I.h(16777215,1,0),a[0].position.set(0,200,0),a[1].position.set(100,200,100),a[2].position.set(-100,-200,-100),n.scene.add(a[0]),n.scene.add(a[1]),n.scene.add(a[2])},n.startAnimationLoop=function(){n.cube.rotation.x+=.01,n.cube.rotation.y+=.01,n.renderer.render(n.scene,n.camera),n.requestID=window.requestAnimationFrame(n.startAnimationLoop)},n.handleWindowResize=function(){var e=n.mount.clientWidth,t=n.mount.clientHeight;n.renderer.setSize(e,t),n.camera.aspect=e/t,n.camera.updateProjectionMatrix()},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:j,ref:function(t){return e.mount=t}})}}]),t}(a.Component),A=n(189),x=n(191),P=n(192),T=n(188),R=A.a.Title,U=A.a.Paragraph,M=(A.a.Text,function(){return r.a.createElement(x.a,{gutter:16},r.a.createElement(P.a,{span:8},r.a.createElement(x.a,null,r.a.createElement(T.a,{size:200,src:"images/profile.jpg"})),r.a.createElement(x.a,null,r.a.createElement(k.a,{type:"github"}),r.a.createElement(k.a,{type:"linkedin"}))),r.a.createElement(P.a,{span:16},r.a.createElement(R,null,"Hi, I'm Vivian"),r.a.createElement(U,null,"I graduated from SJSU in 2019 with a B.S. in Software Engineering. I am a front-end developer, and am learning computer graphics on the side. I am passionate about diversity, design, animation and film. *insert some funny jokes and puns here*")))}),D=g.a.Content,J=function(){var e=f().contentPage;return r.a.createElement(D,{style:{padding:"0 24px",minHeight:280,width:"calc(100% - 300px)"}},"CUBE"===e&&r.a.createElement(B,null),"BIO"===e&&r.a.createElement(M,null),"RESUME"===e&&r.a.createElement("div",null," i'm resume"),"PUMPKINCAT"===e&&r.a.createElement("div",null,r.a.createElement("iframe",{width:"70%",height:"500px",src:"https://www.youtube.com/embed/J6qIzKxmW8Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),"OCTREE"===e&&r.a.createElement("div",null," i'm octree"),"UNBARRELBLE"===e&&r.a.createElement("div",null," i'm unbarrelble"),"TODOIST"===e&&r.a.createElement("iframe",{width:"80%",height:"700px",frameBorder:"0",src:"https://vivz753.github.io/React"}),"BUNKER"===e&&r.a.createElement("iframe",{width:"100%",height:"700px",frameBorder:"0",src:"https://se-165.firebaseapp.com/home"}))},K=n(190),N=g.a.Content,z=function(){var e,t,n,a,c,i=f(),o=i.selectedMenuItem,l=i.selectedSiderGroup,u=i.selectedSiderItem,m=(n=o,y.find((function(e){return e.key===n})).name),s="";return"PROJECTS"===o?(e=function(e,t){var n=b.find((function(t){return t.key===e})),a=e&&t?n.submenu.find((function(e){return e.key===t})):"";return[n?n.name:"",a?a.name:""]}(l,u),a=(t=Object(d.a)(e,2))[0],s=t[1]):s=(c=u)?h.find((function(e){return e.key===c})).name:"",r.a.createElement(N,{style:{padding:"0 50px"}},r.a.createElement(K.a,{style:{margin:"16px 0"}},m&&r.a.createElement(K.a.Item,null,m),a&&r.a.createElement(K.a.Item,null,a),s&&r.a.createElement(K.a.Item,null,s)),r.a.createElement(g.a,{style:{padding:"24px 0",background:"#fff"}},r.a.createElement(w,null),r.a.createElement(J,null)))},L=g.a.Header,W=(g.a.Content,g.a.Footer),G=(g.a.Sider,function(){S.a.SubMenu;var e=f(),t=e.selectedMenuItem,n=e.setSelectedMenuItem,a=e.setSelectedSiderGroup,c=e.setSelectedSiderItem;return r.a.createElement(g.a,null,r.a.createElement(L,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(S.a,{mode:"horizontal",defaultSelectedKeys:[t],style:{lineHeight:"64px"},onClick:function(e){var t=e.key;n(t),a(""),c("")}},y.map((function(e){return r.a.createElement(S.a.Item,{key:e.key},e.name)})))),r.a.createElement(z,null),r.a.createElement(W,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}),H=(n(184),n(185),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(G,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.49584256.chunk.js.map