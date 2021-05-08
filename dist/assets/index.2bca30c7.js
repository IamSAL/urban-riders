var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var i in r||(r={}))t.call(r,i)&&o(e,i,r[i]);if(a)for(var i of a(r))n.call(r,i)&&o(e,i,r[i]);return e};import{q as i,u as l,I as s,L as c,f as m,c as d,a as p,b as u,d as g,B as h,S as f,R as b,F as E,e as v,g as w,E as x,h as y,i as k,j as N,k as S,l as L,m as j,n as C,o as z,p as I,M as q,T as P,r as R,P as O,s as $,t as M,v as A}from"./vendor.32b95631.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const i=new URL(e,n);if(self[t].moduleMap[i])return a(self[t].moduleMap[i]);const l=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),o(s)},onload(){a(self[t].moduleMap[i]),o(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const B=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},T=i.div`
  cursor: pointer;
  padding: 40px 10px;
  img {
    width: 50%;
  }
  h5 {
    margin: unset;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    color: #2d2d2d;
  }
  background: #ffffff;
  border-radius: 10px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.07);
  }
`,U=({image:e,name:t})=>(l(),s.createElement(c,{to:"/Navigate/"+t},s.createElement(T,null,s.createElement("img",{src:e,alt:""}),s.createElement("h5",null,t))));var _="/assets/Car.a4abb3d4.png",F="/assets/Bike.96f2dff7.png",D="/assets/Train.50dd2004.png",W="/assets/Bus.120a3c2c.png";const Y=i.div`
  min-height: 100vh;

  background-size: ${B()?"cover":"contain"};
  background-repeat: repeat-x;
  h1 {
    margin: 0;
  }
`,J=i.div`
  min-height: 100vh;
  max-height: ${B()?"unset":"100vh"};
  padding: ${B()?"220px 20px":"30px"};
  display: grid;
  grid-template-columns: ${B()?"1fr":"1fr 1fr 1fr 1fr"};
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
`,V=()=>(console.log("isMobile",B()),s.createElement(Y,{className:"cityBG"},s.createElement(J,null,s.createElement(U,{image:F,name:"Bike"}),s.createElement(U,{image:_,name:"Car"}),s.createElement(U,{image:W,name:"Bus"}),s.createElement(U,{image:D,name:"Train"}))));const G=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},Z=i.div`
  padding: ${G()?"15px 0px":"15px 5% 0px 5%"};
  position: absolute;
  top: 0;

  display: grid;
  grid-template-columns: ${G()?"1fr":"1fr 2fr"};
`,H=i.div`
  padding: 15px 0px 0px 15px;
  text-align: ${G()?"center":"left"};
  img {
    width: ${G()?"40%":"50%"};
  }
  margin-bottom: ${G()?"20px":"0px"};
`,K=i.ul`
  padding: 0px;
  max-width: 100vw;
  list-style: none;
  display: flex;
  gap: ${G()?"15px":"30px"};
  flex-wrap: wrap;
  align-content: center;
  justify-content: ${G()?"center":"flex-end"};
  li {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    line-height: 20px;
    color: #2d2d2d;
  }
`,Q=i.button`
  padding: 12px 29px;
  cursor: pointer;
  color: #ffffff !important;
  background: #ff6e40;
  display: block;
  margin: unset;
  transition: 0.1s;
  border: 0px;
  border-radius: 5px;
  &:hover {
    transform: scale(1.04);
  }
`,X=i(Q)`
  border: 0px;
  border-radius: 0px;
  width: 100%;
`,ee=i.button`
  background-color: white;
  border: 1px solid #ababab;
  padding: 10px 5px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  svg {
    margin-right: 10px;
    font-size: 20px;
    color: #ff6e40;
  }
  transition: 0.1s;
  margin-top: 15px;
  &:hover {
    border: 1px solid #ff6e40;
  }
`,te=i.form`
  border: 1px solid #ababab;
  padding: 30px;
  margin-bottom: 30px;
`,ae=i.input`
  width: 100%;
  margin: 30px 0px 10px 0px;
  height: 30px;
  &::placeholder {
    color: #ababab;
  }
  transition: 0.2s;
  border: 0px;
  border-bottom: 1px solid #ababab;
  display: block;
  &:focus {
    outline: none !important;
    border-bottom: 1px solid #ff6e40;
  }
`,ne={apiKey:"AIzaSyClLdRZqlZeBvvLU-43BweEum9TDSdOxRA",authDomain:"urban-uthao.firebaseapp.com",projectId:"urban-uthao",storageBucket:"urban-uthao.appspot.com",messagingSenderId:"653553867041",appId:"1:653553867041:web:565d927a1be599f8bc0660"};0==m.apps.length&&m.initializeApp(ne);const oe=s.createContext(),re={isLoggedIn:!1,username:"",email:"",photoURL:""},ie=({children:e})=>{const[t,a]=s.useState(re);return s.useEffect((()=>(localStorage.getItem("LoginData")&&a(JSON.parse(localStorage.getItem("LoginData"))),()=>{})),[]),s.createElement(oe.Provider,{value:[t,a]},e)},le=()=>{const[e,t]=s.useContext(oe);return[e,t]},se=()=>{const[e,t]=le();function a(){m.auth().signOut().then((()=>(localStorage.setItem("LoginData",JSON.stringify(re)),!0))).catch((e=>{throw e})).then((e=>{e&&t(re)})).catch((e=>console.log(e)))}return s.createElement(Z,null,s.createElement(H,{as:c,to:"/"},s.createElement("img",{src:"/assets/Urban Riders.21d07a09.png",alt:""})),s.createElement(K,{className:"mainmenu"},s.createElement("li",null,s.createElement(c,{to:"/"},"Home")),s.createElement("li",null," ",s.createElement(c,{to:"/Navigate/Car"},"Destination")),s.createElement("li",null,e.isLoggedIn?s.createElement(s.Fragment,null,s.createElement("img",{className:"userimg",src:e.photoURL,alt:""}),s.createElement("span",null,e.username)):" "),s.createElement("li",null,e.isLoggedIn?s.createElement(s.Fragment,null,s.createElement(Q,{onClick:()=>a()},"Logout")):s.createElement(Q,{as:c,to:"/Login"},"Login"))))};function ce(...e){console.log(e.join("\n"))}s.createContext({});const me=d().shape({email:p().email("Invalid Email").required("Email is Required"),password:p().min(8,"Too short password").required("Password is required")}),de=d().shape({name:p().required("Name is required"),password:p().min(8,"Password needs to be atleast 8 characters long.").max(256,"Too long!").required("Password can't be empty"),email:p().email("Invalid email").required("Required"),confirm_password:p().oneOf([u("password"),null],"Passwords must match")}),pe=()=>{const e=l(),t=g(),[a,n]=s.useState(""),[o,r]=le();function i(t,n="/"){r((e=>{const a={isLoggedIn:!0,username:t.displayName,email:t.email,photoURL:t.photoURL};return localStorage.setItem("LoginData",JSON.stringify(a)),a})),e.push(a||n)}function d(e){switch(e){case"google":(()=>{const e=new m.auth.GoogleAuthProvider;return m.auth().signInWithPopup(e).then((e=>e)).catch((e=>{throw e}))})().then((e=>{i(e.user)})).catch((e=>{ce(e.message,"error")}));break;case"fb":(()=>{const e=new m.auth.FacebookAuthProvider;return m.auth().signInWithPopup(e).then((e=>e)).catch((e=>{throw e}))})().then((e=>{i(e.user),console.log(e)})).catch((e=>{"auth/user-cancelled"==e.code?ce("Failed: You didn't grant permission, try again.","error"):"auth/account-exists-with-different-credential"==e.code?ce("Failed: The email associated with your facebook account is already used, Login using that.","error"):ce("Failed: "+e.code,"error")}))}}s.useEffect((()=>(console.log("should redirect"),console.log(o),o.isLoggedIn&&(e.push("/"),console.log("redirected")),()=>{})),[o]),s.useEffect((()=>{var e,a;let o=null==(a=null==(e=t.state)?void 0:e.from)?void 0:a.pathname;return o&&n(o),()=>{}}),[t]);const p=(e,t)=>{const{email:a,password:n}=e;((e,t)=>m.auth().signInWithEmailAndPassword(e,t).then((e=>e)).catch((e=>{throw e})))(a,n).then((e=>{ce("Log in successfull","success"),i(e.user),console.log(e)})).catch((e=>{console.log(e),"auth/user-not-found"==e.code?ce("No account found with this email, signup first.","error"):(e.code="auth/wrong-password")?ce("Incorrect password, try again.","error"):ce("Login Failed,Check details.","error")}))},u=(e,t)=>{const{email:a,password:n}=e;((e,t)=>m.auth().createUserWithEmailAndPassword(e,t).then((e=>e)).catch((e=>{throw e})))(a,n).then((e=>{e.additionalUserInfo.isNewUser&&(ce("Signup successfull. You can login now...","success"),setTimeout((()=>{}),3e3))})).catch((e=>{console.log(e),(e.code="auth/email-already-in-use")&&ce("This email is taken, try with another email.","error")}))};return s.createElement(h,null,s.createElement("div",{className:"Container"},s.createElement(f,null,s.createElement(b,{path:"/Login/Signup",exact:!0},s.createElement("div",{className:"formContainer"},s.createElement(E,{validationSchema:de,initialValues:{email:"",password:""},onSubmit:(e,t)=>{u(e)}},s.createElement(te,{className:"form",as:v,method:"POST"},s.createElement("h4",{style:{textAlign:"left",marginBottom:"20px"}},"Create an account"),s.createElement(ae,{as:w,name:"name",placeholder:"Name"}),s.createElement(x,{component:"div",name:"name",className:"errmsg"}),s.createElement(ae,{as:w,name:"email",placeholder:"Email"}),s.createElement(x,{component:"div",name:"email",className:"errmsg"}),s.createElement(ae,{as:w,name:"password",placeholder:"Password"}),s.createElement(x,{component:"div",name:"password",className:"errmsg"}),s.createElement(ae,{as:w,name:"confirm_password",placeholder:"Confirm Password"}),s.createElement(x,{component:"div",name:"confirm_password",className:"errmsg"}),s.createElement(X,{type:"submit",as:"button"},"Create an account"),s.createElement("p",null,"Already have an account?",s.createElement(c,{to:"/Login",className:"important"},"Login")))))),s.createElement(b,{path:"*",exact:!0},s.createElement("div",{className:"formContainer"},s.createElement(E,{validationSchema:me,initialValues:{name:"",email:"",password:"",confirm_password:""},onSubmit:(e,t)=>{p(e)}},s.createElement(te,{className:"form",as:v},s.createElement("h4",{style:{textAlign:"left",marginBottom:"20px"}},"Login"),s.createElement(ae,{as:w,name:"email",placeholder:"Email"}),s.createElement(x,{component:"div",name:"email",className:"errmsg"}),s.createElement(ae,{as:w,name:"password",placeholder:"Password"}),s.createElement(x,{component:"div",name:"password",className:"errmsg"}),s.createElement(X,{type:"submit",as:"button"},"Login"),s.createElement("p",null,"Don't have an account?"," ",s.createElement(c,{to:"/Login/Signup",className:"important"},"Create an account"))))))),s.createElement("div",{className:"options"},s.createElement("div",{className:"separator"},"Or"),s.createElement("div",null,s.createElement(ee,{onClick:()=>d("fb")},s.createElement(y,{icon:k})," Continue with Facebook")),s.createElement(ee,{onClick:()=>d("google")}," ",s.createElement(y,{icon:N}),"Continue with Google"))))};const ue=s.createContext(),ge=[23.7488288,90.4311135],he=e=>fetch(`https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf624804265f3f5f7b48c79b363ec277c04e39&text=${encodeURIComponent(e)}`).then((e=>e.json())).then((e=>{if(console.log(e),0==e.features.length)throw new Error("No location found");return e.features[0].geometry.coordinates.reverse()})).catch((e=>{throw e})),fe=(e,t)=>fetch(`https://api.openrouteservice.org/geocode/reverse?api_key=5b3ce3597851110001cf624804265f3f5f7b48c79b363ec277c04e39&point.lon=${e}&point.lat=${t}&&boundary.circle.radius=10&size=100`).then((e=>e.json())).then((e=>{if(console.log(e),0==e.features.length)throw new Error("No location found");return e.features})).catch((e=>{throw e})),be=({children:e})=>{const[t,a]=s.useState(ge),n=e=>{console.log(e.coords);let{latitude:t,longitude:n}=e.coords;a([23.7488288,90.4311135]),a([t,n])},o=e=>{console.log(e)},r={enableHighAccuracy:!0};return s.useEffect((()=>(navigator.geolocation?navigator.permissions.query({name:"geolocation"}).then((function(e){"granted"===e.state||"prompt"===e.state?window.navigator.geolocation.getCurrentPosition(n,o,r):"denied"===e.state&&console.log("Please allow location from settings"),e.onchange=function(){console.log(e.state)}})):alert("Sorry Not available!"),()=>{})),[]),s.createElement(ue.Provider,{value:[t,a]},e)},Ee=d().shape({from:p().required("Enter Your Location"),to:p().required("Enter Destination")}),ve=i(te)`
  width: 90%;
  background: #efefef;
  border-radius: 10px;
`,we=i(ae)`
  background: #ffffff;
  border-radius: 4px;
  padding-left: 5px;
  border: 0px;
  margin-top: 15px;
`,xe=()=>{var e,t;const{ride:a}=S(),[n,o]=(()=>{const[e,t]=s.useContext(ue);return[e,t]})(),[r,i]=s.useState(!1),[l,m]=s.useState({from:"",to:""}),[d,p]=s.useState(!0),[u,g]=s.useState(""),[h,f]=s.useState([]),[b,k]=s.useState([]),[N,$]=s.useState(!1);const M={Car:_,Bike:F,Train:D,Bus:W};return s.useEffect((()=>(fe(n[1],n[0]).then((e=>{console.log("response",e),f(e)})),()=>{})),[n]),s.useEffect((()=>{if(h.length>0){let e=(null==h?void 0:h[0].properties.county)+","+(null==h?void 0:h[0].properties.country);he(e).then((e=>(fe(e[1],e[0]).then((e=>{k(e)})),()=>{}))).catch((e=>console.log(e)))}}),[h]),s.createElement("div",{className:"Container"},s.createElement("div",{className:"navigate"},s.createElement("div",{className:"inLocation"},d&&s.createElement(E,{validationSchema:Ee,enableReinitialize:!0,initialValues:{from:(null==(e=h[0])?void 0:e.properties.label)||"",to:u||""},onSubmit:e=>{!function(e){const{from:t,to:a}=e;m({from:t,to:a}),l.from!=t&&(he(t).then((e=>{o(e)})).catch((e=>console.log(e))),console.log("searched")),i(!0),p(!1)}(e)}},s.createElement(ve,{className:"form",as:v,method:"POST"},s.createElement("h4",{style:{textAlign:"left",marginBottom:"20px"}},"Navigate by ",a),s.createElement(we,{as:w,name:"from",list:"locations",placeholder:(null==(t=h[0])?void 0:t.properties.label)||"From",onFocus:()=>$(!1)}),s.createElement(x,{component:"div",name:"from",className:"errmsg"}),s.createElement(we,{as:w,name:"to",list:"destinations",placeholder:u||"To",onFocus:()=>$(!0)}),s.createElement(x,{component:"div",name:"to",className:"errmsg"}),s.createElement(X,{type:"submit",as:"button"},"Search"))),r&&s.createElement("div",{className:"ride-options"},s.createElement("div",{className:"fromto"},s.createElement("h3",null,r&&l.from),s.createElement("h3",null,l.to)),s.createElement("div",{className:"offers"},s.createElement(c,{to:"/ride"},s.createElement("div",{className:"offer"},s.createElement("div",{className:"ride"},s.createElement("img",{src:M[a],alt:""})),s.createElement("div",{className:"persons"},a," ",s.createElement(y,{icon:L})," 4"),s.createElement("div",{className:"price"},"$67"))),s.createElement("div",{className:"offer"},s.createElement("div",{className:"ride"},s.createElement("img",{src:M[a],alt:""})),s.createElement("div",{className:"persons"},a," ",s.createElement(y,{icon:L})," 4"),s.createElement("div",{className:"price"},"$67")),s.createElement("div",{className:"offer"},s.createElement("div",{className:"ride"},s.createElement("img",{src:M[a],alt:""})),s.createElement("div",{className:"persons"},a," ",s.createElement(y,{icon:L})," 4"),s.createElement("div",{className:"price"},"$67"))),s.createElement(X,{type:"submit",as:"button",style:{marginTop:"20px"},onClick:()=>{i(!1),p(!0)}},s.createElement(y,{icon:j,style:{marginRight:"10px"}}),"Search again")),N&&d?s.createElement("ul",{className:"locationSuggestion"},s.createElement("div",{className:"title"},s.createElement("h4",null," ",s.createElement(y,{icon:C,style:{marginRight:"10px"}}),"Where to go?")),b.map((e=>{let t=e.geometry.coordinates.reverse().join(",");return s.createElement("li",{onClick:()=>{!function(e){g(e.properties.label)}(e)},title:e.properties.label,"data--coords":t,key:t+(Math.random()+Math.random()).toString()},s.createElement("span",{className:"location"}," ",s.createElement(y,{icon:C,style:{marginRight:"10px"}}),e.properties.name.substring(0,30),e.properties.name.length>30&&"..."))}))):d&&s.createElement("ul",{className:"locationSuggestion"},s.createElement("div",{className:"title"},s.createElement("h4",null," ",s.createElement(y,{icon:z,style:{marginRight:"10px"}}),"Where are you?")),h.map((e=>{let t=e.geometry.coordinates.reverse().join(",");return s.createElement("li",{onClick:()=>{!function(e){o(e.geometry.coordinates.reverse())}(e)},title:e.properties.label,"data--coords":t,key:t+(Math.random()+Math.random()).toString()},s.createElement("span",{className:"location"}," ",s.createElement(y,{icon:z,style:{marginRight:"10px"}}),e.properties.name.substring(0,30),e.properties.name.length>30&&"..."),s.createElement("span",{className:"distance"}," ",s.createElement(y,{icon:I,style:{marginRight:"10px"}}),1e3*e.properties.distance,"m"))}))),s.createElement("datalist",{id:"locations"},h.slice(0,4).map((e=>{let t=e.geometry.coordinates.reverse().join(",");return s.createElement("option",{value:e.properties.label,"data--coords":t,key:t+Math.random().toString()})}))),s.createElement("datalist",{id:"destinations"},b.slice(0,4).map((e=>{let t=e.geometry.coordinates.reverse().join(",");return s.createElement("option",{value:e.properties.label,"data--coords":t,key:t+Math.random().toString()})})))),s.createElement("div",{className:"outmap"},s.createElement("div",{className:"mapContainer"},s.createElement("div",null,n&&s.createElement("div",null,s.createElement(q,{key:n.join(Math.random().toString()),className:"leaflet-container",center:n||[23.7488288,90.4311135],zoom:16,scrollWheelZoom:!0},s.createElement(P,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.createElement(R,{position:n||[23.7488288,90.4311135]},s.createElement(O,null,"Your Location")))))),s.createElement("h5",null,n.join(",")))))},ye=e=>{var{children:o}=e,i=((e,o)=>{var r={};for(var i in e)t.call(e,i)&&o.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))o.indexOf(i)<0&&n.call(e,i)&&(r[i]=e[i]);return r})(e,["children"]);const[l,c]=le();let m=JSON.parse(localStorage.getItem("LoginData"));return s.createElement(b,r(r({},i),{render:({location:e})=>l.isLoggedIn||(null==m?void 0:m.isLoggedIn)?o:s.createElement($,{to:{pathname:"/Login",state:{from:e}}})}))},ke=()=>s.createElement("div",{className:"ridefinalpage "},s.createElement("div",{className:"ride-page-msg"},s.createElement("h3",null,"Thanks for Trying!"),s.createElement("p",null,"Your rider is never gonna arrive as its just a demo app to practice react-router,oauth and opensource map apis. You can see the soure below."),s.createElement("div",{className:"actions"},s.createElement(X,{as:c,to:"/"},s.createElement(y,{icon:j}),"view again"),s.createElement(X,{as:"a",target:"_blank",href:"https://github.com/IamSAL/urban-riders",style:{backgroundColor:"gray"}},s.createElement(y,{icon:M}),"View Source"))));function Ne(){return s.createElement(ie,null,s.createElement("div",{className:"App"},s.createElement(h,null,s.createElement(se,null),s.createElement(f,null,s.createElement(b,{path:"/",exact:!0},s.createElement(V,null)),s.createElement(b,{path:"/Login"},s.createElement(pe,null)),s.createElement(be,null,s.createElement(ye,{path:"/Navigate/:ride"},s.createElement(xe,null)),s.createElement(ye,{path:"/ride"},s.createElement(ke,null))),s.createElement(b,{path:"*"},s.createElement("h1",null,"404"))))))}A.render(s.createElement(s.StrictMode,null,s.createElement(Ne,null)),document.getElementById("root"));
