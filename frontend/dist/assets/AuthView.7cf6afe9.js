import{g as pn,j as mn,r as An,i as On,s as Ue,a as ie,t as In,e as gt,p as _t,n as re,b as ht,c as ft,R as xt,d as mt,_ as vt,o as bt,f as kt}from"./index.a9531d00.js";var De={},Pn={},Un={},zn=pn,Tn=mn.exports,ne=An.exports,Pe=On,wt=Ue,It=ie,St=In,Et=function(n){return Tn.jsx(wt.SessionAuth,zn.__assign({requireAuth:!1,doRedirection:!1},{children:Tn.jsx(yt,zn.__assign({},n))}))},yt=function(n){var e=ne.useContext(Pe.SessionContext),t=Pe.useUserContext(),l=ne.useState(!1),d=l[0],w=l[1];return ne.useEffect(function(){e.loading===!1&&(e.doesSessionExist?n.onSessionAlreadyExists!==void 0?n.onSessionAlreadyExists():(n.authRecipe.config.onHandleEvent({action:"SESSION_ALREADY_EXISTS"}),It.Session.getInstanceOrThrow().validateGlobalClaimsAndHandleSuccessRedirection({rid:n.authRecipe.config.recipeId,successRedirectContext:{action:"SUCCESS",isNewUser:!1,redirectToPath:zn.getRedirectToPathFromURL()}},t,n.history)):w(!0))},[e.loading]),(e.loading===!0||e.doesSessionExist)&&!d?null:Tn.jsx(Tn.Fragment,{children:n.children})};function Ct(){var n=St.useTranslation();return Tn.jsxs("a",zn.__assign({"data-supertokens":"superTokensBranding",href:"https://supertokens.com?utm_campaign=poweredby",target:"_blank"},{children:[n("BRANDING_POWERED_BY_START"),Tn.jsx("strong",{children:"SuperTokens"}),n("BRANDING_POWERED_BY_END")]}))}Un.AuthWidgetWrapper=Et;Un.SuperTokensBranding=Ct;var Fe={},ae={},Tt=pn,je=Tt.createGenericComponentsOverrideContext(),Pt=je[0],Lt=je[1];ae.Provider=Lt;ae.useContext=Pt;var Hn={};(function(n){function e(l){for(var d in l)n.hasOwnProperty(d)||(n[d]=l[d])}n.__esModule=!0;let t=gt;t.default!==void 0?e(t):e({default:t,...t})})(Hn);var Dn={};function Rt(n){if(n===void 0)return!1;var e=n.toLowerCase();return e.includes("font-family:")||e.includes("font:")}var Nt={en:{BRANDING_POWERED_BY_START:"Powered by ",BRANDING_POWERED_BY_END:"",SOMETHING_WENT_WRONG_ERROR:"Something went wrong. Please try again."}};Dn.defaultTranslationsCommon=Nt;Dn.hasFontDefined=Rt;var oe={},At=pn,Ot=mn.exports,Ut=In;function Dt(n){var e=n.type,t=n.label,l=n.disabled,d=n.isLoading,w=n.onClick,C=Ut.useTranslation();return l===void 0&&(l=!1),Ot.jsxs("button",At.__assign({type:e,disabled:l,onClick:w,"data-supertokens":"button"},{children:[C(t),d&&"..."]}))}oe.Button=Dt;var Vn={},Ft=pn,jt=mn.exports,Bt=In;function Wt(n){var e=n.error,t=Bt.useTranslation();return jt.jsx("div",Ft.__assign({"data-supertokens":"generalError"},{children:t(e)}))}Vn.GeneralError=Wt;var se={},Gn=pn,nn=mn.exports;function Mt(){return nn.jsx("svg",Gn.__assign({xmlns:"http://www.w3.org/2000/svg",width:"59.867",height:"40.34",viewBox:"0 0 59.867 40.34"},{children:nn.jsxs("g",Gn.__assign({id:"email",transform:"translate(0 -83.5)"},{children:[nn.jsx("path",{id:"Path_91396",d:"M470.393 98.615h-3.508v36.805h3.508a3.031 3.031 0 0 0 .89-2.15v-32.505a3.031 3.031 0 0 0-.89-2.15z",fill:"#8ae7ff",transform:"translate(-412.293 -13.348)"}),nn.jsx("path",{id:"Path_91397",d:"M115.09 100.765a3.031 3.031 0 0 0-.89-2.15H68.39a3.031 3.031 0 0 0-.89 2.15v32.506a3.031 3.031 0 0 0 .89 2.15h45.81a3.031 3.031 0 0 0 .89-2.15z",fill:"#c4f3ff",transform:"translate(-59.607 -13.348)"}),nn.jsx("path",{id:"Path_91398",fill:"#4fdbff",d:"M451.54 391l-3.04 3.508h3.508a3.031 3.031 0 0 0 2.15-.89z",transform:"translate(-396.058 -271.545)"}),nn.jsx("path",{id:"Path_91399",d:"M121.814 225.009v-.468L99.773 202.5l-24.658 24.658a3.031 3.031 0 0 0 2.15.89h41.509a3.04 3.04 0 0 0 3.04-3.039z",fill:"#8ae7ff",transform:"translate(-66.332 -105.086)"}),nn.jsx("path",{id:"Path_91400",d:"M452.008 91H448.5l3.04 3.508 2.617-2.617a3.031 3.031 0 0 0-2.149-.891z",fill:"#c4f3ff",transform:"translate(-396.058 -6.623)"}),nn.jsx("path",{id:"Path_91401",fill:"#fff",d:"M118.774 91H77.265a3.031 3.031 0 0 0-2.15.89l20.318 20.318a6.139 6.139 0 0 0 8.681 0l17.7-17.7v-.468a3.04 3.04 0 0 0-3.04-3.04z",transform:"translate(-66.332 -6.623)"}),nn.jsx("path",{id:"Path_91402",d:"M55.95 83.5H10.933a3.922 3.922 0 0 0-3.917 3.917v8.36H.877a.877.877 0 1 0 0 1.754H11.4a.877.877 0 1 0 0-1.754H8.77v-8.36a2.147 2.147 0 0 1 .147-.776l17.029 17.029-17.03 17.03a2.147 2.147 0 0 1-.147-.776v-5.729a.877.877 0 1 0-1.754 0v5.729a3.922 3.922 0 0 0 3.917 3.917H55.95a3.922 3.922 0 0 0 3.917-3.917V87.417A3.922 3.922 0 0 0 55.95 83.5zm-15.013 20.17l17.03-17.029a2.147 2.147 0 0 1 .147.776v32.506a2.147 2.147 0 0 1-.147.776zM55.95 85.254a2.147 2.147 0 0 1 .776.147l-19.564 19.564a5.267 5.267 0 0 1-7.441 0L10.156 85.4a2.147 2.147 0 0 1 .776-.147zm-45.017 36.832a2.147 2.147 0 0 1-.776-.146l17.029-17.03 1.295 1.295a7.024 7.024 0 0 0 9.922 0l1.297-1.295 17.027 17.03a2.147 2.147 0 0 1-.776.146z"}),nn.jsx("path",{id:"Path_91403",d:"M7.893 218.5a.877.877 0 0 0-.877.877v2.631H.877a.877.877 0 0 0 0 1.754h14.031a.877.877 0 0 0 0-1.754H8.77v-2.631a.877.877 0 0 0-.877-.877z",transform:"translate(0 -119.215)"}),nn.jsx("path",{id:"Path_91404",d:"M11.4 283.762a.877.877 0 0 0 0-1.754H8.77v-2.631a.877.877 0 1 0-1.754 0v2.631H.877a.877.877 0 0 0 0 1.754z",transform:"translate(0 -172.199)"})]}))}))}function zt(){return nn.jsx("svg",Gn.__assign({xmlns:"http://www.w3.org/2000/svg",width:"33",height:"33",viewBox:"0 0 33 33","data-supertokens":"checkedRoundIcon"},{children:nn.jsxs("g",Gn.__assign({fill:"rgb(var(--palette-success))",stroke:"rgb(var(--palette-success))"},{children:[nn.jsx("path",{d:"M6.715 15.334a1.135 1.135 0 0 1 1.605-1.605l4.558 4.558 9.573-9.573a1.135 1.135 0 0 1 1.605 1.605L13.748 20.627a1.231 1.231 0 0 1-1.741 0z",transform:"translate(-.5 -.5) translate(1.242 1.703)"}),nn.jsx("path",{fillRule:"evenodd",d:"M17 1a16 16 0 1 0 16 16A16 16 0 0 0 17 1zM3.462 17A13.538 13.538 0 1 1 17 30.538 13.538 13.538 0 0 1 3.462 17z",transform:"translate(-.5 -.5)"})]}))}))}se.CheckedRoundIcon=zt;se.EmailLargeIcon=Mt;var Fn={},kn={},bn=pn,Gt=["email","password"],Ht="/reset-password";function Vt(n){return bn.__awaiter(this,void 0,void 0,function(){var e;return bn.__generator(this,function(t){return typeof n!="string"?[2,"ERROR_EMAIL_NON_STRING"]:(n=n.trim(),e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n.match(e)===null?[2,"ERROR_EMAIL_INVALID"]:[2,void 0])})})}function Kt(n){return bn.__awaiter(this,void 0,void 0,function(){return bn.__generator(this,function(e){return typeof n!="string"?[2,"ERROR_PASSWORD_NON_STRING"]:n.length<8?[2,"ERROR_PASSWORD_TOO_SHORT"]:n.length>=100?[2,"ERROR_PASSWORD_TOO_LONG"]:n.match(/^.*[A-Za-z]+.*$/)===null?[2,"ERROR_PASSWORD_NO_ALPHA"]:n.match(/^.*[0-9]+.*$/)===null?[2,"ERROR_PASSWORD_NO_NUM"]:[2,void 0]})})}function Yt(n){return bn.__awaiter(this,void 0,void 0,function(){return bn.__generator(this,function(e){return typeof n!="string"?[2,"ERROR_PASSWORD_NON_STRING"]:[2,void 0]})})}function qt(n){return bn.__awaiter(this,void 0,void 0,function(){return bn.__generator(this,function(e){return[2,void 0]})})}kn.DEFAULT_RESET_PASSWORD_PATH=Ht;kn.MANDATORY_FORM_FIELDS_ID_ARRAY=Gt;kn.defaultEmailValidator=Vt;kn.defaultLoginPasswordValidator=Yt;kn.defaultPasswordValidator=Kt;kn.defaultValidate=qt;var O=pn,E=mn.exports,sn=An.exports,$t=Hn,Xt=kn,Qt=oe,le=In;function Jt(n){return n&&n.__esModule?n:{default:n}}var Zt=Jt($t);function ee(n){var e=n.children,t=n.hasError;return E.jsx("div",O.__assign({"data-supertokens":["formRow",t?"hasError":""].join(" ")},{children:e}))}function ni(){return E.jsx("svg",O.__assign({xmlns:"http://www.w3.org/2000/svg",width:"14.862",height:"12.033",viewBox:"0 0 14.862 12.033","data-supertokens":"checkedIcon"},{children:E.jsx("path",{fill:"rgb(var(--palette-primary))",d:"M12.629 49L5.06 56.572l-2.829-2.829L0 55.977l5.057 5.057.654-.651 9.152-9.152z",transform:"translate(0 -49)"})}))}function Be(){return E.jsx("svg",O.__assign({xmlns:"http://www.w3.org/2000/svg",width:"17",height:"15",viewBox:"0 0 17 15","data-supertokens":"errorIcon"},{children:E.jsxs("g",{children:[E.jsx("g",O.__assign({className:"Asdf",fill:"rgb(var(--palette-error))"},{children:E.jsx("path",{d:"M13.568 14.75H3.432c-.63 0-1.195-.325-1.512-.869-.317-.544-.32-1.196-.01-1.744l5.067-8.943c.315-.556.884-.887 1.523-.887.639 0 1.208.331 1.523.887l5.067 8.943c.31.548.307 1.2-.01 1.744s-.882.869-1.512.869z",transform:"translate(-824.894 -352.829) translate(824.894 352.829)"})})),E.jsx("text",O.__assign({fill:"#fff",fontSize:"10px",fontWeight:"700",transform:"translate(-824.894 -352.829) translate(832.014 365.198)"},{children:E.jsx("tspan",O.__assign({x:"0",y:"0"},{children:"!"}))}))]})}))}function ei(n){var e=n.showPassword;return e===!0?E.jsx("div",{children:E.jsx("svg",O.__assign({xmlns:"http://www.w3.org/2000/svg",width:"18.391",height:"16.276",viewBox:"0 0 18.391 16.276","data-supertokens":"showPasswordIcon show"},{children:E.jsxs("g",{children:[E.jsx("g",{children:E.jsx("g",{children:E.jsx("g",{children:E.jsx("path",{fill:"rgb(var(--palette-textPrimary))",d:"M29.289 100.33c-2.4-3.63-5.619-5.63-9.069-5.63s-6.67 2-9.069 5.63a.767.767 0 0 0 0 .845c2.4 3.63 5.619 5.63 9.069 5.63s6.67-2 9.069-5.63a.767.767 0 0 0 0-.845zm-9.069 4.944c-2.785 0-5.435-1.6-7.5-4.519 2.065-2.92 4.715-4.519 7.5-4.519s5.435 1.6 7.5 4.519c-2.064 2.92-4.711 4.519-7.5 4.519z",transform:"translate(-822 -420.048) translate(822 422.035) translate(-11.025 -94.7)"})})})}),E.jsxs("g",O.__assign({fill:"rgb(var(--palette-textPrimary))",stroke:"rgb(var(--palette-inputBackground))",transform:"translate(-822 -420.048) translate(827.164 424.055)"},{children:[E.jsx("circle",{cx:"4.036",cy:"4.036",r:"4.036",stroke:"none"}),E.jsx("circle",{cx:"4.036",cy:"4.036",r:"3.536",fill:"none"})]})),E.jsx("path",{fill:"none",stroke:"#707070",strokeLinecap:"round",strokeWidth:"2.25px",d:"M11.981 0L0 11.981",transform:"translate(-822 -420.048) translate(825.084 421.639)"}),E.jsx("path",{fill:"none",stroke:"rgb(var(--palette-inputBackground))",strokeLinecap:"round",d:"M13.978 0L0 13.978",transform:"translate(-822 -420.048) translate(825.084 421.639)"})]})}))}):E.jsx("div",{children:E.jsx("svg",O.__assign({xmlns:"http://www.w3.org/2000/svg",width:"18.281",height:"12.033",viewBox:"0 0 18.281 12.033","data-supertokens":"showPasswordIcon hide"},{children:E.jsxs("g",{children:[E.jsx("g",{children:E.jsx("g",{children:E.jsx("g",{children:E.jsx("path",{fill:"rgb(var(--palette-textPrimary))",d:"M29.18 100.3c-2.384-3.608-5.586-5.6-9.015-5.6s-6.63 1.989-9.015 5.6a.763.763 0 0 0 0 .84c2.384 3.608 5.586 5.6 9.015 5.6s6.63-1.989 9.015-5.6a.763.763 0 0 0 0-.84zm-9.015 4.914c-2.769 0-5.4-1.589-7.459-4.492 2.052-2.9 4.686-4.492 7.459-4.492s5.4 1.589 7.459 4.492c-2.056 2.899-4.686 4.489-7.458 4.489z",transform:"translate(-822 -422.088) translate(822 422.088) translate(-11.025 -94.7)"})})})}),E.jsxs("g",O.__assign({fill:"rgb(var(--palette-textPrimary))",stroke:"rgb(var(--palette-inputBackground))",transform:"translate(-822 -422.088) translate(827.133 424.096)"},{children:[E.jsx("circle",{cx:"4.012",cy:"4.012",r:"4.012",stroke:"none"}),E.jsx("circle",{cx:"4.012",cy:"4.012",r:"3.512",fill:"none"})]}))]})}))})}var ti=function(n){var e=n.type,t=n.name,l=n.hasError,d=n.autoComplete,w=n.onInputFocus,C=n.onInputBlur,x=n.onChange,A=n.value,W=n.placeholder,$=n.validated,G=n.autofocus,an=le.useTranslation(),en=sn.useState(!1),V=en[0],fn=en[1];function xn(){w!==void 0&&w({id:t,value:A})}function tn(){C!==void 0&&C({id:t,value:A})}function b(B){x&&x({id:t,value:B.target.value})}d===void 0&&(d="off");var D=e;return e==="password"&&V===!0&&(D="text"),E.jsx("div",O.__assign({"data-supertokens":"inputContainer"},{children:E.jsxs("div",O.__assign({"data-supertokens":["inputWrapper",l?"inputError":""].join(" ")},{children:[E.jsx("input",{autoFocus:G,autoComplete:d,"data-supertokens":"input",className:"supertokens-input",onFocus:xn,onBlur:tn,type:D,name:t,placeholder:an(W),onChange:b,value:A}),l===!0&&E.jsx("div",O.__assign({"data-supertokens":"inputAdornment inputAdornmentError"},{children:E.jsx(Be,{})})),$===!0&&l===!1&&E.jsx("div",O.__assign({"data-supertokens":"inputAdornment inputAdornmentSuccess"},{children:E.jsx(ni,{})})),e==="password"&&A.length>0&&E.jsx("div",O.__assign({onClick:function(){return fn(V===!1)},"data-supertokens":"inputAdornment showPassword"},{children:E.jsx(ei,{showPassword:V})}))]}))}))};function ii(n){var e=n.error,t=le.useTranslation();return E.jsx("div",O.__assign({"data-supertokens":"inputErrorMessage"},{children:t(e)}))}function We(n){var e=n.value,t=n.showIsRequired,l=le.useTranslation();return E.jsxs("div",O.__assign({"data-supertokens":"label"},{children:[l(e),t&&" *"]}))}var ri=function(n){var e=n.footer,t=n.buttonLabel,l=n.showLabels,d=n.validateOnBlur,w=n.formFields,C=sn.useRef(new AbortController);sn.useEffect(function(){return C.current=new AbortController,function(){C.current.abort()}},[C]);var x=sn.useState(n.formFields.map(function(b){return{id:b.id,value:""}})),A=x[0],W=x[1],$=sn.useState(!1),G=$[0],an=$[1],en=sn.useCallback(function(b,D){W(function(B){var K=B.find(function(J){return J.id===b});return K===void 0?O.__spreadArray(O.__spreadArray([],B,!0),[D({id:b,value:""})],!1):B.filter(function(J){return J!==K}).concat(D(K))})},[W]),V=sn.useCallback(function(b){en(b.id,function(D){return O.__assign(O.__assign({},D),{validated:!1})})},[en]),fn=sn.useCallback(function(b){return O.__awaiter(void 0,void 0,void 0,function(){var D,B,K;return O.__generator(this,function(J){switch(J.label){case 0:return d?(D=n.formFields.find(function(H){return H.id===b.id}),D&&b.value!==""?[4,D.validate(b.value)]:[3,2]):[2];case 1:return K=J.sent(),[3,3];case 2:K=void 0,J.label=3;case 3:return B=K,en(b.id,function(H){return O.__assign(O.__assign({},H),{error:B,validated:B===void 0&&b.value.length!==0})}),[2]}})})},[d,en,n.formFields]),xn=sn.useCallback(function(b){en(b.id,function(D){return O.__assign(O.__assign({},D),{value:b.value,error:void 0})}),n.clearError()},[en]),tn=sn.useCallback(function(b){return O.__awaiter(void 0,void 0,void 0,function(){var D,B,K,J,H,Y,Sn,En,jn,Bn;return O.__generator(this,function(cn){switch(cn.label){case 0:b.preventDefault(),an(!0),W(function(Q){return Q.map(function(Z){return O.__assign(O.__assign({},Z),{error:void 0})})}),D=w.map(function(Q){var Z=A.find(function(ln){return ln.id===Q.id});return{id:Q.id,value:Z===void 0?"":Z.value}}),B=[],cn.label=1;case 1:cn.trys.push([1,6,7,8]),K=void 0,J=void 0,cn.label=2;case 2:return cn.trys.push([2,4,,5]),[4,n.callAPI(D,function(Q,Z){return B.push({id:Q,value:Z})})];case 3:return K=cn.sent(),[3,5];case 4:if(H=cn.sent(),Zt.default.isThisError(H))J=H;else throw H;return[3,5];case 5:if(C.current.signal.aborted)return[2];for(Y=function(Q){var Z=B.find(function(ln){return ln.id===Q.id});(Z||Q.clearOnSubmit===!0)&&en(Q.id,function(ln){return O.__assign(O.__assign({},ln),{value:Z?Z.value:""})})},Sn=0,En=w;Sn<En.length;Sn++)jn=En[Sn],Y(jn);if(J!==void 0)n.onError(J.message);else{if(K.status==="OK"&&(an(!1),n.clearError(),n.onSuccess!==void 0&&n.onSuccess(K)),C.current.signal.aborted)return[2];K.status==="FIELD_ERROR"&&(Bn=K.formFields,W(function(Q){return Q.map(function(Z){var ln;return O.__assign(O.__assign({},Z),{error:(ln=Bn.find(function(Wn){return Wn.id===Z.id}))===null||ln===void 0?void 0:ln.error})})}))}return[3,8];case 6:return cn.sent(),n.onError("SOMETHING_WENT_WRONG_ERROR"),[3,8];case 7:return an(!1),[7];case 8:return[2]}})})},[an,W,n,w,A]);return E.jsxs("form",O.__assign({autoComplete:"on",noValidate:!0,onSubmit:tn},{children:[w.map(function(b){var D="text";Xt.MANDATORY_FORM_FIELDS_ID_ARRAY.includes(b.id)&&(D=b.id),b.id==="confirm-password"&&(D="password");var B=A.find(function(K){return K.id===b.id})||{id:b.id,validated:!1,error:void 0,value:""};return E.jsx(ee,O.__assign({hasError:B.error!==void 0},{children:E.jsxs(sn.Fragment,{children:[l&&(b.labelComponent!==void 0?b.labelComponent:E.jsx(We,{value:b.label,showIsRequired:b.showIsRequired})),b.inputComponent!==void 0?E.jsx(b.inputComponent,{type:D,name:b.id,validated:B.validated===!0,placeholder:b.placeholder,value:B.value,autoComplete:b.autoComplete,autofocus:b.autofocus,onInputFocus:V,onInputBlur:fn,onChange:xn,hasError:B.error!==void 0}):E.jsx(ti,{type:D,name:b.id,validated:B.validated===!0,placeholder:b.placeholder,value:B.value,autoComplete:b.autoComplete,onInputFocus:V,onInputBlur:fn,onChange:xn,autofocus:b.autofocus,hasError:B.error!==void 0}),B.error&&E.jsx(ii,{error:B.error})]})}),b.id)}),E.jsx(ee,{children:E.jsxs(sn.Fragment,{children:[E.jsx(Qt.Button,{disabled:G,isLoading:G,type:"submit",label:t}),e]})},"form-button")]}))};Fn.ErrorIcon=Be;Fn.FormBase=ri;Fn.FormRow=ee;Fn.Label=We;var Me={},ai=pn,Le=mn.exports;function oi(n){var e=n.color;return Le.jsx("svg",ai.__assign({xmlns:"http://www.w3.org/2000/svg",width:"11.272",height:"9.49",viewBox:"0 0 11.272 9.49","data-supertokens":"arrowLeftIcon"},{children:Le.jsx("path",{fill:e,stroke:"#fff",strokeWidth:"0.75px",d:"M9.931 5.2h.016-7.041L5.12 7.41a.581.581 0 0 1 0 .817l-.344.345a.576.576 0 0 1-.813 0L.168 4.778a.58.58 0 0 1 0-.816L3.962.168a.577.577 0 0 1 .813 0l.345.344a.57.57 0 0 1 .168.407.553.553 0 0 1-.168.4l-2.239 2.23h7.058a.6.6 0 0 1 .584.59v.487a.585.585 0 0 1-.592.574z",transform:"translate(.375 .375)"})}))}Me.ArrowLeftIcon=oi;(function(n){var e=pn,t=mn.exports,l=re,d=On,w=Un,C=ae,x=An.exports,A=Hn,W=ie,$=Dn,G=In,an=oe,en=Ue,V=_t,fn=Vn,xn=se,tn=Fn,b=kn,D=Me;function B(r){return r&&r.__esModule?r:{default:r}}function K(r){if(r&&r.__esModule)return r;var o=Object.create(null);return r&&Object.keys(r).forEach(function(h){if(h!=="default"){var g=Object.getOwnPropertyDescriptor(r,h);Object.defineProperty(o,h,g.get?g:{enumerable:!0,get:function(){return r[h]}})}}),o.default=r,Object.freeze(o)}var J=B(l),H=K(x),Y=B(A),Sn=`/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

[data-supertokens~="container"] {
    --palette-background: 255, 255, 255;
    --palette-inputBackground: 250, 250, 250;
    --palette-inputBorder: 224, 224, 224;
    --palette-primary: 255, 155, 51;
    --palette-primaryBorder: 238, 141, 35;
    --palette-success: 65, 167, 0;
    --palette-successBackground: 217, 255, 191;
    --palette-error: 255, 23, 23;
    --palette-errorBackground: 255, 241, 235;
    --palette-textTitle: 34, 34, 34;
    --palette-textLabel: 34, 34, 34;
    --palette-textInput: 34, 34, 34;
    --palette-textPrimary: 101, 101, 101;
    --palette-textLink: 0, 118, 255;
    --palette-buttonText: 255, 255, 255;
    --palette-textGray: 128, 128, 128;
    --palette-superTokensBrandingBackground: 242, 245, 246;
    --palette-superTokensBrandingText: 173, 189, 196;

    --font-size-0: 12px;
    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 19px;
    --font-size-4: 24px;
}

/*
 * Default styles.
 */

@-webkit-keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}

@keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}

@-webkit-keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}

@keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}

[data-supertokens~="container"] {
    font-family: "Rubik", sans-serif;
    margin: 12px auto;
    margin-top: 26px;
    margin-bottom: 26px;
    width: 420px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
    background-color: rgb(var(--palette-background));
}

@media (max-width: 440px) {
    [data-supertokens~="container"] {
        width: 95vw;
    }
}

[data-supertokens~="row"] {
    margin: 0 auto;
    width: 76%;
    padding-top: 30px;
    padding-bottom: 10px;
}

[data-supertokens~="superTokensBranding"] {
    display: block;
    margin: 0 auto;
    background: rgb(var(--palette-superTokensBrandingBackground));
    color: rgb(var(--palette-superTokensBrandingText));
    text-decoration: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 6px 6px 0 0;
    padding: 4px 9px;
    font-weight: 300;
    font-size: var(--font-size-0);
    letter-spacing: 0.4px;
}

[data-supertokens~="generalError"] {
    background: rgb(var(--palette-errorBackground));
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    padding-left: 18px;
    padding-right: 18px;
    letter-spacing: 0.2px;
    font-size: var(--font-size-1);
    border-radius: 8px;
    color: rgb(var(--palette-error));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    word-wrap: break-word;
}

[data-supertokens~="headerTitle"] {
    font-size: var(--font-size-4);
    line-height: 40px;
    letter-spacing: 0.58px;
    font-weight: 800;
    margin-bottom: 2px;
    color: rgb(var(--palette-textTitle));
}

[data-supertokens~="headerSubtitle"] {
    margin-bottom: 21px;
}

[data-supertokens~="privacyPolicyAndTermsAndConditions"] {
    max-width: 300px;
    margin-top: 10px;
}

[data-supertokens~="privacyPolicyAndTermsAndConditions"] a {
    line-height: 21px;
}

/* TODO: split the link style into separate things*/

/* We add this before primary and secondary text, because if they are applied to the same element the other ones take priority */

[data-supertokens~="link"] {
    padding-left: 3px;
    padding-right: 3px;
    color: rgb(var(--palette-textLink));
    font-size: var(--font-size-1);
    cursor: pointer;
    letter-spacing: 0.16px;
    line-height: 26px;
}

[data-supertokens~="primaryText"] {
    font-size: var(--font-size-1);
    font-weight: 500;
    letter-spacing: 0.4px;
    line-height: 21px;
    color: rgb(var(--palette-textLabel));
}

[data-supertokens~="secondaryText"] {
    font-size: var(--font-size-1);
    font-weight: 300;
    letter-spacing: 0.4px;
    color: rgb(var(--palette-textPrimary));
}

[data-supertokens~="divider"] {
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom: 0.3px solid #dddddd;
    align-items: center;
    padding-bottom: 5px;
}

[data-supertokens~="headerTinyTitle"] {
    margin-top: 13px;
    font-size: var(--font-size-3);
    letter-spacing: 1.1px;
    font-weight: 500;
    line-height: 28px;
}

[data-supertokens~="secondaryLinkWithArrow"] {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}

[data-supertokens~="secondaryLinkWithArrow"]:hover {
    position: relative;
    left: 2px;
    word-spacing: 4px;
}

[data-supertokens~="generalSuccess"] {
    color: rgb(var(--palette-success));
    font-size: var(--font-size-1);
    background: rgb(var(--palette-successBackground));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    padding: 9px 15px 9px 15px;
    border-radius: 6px;
    display: inline-block;
}

[data-supertokens~="spinner"] {
    width: 80px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 40px;
    margin: 0 auto;
}

[data-supertokens~="error"] {
    color: rgb(var(--palette-error));
}

[data-supertokens~="linkButton"] {
    background-color: transparent;
    border: 0;
}

[data-supertokens~="secondaryLinkWithLeftArrow"] {
    margin-top: 10px;
    margin-bottom: 40px;
    cursor: pointer;
}

[data-supertokens~="secondaryLinkWithLeftArrow"] svg {
    margin-right: 0.3em;
}

[data-supertokens~="secondaryLinkWithLeftArrow"]:hover svg {
    position: relative;
    left: -4px;
}

[data-supertokens~="button"] {
    background-color: rgb(var(--palette-primary));
    color: rgb(var(--palette-buttonText));
    width: 100%;
    height: 34px;
    font-weight: 700;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    border-color: rgb(var(--palette-primaryBorder));
    background-position: center;
    transition: all 0.4s;
    background-size: 12000%;
    cursor: pointer;
}

[data-supertokens~="button"]:disabled {
    border: none;
    cursor: no-drop;
}

[data-supertokens~="button"]:active {
    outline: none;
    transition: all 0s;
    background-size: 100%;
    -webkit-filter: brightness(0.85);
            filter: brightness(0.85);
}

[data-supertokens~="button"]:focus {
    outline: none;
}

/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

[data-supertokens~="inputContainer"] {
    margin-top: 6px;
}

[data-supertokens~="inputWrapper"] {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(var(--palette-inputBackground));
    height: 34px;
    border-radius: 6px;
    border: 1px solid rgb(var(--palette-inputBorder));
}

[data-supertokens~="inputWrapper"][focus-within] {
    background-color: rgba(var(--palette-inputBackground), 0.25);
    border: 1px solid rgb(var(--palette-primary));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-primary), 0.25);
    outline: none;
}

[data-supertokens~="inputWrapper"]:focus-within {
    background-color: rgba(var(--palette-inputBackground), 0.25);
    border: 1px solid rgb(var(--palette-primary));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-primary), 0.25);
    outline: none;
}

[data-supertokens~="inputError"] {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}

[data-supertokens~="inputError"][focus-within] {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}

[data-supertokens~="inputError"]:focus-within {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}

[data-supertokens~="input"] {
    box-sizing: border-box;
    padding-left: 15px;
    -webkit-filter: none;
            filter: none;
    color: rgb(var(--palette-textInput));
    background-color: transparent;
    border-radius: 6px;
    font-size: var(--font-size-1);
    border: none;
    padding-right: 25px;
    letter-spacing: 1.2px;
    flex: 9 1 75%;
    width: 75%;
    height: 32px;
}

[data-supertokens~="input"]:focus {
    border: none;
    outline: none;
}

[data-supertokens~="input"]:-webkit-autofill,
[data-supertokens~="input"]:-webkit-autofill:hover,
[data-supertokens~="input"]:-webkit-autofill:focus,
[data-supertokens~="input"]:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(var(--palette-textInput));
    box-shadow: 0 0 0 30px rgb(var(--palette-inputBackground)) inset;
}

[data-supertokens~="inputAdornment"] {
    justify-content: center;
    margin-right: 5px;
}

[data-supertokens~="showPassword"] {
    cursor: pointer;
}

[data-supertokens~="forgotPasswordLink"] {
    margin-top: 10px;
}

[data-supertokens~="enterEmailSuccessMessage"] {
    margin-top: 15px;
    margin-bottom: 15px;
    word-break: break-word;
}

[data-supertokens~="submitNewPasswordSuccessMessage"] {
    margin-top: 15px;
    margin-bottom: 15px;
}

[data-supertokens~="inputErrorMessage"] {
    padding-top: 5px;
    padding-bottom: 5px;
    color: rgb(var(--palette-error));
    line-height: 24px;
    font-weight: 400;
    font-size: var(--font-size-1);
    text-align: left;
    -webkit-animation: slideTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slideTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    max-width: 330px;
}

@media (max-width: 440px) {
    [data-supertokens~="inputErrorMessage"] {
        max-width: 250px;
    }
}

[data-supertokens~="inputErrorSymbol"] {
    margin-right: 5px;
    top: 1px;
    position: relative;
    left: 2px;
}

[data-supertokens~="label"] {
    text-align: left;
    font-weight: 600;
    font-size: var(--font-size-1);
    line-height: 24px;
    color: rgb(var(--palette-textLabel));
}

[data-supertokens~="formRow"] {
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 34px;
}

[data-supertokens~="formRow"][data-supertokens~="hasError"] {
    padding-bottom: 0;
}

[data-supertokens~="sendVerifyEmailIcon"] {
    margin-top: 11px;
}

[data-supertokens~="headerTinyTitle"] {
    margin-top: 13px;
    font-size: var(--font-size-3);
    letter-spacing: 1.1px;
    font-weight: 500;
    line-height: 28px;
}

[data-supertokens~="sendVerifyEmailText"] {
    line-height: 21px;
    font-size: var(--font-size-1);
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.8px;
}

[data-supertokens~="secondaryLinkWithArrow"] {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}

[data-supertokens~="secondaryLinkWithArrow"]:hover {
    position: relative;
    left: 2px;
    word-spacing: 4px;
}

[data-supertokens~="sendVerifyEmailResend"] {
    margin-top: 13px;
    font-weight: 300;
}

[data-supertokens~="sendVerifyEmailResend"]:hover {
    text-decoration: underline;
}

[data-supertokens~="noFormRow"] {
    padding-bottom: 25px;
}

[data-supertokens~="emailVerificationButtonWrapper"] {
    padding-top: 25px;
    max-width: 96px;
    margin: 0 auto;
}

[data-supertokens~="resetPasswordHeaderTitle"] {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

[data-supertokens~="backButtonCommon"] {
    width: 16px;
    height: 13px;
}

[data-supertokens~="backButton"] {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0px;
}

[data-supertokens~="backButtonPlaceholder"] {
    display: block;
}

[data-supertokens~="resendEmailLink"] {
    display: inline-block;
}

[data-supertokens~="generalSuccess"] {
    margin-bottom: 20px;
    -webkit-animation: swingIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) alternate 2 both;
            animation: swingIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) alternate 2 both;
}

[data-supertokens~="codeInputLabelWrapper"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

[data-supertokens~="headerSubtitle"] strong {
    max-width: 100%;
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

[data-supertokens~="sendCodeText"] {
    margin-top: 15px;
    margin-bottom: 20px;
}

[data-supertokens~="sendCodeText"] strong {
    max-width: 100%;
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

[data-supertokens~="resendCodeBtn"] {
    width: auto;
    margin-top: 0;
    line-height: 24px;
}

[data-supertokens~="resendCodeBtn"]:hover {
    text-decoration: underline;
}

[data-supertokens~="resendCodeBtn"]:disabled {
    color: rgb(var(--palette-textPrimary));
    cursor: default;
    text-decoration: none;
}

[data-supertokens~="phoneInputLibRoot"] {
    display: flex;
    align-items: center;
}

[data-supertokens~="phoneInputWrapper"] {
    display: flex;
    align-items: center;
}

[data-supertokens~="phoneInputWrapper"] .iti [data-supertokens~="input"] {
    padding-left: 15px;
}

[data-supertokens~="phoneInputWrapper"] .iti {
    flex: 1 1;
    min-width: 0;
    width: 100%;
    background: transparent;
    border: none;
    color: inherit;
    outline: none;
}

[data-supertokens~="continueButtonWrapper"] {
    margin-top: 10px;
    margin-bottom: 30px;
}

.iti__country-list {
    border: 0;
    top: 40px;
    width: min(72.2vw, 320px);
    border-radius: 6;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16);
}

.iti__country {
    display: flex;
    align-items: center;
    height: 34px;
    cursor: pointer;

    padding: 0 8px;
}

.iti__country-name {
    color: var(--palette-textLabel);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: "0 16px";
}
`,En=function(r){var o=r.children,h=r.userStyles,g=r.loadDefaultFont;return t.jsxs(x.Fragment,{children:[o,g&&t.jsx("link",{href:"//fonts.googleapis.com/css?family=Rubik:wght@300;400;600;500;700",rel:"stylesheet",type:"text/css"}),t.jsxs("style",{children:[Sn,h.join(`
`)]})]})},jn=function(r){var o=G.useTranslation(),h=x.useState(!1),g=h[0],f=h[1];return t.jsx("div",e.__assign({"data-supertokens":"container"},{children:t.jsx("div",e.__assign({"data-supertokens":"row"},{children:r.requireUserInteraction===!0?t.jsxs(H.default.Fragment,{children:[t.jsx("div",e.__assign({"data-supertokens":"headerTitle"},{children:o("PWLESS_LINK_CLICKED_CONTINUE_HEADER")})),t.jsx("div",e.__assign({"data-supertokens":"headerSubtitle secondaryText"},{children:o("PWLESS_LINK_CLICKED_CONTINUE_DESC")})),t.jsx("div",e.__assign({"data-supertokens":"continueButtonWrapper"},{children:t.jsx(an.Button,{isLoading:g,onClick:function(){f(!0),r.consumeCode()},type:"button",label:"PWLESS_LINK_CLICKED_CONTINUE_BUTTON"})}))]}):t.jsx("div",e.__assign({"data-supertokens":"spinner"},{children:t.jsx(d.SpinnerIcon,{})}))}))}))},Bn=d.withOverride("PasswordlessLinkClickedScreen",jn),cn=function(r){var o=$.hasFontDefined(r.config.rootStyle);return t.jsx(En,e.__assign({loadDefaultFont:!o,userStyles:[r.config.rootStyle,r.config.linkClickedScreenFeature.style]},{children:t.jsx(Bn,e.__assign({},r))}))},Q={en:e.__assign(e.__assign({},$.defaultTranslationsCommon.en),{GENERAL_ERROR_EMAIL_UNDEFINED:"Please set your email",GENERAL_ERROR_EMAIL_NON_STRING:"Email must be of type string",GENERAL_ERROR_EMAIL_INVALID:"Email is invalid",GENERAL_ERROR_PHONE_UNDEFINED:"Please set your phone number",GENERAL_ERROR_PHONE_NON_STRING:"Phone number must be of type string",GENERAL_ERROR_PHONE_INVALID:"Phone number is invalid",GENERAL_ERROR_EMAIL_OR_PHONE_UNDEFINED:"Please set your email or phone number",GENERAL_ERROR_EMAIL_OR_PHONE_NON_STRING:"Email or Phone number must be of type string",GENERAL_ERROR_EMAIL_OR_PHONE_INVALID:"Email or Phone number is invalid",GENERAL_ERROR_OTP_UNDEFINED:"Please fill your OTP",GENERAL_ERROR_OTP_INVALID:"Invalid OTP",GENERAL_ERROR_OTP_EXPIRED:"Expired OTP.",GENERAL_ERROR_OTP_NON_STRING:"OTP must be of type string",GENERAL_ERROR_OTP_EMPTY:"OTP cannot be empty",ERROR_SIGN_IN_UP_LINK:"Invalid magic link. Please try again.",ERROR_SIGN_IN_UP_RESEND_RESTART_FLOW:"Login timed out. Please try again.",ERROR_SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW:"Login unsuccessful. Please try again.",PWLESS_CLOSE_TAB_TITLE:"Success!",PWLESS_CLOSE_TAB_SUBTITLE_LINE1:"You have been successfully signed in.",PWLESS_CLOSE_TAB_SUBTITLE_LINE2:"Please close this tab",PWLESS_SIGN_IN_UP_HEADER_TITLE:"Sign Up or Log In",PWLESS_SIGN_IN_UP_FOOTER_START:"By continuing, you agree to our ",PWLESS_SIGN_IN_UP_FOOTER_TOS:"Terms of Service",PWLESS_SIGN_IN_UP_FOOTER_AND:" and ",PWLESS_SIGN_IN_UP_FOOTER_PP:"Privacy Policy",PWLESS_SIGN_IN_UP_FOOTER_END:"",PWLESS_SIGN_IN_UP_EMAIL_LABEL:"Email",PWLESS_SIGN_IN_UP_PHONE_LABEL:"Phone Number",PWLESS_SIGN_IN_UP_EMAIL_OR_PHONE_LABEL:"Email or Phone number",PWLESS_SIGN_IN_UP_CONTINUE_BUTTON:"CONTINUE",PWLESS_EMAIL_OR_PHONE_INVALID_INPUT_GUESS_PHONE_ERR:"Please enter a valid phone number with its country code.",PWLESS_LINK_SENT_RESEND_SUCCESS:"Link resent",PWLESS_LINK_SENT_RESEND_TITLE:"Link sent!",PWLESS_LINK_SENT_RESEND_DESC_START_EMAIL:"We sent a link to ",PWLESS_LINK_SENT_RESEND_DESC_START_PHONE:"We sent a link to your phone number ",PWLESS_LINK_SENT_RESEND_DESC_END_EMAIL:" Click the link to login or sign up",PWLESS_LINK_SENT_RESEND_DESC_END_PHONE:"",PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_EMAIL:"Change email",PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_PHONE:"Change phone number",PWLESS_LINK_CLICKED_CONTINUE_HEADER:"Sign Up or Log In",PWLESS_LINK_CLICKED_CONTINUE_DESC:"Click the button below to log in on this device",PWLESS_LINK_CLICKED_CONTINUE_BUTTON:"CONTINUE",PWLESS_RESEND_SUCCESS_EMAIL:"Email resent",PWLESS_RESEND_SUCCESS_PHONE:"SMS resent",PWLESS_RESEND_BTN_DISABLED_START:"Resend in ",PWLESS_RESEND_BTN_DISABLED_END:"",PWLESS_RESEND_BTN_EMAIL:"Resend Email",PWLESS_RESEND_BTN_PHONE:"Resend SMS",PWLESS_USER_INPUT_CODE_HEADER_TITLE:"Enter OTP",PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE:"An OTP was sent to you at",PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE_LINK:"An OTP and a magic link was sent to you at",PWLESS_USER_INPUT_CODE_INPUT_LABEL:"OTP","Failed to generate a one time code. Please try again":void 0,"Phone number is invalid":void 0,"Email is invalid":void 0})},Z=function(r){var o=d.useUserContext(),h=x.useState(!1),g=h[0],f=h[1],c=x.useCallback(function(){return e.__awaiter(void 0,void 0,void 0,function(){var v,R,y;return e.__generator(this,function(M){switch(M.label){case 0:return v=e.getQueryParams("preAuthSessionId"),R=e.getURLHash(),v===null||v.length===0||R.length===0?[4,e.SuperTokens.getInstanceOrThrow().redirectToAuth({history:r.history,queryParams:{error:"signin"},redirectBack:!1})]:[3,2];case 1:return M.sent(),[2,"REDIRECTING"];case 2:return[4,r.recipe.webJSRecipe.getLoginAttemptInfo({userContext:o})];case 3:return y=M.sent(),(y==null?void 0:y.preAuthSessionId)!==v?[2,"REQUIRES_INTERACTION"]:[2,r.recipe.webJSRecipe.consumeCode({userContext:o})]}})})},[r.recipe,r.history]),u=x.useCallback(function(v){return e.__awaiter(void 0,void 0,void 0,function(){var R;return e.__generator(this,function(y){switch(y.label){case 0:return v==="REQUIRES_INTERACTION"&&f(!0),typeof v=="string"?[2]:v.status==="RESTART_FLOW_ERROR"?[2,e.SuperTokens.getInstanceOrThrow().redirectToAuth({history:r.history,queryParams:{error:"restart_link"},redirectBack:!1})]:v.status!=="OK"?[3,3]:[4,r.recipe.webJSRecipe.getLoginAttemptInfo({userContext:o})];case 1:return R=y.sent(),[4,r.recipe.webJSRecipe.clearLoginAttemptInfo({userContext:o})];case 2:return y.sent(),[2,W.Session.getInstanceOrThrow().validateGlobalClaimsAndHandleSuccessRedirection({rid:r.recipe.config.recipeId,successRedirectContext:{action:"SUCCESS",isNewUser:v.createdNewUser,redirectToPath:R==null?void 0:R.redirectToPath}},o,r.history)];case 3:return[2]}})})},[r.history,r.recipe]),k=x.useCallback(function(v){return Y.default.isThisError(v)?e.SuperTokens.getInstanceOrThrow().redirectToAuth({history:r.history,queryParams:{error:"custom",message:v.message},redirectBack:!1}):e.SuperTokens.getInstanceOrThrow().redirectToAuth({history:r.history,queryParams:{error:"signin"},redirectBack:!1})},[r.recipe,r.history]);e.useOnMountAPICall(c,u,k);var T=r.useComponentOverrides(),I={recipeImplementation:r.recipe.webJSRecipe,config:r.recipe.config,requireUserInteraction:g,consumeCode:function(){return e.__awaiter(void 0,void 0,void 0,function(){var v,R;return e.__generator(this,function(y){switch(y.label){case 0:return y.trys.push([0,3,,4]),[4,r.recipe.webJSRecipe.consumeCode({userContext:o})];case 1:return v=y.sent(),[4,u(v)];case 2:return y.sent(),[3,4];case 3:return R=y.sent(),k(R),[3,4];case 4:return[2]}})})}};return t.jsx(d.ComponentOverrideContext.Provider,e.__assign({value:T},{children:t.jsx(d.FeatureWrapper,e.__assign({useShadowDom:r.recipe.config.useShadowDom,defaultStore:Q},{children:t.jsxs(x.Fragment,{children:[r.children===void 0&&t.jsx(cn,e.__assign({},I)),r.children&&H.default.Children.map(r.children,function(v){return H.default.isValidElement(v)?H.default.cloneElement(v,I):v})]})}))}))},ln=function(){var r=G.useTranslation();return t.jsx("div",e.__assign({"data-supertokens":"container"},{children:t.jsxs("div",e.__assign({"data-supertokens":"row noFormRow"},{children:[t.jsx(xn.CheckedRoundIcon,{}),t.jsx("div",e.__assign({"data-supertokens":"headerTitle"},{children:r("PWLESS_CLOSE_TAB_TITLE")})),t.jsx("div",{"data-supertokens":"divider"}),t.jsxs("div",e.__assign({"data-supertokens":"headerSubtitle secondaryText"},{children:[r("PWLESS_CLOSE_TAB_SUBTITLE_LINE1"),t.jsx("br",{}),r("PWLESS_CLOSE_TAB_SUBTITLE_LINE2")]}))]}))}))},Wn=d.withOverride("PasswordlessCloseTabScreen",ln),$n=d.withOverride("PasswordlessSignInUpFooter",function(o){var h=o.termsOfServiceLink,g=o.privacyPolicyLink,f=G.useTranslation();return h===void 0&&g===void 0?null:t.jsxs("div",e.__assign({"data-supertokens":"secondaryText privacyPolicyAndTermsAndConditions"},{children:[f("PWLESS_SIGN_IN_UP_FOOTER_START"),h!==void 0&&t.jsx("a",e.__assign({"data-supertokens":"link",href:h,target:"_blank",rel:"noopener noreferer"},{children:f("PWLESS_SIGN_IN_UP_FOOTER_TOS")})),h!==void 0&&g!==void 0&&f("PWLESS_SIGN_IN_UP_FOOTER_AND"),g!==void 0&&t.jsx("a",e.__assign({"data-supertokens":"link",href:g,target:"_blank",rel:"noopener noreferer"},{children:f("PWLESS_SIGN_IN_UP_FOOTER_PP")})),f("PWLESS_SIGN_IN_UP_FOOTER_END")]}))}),he=d.withOverride("PasswordlessEmailForm",function(o){var h=this,g=d.useUserContext();return t.jsx(tn.FormBase,{clearError:o.clearError,onError:o.onError,formFields:[{id:"email",label:"PWLESS_SIGN_IN_UP_EMAIL_LABEL",optional:!1,autofocus:!0,placeholder:"",validate:b.defaultValidate}],buttonLabel:"PWLESS_SIGN_IN_UP_CONTINUE_BUTTON",onSuccess:o.onSuccess,callAPI:function(f){return e.__awaiter(h,void 0,void 0,function(){var c,u,k,T;return e.__generator(this,function(I){switch(I.label){case 0:if(c=(T=f.find(function(v){return v.id==="email"}))===null||T===void 0?void 0:T.value,c===void 0)throw new Y.default("GENERAL_ERROR_EMAIL_UNDEFINED");return[4,o.config.validateEmailAddress(c)];case 1:if(u=I.sent(),u!==void 0)throw new Y.default(u);return[4,o.recipeImplementation.createCode({email:c,userContext:g})];case 2:return k=I.sent(),[2,k]}})})},validateOnBlur:!1,showLabels:!0,footer:t.jsx($n,{privacyPolicyLink:o.config.signInUpFeature.privacyPolicyLink,termsOfServiceLink:o.config.signInUpFeature.termsOfServiceLink})})});function Je(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xn={},Ze={get exports(){return Xn},set exports(r){Xn=r}},Qn={},nt={get exports(){return Qn},set exports(r){Qn=r}};(function(r){(function(o){r.exports?r.exports=o():window.intlTelInput=o()})(function(o){return function(){for(var h=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93"],["Albania (Shqip\xEBri)","al","355"],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213"],["American Samoa","as","1",5,["684"]],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1",6,["264"]],["Antigua and Barbuda","ag","1",7,["268"]],["Argentina","ar","54"],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374"],["Aruba","aw","297"],["Ascension Island","ac","247"],["Australia","au","61",0],["Austria (\xD6sterreich)","at","43"],["Azerbaijan (Az\u0259rbaycan)","az","994"],["Bahamas","bs","1",8,["242"]],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973"],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880"],["Barbados","bb","1",9,["246"]],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375"],["Belgium (Belgi\xEB)","be","32"],["Belize","bz","501"],["Benin (B\xE9nin)","bj","229"],["Bermuda","bm","1",10,["441"]],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1",11,["284"]],["Brunei","bn","673"],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1,["3","4","7"]],["Cayman Islands","ky","1",12,["345"]],["Central African Republic (R\xE9publique centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (\u4E2D\u56FD)","cn","86"],["Christmas Island","cx","61",2,["89164"]],["Cocos (Keeling) Islands","cc","61",1,["89162"]],["Colombia","co","57"],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xF4te d\u2019Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357"],["Czech Republic (\u010Cesk\xE1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1",13,["767"]],["Dominican Republic (Rep\xFAblica Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Eswatini","sz","268"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xF8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane fran\xE7aise)","gf","594"],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1",14,["473"]],["Guadeloupe","gp","590",0],["Guam","gu","1",15,["671"]],["Guatemala","gt","502"],["Guernsey","gg","44",1,["1481","7781","7839","7911"]],["Guinea (Guin\xE9e)","gn","224"],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (\u9999\u6E2F)","hk","852"],["Hungary (Magyarorsz\xE1g)","hu","36"],["Iceland (\xCDsland)","is","354"],["India (\u092D\u093E\u0930\u0924)","in","91"],["Indonesia","id","62"],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98"],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2,["1624","74576","7524","7924","7624"]],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (\u65E5\u672C)","jp","81"],["Jersey","je","44",3,["1534","7509","7700","7797","7829","7937"]],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962"],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7",1,["33","7"]],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965"],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996"],["Laos (\u0EA5\u0EB2\u0EA7)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (\u6FB3\u9580)","mo","853"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1,["269","639"]],["Mexico (M\xE9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1",16,["664"]],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212",0],["Mozambique (Mo\xE7ambique)","mz","258"],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95"],["Namibia (Namibi\xEB)","na","264"],["Nauru","nr","674"],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850"],["North Macedonia (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389"],["Northern Mariana Islands","mp","1",17,["670"]],["Norway (Norge)","no","47",0],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968"],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92"],["Palau","pw","680"],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970"],["Panama (Panam\xE1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xFA)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974"],["R\xE9union (La R\xE9union)","re","262",0],["Romania (Rom\xE2nia)","ro","40"],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7",0],["Rwanda","rw","250"],["Saint Barth\xE9lemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1",18,["869"]],["Saint Lucia","lc","1",19,["758"]],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1",20,["784"]],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239"],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966"],["Senegal (S\xE9n\xE9gal)","sn","221"],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1",21,["721"]],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82"],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211"],["Spain (Espa\xF1a)","es","34"],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94"],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1,["79"]],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963"],["Taiwan (\u53F0\u7063)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (\u0E44\u0E17\u0E22)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1",22,["868"]],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216"],["Turkey (T\xFCrkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1",23,["649"]],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1",24,["340"]],["Uganda","ug","256"],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380"],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (O\u02BBzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xE0 del Vaticano)","va","39",1,["06698"]],["Venezuela","ve","58"],["Vietnam (Vi\u1EC7t Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)","eh","212",1,["5288","5289"]],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xC5land Islands","ax","358",1,["18"]]],g=0;g<h.length;g++){var f=h[g];h[g]={name:f[0],iso2:f[1],dialCode:f[2],priority:f[3]||0,areaCodes:f[4]||null}}function c(F,p){if(!(F instanceof p))throw new TypeError("Cannot call a class as a function")}function u(F,p){for(var i=0;i<p.length;i++){var a=p[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(F,a.key,a)}}function k(F,p,i){return p&&u(F.prototype,p),i&&u(F,i),F}var T={getInstance:function(p){var i=p.getAttribute("data-intl-tel-input-id");return window.intlTelInputGlobals.instances[i]},instances:{},documentReady:function(){return document.readyState==="complete"}};typeof window=="object"&&(window.intlTelInputGlobals=T);var I=0,v={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},R=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"],y=function(p,i){for(var a=Object.keys(p),s=0;s<a.length;s++)i(a[s],p[a[s]])},M=function(p){y(window.intlTelInputGlobals.instances,function(i){window.intlTelInputGlobals.instances[i][p]()})},on=function(){function F(p,i){var a=this;c(this,F),this.id=I++,this.telInput=p,this.activeItem=null,this.highlightedItem=null;var s=i||{};this.options={},y(v,function(_,m){a.options[_]=s.hasOwnProperty(_)?s[_]:m}),this.hadInitialPlaceholder=Boolean(p.getAttribute("placeholder"))}return k(F,[{key:"_init",value:function(){var i=this;if(this.options.nationalMode&&(this.options.autoHideDialCode=!1),this.options.separateDialCode&&(this.options.autoHideDialCode=this.options.nationalMode=!1),this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.isMobile&&(document.body.classList.add("iti-mobile"),this.options.dropdownContainer||(this.options.dropdownContainer=document.body)),typeof Promise<"u"){var a=new Promise(function(_,m){i.resolveAutoCountryPromise=_,i.rejectAutoCountryPromise=m}),s=new Promise(function(_,m){i.resolveUtilsScriptPromise=_,i.rejectUtilsScriptPromise=m});this.promise=Promise.all([a,s])}else this.resolveAutoCountryPromise=this.rejectAutoCountryPromise=function(){},this.resolveUtilsScriptPromise=this.rejectUtilsScriptPromise=function(){};this.selectedCountryData={},this._processCountryData(),this._generateMarkup(),this._setInitialState(),this._initListeners(),this._initRequests()}},{key:"_processCountryData",value:function(){this._processAllCountries(),this._processCountryCodes(),this._processPreferredCountries(),this.options.localizedCountries&&this._translateCountriesByLocale(),(this.options.onlyCountries.length||this.options.localizedCountries)&&this.countries.sort(this._countryNameSort)}},{key:"_addCountryCode",value:function(i,a,s){a.length>this.countryCodeMaxLen&&(this.countryCodeMaxLen=a.length),this.countryCodes.hasOwnProperty(a)||(this.countryCodes[a]=[]);for(var _=0;_<this.countryCodes[a].length;_++)if(this.countryCodes[a][_]===i)return;var m=s!==o?s:this.countryCodes[a].length;this.countryCodes[a][m]=i}},{key:"_processAllCountries",value:function(){if(this.options.onlyCountries.length){var i=this.options.onlyCountries.map(function(s){return s.toLowerCase()});this.countries=h.filter(function(s){return i.indexOf(s.iso2)>-1})}else if(this.options.excludeCountries.length){var a=this.options.excludeCountries.map(function(s){return s.toLowerCase()});this.countries=h.filter(function(s){return a.indexOf(s.iso2)===-1})}else this.countries=h}},{key:"_translateCountriesByLocale",value:function(){for(var i=0;i<this.countries.length;i++){var a=this.countries[i].iso2.toLowerCase();this.options.localizedCountries.hasOwnProperty(a)&&(this.countries[i].name=this.options.localizedCountries[a])}}},{key:"_countryNameSort",value:function(i,a){return i.name.localeCompare(a.name)}},{key:"_processCountryCodes",value:function(){this.countryCodeMaxLen=0,this.dialCodes={},this.countryCodes={};for(var i=0;i<this.countries.length;i++){var a=this.countries[i];this.dialCodes[a.dialCode]||(this.dialCodes[a.dialCode]=!0),this._addCountryCode(a.iso2,a.dialCode,a.priority)}for(var s=0;s<this.countries.length;s++){var _=this.countries[s];if(_.areaCodes)for(var m=this.countryCodes[_.dialCode][0],P=0;P<_.areaCodes.length;P++){for(var j=_.areaCodes[P],q=1;q<j.length;q++){var gn=_.dialCode+j.substr(0,q);this._addCountryCode(m,gn),this._addCountryCode(_.iso2,gn)}this._addCountryCode(_.iso2,_.dialCode+j)}}}},{key:"_processPreferredCountries",value:function(){this.preferredCountries=[];for(var i=0;i<this.options.preferredCountries.length;i++){var a=this.options.preferredCountries[i].toLowerCase(),s=this._getCountryData(a,!1,!0);s&&this.preferredCountries.push(s)}}},{key:"_createEl",value:function(i,a,s){var _=document.createElement(i);return a&&y(a,function(m,P){return _.setAttribute(m,P)}),s&&s.appendChild(_),_}},{key:"_generateMarkup",value:function(){!this.telInput.hasAttribute("autocomplete")&&!(this.telInput.form&&this.telInput.form.hasAttribute("autocomplete"))&&this.telInput.setAttribute("autocomplete","off");var i="iti";this.options.allowDropdown&&(i+=" iti--allow-dropdown"),this.options.separateDialCode&&(i+=" iti--separate-dial-code"),this.options.customContainer&&(i+=" ",i+=this.options.customContainer);var a=this._createEl("div",{class:i});if(this.telInput.parentNode.insertBefore(a,this.telInput),this.flagsContainer=this._createEl("div",{class:"iti__flag-container"},a),a.appendChild(this.telInput),this.selectedFlag=this._createEl("div",{class:"iti__selected-flag",role:"combobox","aria-controls":"iti-".concat(this.id,"__country-listbox"),"aria-owns":"iti-".concat(this.id,"__country-listbox"),"aria-expanded":"false"},this.flagsContainer),this.selectedFlagInner=this._createEl("div",{class:"iti__flag"},this.selectedFlag),this.options.separateDialCode&&(this.selectedDialCode=this._createEl("div",{class:"iti__selected-dial-code"},this.selectedFlag)),this.options.allowDropdown&&(this.selectedFlag.setAttribute("tabindex","0"),this.dropdownArrow=this._createEl("div",{class:"iti__arrow"},this.selectedFlag),this.countryList=this._createEl("ul",{class:"iti__country-list iti__hide",id:"iti-".concat(this.id,"__country-listbox"),role:"listbox","aria-label":"List of countries"}),this.preferredCountries.length&&(this._appendListItems(this.preferredCountries,"iti__preferred",!0),this._createEl("li",{class:"iti__divider",role:"separator","aria-disabled":"true"},this.countryList)),this._appendListItems(this.countries,"iti__standard"),this.options.dropdownContainer?(this.dropdown=this._createEl("div",{class:"iti iti--container"}),this.dropdown.appendChild(this.countryList)):this.flagsContainer.appendChild(this.countryList)),this.options.hiddenInput){var s=this.options.hiddenInput,_=this.telInput.getAttribute("name");if(_){var m=_.lastIndexOf("[");m!==-1&&(s="".concat(_.substr(0,m),"[").concat(s,"]"))}this.hiddenInput=this._createEl("input",{type:"hidden",name:s}),a.appendChild(this.hiddenInput)}}},{key:"_appendListItems",value:function(i,a,s){for(var _="",m=0;m<i.length;m++){var P=i[m],j=s?"-preferred":"";_+="<li class='iti__country ".concat(a,"' tabIndex='-1' id='iti-").concat(this.id,"__item-").concat(P.iso2).concat(j,"' role='option' data-dial-code='").concat(P.dialCode,"' data-country-code='").concat(P.iso2,"' aria-selected='false'>"),_+="<div class='iti__flag-box'><div class='iti__flag iti__".concat(P.iso2,"'></div></div>"),_+="<span class='iti__country-name'>".concat(P.name,"</span>"),_+="<span class='iti__dial-code'>+".concat(P.dialCode,"</span>"),_+="</li>"}this.countryList.insertAdjacentHTML("beforeend",_)}},{key:"_setInitialState",value:function(){var i=this.telInput.getAttribute("value"),a=this.telInput.value,s=i&&i.charAt(0)==="+"&&(!a||a.charAt(0)!=="+"),_=s?i:a,m=this._getDialCode(_),P=this._isRegionlessNanp(_),j=this.options,q=j.initialCountry,gn=j.nationalMode,Rn=j.autoHideDialCode,dn=j.separateDialCode;m&&!P?this._updateFlagFromNumber(_):q!=="auto"&&(q?this._setFlag(q.toLowerCase()):m&&P?this._setFlag("us"):(this.defaultCountry=this.preferredCountries.length?this.preferredCountries[0].iso2:this.countries[0].iso2,_||this._setFlag(this.defaultCountry)),!_&&!gn&&!Rn&&!dn&&(this.telInput.value="+".concat(this.selectedCountryData.dialCode))),_&&this._updateValFromNumber(_)}},{key:"_initListeners",value:function(){this._initKeyListeners(),this.options.autoHideDialCode&&this._initBlurListeners(),this.options.allowDropdown&&this._initDropdownListeners(),this.hiddenInput&&this._initHiddenInputListener()}},{key:"_initHiddenInputListener",value:function(){var i=this;this._handleHiddenInputSubmit=function(){i.hiddenInput.value=i.getNumber()},this.telInput.form&&this.telInput.form.addEventListener("submit",this._handleHiddenInputSubmit)}},{key:"_getClosestLabel",value:function(){for(var i=this.telInput;i&&i.tagName!=="LABEL";)i=i.parentNode;return i}},{key:"_initDropdownListeners",value:function(){var i=this;this._handleLabelClick=function(s){i.countryList.classList.contains("iti__hide")?i.telInput.focus():s.preventDefault()};var a=this._getClosestLabel();a&&a.addEventListener("click",this._handleLabelClick),this._handleClickSelectedFlag=function(){i.countryList.classList.contains("iti__hide")&&!i.telInput.disabled&&!i.telInput.readOnly&&i._showDropdown()},this.selectedFlag.addEventListener("click",this._handleClickSelectedFlag),this._handleFlagsContainerKeydown=function(s){var _=i.countryList.classList.contains("iti__hide");_&&["ArrowUp","Up","ArrowDown","Down"," ","Enter"].indexOf(s.key)!==-1&&(s.preventDefault(),s.stopPropagation(),i._showDropdown()),s.key==="Tab"&&i._closeDropdown()},this.flagsContainer.addEventListener("keydown",this._handleFlagsContainerKeydown)}},{key:"_initRequests",value:function(){var i=this;this.options.utilsScript&&!window.intlTelInputUtils?window.intlTelInputGlobals.documentReady()?window.intlTelInputGlobals.loadUtils(this.options.utilsScript):window.addEventListener("load",function(){window.intlTelInputGlobals.loadUtils(i.options.utilsScript)}):this.resolveUtilsScriptPromise(),this.options.initialCountry==="auto"?this._loadAutoCountry():this.resolveAutoCountryPromise()}},{key:"_loadAutoCountry",value:function(){window.intlTelInputGlobals.autoCountry?this.handleAutoCountry():window.intlTelInputGlobals.startedLoadingAutoCountry||(window.intlTelInputGlobals.startedLoadingAutoCountry=!0,typeof this.options.geoIpLookup=="function"&&this.options.geoIpLookup(function(i){window.intlTelInputGlobals.autoCountry=i.toLowerCase(),setTimeout(function(){return M("handleAutoCountry")})},function(){return M("rejectAutoCountryPromise")}))}},{key:"_initKeyListeners",value:function(){var i=this;this._handleKeyupEvent=function(){i._updateFlagFromNumber(i.telInput.value)&&i._triggerCountryChange()},this.telInput.addEventListener("keyup",this._handleKeyupEvent),this._handleClipboardEvent=function(){setTimeout(i._handleKeyupEvent)},this.telInput.addEventListener("cut",this._handleClipboardEvent),this.telInput.addEventListener("paste",this._handleClipboardEvent)}},{key:"_cap",value:function(i){var a=this.telInput.getAttribute("maxlength");return a&&i.length>a?i.substr(0,a):i}},{key:"_initBlurListeners",value:function(){var i=this;this._handleSubmitOrBlurEvent=function(){i._removeEmptyDialCode()},this.telInput.form&&this.telInput.form.addEventListener("submit",this._handleSubmitOrBlurEvent),this.telInput.addEventListener("blur",this._handleSubmitOrBlurEvent)}},{key:"_removeEmptyDialCode",value:function(){if(this.telInput.value.charAt(0)==="+"){var i=this._getNumeric(this.telInput.value);(!i||this.selectedCountryData.dialCode===i)&&(this.telInput.value="")}}},{key:"_getNumeric",value:function(i){return i.replace(/\D/g,"")}},{key:"_trigger",value:function(i){var a=document.createEvent("Event");a.initEvent(i,!0,!0),this.telInput.dispatchEvent(a)}},{key:"_showDropdown",value:function(){this.countryList.classList.remove("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","true"),this._setDropdownPosition(),this.activeItem&&(this._highlightListItem(this.activeItem,!1),this._scrollTo(this.activeItem,!0)),this._bindDropdownListeners(),this.dropdownArrow.classList.add("iti__arrow--up"),this._trigger("open:countrydropdown")}},{key:"_toggleClass",value:function(i,a,s){s&&!i.classList.contains(a)?i.classList.add(a):!s&&i.classList.contains(a)&&i.classList.remove(a)}},{key:"_setDropdownPosition",value:function(){var i=this;if(this.options.dropdownContainer&&this.options.dropdownContainer.appendChild(this.dropdown),!this.isMobile){var a=this.telInput.getBoundingClientRect(),s=window.pageYOffset||document.documentElement.scrollTop,_=a.top+s,m=this.countryList.offsetHeight,P=_+this.telInput.offsetHeight+m<s+window.innerHeight,j=_-m>s;if(this._toggleClass(this.countryList,"iti__country-list--dropup",!P&&j),this.options.dropdownContainer){var q=!P&&j?0:this.telInput.offsetHeight;this.dropdown.style.top="".concat(_+q,"px"),this.dropdown.style.left="".concat(a.left+document.body.scrollLeft,"px"),this._handleWindowScroll=function(){return i._closeDropdown()},window.addEventListener("scroll",this._handleWindowScroll)}}}},{key:"_getClosestListItem",value:function(i){for(var a=i;a&&a!==this.countryList&&!a.classList.contains("iti__country");)a=a.parentNode;return a===this.countryList?null:a}},{key:"_bindDropdownListeners",value:function(){var i=this;this._handleMouseoverCountryList=function(m){var P=i._getClosestListItem(m.target);P&&i._highlightListItem(P,!1)},this.countryList.addEventListener("mouseover",this._handleMouseoverCountryList),this._handleClickCountryList=function(m){var P=i._getClosestListItem(m.target);P&&i._selectListItem(P)},this.countryList.addEventListener("click",this._handleClickCountryList);var a=!0;this._handleClickOffToClose=function(){a||i._closeDropdown(),a=!1},document.documentElement.addEventListener("click",this._handleClickOffToClose);var s="",_=null;this._handleKeydownOnDropdown=function(m){m.preventDefault(),m.key==="ArrowUp"||m.key==="Up"||m.key==="ArrowDown"||m.key==="Down"?i._handleUpDownKey(m.key):m.key==="Enter"?i._handleEnterKey():m.key==="Escape"?i._closeDropdown():/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(m.key)&&(_&&clearTimeout(_),s+=m.key.toLowerCase(),i._searchForCountry(s),_=setTimeout(function(){s=""},1e3))},document.addEventListener("keydown",this._handleKeydownOnDropdown)}},{key:"_handleUpDownKey",value:function(i){var a=i==="ArrowUp"||i==="Up"?this.highlightedItem.previousElementSibling:this.highlightedItem.nextElementSibling;a&&(a.classList.contains("iti__divider")&&(a=i==="ArrowUp"||i==="Up"?a.previousElementSibling:a.nextElementSibling),this._highlightListItem(a,!0))}},{key:"_handleEnterKey",value:function(){this.highlightedItem&&this._selectListItem(this.highlightedItem)}},{key:"_searchForCountry",value:function(i){for(var a=0;a<this.countries.length;a++)if(this._startsWith(this.countries[a].name,i)){var s=this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(this.countries[a].iso2));this._highlightListItem(s,!1),this._scrollTo(s,!0);break}}},{key:"_startsWith",value:function(i,a){return i.substr(0,a.length).toLowerCase()===a}},{key:"_updateValFromNumber",value:function(i){var a=i;if(this.options.formatOnDisplay&&window.intlTelInputUtils&&this.selectedCountryData){var s=!this.options.separateDialCode&&(this.options.nationalMode||a.charAt(0)!=="+"),_=intlTelInputUtils.numberFormat,m=_.NATIONAL,P=_.INTERNATIONAL,j=s?m:P;a=intlTelInputUtils.formatNumber(a,this.selectedCountryData.iso2,j)}a=this._beforeSetNumber(a),this.telInput.value=a}},{key:"_updateFlagFromNumber",value:function(i){var a=i,s=this.selectedCountryData.dialCode,_=s==="1";a&&this.options.nationalMode&&_&&a.charAt(0)!=="+"&&(a.charAt(0)!=="1"&&(a="1".concat(a)),a="+".concat(a)),this.options.separateDialCode&&s&&a.charAt(0)!=="+"&&(a="+".concat(s).concat(a));var m=this._getDialCode(a,!0),P=this._getNumeric(a),j=null;if(m){var q=this.countryCodes[this._getNumeric(m)],gn=q.indexOf(this.selectedCountryData.iso2)!==-1&&P.length<=m.length-1,Rn=s==="1"&&this._isRegionlessNanp(P);if(!Rn&&!gn){for(var dn=0;dn<q.length;dn++)if(q[dn]){j=q[dn];break}}}else a.charAt(0)==="+"&&P.length?j="":(!a||a==="+")&&(j=this.defaultCountry);return j!==null?this._setFlag(j):!1}},{key:"_isRegionlessNanp",value:function(i){var a=this._getNumeric(i);if(a.charAt(0)==="1"){var s=a.substr(1,3);return R.indexOf(s)!==-1}return!1}},{key:"_highlightListItem",value:function(i,a){var s=this.highlightedItem;s&&s.classList.remove("iti__highlight"),this.highlightedItem=i,this.highlightedItem.classList.add("iti__highlight"),a&&this.highlightedItem.focus()}},{key:"_getCountryData",value:function(i,a,s){for(var _=a?h:this.countries,m=0;m<_.length;m++)if(_[m].iso2===i)return _[m];if(s)return null;throw new Error("No country data for '".concat(i,"'"))}},{key:"_setFlag",value:function(i){var a=this.selectedCountryData.iso2?this.selectedCountryData:{};this.selectedCountryData=i?this._getCountryData(i,!1,!1):{},this.selectedCountryData.iso2&&(this.defaultCountry=this.selectedCountryData.iso2),this.selectedFlagInner.setAttribute("class","iti__flag iti__".concat(i));var s=i?"".concat(this.selectedCountryData.name,": +").concat(this.selectedCountryData.dialCode):"Unknown";if(this.selectedFlag.setAttribute("title",s),this.options.separateDialCode){var _=this.selectedCountryData.dialCode?"+".concat(this.selectedCountryData.dialCode):"";this.selectedDialCode.innerHTML=_;var m=this.selectedFlag.offsetWidth||this._getHiddenSelectedFlagWidth();this.telInput.style.paddingLeft="".concat(m+6,"px")}if(this._updatePlaceholder(),this.options.allowDropdown){var P=this.activeItem;if(P&&(P.classList.remove("iti__active"),P.setAttribute("aria-selected","false")),i){var j=this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(i,"-preferred"))||this.countryList.querySelector("#iti-".concat(this.id,"__item-").concat(i));j.setAttribute("aria-selected","true"),j.classList.add("iti__active"),this.activeItem=j,this.selectedFlag.setAttribute("aria-activedescendant",j.getAttribute("id"))}}return a.iso2!==i}},{key:"_getHiddenSelectedFlagWidth",value:function(){var i=this.telInput.parentNode.cloneNode();i.style.visibility="hidden",document.body.appendChild(i);var a=this.flagsContainer.cloneNode();i.appendChild(a);var s=this.selectedFlag.cloneNode(!0);a.appendChild(s);var _=s.offsetWidth;return i.parentNode.removeChild(i),_}},{key:"_updatePlaceholder",value:function(){var i=this.options.autoPlaceholder==="aggressive"||!this.hadInitialPlaceholder&&this.options.autoPlaceholder==="polite";if(window.intlTelInputUtils&&i){var a=intlTelInputUtils.numberType[this.options.placeholderNumberType],s=this.selectedCountryData.iso2?intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,this.options.nationalMode,a):"";s=this._beforeSetNumber(s),typeof this.options.customPlaceholder=="function"&&(s=this.options.customPlaceholder(s,this.selectedCountryData)),this.telInput.setAttribute("placeholder",s)}}},{key:"_selectListItem",value:function(i){var a=this._setFlag(i.getAttribute("data-country-code"));this._closeDropdown(),this._updateDialCode(i.getAttribute("data-dial-code"),!0),this.telInput.focus();var s=this.telInput.value.length;this.telInput.setSelectionRange(s,s),a&&this._triggerCountryChange()}},{key:"_closeDropdown",value:function(){this.countryList.classList.add("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","false"),this.dropdownArrow.classList.remove("iti__arrow--up"),document.removeEventListener("keydown",this._handleKeydownOnDropdown),document.documentElement.removeEventListener("click",this._handleClickOffToClose),this.countryList.removeEventListener("mouseover",this._handleMouseoverCountryList),this.countryList.removeEventListener("click",this._handleClickCountryList),this.options.dropdownContainer&&(this.isMobile||window.removeEventListener("scroll",this._handleWindowScroll),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._trigger("close:countrydropdown")}},{key:"_scrollTo",value:function(i,a){var s=this.countryList,_=window.pageYOffset||document.documentElement.scrollTop,m=s.offsetHeight,P=s.getBoundingClientRect().top+_,j=P+m,q=i.offsetHeight,gn=i.getBoundingClientRect().top+_,Rn=gn+q,dn=gn-P+s.scrollTop,Te=m/2-q/2;if(gn<P)a&&(dn-=Te),s.scrollTop=dn;else if(Rn>j){a&&(dn+=Te);var ct=m-q;s.scrollTop=dn-ct}}},{key:"_updateDialCode",value:function(i,a){var s=this.telInput.value,_="+".concat(i),m;if(s.charAt(0)==="+"){var P=this._getDialCode(s);P?m=s.replace(P,_):m=_}else{if(this.options.nationalMode||this.options.separateDialCode)return;if(s)m=_+s;else if(a||!this.options.autoHideDialCode)m=_;else return}this.telInput.value=m}},{key:"_getDialCode",value:function(i,a){var s="";if(i.charAt(0)==="+")for(var _="",m=0;m<i.length;m++){var P=i.charAt(m);if(!isNaN(parseInt(P,10))){if(_+=P,a)this.countryCodes[_]&&(s=i.substr(0,m+1));else if(this.dialCodes[_]){s=i.substr(0,m+1);break}if(_.length===this.countryCodeMaxLen)break}}return s}},{key:"_getFullNumber",value:function(){var i=this.telInput.value.trim(),a=this.selectedCountryData.dialCode,s,_=this._getNumeric(i);return this.options.separateDialCode&&i.charAt(0)!=="+"&&a&&_?s="+".concat(a):s="",s+i}},{key:"_beforeSetNumber",value:function(i){var a=i;if(this.options.separateDialCode){var s=this._getDialCode(a);if(s){s="+".concat(this.selectedCountryData.dialCode);var _=a[s.length]===" "||a[s.length]==="-"?s.length+1:s.length;a=a.substr(_)}}return this._cap(a)}},{key:"_triggerCountryChange",value:function(){this._trigger("countrychange")}},{key:"handleAutoCountry",value:function(){this.options.initialCountry==="auto"&&(this.defaultCountry=window.intlTelInputGlobals.autoCountry,this.telInput.value||this.setCountry(this.defaultCountry),this.resolveAutoCountryPromise())}},{key:"handleUtils",value:function(){window.intlTelInputUtils&&(this.telInput.value&&this._updateValFromNumber(this.telInput.value),this._updatePlaceholder()),this.resolveUtilsScriptPromise()}},{key:"destroy",value:function(){var i=this.telInput.form;if(this.options.allowDropdown){this._closeDropdown(),this.selectedFlag.removeEventListener("click",this._handleClickSelectedFlag),this.flagsContainer.removeEventListener("keydown",this._handleFlagsContainerKeydown);var a=this._getClosestLabel();a&&a.removeEventListener("click",this._handleLabelClick)}this.hiddenInput&&i&&i.removeEventListener("submit",this._handleHiddenInputSubmit),this.options.autoHideDialCode&&(i&&i.removeEventListener("submit",this._handleSubmitOrBlurEvent),this.telInput.removeEventListener("blur",this._handleSubmitOrBlurEvent)),this.telInput.removeEventListener("keyup",this._handleKeyupEvent),this.telInput.removeEventListener("cut",this._handleClipboardEvent),this.telInput.removeEventListener("paste",this._handleClipboardEvent),this.telInput.removeAttribute("data-intl-tel-input-id");var s=this.telInput.parentNode;s.parentNode.insertBefore(this.telInput,s),s.parentNode.removeChild(s),delete window.intlTelInputGlobals.instances[this.id]}},{key:"getExtension",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2):""}},{key:"getNumber",value:function(i){if(window.intlTelInputUtils){var a=this.selectedCountryData.iso2;return intlTelInputUtils.formatNumber(this._getFullNumber(),a,i)}return""}},{key:"getNumberType",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2):-99}},{key:"getSelectedCountryData",value:function(){return this.selectedCountryData}},{key:"getValidationError",value:function(){if(window.intlTelInputUtils){var i=this.selectedCountryData.iso2;return intlTelInputUtils.getValidationError(this._getFullNumber(),i)}return-99}},{key:"isValidNumber",value:function(){var i=this._getFullNumber().trim(),a=this.options.nationalMode?this.selectedCountryData.iso2:"";return window.intlTelInputUtils?intlTelInputUtils.isValidNumber(i,a):null}},{key:"setCountry",value:function(i){var a=i.toLowerCase();this.selectedFlagInner.classList.contains("iti__".concat(a))||(this._setFlag(a),this._updateDialCode(this.selectedCountryData.dialCode,!1),this._triggerCountryChange())}},{key:"setNumber",value:function(i){var a=this._updateFlagFromNumber(i);this._updateValFromNumber(i),a&&this._triggerCountryChange()}},{key:"setPlaceholderNumberType",value:function(i){this.options.placeholderNumberType=i,this._updatePlaceholder()}}]),F}();T.getCountryData=function(){return h};var rn=function(p,i,a){var s=document.createElement("script");s.onload=function(){M("handleUtils"),i&&i()},s.onerror=function(){M("rejectUtilsScriptPromise"),a&&a()},s.className="iti-load-utils",s.async=!0,s.src=p,document.body.appendChild(s)};return T.loadUtils=function(F){if(!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript){if(window.intlTelInputGlobals.startedLoadingUtilsScript=!0,typeof Promise<"u")return new Promise(function(p,i){return rn(F,p,i)});rn(F)}return null},T.defaults=v,T.version="17.0.21",function(F,p){var i=new on(F,p);return i._init(),F.setAttribute("data-intl-tel-input-id",i.id),window.intlTelInputGlobals.instances[i.id]=i,i}}()})})(nt),function(r){r.exports=Qn}(Ze);var et=Je(Xn),tt=`.iti {
  position: relative;
  display: inline-block; }
  .iti * {
    box-sizing: border-box;
    -moz-box-sizing: border-box; }
  .iti__hide {
    display: none; }
  .iti__v-hide {
    visibility: hidden; }
  .iti input, .iti input[type=text], .iti input[type=tel] {
    margin-top: 0 !important;
    margin-bottom: 0 !important; }
  .iti input, .iti input[type=text], .iti input[type=tel] {
    position: relative;
    z-index: 0;
    padding-right: 36px;
    margin-right: 0; }
  .iti__flag-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 1px; }
  .iti__selected-flag {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 6px 0 8px; }
  .iti__arrow {
    margin-left: 6px;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #555; }
  .iti__arrow--up {
      border-top: none;
      border-bottom: 4px solid #555; }
  .iti__country-list {
    position: absolute;
    z-index: 2;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 0 0 -1px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
    border: 1px solid #CCC;
    white-space: nowrap;
    max-height: 200px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; }
  .iti__country-list--dropup {
      bottom: 100%;
      margin-bottom: -1px; }
  @media (max-width: 500px) {
      .iti__country-list {
        white-space: normal; } }
  .iti__flag-box {
    display: inline-block;
    width: 20px; }
  .iti__divider {
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #CCC; }
  .iti__country {
    padding: 5px 10px;
    outline: none; }
  .iti__dial-code {
    color: #999; }
  .iti__country.iti__highlight {
    background-color: rgba(0, 0, 0, 0.05); }
  .iti__flag-box, .iti__country-name, .iti__dial-code {
    vertical-align: middle; }
  .iti__flag-box, .iti__country-name {
    margin-right: 6px; }
  .iti--allow-dropdown input, .iti--allow-dropdown input[type=text], .iti--allow-dropdown input[type=tel], .iti--separate-dial-code input, .iti--separate-dial-code input[type=text], .iti--separate-dial-code input[type=tel] {
    padding-right: 6px;
    padding-left: 52px;
    margin-left: 0; }
  .iti--allow-dropdown .iti__flag-container, .iti--separate-dial-code .iti__flag-container {
    right: auto;
    left: 0; }
  .iti--allow-dropdown .iti__flag-container:hover {
    cursor: pointer; }
  .iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag {
      background-color: rgba(0, 0, 0, 0.05); }
  .iti--allow-dropdown input[disabled] + .iti__flag-container:hover,
  .iti--allow-dropdown input[readonly] + .iti__flag-container:hover {
    cursor: default; }
  .iti--allow-dropdown input[disabled] + .iti__flag-container:hover .iti__selected-flag,
    .iti--allow-dropdown input[readonly] + .iti__flag-container:hover .iti__selected-flag {
      background-color: transparent; }
  .iti--separate-dial-code .iti__selected-flag {
    background-color: rgba(0, 0, 0, 0.05); }
  .iti--separate-dial-code .iti__selected-dial-code {
    margin-left: 6px; }
  .iti--container {
    position: absolute;
    top: -1000px;
    left: -1000px;
    z-index: 1060;
    padding: 1px; }
  .iti--container:hover {
      cursor: pointer; }
  .iti-mobile .iti--container {
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px;
  position: fixed; }
  .iti-mobile .iti__country-list {
  max-height: 100%;
  width: 100%; }
  .iti-mobile .iti__country {
  padding: 10px 10px;
  line-height: 1.5em; }
  .iti__flag {
  width: 20px; }
  .iti__flag.iti__be {
    width: 18px; }
  .iti__flag.iti__ch {
    width: 15px; }
  .iti__flag.iti__mc {
    width: 19px; }
  .iti__flag.iti__ne {
    width: 18px; }
  .iti__flag.iti__np {
    width: 13px; }
  .iti__flag.iti__va {
    width: 15px; }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .iti__flag {
      background-size: 5652px 15px; } }
  .iti__flag.iti__ac {
    height: 10px;
    background-position: 0px 0px; }
  .iti__flag.iti__ad {
    height: 14px;
    background-position: -22px 0px; }
  .iti__flag.iti__ae {
    height: 10px;
    background-position: -44px 0px; }
  .iti__flag.iti__af {
    height: 14px;
    background-position: -66px 0px; }
  .iti__flag.iti__ag {
    height: 14px;
    background-position: -88px 0px; }
  .iti__flag.iti__ai {
    height: 10px;
    background-position: -110px 0px; }
  .iti__flag.iti__al {
    height: 15px;
    background-position: -132px 0px; }
  .iti__flag.iti__am {
    height: 10px;
    background-position: -154px 0px; }
  .iti__flag.iti__ao {
    height: 14px;
    background-position: -176px 0px; }
  .iti__flag.iti__aq {
    height: 14px;
    background-position: -198px 0px; }
  .iti__flag.iti__ar {
    height: 13px;
    background-position: -220px 0px; }
  .iti__flag.iti__as {
    height: 10px;
    background-position: -242px 0px; }
  .iti__flag.iti__at {
    height: 14px;
    background-position: -264px 0px; }
  .iti__flag.iti__au {
    height: 10px;
    background-position: -286px 0px; }
  .iti__flag.iti__aw {
    height: 14px;
    background-position: -308px 0px; }
  .iti__flag.iti__ax {
    height: 13px;
    background-position: -330px 0px; }
  .iti__flag.iti__az {
    height: 10px;
    background-position: -352px 0px; }
  .iti__flag.iti__ba {
    height: 10px;
    background-position: -374px 0px; }
  .iti__flag.iti__bb {
    height: 14px;
    background-position: -396px 0px; }
  .iti__flag.iti__bd {
    height: 12px;
    background-position: -418px 0px; }
  .iti__flag.iti__be {
    height: 15px;
    background-position: -440px 0px; }
  .iti__flag.iti__bf {
    height: 14px;
    background-position: -460px 0px; }
  .iti__flag.iti__bg {
    height: 12px;
    background-position: -482px 0px; }
  .iti__flag.iti__bh {
    height: 12px;
    background-position: -504px 0px; }
  .iti__flag.iti__bi {
    height: 12px;
    background-position: -526px 0px; }
  .iti__flag.iti__bj {
    height: 14px;
    background-position: -548px 0px; }
  .iti__flag.iti__bl {
    height: 14px;
    background-position: -570px 0px; }
  .iti__flag.iti__bm {
    height: 10px;
    background-position: -592px 0px; }
  .iti__flag.iti__bn {
    height: 10px;
    background-position: -614px 0px; }
  .iti__flag.iti__bo {
    height: 14px;
    background-position: -636px 0px; }
  .iti__flag.iti__bq {
    height: 14px;
    background-position: -658px 0px; }
  .iti__flag.iti__br {
    height: 14px;
    background-position: -680px 0px; }
  .iti__flag.iti__bs {
    height: 10px;
    background-position: -702px 0px; }
  .iti__flag.iti__bt {
    height: 14px;
    background-position: -724px 0px; }
  .iti__flag.iti__bv {
    height: 15px;
    background-position: -746px 0px; }
  .iti__flag.iti__bw {
    height: 14px;
    background-position: -768px 0px; }
  .iti__flag.iti__by {
    height: 10px;
    background-position: -790px 0px; }
  .iti__flag.iti__bz {
    height: 14px;
    background-position: -812px 0px; }
  .iti__flag.iti__ca {
    height: 10px;
    background-position: -834px 0px; }
  .iti__flag.iti__cc {
    height: 10px;
    background-position: -856px 0px; }
  .iti__flag.iti__cd {
    height: 15px;
    background-position: -878px 0px; }
  .iti__flag.iti__cf {
    height: 14px;
    background-position: -900px 0px; }
  .iti__flag.iti__cg {
    height: 14px;
    background-position: -922px 0px; }
  .iti__flag.iti__ch {
    height: 15px;
    background-position: -944px 0px; }
  .iti__flag.iti__ci {
    height: 14px;
    background-position: -961px 0px; }
  .iti__flag.iti__ck {
    height: 10px;
    background-position: -983px 0px; }
  .iti__flag.iti__cl {
    height: 14px;
    background-position: -1005px 0px; }
  .iti__flag.iti__cm {
    height: 14px;
    background-position: -1027px 0px; }
  .iti__flag.iti__cn {
    height: 14px;
    background-position: -1049px 0px; }
  .iti__flag.iti__co {
    height: 14px;
    background-position: -1071px 0px; }
  .iti__flag.iti__cp {
    height: 14px;
    background-position: -1093px 0px; }
  .iti__flag.iti__cr {
    height: 12px;
    background-position: -1115px 0px; }
  .iti__flag.iti__cu {
    height: 10px;
    background-position: -1137px 0px; }
  .iti__flag.iti__cv {
    height: 12px;
    background-position: -1159px 0px; }
  .iti__flag.iti__cw {
    height: 14px;
    background-position: -1181px 0px; }
  .iti__flag.iti__cx {
    height: 10px;
    background-position: -1203px 0px; }
  .iti__flag.iti__cy {
    height: 14px;
    background-position: -1225px 0px; }
  .iti__flag.iti__cz {
    height: 14px;
    background-position: -1247px 0px; }
  .iti__flag.iti__de {
    height: 12px;
    background-position: -1269px 0px; }
  .iti__flag.iti__dg {
    height: 10px;
    background-position: -1291px 0px; }
  .iti__flag.iti__dj {
    height: 14px;
    background-position: -1313px 0px; }
  .iti__flag.iti__dk {
    height: 15px;
    background-position: -1335px 0px; }
  .iti__flag.iti__dm {
    height: 10px;
    background-position: -1357px 0px; }
  .iti__flag.iti__do {
    height: 14px;
    background-position: -1379px 0px; }
  .iti__flag.iti__dz {
    height: 14px;
    background-position: -1401px 0px; }
  .iti__flag.iti__ea {
    height: 14px;
    background-position: -1423px 0px; }
  .iti__flag.iti__ec {
    height: 14px;
    background-position: -1445px 0px; }
  .iti__flag.iti__ee {
    height: 13px;
    background-position: -1467px 0px; }
  .iti__flag.iti__eg {
    height: 14px;
    background-position: -1489px 0px; }
  .iti__flag.iti__eh {
    height: 10px;
    background-position: -1511px 0px; }
  .iti__flag.iti__er {
    height: 10px;
    background-position: -1533px 0px; }
  .iti__flag.iti__es {
    height: 14px;
    background-position: -1555px 0px; }
  .iti__flag.iti__et {
    height: 10px;
    background-position: -1577px 0px; }
  .iti__flag.iti__eu {
    height: 14px;
    background-position: -1599px 0px; }
  .iti__flag.iti__fi {
    height: 12px;
    background-position: -1621px 0px; }
  .iti__flag.iti__fj {
    height: 10px;
    background-position: -1643px 0px; }
  .iti__flag.iti__fk {
    height: 10px;
    background-position: -1665px 0px; }
  .iti__flag.iti__fm {
    height: 11px;
    background-position: -1687px 0px; }
  .iti__flag.iti__fo {
    height: 15px;
    background-position: -1709px 0px; }
  .iti__flag.iti__fr {
    height: 14px;
    background-position: -1731px 0px; }
  .iti__flag.iti__ga {
    height: 15px;
    background-position: -1753px 0px; }
  .iti__flag.iti__gb {
    height: 10px;
    background-position: -1775px 0px; }
  .iti__flag.iti__gd {
    height: 12px;
    background-position: -1797px 0px; }
  .iti__flag.iti__ge {
    height: 14px;
    background-position: -1819px 0px; }
  .iti__flag.iti__gf {
    height: 14px;
    background-position: -1841px 0px; }
  .iti__flag.iti__gg {
    height: 14px;
    background-position: -1863px 0px; }
  .iti__flag.iti__gh {
    height: 14px;
    background-position: -1885px 0px; }
  .iti__flag.iti__gi {
    height: 10px;
    background-position: -1907px 0px; }
  .iti__flag.iti__gl {
    height: 14px;
    background-position: -1929px 0px; }
  .iti__flag.iti__gm {
    height: 14px;
    background-position: -1951px 0px; }
  .iti__flag.iti__gn {
    height: 14px;
    background-position: -1973px 0px; }
  .iti__flag.iti__gp {
    height: 14px;
    background-position: -1995px 0px; }
  .iti__flag.iti__gq {
    height: 14px;
    background-position: -2017px 0px; }
  .iti__flag.iti__gr {
    height: 14px;
    background-position: -2039px 0px; }
  .iti__flag.iti__gs {
    height: 10px;
    background-position: -2061px 0px; }
  .iti__flag.iti__gt {
    height: 13px;
    background-position: -2083px 0px; }
  .iti__flag.iti__gu {
    height: 11px;
    background-position: -2105px 0px; }
  .iti__flag.iti__gw {
    height: 10px;
    background-position: -2127px 0px; }
  .iti__flag.iti__gy {
    height: 12px;
    background-position: -2149px 0px; }
  .iti__flag.iti__hk {
    height: 14px;
    background-position: -2171px 0px; }
  .iti__flag.iti__hm {
    height: 10px;
    background-position: -2193px 0px; }
  .iti__flag.iti__hn {
    height: 10px;
    background-position: -2215px 0px; }
  .iti__flag.iti__hr {
    height: 10px;
    background-position: -2237px 0px; }
  .iti__flag.iti__ht {
    height: 12px;
    background-position: -2259px 0px; }
  .iti__flag.iti__hu {
    height: 10px;
    background-position: -2281px 0px; }
  .iti__flag.iti__ic {
    height: 14px;
    background-position: -2303px 0px; }
  .iti__flag.iti__id {
    height: 14px;
    background-position: -2325px 0px; }
  .iti__flag.iti__ie {
    height: 10px;
    background-position: -2347px 0px; }
  .iti__flag.iti__il {
    height: 15px;
    background-position: -2369px 0px; }
  .iti__flag.iti__im {
    height: 10px;
    background-position: -2391px 0px; }
  .iti__flag.iti__in {
    height: 14px;
    background-position: -2413px 0px; }
  .iti__flag.iti__io {
    height: 10px;
    background-position: -2435px 0px; }
  .iti__flag.iti__iq {
    height: 14px;
    background-position: -2457px 0px; }
  .iti__flag.iti__ir {
    height: 12px;
    background-position: -2479px 0px; }
  .iti__flag.iti__is {
    height: 15px;
    background-position: -2501px 0px; }
  .iti__flag.iti__it {
    height: 14px;
    background-position: -2523px 0px; }
  .iti__flag.iti__je {
    height: 12px;
    background-position: -2545px 0px; }
  .iti__flag.iti__jm {
    height: 10px;
    background-position: -2567px 0px; }
  .iti__flag.iti__jo {
    height: 10px;
    background-position: -2589px 0px; }
  .iti__flag.iti__jp {
    height: 14px;
    background-position: -2611px 0px; }
  .iti__flag.iti__ke {
    height: 14px;
    background-position: -2633px 0px; }
  .iti__flag.iti__kg {
    height: 12px;
    background-position: -2655px 0px; }
  .iti__flag.iti__kh {
    height: 13px;
    background-position: -2677px 0px; }
  .iti__flag.iti__ki {
    height: 10px;
    background-position: -2699px 0px; }
  .iti__flag.iti__km {
    height: 12px;
    background-position: -2721px 0px; }
  .iti__flag.iti__kn {
    height: 14px;
    background-position: -2743px 0px; }
  .iti__flag.iti__kp {
    height: 10px;
    background-position: -2765px 0px; }
  .iti__flag.iti__kr {
    height: 14px;
    background-position: -2787px 0px; }
  .iti__flag.iti__kw {
    height: 10px;
    background-position: -2809px 0px; }
  .iti__flag.iti__ky {
    height: 10px;
    background-position: -2831px 0px; }
  .iti__flag.iti__kz {
    height: 10px;
    background-position: -2853px 0px; }
  .iti__flag.iti__la {
    height: 14px;
    background-position: -2875px 0px; }
  .iti__flag.iti__lb {
    height: 14px;
    background-position: -2897px 0px; }
  .iti__flag.iti__lc {
    height: 10px;
    background-position: -2919px 0px; }
  .iti__flag.iti__li {
    height: 12px;
    background-position: -2941px 0px; }
  .iti__flag.iti__lk {
    height: 10px;
    background-position: -2963px 0px; }
  .iti__flag.iti__lr {
    height: 11px;
    background-position: -2985px 0px; }
  .iti__flag.iti__ls {
    height: 14px;
    background-position: -3007px 0px; }
  .iti__flag.iti__lt {
    height: 12px;
    background-position: -3029px 0px; }
  .iti__flag.iti__lu {
    height: 12px;
    background-position: -3051px 0px; }
  .iti__flag.iti__lv {
    height: 10px;
    background-position: -3073px 0px; }
  .iti__flag.iti__ly {
    height: 10px;
    background-position: -3095px 0px; }
  .iti__flag.iti__ma {
    height: 14px;
    background-position: -3117px 0px; }
  .iti__flag.iti__mc {
    height: 15px;
    background-position: -3139px 0px; }
  .iti__flag.iti__md {
    height: 10px;
    background-position: -3160px 0px; }
  .iti__flag.iti__me {
    height: 10px;
    background-position: -3182px 0px; }
  .iti__flag.iti__mf {
    height: 14px;
    background-position: -3204px 0px; }
  .iti__flag.iti__mg {
    height: 14px;
    background-position: -3226px 0px; }
  .iti__flag.iti__mh {
    height: 11px;
    background-position: -3248px 0px; }
  .iti__flag.iti__mk {
    height: 10px;
    background-position: -3270px 0px; }
  .iti__flag.iti__ml {
    height: 14px;
    background-position: -3292px 0px; }
  .iti__flag.iti__mm {
    height: 14px;
    background-position: -3314px 0px; }
  .iti__flag.iti__mn {
    height: 10px;
    background-position: -3336px 0px; }
  .iti__flag.iti__mo {
    height: 14px;
    background-position: -3358px 0px; }
  .iti__flag.iti__mp {
    height: 10px;
    background-position: -3380px 0px; }
  .iti__flag.iti__mq {
    height: 14px;
    background-position: -3402px 0px; }
  .iti__flag.iti__mr {
    height: 14px;
    background-position: -3424px 0px; }
  .iti__flag.iti__ms {
    height: 10px;
    background-position: -3446px 0px; }
  .iti__flag.iti__mt {
    height: 14px;
    background-position: -3468px 0px; }
  .iti__flag.iti__mu {
    height: 14px;
    background-position: -3490px 0px; }
  .iti__flag.iti__mv {
    height: 14px;
    background-position: -3512px 0px; }
  .iti__flag.iti__mw {
    height: 14px;
    background-position: -3534px 0px; }
  .iti__flag.iti__mx {
    height: 12px;
    background-position: -3556px 0px; }
  .iti__flag.iti__my {
    height: 10px;
    background-position: -3578px 0px; }
  .iti__flag.iti__mz {
    height: 14px;
    background-position: -3600px 0px; }
  .iti__flag.iti__na {
    height: 14px;
    background-position: -3622px 0px; }
  .iti__flag.iti__nc {
    height: 10px;
    background-position: -3644px 0px; }
  .iti__flag.iti__ne {
    height: 15px;
    background-position: -3666px 0px; }
  .iti__flag.iti__nf {
    height: 10px;
    background-position: -3686px 0px; }
  .iti__flag.iti__ng {
    height: 10px;
    background-position: -3708px 0px; }
  .iti__flag.iti__ni {
    height: 12px;
    background-position: -3730px 0px; }
  .iti__flag.iti__nl {
    height: 14px;
    background-position: -3752px 0px; }
  .iti__flag.iti__no {
    height: 15px;
    background-position: -3774px 0px; }
  .iti__flag.iti__np {
    height: 15px;
    background-position: -3796px 0px; }
  .iti__flag.iti__nr {
    height: 10px;
    background-position: -3811px 0px; }
  .iti__flag.iti__nu {
    height: 10px;
    background-position: -3833px 0px; }
  .iti__flag.iti__nz {
    height: 10px;
    background-position: -3855px 0px; }
  .iti__flag.iti__om {
    height: 10px;
    background-position: -3877px 0px; }
  .iti__flag.iti__pa {
    height: 14px;
    background-position: -3899px 0px; }
  .iti__flag.iti__pe {
    height: 14px;
    background-position: -3921px 0px; }
  .iti__flag.iti__pf {
    height: 14px;
    background-position: -3943px 0px; }
  .iti__flag.iti__pg {
    height: 15px;
    background-position: -3965px 0px; }
  .iti__flag.iti__ph {
    height: 10px;
    background-position: -3987px 0px; }
  .iti__flag.iti__pk {
    height: 14px;
    background-position: -4009px 0px; }
  .iti__flag.iti__pl {
    height: 13px;
    background-position: -4031px 0px; }
  .iti__flag.iti__pm {
    height: 14px;
    background-position: -4053px 0px; }
  .iti__flag.iti__pn {
    height: 10px;
    background-position: -4075px 0px; }
  .iti__flag.iti__pr {
    height: 14px;
    background-position: -4097px 0px; }
  .iti__flag.iti__ps {
    height: 10px;
    background-position: -4119px 0px; }
  .iti__flag.iti__pt {
    height: 14px;
    background-position: -4141px 0px; }
  .iti__flag.iti__pw {
    height: 13px;
    background-position: -4163px 0px; }
  .iti__flag.iti__py {
    height: 11px;
    background-position: -4185px 0px; }
  .iti__flag.iti__qa {
    height: 8px;
    background-position: -4207px 0px; }
  .iti__flag.iti__re {
    height: 14px;
    background-position: -4229px 0px; }
  .iti__flag.iti__ro {
    height: 14px;
    background-position: -4251px 0px; }
  .iti__flag.iti__rs {
    height: 14px;
    background-position: -4273px 0px; }
  .iti__flag.iti__ru {
    height: 14px;
    background-position: -4295px 0px; }
  .iti__flag.iti__rw {
    height: 14px;
    background-position: -4317px 0px; }
  .iti__flag.iti__sa {
    height: 14px;
    background-position: -4339px 0px; }
  .iti__flag.iti__sb {
    height: 10px;
    background-position: -4361px 0px; }
  .iti__flag.iti__sc {
    height: 10px;
    background-position: -4383px 0px; }
  .iti__flag.iti__sd {
    height: 10px;
    background-position: -4405px 0px; }
  .iti__flag.iti__se {
    height: 13px;
    background-position: -4427px 0px; }
  .iti__flag.iti__sg {
    height: 14px;
    background-position: -4449px 0px; }
  .iti__flag.iti__sh {
    height: 10px;
    background-position: -4471px 0px; }
  .iti__flag.iti__si {
    height: 10px;
    background-position: -4493px 0px; }
  .iti__flag.iti__sj {
    height: 15px;
    background-position: -4515px 0px; }
  .iti__flag.iti__sk {
    height: 14px;
    background-position: -4537px 0px; }
  .iti__flag.iti__sl {
    height: 14px;
    background-position: -4559px 0px; }
  .iti__flag.iti__sm {
    height: 15px;
    background-position: -4581px 0px; }
  .iti__flag.iti__sn {
    height: 14px;
    background-position: -4603px 0px; }
  .iti__flag.iti__so {
    height: 14px;
    background-position: -4625px 0px; }
  .iti__flag.iti__sr {
    height: 14px;
    background-position: -4647px 0px; }
  .iti__flag.iti__ss {
    height: 10px;
    background-position: -4669px 0px; }
  .iti__flag.iti__st {
    height: 10px;
    background-position: -4691px 0px; }
  .iti__flag.iti__sv {
    height: 12px;
    background-position: -4713px 0px; }
  .iti__flag.iti__sx {
    height: 14px;
    background-position: -4735px 0px; }
  .iti__flag.iti__sy {
    height: 14px;
    background-position: -4757px 0px; }
  .iti__flag.iti__sz {
    height: 14px;
    background-position: -4779px 0px; }
  .iti__flag.iti__ta {
    height: 10px;
    background-position: -4801px 0px; }
  .iti__flag.iti__tc {
    height: 10px;
    background-position: -4823px 0px; }
  .iti__flag.iti__td {
    height: 14px;
    background-position: -4845px 0px; }
  .iti__flag.iti__tf {
    height: 14px;
    background-position: -4867px 0px; }
  .iti__flag.iti__tg {
    height: 13px;
    background-position: -4889px 0px; }
  .iti__flag.iti__th {
    height: 14px;
    background-position: -4911px 0px; }
  .iti__flag.iti__tj {
    height: 10px;
    background-position: -4933px 0px; }
  .iti__flag.iti__tk {
    height: 10px;
    background-position: -4955px 0px; }
  .iti__flag.iti__tl {
    height: 10px;
    background-position: -4977px 0px; }
  .iti__flag.iti__tm {
    height: 14px;
    background-position: -4999px 0px; }
  .iti__flag.iti__tn {
    height: 14px;
    background-position: -5021px 0px; }
  .iti__flag.iti__to {
    height: 10px;
    background-position: -5043px 0px; }
  .iti__flag.iti__tr {
    height: 14px;
    background-position: -5065px 0px; }
  .iti__flag.iti__tt {
    height: 12px;
    background-position: -5087px 0px; }
  .iti__flag.iti__tv {
    height: 10px;
    background-position: -5109px 0px; }
  .iti__flag.iti__tw {
    height: 14px;
    background-position: -5131px 0px; }
  .iti__flag.iti__tz {
    height: 14px;
    background-position: -5153px 0px; }
  .iti__flag.iti__ua {
    height: 14px;
    background-position: -5175px 0px; }
  .iti__flag.iti__ug {
    height: 14px;
    background-position: -5197px 0px; }
  .iti__flag.iti__um {
    height: 11px;
    background-position: -5219px 0px; }
  .iti__flag.iti__un {
    height: 14px;
    background-position: -5241px 0px; }
  .iti__flag.iti__us {
    height: 11px;
    background-position: -5263px 0px; }
  .iti__flag.iti__uy {
    height: 14px;
    background-position: -5285px 0px; }
  .iti__flag.iti__uz {
    height: 10px;
    background-position: -5307px 0px; }
  .iti__flag.iti__va {
    height: 15px;
    background-position: -5329px 0px; }
  .iti__flag.iti__vc {
    height: 14px;
    background-position: -5346px 0px; }
  .iti__flag.iti__ve {
    height: 14px;
    background-position: -5368px 0px; }
  .iti__flag.iti__vg {
    height: 10px;
    background-position: -5390px 0px; }
  .iti__flag.iti__vi {
    height: 14px;
    background-position: -5412px 0px; }
  .iti__flag.iti__vn {
    height: 14px;
    background-position: -5434px 0px; }
  .iti__flag.iti__vu {
    height: 12px;
    background-position: -5456px 0px; }
  .iti__flag.iti__wf {
    height: 14px;
    background-position: -5478px 0px; }
  .iti__flag.iti__ws {
    height: 10px;
    background-position: -5500px 0px; }
  .iti__flag.iti__xk {
    height: 15px;
    background-position: -5522px 0px; }
  .iti__flag.iti__ye {
    height: 14px;
    background-position: -5544px 0px; }
  .iti__flag.iti__yt {
    height: 14px;
    background-position: -5566px 0px; }
  .iti__flag.iti__za {
    height: 14px;
    background-position: -5588px 0px; }
  .iti__flag.iti__zm {
    height: 14px;
    background-position: -5610px 0px; }
  .iti__flag.iti__zw {
    height: 10px;
    background-position: -5632px 0px; }
  .iti__flag {
  height: 15px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url("../img/flags.png");
  background-repeat: no-repeat;
  background-color: #DBDBDB;
  background-position: 20px 0; }
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .iti__flag {
      background-image: url("../img/flags@2x.png"); } }
  .iti__flag.iti__np {
  background-color: transparent; }
`;function it(r){var o=r.defaultCountry,h=r.autoComplete,g=r.autofocus,f=r.name,c=r.onInputBlur,u=r.onInputFocus,k=r.onChange,T=r.hasError,I=r.value;function v(){u!==void 0&&u({id:f,value:I})}function R(){c!==void 0&&c({id:f,value:I})}var y=x.useState(),M=y[0],on=y[1],rn=x.useRef();x.useEffect(function(){rn.current=k},[k]);var F=x.useCallback(function(a){rn.current!==void 0&&rn.current({id:f,value:a})},[rn]),p=x.useCallback(function(a){rn.current!==void 0&&M!==void 0&&rn.current({id:f,value:a.target.value})},[rn]),i=x.useRef(null);return x.useEffect(function(){i.current!==null&&i.current.value!==I&&M&&M.setNumber(I)},[M,I]),x.useEffect(function(){if(i.current!==null&&i.current.dataset["intl-tel-input-id"]===void 0){var a=et(i.current,{initialCountry:o,nationalMode:!1,preferredCountries:o?[o]:[]});if(I.length>0)a.setNumber(I);else if(o===void 0)a.setCountry("");else{var s=a.getSelectedCountryData();F("+"+s.dialCode)}var _=a;if(_.isMobile){var m=document.getElementById(e.ST_ROOT_ID);if(m!=null&&m.shadowRoot){var P=m.shadowRoot.querySelector("[data-supertokens~=container]");if(!P)throw new Error("Should never happen: container element not found");P.classList.add("iti-mobile"),_.options.dropdownContainer=P}}i.current.addEventListener("countrychange",p),on(a)}},[]),t.jsxs("div",e.__assign({"data-supertokens":"inputContainer"},{children:[t.jsxs("style",e.__assign({type:"text/css"},{children:[tt,`
                    .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/img/flags.png");}

                    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
                        .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/img/flags@2x.png");}
                    }
                `]})),t.jsxs("div",e.__assign({"data-supertokens":"phoneInputWrapper inputWrapper ".concat(T?"inputError":"")},{children:[t.jsx("input",{type:"tel","data-supertokens":"input",name:f+"_text",autoFocus:g,autoComplete:h,onChange:function(a){a.target.value.trim().length>0&&!a.target.value.trim().startsWith("+")&&(a.target.value="+"+a.target.value.trim()),F(a.target.value)},onFocus:v,onBlur:R,ref:i}),T===!0&&t.jsx("div",e.__assign({"data-supertokens":"inputAdornment inputAdornmentError"},{children:t.jsx(tn.ErrorIcon,{})}))]}))]}))}var fe=function(r){return function(o){return t.jsx(it,e.__assign({},r,o))}},xe=d.withOverride("PasswordlessEmailOrPhoneForm",function(o){var h=this,g=x.useState(!1),f=g[0],c=g[1],u=d.useUserContext();x.useEffect(function(){V.preloadPhoneNumberUtils()},[]);var k=x.useMemo(function(){return f?fe({defaultCountry:o.config.signInUpFeature.defaultCountry}):void 0},[o.config.signInUpFeature.defaultCountry,f]);return t.jsx(tn.FormBase,{clearError:o.clearError,onError:o.onError,formFields:[{id:"emailOrPhone",label:"PWLESS_SIGN_IN_UP_EMAIL_OR_PHONE_LABEL",inputComponent:k,optional:!1,autofocus:!0,placeholder:"",validate:V.defaultValidate}],buttonLabel:"PWLESS_SIGN_IN_UP_CONTINUE_BUTTON",onSuccess:o.onSuccess,callAPI:function(T,I){return e.__awaiter(h,void 0,void 0,function(){var v,R,M,y,M,on,rn,F,p;return e.__generator(this,function(i){switch(i.label){case 0:if(v=(p=T.find(function(a){return a.id==="emailOrPhone"}))===null||p===void 0?void 0:p.value,v===void 0)throw new Y.default("GENERAL_ERROR_EMAIL_OR_PHONE_UNDEFINED");return[4,V.defaultEmailValidator(v)];case 1:return i.sent()!==void 0?[3,6]:[4,o.config.validateEmailAddress(v)];case 2:return R=i.sent(),R!==void 0?[3,4]:[4,o.recipeImplementation.createCode({email:v,userContext:u})];case 3:return M=i.sent(),[2,M];case 4:throw new Y.default(R);case 5:return[3,19];case 6:return[4,o.config.validatePhoneNumber(v)];case 7:return y=i.sent(),y!==void 0?[3,9]:[4,o.recipeImplementation.createCode({phoneNumber:v,userContext:u})];case 8:return M=i.sent(),[2,M];case 9:return[4,o.config.signInUpFeature.guessInternationPhoneNumberFromInputPhoneNumber(v,o.config.signInUpFeature.defaultCountry)];case 10:return on=i.sent(),on&&f!==!0?[4,o.config.validatePhoneNumber(on)]:[3,18];case 11:if(rn=i.sent(),rn!==void 0)return[3,16];i.label=12;case 12:return i.trys.push([12,14,,15]),[4,o.recipeImplementation.createCode({phoneNumber:on,userContext:u})];case 13:return[2,i.sent()];case 14:throw F=i.sent(),I("emailOrPhone",on),c(!0),F;case 15:return[3,17];case 16:throw I("emailOrPhone",on),c(!0),new Y.default("PWLESS_EMAIL_OR_PHONE_INVALID_INPUT_GUESS_PHONE_ERR");case 17:return[3,19];case 18:throw new Y.default(y);case 19:return[2]}})})},validateOnBlur:!1,showLabels:!0,footer:t.jsx($n,{privacyPolicyLink:o.config.signInUpFeature.privacyPolicyLink,termsOfServiceLink:o.config.signInUpFeature.termsOfServiceLink})})});function rt(){return t.jsx("svg",e.__assign({xmlns:"http://www.w3.org/2000/svg",width:"52.013",height:"41.889",viewBox:"0 0 52.013 41.889"},{children:t.jsx("g",e.__assign({id:"Group_10400","data-name":"Group 10400",transform:"translate(-724.625 -241.125)"},{children:t.jsxs("g",e.__assign({id:"Group_10399","data-name":"Group 10399"},{children:[t.jsxs("g",e.__assign({id:"Group_10398","data-name":"Group 10398"},{children:[t.jsxs("g",e.__assign({id:"_2639922_sms_icon","data-name":"2639922_sms_icon",transform:"translate(732.916 242)"},{children:[t.jsx("path",{id:"Union_52","data-name":"Union 52",d:"M7.124 37.96a6.26 6.26 0 0 0 3.652-5H6.593A6.592 6.592 0 0 1 0 26.367V6.592A6.592 6.592 0 0 1 6.593 0h29.664a6.592 6.592 0 0 1 6.593 6.592v19.775a6.592 6.592 0 0 1-6.593 6.592h-17.68a13.355 13.355 0 0 1-11.159 6.576zm20.893-21.48a3.3 3.3 0 1 0 3.3-3.3 3.3 3.3 0 0 0-3.3 3.3zm-9.887 0a3.3 3.3 0 1 0 3.3-3.3 3.295 3.295 0 0 0-3.3 3.3zm-9.888 0a3.3 3.3 0 1 0 3.3-3.3 3.3 3.3 0 0 0-3.301 3.3z",transform:"translate(-.001)",strokeWidth:"1.75px",stroke:"#000",fill:"#c4f3ff"}),t.jsx("ellipse",{id:"Ellipse_3013","data-name":"Ellipse 3013",cy:".917",ry:".917",transform:"translate(7.335 38.506)",stroke:"#000",fill:"#c4f3ff"})]})),t.jsx("path",{id:"Intersection_2","data-name":"Intersection 2",fill:"#8ae7ff",d:"M177.409-21836.576v-.33l-.214-1.131a6.271 6.271 0 0 0 3.651-5h-4.184a6.59 6.59 0 0 1-6.512-5.588h42.495a7.846 7.846 0 0 1-1.607 3.605 6.576 6.576 0 0 1-4.712 1.982h-14.845c-1.545-.09-2.537-.164-2.537-.164l-.077.164h-.219a13.342 13.342 0 0 1-11.156 6.572l-.082-.439z",transform:"translate(562.766 22118)"}),t.jsx("path",{id:"Intersection_1","data-name":"Intersection 1",fill:"#8ae7ff",d:"M209.246-21846.41s.494-22.641 0-25.178a8.7 8.7 0 0 0-2.767-4.41 6.6 6.6 0 0 1 6.369 6.59v19.775a6.6 6.6 0 0 1-5.724 6.537 6.213 6.213 0 0 0 2.122-3.314z",transform:"translate(561.882 22118.172)"})]})),t.jsxs("g",e.__assign({id:"_2639922_sms_icon-2","data-name":"2639922_sms_icon",transform:"translate(732.916 242.174)"},{children:[t.jsx("path",{id:"Union_52-2","data-name":"Union 52",d:"M7.124 37.96a6.26 6.26 0 0 0 3.652-5H6.593A6.592 6.592 0 0 1 0 26.367V6.592A6.592 6.592 0 0 1 6.593 0h29.664a6.592 6.592 0 0 1 6.593 6.592v19.775a6.592 6.592 0 0 1-6.593 6.592h-17.68a13.355 13.355 0 0 1-11.159 6.576zm20.893-21.48a3.3 3.3 0 1 0 3.3-3.3 3.3 3.3 0 0 0-3.3 3.3zm-9.887 0a3.3 3.3 0 1 0 3.3-3.3 3.295 3.295 0 0 0-3.3 3.3zm-9.888 0a3.3 3.3 0 1 0 3.3-3.3 3.3 3.3 0 0 0-3.301 3.3z",transform:"translate(-.001)",fill:"none",strokeWidth:"1.75px",stroke:"#000"}),t.jsx("ellipse",{id:"Ellipse_3013-2","data-name":"Ellipse 3013",cy:".917",ry:".917",transform:"translate(7.335 38.506)",fill:"none",stroke:"#000"})]})),t.jsxs("g",e.__assign({id:"Group_10397","data-name":"Group 10397"},{children:[t.jsx("path",{id:"Line_104","data-name":"Line 104",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#000",transform:"translate(725.5 266.84)",d:"M0 0h9.872"}),t.jsx("path",{id:"Line_105","data-name":"Line 105",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#fff",transform:"translate(725.5 268.59)",d:"M0 0h9.872"})]})),t.jsxs("g",e.__assign({id:"Group_10396","data-name":"Group 10396"},{children:[t.jsx("path",{id:"Line_103","data-name":"Line 103",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#000",transform:"translate(725.5 260.17)",d:"M0 0h12.461"}),t.jsx("path",{id:"Line_102","data-name":"Line 102",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#fff",transform:"translate(725.5 261.92)",d:"M0 0h12.461"})]})),t.jsx("path",{id:"Path_91918","data-name":"Path 91918",fill:"#8ae7ff",d:"M599.827 22145.373a1.62 1.62 0 0 0 1.38-1.336c.247-1.234.267 1.752.267 1.752l-1.647-.178z",transform:"translate(170 -21876)"}),t.jsxs("g",e.__assign({id:"Group_10395","data-name":"Group 10395"},{children:[t.jsx("path",{id:"Line_100","data-name":"Line 100",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#000",transform:"translate(725.5 253.5)",d:"M0 0h9.872"}),t.jsx("path",{id:"Line_101","data-name":"Line 101",strokeWidth:"1.75px",fill:"none",strokeLinecap:"round",stroke:"#fff",transform:"translate(725.5 255.25)",d:"M0 0h9.872"})]}))]}))}))}))}var me=d.withOverride("PasswordlessResendButton",function(o){var h=o.loginAttemptInfo,g=o.resendEmailOrSMSGapInSeconds,f=o.onClick,c=G.useTranslation(),u=x.useCallback(function(){var v=h.lastResend+g*1e3-Date.now();return v<0?void 0:Math.ceil(v/1e3)},[h,g]),k=x.useState(u()),T=k[0],I=k[1];return x.useEffect(function(){var v=setInterval(function(){var R=u();R===void 0&&clearInterval(v),I(R)},500);return function(){clearInterval(v)}},[u,I]),t.jsx("button",e.__assign({type:"button",disabled:T!==void 0,onClick:f,"data-supertokens":"link linkButton resendCodeBtn"},{children:T!==void 0?t.jsxs(H.default.Fragment,{children:[c("PWLESS_RESEND_BTN_DISABLED_START"),t.jsxs("strong",{children:[Math.floor(T/60).toString().padStart(2,"0"),":",(T%60).toString().padStart(2,"0")]}),c("PWLESS_RESEND_BTN_DISABLED_END")]}):h.contactMethod==="EMAIL"?c("PWLESS_RESEND_BTN_EMAIL"):c("PWLESS_RESEND_BTN_PHONE")}))}),at=function(r){var o=G.useTranslation(),h=d.useUserContext(),g=x.useState(r.error!==void 0?"ERROR":"READY"),f=g[0],c=g[1],u=x.useRef();x.useEffect(function(){return function(){u.current&&clearTimeout(u.current)}},[]);var k=x.useCallback(function(){return e.__awaiter(void 0,void 0,void 0,function(){var I,v,R;return e.__generator(this,function(y){switch(y.label){case 0:y.trys.push([0,5,,6]),r.clearError(),I=void 0,v=void 0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,r.recipeImplementation.resendCode({userContext:h})];case 2:return I=y.sent(),[3,4];case 3:if(R=y.sent(),Y.default.isThisError(R))v=R;else throw R;return[3,4];case 4:return I!==void 0&&I.status==="OK"?(c("LINK_RESENT"),u.current=setTimeout(function(){c(function(M){return M==="LINK_RESENT"?"READY":M}),u.current=void 0},2e3)):(c("ERROR"),v!==void 0&&r.onError(v.message)),[3,6];case 5:return y.sent(),c("ERROR"),[3,6];case 6:return[2]}})})},[r.recipeImplementation,r.loginAttemptInfo,r.config,c]),T=f==="LINK_RESENT";return t.jsx("div",e.__assign({"data-supertokens":"container"},{children:t.jsxs("div",e.__assign({"data-supertokens":"row"},{children:[f==="ERROR"&&t.jsx(fn.GeneralError,{error:r.error===void 0?"SOMETHING_WENT_WRONG_ERROR":r.error}),T&&t.jsx("div",e.__assign({"data-supertokens":"generalSuccess"},{children:o("PWLESS_LINK_SENT_RESEND_SUCCESS")})),t.jsx("div",e.__assign({"data-supertokens":"sendCodeIcon"},{children:r.loginAttemptInfo.contactMethod==="EMAIL"?t.jsx(xn.EmailLargeIcon,{}):t.jsx(rt,{})})),t.jsx("div",e.__assign({"data-supertokens":"headerTitle headerTinyTitle"},{children:o("PWLESS_LINK_SENT_RESEND_TITLE")})),t.jsxs("div",e.__assign({"data-supertokens":"primaryText sendCodeText"},{children:[r.loginAttemptInfo.contactMethod==="EMAIL"?o("PWLESS_LINK_SENT_RESEND_DESC_START_EMAIL"):o("PWLESS_LINK_SENT_RESEND_DESC_START_PHONE"),t.jsx("strong",{children:r.loginAttemptInfo.contactInfo}),r.loginAttemptInfo.contactMethod==="EMAIL"?o("PWLESS_LINK_SENT_RESEND_DESC_END_EMAIL"):o("PWLESS_LINK_SENT_RESEND_DESC_END_PHONE")]})),t.jsx(me,{loginAttemptInfo:r.loginAttemptInfo,resendEmailOrSMSGapInSeconds:r.config.signInUpFeature.resendEmailOrSMSGapInSeconds,onClick:k}),t.jsxs("div",e.__assign({"data-supertokens":"secondaryText secondaryLinkWithLeftArrow",onClick:function(){return r.recipeImplementation.clearLoginAttemptInfo({userContext:h})}},{children:[t.jsx(D.ArrowLeftIcon,{color:"rgb(var(--palette-textPrimary))"}),r.loginAttemptInfo.contactMethod==="EMAIL"?o("PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_EMAIL"):o("PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_PHONE")]}))]}))}))},ve=d.withOverride("PasswordlessLinkSent",at),be=d.withOverride("PasswordlessPhoneForm",function(o){var h=this,g=d.useUserContext();x.useEffect(function(){V.preloadPhoneNumberUtils()},[]);var f=x.useMemo(function(){return fe({defaultCountry:o.config.signInUpFeature.defaultCountry})},[o.config.signInUpFeature.defaultCountry]);return t.jsx(tn.FormBase,{clearError:o.clearError,onError:o.onError,formFields:[{id:"phoneNumber",label:"PWLESS_SIGN_IN_UP_PHONE_LABEL",inputComponent:f,optional:!1,autofocus:!0,placeholder:"",validate:b.defaultValidate}],buttonLabel:"PWLESS_SIGN_IN_UP_CONTINUE_BUTTON",onSuccess:o.onSuccess,callAPI:function(c){return e.__awaiter(h,void 0,void 0,function(){var u,k,T,I;return e.__generator(this,function(v){switch(v.label){case 0:if(u=(I=c.find(function(R){return R.id==="phoneNumber"}))===null||I===void 0?void 0:I.value,u===void 0)throw new Y.default("GENERAL_ERROR_PHONE_UNDEFINED");return[4,o.config.validatePhoneNumber(u)];case 1:if(k=v.sent(),k!==void 0)throw new Y.default(k);return[4,o.recipeImplementation.createCode({phoneNumber:u,userContext:g})];case 2:return T=v.sent(),[2,T]}})})},validateOnBlur:!1,showLabels:!0,footer:t.jsx($n,{privacyPolicyLink:o.config.signInUpFeature.privacyPolicyLink,termsOfServiceLink:o.config.signInUpFeature.termsOfServiceLink})})}),ot=d.withOverride("PasswordlessSignInUpHeader",function(){var o=G.useTranslation();return t.jsxs(x.Fragment,{children:[t.jsx("div",e.__assign({"data-supertokens":"headerTitle"},{children:o("PWLESS_SIGN_IN_UP_HEADER_TITLE")})),t.jsx("div",{"data-supertokens":"divider"})]})}),st=d.withOverride("PasswordlessUserInputCodeFormFooter",function(o){var h=o.loginAttemptInfo,g=o.recipeImplementation,f=G.useTranslation(),c=d.useUserContext();return t.jsx(x.Fragment,{children:t.jsxs("div",e.__assign({"data-supertokens":"secondaryText secondaryLinkWithLeftArrow",onClick:function(){return g.clearLoginAttemptInfo({userContext:c})}},{children:[t.jsx(D.ArrowLeftIcon,{color:"rgb(var(--palette-textPrimary))"}),h.contactMethod==="EMAIL"?f("PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_EMAIL"):f("PWLESS_SIGN_IN_UP_CHANGE_CONTACT_INFO_PHONE")]}))})}),ke=d.withOverride("PasswordlessUserInputCodeForm",function(o){var h=this,g=G.useTranslation(),f=d.useUserContext(),c=x.useState(),u=c[0],k=c[1];x.useEffect(function(){return function(){clearTimeout(u)}},[u]);function T(){return e.__awaiter(this,void 0,void 0,function(){var I,v,R;return e.__generator(this,function(y){switch(y.label){case 0:y.trys.push([0,5,,6]),I=void 0,v=void 0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,o.recipeImplementation.resendCode({userContext:f})];case 2:return I=y.sent(),[3,4];case 3:if(R=y.sent(),Y.default.isThisError(R))v=R;else throw R;return[3,4];case 4:if(v!==void 0)o.onError(v.message);else{if(I===void 0)throw new Error("Should not come here");I.status==="OK"&&k(setTimeout(function(){k(void 0)},2e3))}return[3,6];case 5:return y.sent(),o.onError("SOMETHING_WENT_WRONG_ERROR"),[3,6];case 6:return[2]}})})}return t.jsxs(H.default.Fragment,{children:[u!==void 0&&t.jsx("div",e.__assign({"data-supertokens":"generalSuccess"},{children:o.loginAttemptInfo.contactMethod==="EMAIL"?g("PWLESS_RESEND_SUCCESS_EMAIL"):g("PWLESS_RESEND_SUCCESS_PHONE")})),t.jsx(tn.FormBase,{clearError:o.clearError,onError:o.onError,formFields:[{id:"userInputCode",label:"",labelComponent:t.jsxs("div",e.__assign({"data-supertokens":"codeInputLabelWrapper"},{children:[t.jsx(tn.Label,{value:"PWLESS_USER_INPUT_CODE_INPUT_LABEL","data-supertokens":"codeInputLabel"}),t.jsx(me,{loginAttemptInfo:o.loginAttemptInfo,resendEmailOrSMSGapInSeconds:o.config.signInUpFeature.resendEmailOrSMSGapInSeconds,onClick:T})]})),autofocus:!0,optional:!1,clearOnSubmit:!0,placeholder:"",validate:V.userInputCodeValidate}],onSuccess:o.onSuccess,buttonLabel:"PWLESS_SIGN_IN_UP_CONTINUE_BUTTON",callAPI:function(I){return e.__awaiter(h,void 0,void 0,function(){var v,R,y;return e.__generator(this,function(M){switch(M.label){case 0:if(v=(y=I.find(function(on){return on.id==="userInputCode"}))===null||y===void 0?void 0:y.value,v===void 0||v.length===0)throw new Y.default("GENERAL_ERROR_OTP_UNDEFINED");return[4,o.recipeImplementation.consumeCode({userInputCode:v,userContext:f})];case 1:if(R=M.sent(),R.status==="OK"||R.status==="RESTART_FLOW_ERROR")return[2,R];throw R.status==="INCORRECT_USER_INPUT_CODE_ERROR"?new Y.default("GENERAL_ERROR_OTP_INVALID"):R.status==="EXPIRED_USER_INPUT_CODE_ERROR"?new Y.default("GENERAL_ERROR_OTP_EXPIRED"):new Y.default("SOMETHING_WENT_WRONG_ERROR")}})})},validateOnBlur:!1,showLabels:!0,footer:t.jsx(st,e.__assign({},o,{loginAttemptInfo:o.loginAttemptInfo}))})]})}),we=d.withOverride("PasswordlessUserInputCodeFormHeader",function(o){var h=o.loginAttemptInfo,g=G.useTranslation();return t.jsxs(x.Fragment,{children:[t.jsx("div",e.__assign({"data-supertokens":"headerTitle"},{children:g("PWLESS_USER_INPUT_CODE_HEADER_TITLE")})),t.jsxs("div",e.__assign({"data-supertokens":"headerSubtitle secondaryText"},{children:[h.flowType==="USER_INPUT_CODE"?g("PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE"):g("PWLESS_USER_INPUT_CODE_HEADER_SUBTITLE_LINK"),t.jsx("br",{}),t.jsx("strong",{children:h.contactInfo})]})),t.jsx("div",{"data-supertokens":"divider"})]})});n.SignInUpScreens=void 0,function(r){r[r.CloseTab=0]="CloseTab",r[r.LinkSent=1]="LinkSent",r[r.EmailForm=2]="EmailForm",r[r.PhoneForm=3]="PhoneForm",r[r.EmailOrPhoneForm=4]="EmailOrPhoneForm",r[r.UserInputCodeForm=5]="UserInputCodeForm"}(n.SignInUpScreens||(n.SignInUpScreens={}));var lt=function(r){var o=r.activeScreen,h=r.featureState,g=e.__rest(r,["activeScreen","featureState"]),f={recipeImplementation:g.recipeImplementation,config:g.config,clearError:function(){return g.dispatch({type:"setError",error:void 0})},onError:function(c){return g.dispatch({type:"setError",error:c})},error:h.error};return o===n.SignInUpScreens.CloseTab?t.jsx(Wn,e.__assign({},f)):o===n.SignInUpScreens.LinkSent?t.jsx(ve,e.__assign({},f,{loginAttemptInfo:h.loginAttemptInfo})):t.jsxs("div",e.__assign({"data-supertokens":"container"},{children:[t.jsx("div",e.__assign({"data-supertokens":"row"},{children:h.loaded&&t.jsxs(H.default.Fragment,{children:[o===n.SignInUpScreens.UserInputCodeForm?t.jsx(we,e.__assign({},f,{loginAttemptInfo:h.loginAttemptInfo})):t.jsx(ot,{}),h.error!==void 0&&t.jsx(fn.GeneralError,{error:h.error}),o===n.SignInUpScreens.EmailForm?t.jsx(he,e.__assign({},f)):o===n.SignInUpScreens.PhoneForm?t.jsx(be,e.__assign({},f)):o===n.SignInUpScreens.EmailOrPhoneForm?t.jsx(xe,e.__assign({},f)):o===n.SignInUpScreens.UserInputCodeForm?t.jsx(ke,e.__assign({},f,{loginAttemptInfo:h.loginAttemptInfo,onSuccess:g.onSuccess})):null]})})),t.jsx(w.SuperTokensBranding,{})]}))};function Jn(r){var o=$.hasFontDefined(r.config.rootStyle),h=Ie(r),g;return h===n.SignInUpScreens.CloseTab?g=r.config.signInUpFeature.closeTabScreenStyle:h===n.SignInUpScreens.LinkSent?g=r.config.signInUpFeature.linkSentScreenStyle:h===n.SignInUpScreens.UserInputCodeForm?g=r.config.signInUpFeature.userInputCodeFormStyle:(h===n.SignInUpScreens.EmailForm||h===n.SignInUpScreens.PhoneForm||h===n.SignInUpScreens.EmailOrPhoneForm)&&(g=r.config.signInUpFeature.emailOrPhoneFormStyle),t.jsx(d.UserContextWrapper,e.__assign({userContext:r.userContext},{children:t.jsx(En,e.__assign({loadDefaultFont:!o,userStyles:[r.config.rootStyle,g]},{children:t.jsx(lt,e.__assign({},r,{activeScreen:h}))}))}))}function Ie(r){if(r.featureState.successInAnotherTab)return n.SignInUpScreens.CloseTab;if(r.featureState.loginAttemptInfo&&r.featureState.loginAttemptInfo.flowType==="MAGIC_LINK")return n.SignInUpScreens.LinkSent;if(r.featureState.loginAttemptInfo)return n.SignInUpScreens.UserInputCodeForm;if(r.config.contactMethod==="EMAIL")return n.SignInUpScreens.EmailForm;if(r.config.contactMethod==="PHONE")return n.SignInUpScreens.PhoneForm;if(r.config.contactMethod==="EMAIL_OR_PHONE")return n.SignInUpScreens.EmailOrPhoneForm;throw new Error("Couldn't choose active screen; Should never happen")}var Se=function(r,o,h){var g=x.useRef(!1);return x.useEffect(function(){if(r.loginAttemptInfo&&!r.successInAnotherTab){var f=setInterval(function(){return e.__awaiter(void 0,void 0,void 0,function(){var c;return e.__generator(this,function(u){switch(u.label){case 0:return g.current!==!1?[3,2]:[4,en.SessionAPIWrapper.doesSessionExist({userContext:h})];case 1:c=u.sent(),c&&o({type:"successInAnotherTab"}),u.label=2;case 2:return[2]}})})},2e3);return function(){clearInterval(f)}}},[r.loginAttemptInfo,r.successInAnotherTab]),g},Ee=function(r,o){var h=H.useReducer(function(c,u){switch(u.type){case"load":return{loaded:!0,error:u.error,loginAttemptInfo:u.loginAttemptInfo,successInAnotherTab:!1};case"resendCode":return c.loginAttemptInfo?e.__assign(e.__assign({},c),{error:void 0,loginAttemptInfo:e.__assign(e.__assign({},c.loginAttemptInfo),{lastResend:u.timestamp})}):c;case"restartFlow":return e.__assign(e.__assign({},c),{error:u.error,loginAttemptInfo:void 0});case"setError":return e.__assign(e.__assign({},c),{error:u.error});case"startLogin":return e.__assign(e.__assign({},c),{loginAttemptInfo:u.loginAttemptInfo,error:void 0});case"successInAnotherTab":return e.__assign(e.__assign({},c),{successInAnotherTab:!0});default:return c}},{error:void 0,loaded:!1,loginAttemptInfo:void 0,successInAnotherTab:!1},function(c){var u=void 0,k=e.getQueryParams("error"),T=e.getQueryParams("message");return k!==null&&(k==="signin"?u="SOMETHING_WENT_WRONG_ERROR":k==="restart_link"?u="ERROR_SIGN_IN_UP_LINK":k==="custom"&&T!==null&&(u=T)),e.__assign(e.__assign({},c),{error:u})}),g=h[0],f=h[1];return x.useEffect(function(){if(r===void 0)return;function c(){return e.__awaiter(this,void 0,void 0,function(){var u,k,T,I;return e.__generator(this,function(v){switch(v.label){case 0:return u=void 0,k=e.getQueryParams("error"),T=e.getQueryParams("message"),k!==null&&(k==="signin"?u="SOMETHING_WENT_WRONG_ERROR":k==="restart_link"?u="ERROR_SIGN_IN_UP_LINK":k==="custom"&&T!==null&&(u=T)),[4,r==null?void 0:r.getLoginAttemptInfo({userContext:o})];case 1:return I=v.sent(),f({type:"load",loginAttemptInfo:I,error:u}),[2]}})})}g.loaded===!1&&c()},[g.loaded,r,o]),[g,f]};function ye(r,o,h,g,f,c){var u=H.useMemo(function(){return r&&dt(r.webJSRecipe,r.config,o,g)},[r]);return x.useMemo(function(){if(!(!r||!u))return{onSuccess:function(k){return W.Session.getInstanceOrThrow().validateGlobalClaimsAndHandleSuccessRedirection({rid:r.config.recipeId,successRedirectContext:{action:"SUCCESS",isNewUser:k.createdNewUser,redirectToPath:e.getRedirectToPathFromURL()}},f,c)},recipeImplementation:u,config:r.config}},[h,u])}var Ce=function(r){var o=r.useComponentOverrides(),h=d.useUserContext(),g=Ee(r.recipe.webJSRecipe,h),f=g[0],c=g[1],u=Se(f,c,h),k=ye(r.recipe,c,f,u,h,r.history);return t.jsx(d.ComponentOverrideContext.Provider,e.__assign({value:o},{children:t.jsx(d.FeatureWrapper,e.__assign({useShadowDom:r.recipe.config.useShadowDom,defaultStore:Q},{children:t.jsxs(x.Fragment,{children:[r.children===void 0&&t.jsx(Jn,e.__assign({},k,{featureState:f,dispatch:c})),r.children&&H.Children.map(r.children,function(T){return H.isValidElement(T)?H.cloneElement(T,e.__assign(e.__assign({},k),{featureState:f,dispatch:c})):T})]})}))}))};function dt(r,o,h,g){var f=this;return e.__assign(e.__assign({},r),{createCode:function(c){return e.__awaiter(f,void 0,void 0,function(){var u,k,T,I,v,R;return e.__generator(this,function(y){switch(y.label){case 0:return[4,V.getPhoneNumberUtils()];case 1:return k=y.sent(),"email"in c?u=c.email:u=k.formatNumber(c.phoneNumber,o.signInUpFeature.defaultCountry||"",k.numberFormat.E164),T="email"in c?"EMAIL":"PHONE",I={lastResend:Date.now(),contactMethod:T,contactInfo:u,redirectToPath:e.getRedirectToPathFromURL()},[4,r.createCode(e.__assign(e.__assign({},c),{userContext:e.__assign(e.__assign({},c.userContext),{additionalAttemptInfo:I})}))];case 2:return v=y.sent(),v.status!=="OK"?[3,4]:[4,r.getLoginAttemptInfo({userContext:c.userContext})];case 3:R=y.sent(),h({type:"startLogin",loginAttemptInfo:R}),y.label=4;case 4:return[2,v]}})})},resendCode:function(c){return e.__awaiter(f,void 0,void 0,function(){var u,k,T;return e.__generator(this,function(I){switch(I.label){case 0:return[4,r.resendCode(c)];case 1:return u=I.sent(),u.status!=="OK"?[3,5]:[4,r.getLoginAttemptInfo({userContext:c.userContext})];case 2:return k=I.sent(),k===void 0?[3,4]:(T=Date.now(),[4,r.setLoginAttemptInfo({userContext:c.userContext,attemptInfo:e.__assign(e.__assign({},k),{lastResend:T})})]);case 3:I.sent(),h({type:"resendCode",timestamp:T}),I.label=4;case 4:return[3,7];case 5:return u.status!=="RESTART_FLOW_ERROR"?[3,7]:[4,r.clearLoginAttemptInfo({userContext:c.userContext})];case 6:I.sent(),h({type:"restartFlow",error:"ERROR_SIGN_IN_UP_RESEND_RESTART_FLOW"}),I.label=7;case 7:return[2,u]}})})},consumeCode:function(c){return e.__awaiter(f,void 0,void 0,function(){var u;return e.__generator(this,function(k){switch(k.label){case 0:return g.current=!0,[4,r.consumeCode(c)];case 1:return u=k.sent(),u.status!=="RESTART_FLOW_ERROR"?[3,3]:[4,r.clearLoginAttemptInfo({userContext:c.userContext})];case 2:return k.sent(),h({type:"restartFlow",error:"ERROR_SIGN_IN_UP_CODE_CONSUME_RESTART_FLOW"}),[3,5];case 3:return u.status!=="OK"?[3,5]:[4,r.clearLoginAttemptInfo({userContext:c.userContext})];case 4:k.sent(),k.label=5;case 5:return g.current=!1,[2,u]}})})},clearLoginAttemptInfo:function(c){return e.__awaiter(f,void 0,void 0,function(){return e.__generator(this,function(u){switch(u.label){case 0:return[4,r.clearLoginAttemptInfo({userContext:c.userContext})];case 1:return u.sent(),e.clearErrorQueryParam(),h({type:"restartFlow",error:void 0}),[2]}})})}})}var Zn=function(r){e.__extends(o,r);function o(g){var f=r.call(this)||this;return f.recipeInstance=g,f.getFeatures=function(c){c===void 0&&(c=C.useContext);var u={};if(f.recipeInstance.config.signInUpFeature.disableDefaultUI!==!0){var k=f.recipeInstance.config.appInfo.websiteBasePath.appendPath(new J.default("/"));u[k.getAsStringDangerous()]={matches:e.matchRecipeIdUsingQueryParams(f.recipeInstance.config.recipeId),component:function(T){return f.getFeatureComponent("signInUp",T,c)},recipeID:V.Passwordless.RECIPE_ID}}if(f.recipeInstance.config.linkClickedScreenFeature.disableDefaultUI!==!0){var k=f.recipeInstance.config.appInfo.websiteBasePath.appendPath(new J.default("/verify"));u[k.getAsStringDangerous()]={matches:e.matchRecipeIdUsingQueryParams(f.recipeInstance.config.recipeId),component:function(I){return f.getFeatureComponent("linkClickedScreen",I,c)},recipeID:V.Passwordless.RECIPE_ID}}return u},f.getFeatureComponent=function(c,u,k){if(k===void 0&&(k=C.useContext),c==="signInUp")return u.redirectOnSessionExists!==!1?t.jsx(d.UserContextWrapper,e.__assign({userContext:u.userContext},{children:t.jsx(w.AuthWidgetWrapper,e.__assign({authRecipe:f.recipeInstance,history:u.history},{children:t.jsx(Ce,e.__assign({recipe:f.recipeInstance,useComponentOverrides:k},u))}))})):t.jsx(d.UserContextWrapper,e.__assign({userContext:u.userContext},{children:t.jsx(Ce,e.__assign({recipe:f.recipeInstance,useComponentOverrides:k},u))}));if(c==="linkClickedScreen")return t.jsx(d.UserContextWrapper,e.__assign({userContext:u.userContext},{children:t.jsx(Z,e.__assign({recipe:f.recipeInstance},u,{useComponentOverrides:k}))}));throw new Error("Should never come here.")},f}o.getInstanceOrInitAndGetInstance=function(){if(o.instance===void 0){var g=V.Passwordless.getInstanceOrThrow();o.instance=new o(g)}return o.instance},o.getFeatures=function(g){return g===void 0&&(g=C.useContext),o.getInstanceOrInitAndGetInstance().getFeatures(g)},o.getFeatureComponent=function(g,f,c){return c===void 0&&(c=C.useContext),o.getInstanceOrInitAndGetInstance().getFeatureComponent(g,f,c)},o.reset=function(){!e.isTest()||(o.instance=void 0)};var h;return h=o,o.SignInUp=function(g){return g===void 0&&(g={}),h.getFeatureComponent("signInUp",g)},o.LinkClicked=function(g){return h.getFeatureComponent("linkClickedScreen",g)},o.SignInUpTheme=Jn,o}(d.RecipeRouter),ut=Zn.SignInUp,pt=Zn.LinkClicked;n.CloseTabScreen=Wn,n.EmailForm=he,n.EmailOrPhoneForm=xe,n.LinkClicked=pt,n.LinkSent=ve,n.PasswordlessPreBuiltUI=Zn,n.PhoneForm=be,n.SignInUp=ut,n.SignInUpThemeWrapper=Jn,n.UserInputCodeForm=ke,n.UserInputCodeFormHeader=we,n.defaultTranslationsPasswordless=Q,n.getActiveScreen=Ie,n.useChildProps=ye,n.useFeatureReducer=Ee,n.useSuccessInAnotherTabChecker=Se})(Fe);var hn={},S=pn,N=mn.exports,si=re,X=On,ze=Un,_n=ht,un=An.exports,de=Dn,li=Vn,di=Hn,Ge=In,ui=ie;function He(n){return n&&n.__esModule?n:{default:n}}function pi(n){if(n&&n.__esModule)return n;var e=Object.create(null);return n&&Object.keys(n).forEach(function(t){if(t!=="default"){var l=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:function(){return n[t]}})}}),e.default=n,Object.freeze(e)}var Re=He(si),Mn=pi(un),Ve=He(di),ci=`[data-supertokens~="container"] {
    --palette-background: 255, 255, 255;
    --palette-inputBackground: 250, 250, 250;
    --palette-inputBorder: 224, 224, 224;
    --palette-primary: 255, 155, 51;
    --palette-primaryBorder: 238, 141, 35;
    --palette-success: 65, 167, 0;
    --palette-successBackground: 217, 255, 191;
    --palette-error: 255, 23, 23;
    --palette-errorBackground: 255, 241, 235;
    --palette-textTitle: 34, 34, 34;
    --palette-textLabel: 34, 34, 34;
    --palette-textInput: 34, 34, 34;
    --palette-textPrimary: 101, 101, 101;
    --palette-textLink: 0, 118, 255;
    --palette-buttonText: 255, 255, 255;
    --palette-textGray: 128, 128, 128;
    --palette-superTokensBrandingBackground: 242, 245, 246;
    --palette-superTokensBrandingText: 173, 189, 196;

    --font-size-0: 12px;
    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 19px;
    --font-size-4: 24px;
}
/*
 * Default styles.
 */
@-webkit-keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}
@keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}
@-webkit-keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}
@keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}
[data-supertokens~="container"] {
    font-family: "Rubik", sans-serif;
    margin: 12px auto;
    margin-top: 26px;
    margin-bottom: 26px;
    width: 420px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
    background-color: rgb(var(--palette-background));
}
@media (max-width: 440px) {
    [data-supertokens~="container"] {
        width: 95vw;
    }
}
[data-supertokens~="row"] {
    margin: 0 auto;
    width: 76%;
    padding-top: 30px;
    padding-bottom: 10px;
}
[data-supertokens~="superTokensBranding"] {
    display: block;
    margin: 0 auto;
    background: rgb(var(--palette-superTokensBrandingBackground));
    color: rgb(var(--palette-superTokensBrandingText));
    text-decoration: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 6px 6px 0 0;
    padding: 4px 9px;
    font-weight: 300;
    font-size: var(--font-size-0);
    letter-spacing: 0.4px;
}
[data-supertokens~="generalError"] {
    background: rgb(var(--palette-errorBackground));
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    padding-left: 18px;
    padding-right: 18px;
    letter-spacing: 0.2px;
    font-size: var(--font-size-1);
    border-radius: 8px;
    color: rgb(var(--palette-error));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    word-wrap: break-word;
}
[data-supertokens~="headerTitle"] {
    font-size: var(--font-size-4);
    line-height: 40px;
    letter-spacing: 0.58px;
    font-weight: 800;
    margin-bottom: 2px;
    color: rgb(var(--palette-textTitle));
}
[data-supertokens~="headerSubtitle"] {
    margin-bottom: 21px;
}
[data-supertokens~="privacyPolicyAndTermsAndConditions"] {
    max-width: 300px;
    margin-top: 10px;
}
[data-supertokens~="privacyPolicyAndTermsAndConditions"] a {
    line-height: 21px;
}
/* TODO: split the link style into separate things*/
/* We add this before primary and secondary text, because if they are applied to the same element the other ones take priority */
[data-supertokens~="link"] {
    padding-left: 3px;
    padding-right: 3px;
    color: rgb(var(--palette-textLink));
    font-size: var(--font-size-1);
    cursor: pointer;
    letter-spacing: 0.16px;
    line-height: 26px;
}
[data-supertokens~="primaryText"] {
    font-size: var(--font-size-1);
    font-weight: 500;
    letter-spacing: 0.4px;
    line-height: 21px;
    color: rgb(var(--palette-textLabel));
}
[data-supertokens~="secondaryText"] {
    font-size: var(--font-size-1);
    font-weight: 300;
    letter-spacing: 0.4px;
    color: rgb(var(--palette-textPrimary));
}
[data-supertokens~="divider"] {
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom: 0.3px solid #dddddd;
    align-items: center;
    padding-bottom: 5px;
}
[data-supertokens~="headerTinyTitle"] {
    margin-top: 13px;
    font-size: var(--font-size-3);
    letter-spacing: 1.1px;
    font-weight: 500;
    line-height: 28px;
}
[data-supertokens~="secondaryLinkWithArrow"] {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}
[data-supertokens~="secondaryLinkWithArrow"]:hover {
    position: relative;
    left: 2px;
    word-spacing: 4px;
}
[data-supertokens~="generalSuccess"] {
    color: rgb(var(--palette-success));
    font-size: var(--font-size-1);
    background: rgb(var(--palette-successBackground));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    padding: 9px 15px 9px 15px;
    border-radius: 6px;
    display: inline-block;
}
[data-supertokens~="spinner"] {
    width: 80px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 40px;
    margin: 0 auto;
}
[data-supertokens~="error"] {
    color: rgb(var(--palette-error));
}
[data-supertokens~="linkButton"] {
    background-color: transparent;
    border: 0;
}
[data-supertokens~="secondaryLinkWithLeftArrow"] {
    margin-top: 10px;
    margin-bottom: 40px;
    cursor: pointer;
}
[data-supertokens~="secondaryLinkWithLeftArrow"] svg {
    margin-right: 0.3em;
}
[data-supertokens~="secondaryLinkWithLeftArrow"]:hover svg {
    position: relative;
    left: -4px;
}
[data-supertokens~="button"] {
    background-color: rgb(var(--palette-primary));
    color: rgb(var(--palette-buttonText));
    width: 100%;
    height: 34px;
    font-weight: 700;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    border-color: rgb(var(--palette-primaryBorder));
    background-position: center;
    transition: all 0.4s;
    background-size: 12000%;
    cursor: pointer;
}
[data-supertokens~="button"]:disabled {
    border: none;
    cursor: no-drop;
}
[data-supertokens~="button"]:active {
    outline: none;
    transition: all 0s;
    background-size: 100%;
    -webkit-filter: brightness(0.85);
            filter: brightness(0.85);
}
[data-supertokens~="button"]:focus {
    outline: none;
}
[data-supertokens~="row"] {
    padding-bottom: 30px;
}
[data-supertokens~="providerContainer"] {
    padding-top: 9px;
    padding-bottom: 9px;
}
[data-supertokens~="providerButton"] {
    border-color: rgb(221, 221, 221) !important;
}
[data-supertokens~="providerButton"] {
    min-height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 8px;

    background-color: white;
    color: black;
}
[data-supertokens~="providerButton"]:hover {
    -webkit-filter: none !important;
            filter: none !important;
}
[data-supertokens~="providerButton"]:hover {
    background-color: #fafafa;
}
[data-supertokens~="providerButtonLeft"] {
    min-width: 34px;
    margin-left: 66px;
}
[data-supertokens~="providerButtonLogo"] {
    height: 30px;
    display: flex;
}
[data-supertokens~="providerButtonLogoCenter"] {
    display: flex;
    margin: auto;
}
[data-supertokens~="providerButtonText"] {
    font-weight: 400;
    text-align: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
}
[data-supertokens~="providerButtonText"]:only-child {
    margin: 0 auto;
}
`,Ke=function(n){var e=n.children,t=n.userStyles,l=n.loadDefaultFont;return N.jsxs(un.Fragment,{children:[e,l&&N.jsx("link",{href:"//fonts.googleapis.com/css?family=Rubik:wght@300;400;600;500;700",rel:"stylesheet",type:"text/css"}),N.jsxs("style",{children:[ci,t.join(`
`)]})]})},gi=function(n){var e=X.useUserContext(),t=function(l){return S.__awaiter(void 0,void 0,void 0,function(){var d,w,C;return S.__generator(this,function(x){switch(x.label){case 0:x.trys.push([0,5,,6]),d=void 0,w=void 0,x.label=1;case 1:return x.trys.push([1,3,,4]),[4,_n.redirectToThirdPartyLogin({recipeImplementation:n.recipeImplementation,thirdPartyId:l,config:n.config,userContext:e})];case 2:return d=x.sent(),[3,4];case 3:if(C=x.sent(),Ve.default.isThisError(C))w=C;else throw C;return[3,4];case 4:if(w!==void 0)n.dispatch({type:"setError",error:w.message});else{if(d===void 0)throw new Error("Should not come here");d.status==="ERROR"&&n.dispatch({type:"setError",error:"SOMETHING_WENT_WRONG_ERROR"})}return[3,6];case 5:return x.sent(),n.dispatch({type:"setError",error:"SOMETHING_WENT_WRONG_ERROR"}),[3,6];case 6:return[2]}})})};return N.jsx(un.Fragment,{children:n.providers.map(function(l){return N.jsx("div",S.__assign({"data-supertokens":"providerContainer"},{children:N.jsx("span",S.__assign({onClick:function(){return t(l.id)}},{children:l.getButton()}))}),"provider-".concat(l.id))})})},Ye=X.withOverride("ThirdPartySignInAndUpProvidersForm",gi),_i=X.withOverride("ThirdPartySignInAndUpHeader",function(){var e=Ge.useTranslation();return N.jsx("div",S.__assign({"data-supertokens":"headerTitle"},{children:e("THIRD_PARTY_SIGN_IN_AND_UP_HEADER_TITLE")}))}),hi=X.withOverride("ThirdPartySignUpFooter",function(e){var t=e.termsOfServiceLink,l=e.privacyPolicyLink,d=Ge.useTranslation();return t===void 0&&l===void 0?null:N.jsxs("div",S.__assign({"data-supertokens":"secondaryText privacyPolicyAndTermsAndConditions"},{children:[d("THIRD_PARTY_SIGN_IN_UP_FOOTER_START"),t!==void 0&&N.jsx("a",S.__assign({"data-supertokens":"link",href:t,target:"_blank",rel:"noopener noreferer"},{children:d("THIRD_PARTY_SIGN_IN_UP_FOOTER_TOS")})),t!==void 0&&l!==void 0&&d("THIRD_PARTY_SIGN_IN_UP_FOOTER_AND"),l!==void 0&&N.jsx("a",S.__assign({"data-supertokens":"link",href:l,target:"_blank",rel:"noopener noreferer"},{children:d("THIRD_PARTY_SIGN_IN_UP_FOOTER_PP")})),d("THIRD_PARTY_SIGN_IN_UP_FOOTER_END")]}))}),fi=function(n){return N.jsxs("div",S.__assign({"data-supertokens":"container"},{children:[N.jsxs("div",S.__assign({"data-supertokens":"row"},{children:[N.jsx(_i,{}),N.jsx("div",{"data-supertokens":"divider"}),n.featureState.error&&N.jsx(li.GeneralError,{error:n.featureState.error}),N.jsx(Ye,S.__assign({},n)),N.jsx(hi,{privacyPolicyLink:n.config.signInAndUpFeature.privacyPolicyLink,termsOfServiceLink:n.config.signInAndUpFeature.termsOfServiceLink})]})),N.jsx(ze.SuperTokensBranding,{})]}))},ue=function(n){var e=de.hasFontDefined(n.config.rootStyle);return N.jsx(X.UserContextWrapper,S.__assign({userContext:n.userContext},{children:N.jsx(Ke,S.__assign({loadDefaultFont:!e,userStyles:[n.config.rootStyle,n.config.signInAndUpFeature.style]},{children:N.jsx(fi,S.__assign({},n))}))}))},pe={en:S.__assign(S.__assign({},de.defaultTranslationsCommon.en),{THIRD_PARTY_SIGN_IN_AND_UP_HEADER_TITLE:"Sign Up / Sign In",THIRD_PARTY_SIGN_IN_UP_FOOTER_START:"By continuing, you agree to our ",THIRD_PARTY_SIGN_IN_UP_FOOTER_TOS:"Terms of Service",THIRD_PARTY_SIGN_IN_UP_FOOTER_AND:" and ",THIRD_PARTY_SIGN_IN_UP_FOOTER_PP:"Privacy Policy",THIRD_PARTY_SIGN_IN_UP_FOOTER_END:"",THIRD_PARTY_PROVIDER_DEFAULT_BTN_START:"Continue with ",THIRD_PARTY_PROVIDER_DEFAULT_BTN_END:"",THIRD_PARTY_ERROR_NO_EMAIL:"Could not retrieve email. Please try a different method."})},qe=function(){return Mn.useReducer(function(n,e){switch(e.type){case"setError":return S.__assign(S.__assign({},n),{error:e.error});default:return n}},{},function(){var n=void 0,e=S.getQueryParams("error");if(e!==null)if(e==="signin")n="SOMETHING_WENT_WRONG_ERROR";else if(e==="no_email_present")n="THIRD_PARTY_ERROR_NO_EMAIL";else{var t=S.getQueryParams("message");t===null?n="SOMETHING_WENT_WRONG_ERROR":n=t}return{error:n}})};function $e(n){var e=un.useMemo(function(){return n&&mi(n.webJSRecipe)},[n]),t=X.useDynamicLoginMethods();return un.useMemo(function(){if(!(!n||!e)){var l;if(S.SuperTokens.usesDynamicLoginMethods){if(t.loaded===!1)throw new Error("Component requiring dynamicLoginMethods rendered without FeatureWrapper.");l=t.loginMethods.thirdparty.enabled?t.loginMethods.thirdparty.providers:[]}return{providers:_n.mergeProviders({tenantProviders:l,clientProviders:n.config.signInAndUpFeature.providers}),recipeImplementation:e,config:n.config,recipe:n}}},[n,e])}var xi=function(n){var e=qe(),t=e[0],l=e[1],d=$e(n.recipe),w=S.__assign(S.__assign({},d),{providers:d.providers});return N.jsxs(un.Fragment,{children:[n.children===void 0&&N.jsx(ue,S.__assign({},w,{featureState:t,dispatch:l})),n.children&&Mn.Children.map(n.children,function(C){return Mn.isValidElement(C)?Mn.cloneElement(C,S.__assign(S.__assign({},d),{featureState:t,dispatch:l})):C})]})},Ne=function(n){var e=n.useComponentOverrides();return N.jsx(X.ComponentOverrideContext.Provider,S.__assign({value:e},{children:N.jsx(X.FeatureWrapper,S.__assign({useShadowDom:n.recipe.config.useShadowDom,defaultStore:pe},{children:N.jsx(xi,S.__assign({},n))}))}))},mi=function(n){return S.__assign({},n)},vi=function(n){S.__extends(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.render=function(){return N.jsx("div",S.__assign({"data-supertokens":"container"},{children:N.jsx("div",S.__assign({"data-supertokens":"row"},{children:N.jsx("div",S.__assign({"data-supertokens":"spinner"},{children:N.jsx(X.SpinnerIcon,{})}))}))}))},t}return e}(un.PureComponent),bi=X.withOverride("ThirdPartySignInAndUpCallbackTheme",vi),ce=function(n){var e=de.hasFontDefined(n.config.rootStyle);return N.jsx(Ke,S.__assign({loadDefaultFont:!e,userStyles:[n.config.rootStyle,n.config.signInAndUpFeature.style]},{children:N.jsx(bi,{})}))},ki=function(n){var e=X.useUserContext(),t=un.useCallback(function(){return n.recipe.webJSRecipe.signInAndUp({userContext:e})},[n.recipe,n.history,e]),l=un.useCallback(function(C){return S.__awaiter(void 0,void 0,void 0,function(){var x,A;return S.__generator(this,function(W){return C.status==="NO_EMAIL_GIVEN_BY_PROVIDER"?[2,S.SuperTokens.getInstanceOrThrow().redirectToAuth({history:n.history,queryParams:{error:"no_email_present"},redirectBack:!1})]:C.status==="OK"?(x=n.recipe.webJSRecipe.getStateAndOtherInfoFromStorage({userContext:e}),A=x===void 0?void 0:x.redirectToPath,[2,ui.Session.getInstanceOrThrow().validateGlobalClaimsAndHandleSuccessRedirection({rid:n.recipe.config.recipeId,successRedirectContext:{action:"SUCCESS",isNewUser:C.createdNewUser,redirectToPath:A}},e,n.history)]):[2]})})},[n.recipe,n.history,e]),d=un.useCallback(function(C){return Ve.default.isThisError(C)?S.SuperTokens.getInstanceOrThrow().redirectToAuth({history:n.history,queryParams:{error:"custom",message:C.message},redirectBack:!1}):S.SuperTokens.getInstanceOrThrow().redirectToAuth({history:n.history,queryParams:{error:"signin"},redirectBack:!1})},[n.recipe,n.history]);S.useOnMountAPICall(t,l,d);var w=n.useComponentOverrides();return N.jsx(X.ComponentOverrideContext.Provider,S.__assign({value:w},{children:N.jsx(X.FeatureWrapper,S.__assign({useShadowDom:n.recipe.config.useShadowDom,defaultStore:pe},{children:N.jsxs(un.Fragment,{children:[n.children===void 0&&N.jsx(ce,{config:n.recipe.config}),n.children]})}))}))},ge=function(n){S.__extends(e,n);function e(t){var l=n.call(this)||this;return l.recipeInstance=t,l.getFeatures=function(d){d===void 0&&(d=_n.useContext);var w={};if(l.recipeInstance.config.signInAndUpFeature.disableDefaultUI!==!0){var C=l.recipeInstance.config.appInfo.websiteBasePath.appendPath(new Re.default("/"));w[C.getAsStringDangerous()]={matches:S.matchRecipeIdUsingQueryParams(l.recipeInstance.config.recipeId),component:function(A){return l.getFeatureComponent("signinup",A,d)},recipeID:_n.ThirdParty.RECIPE_ID}}var x=l.recipeInstance.config.appInfo.websiteBasePath.appendPath(new Re.default("/callback/:id"));return w[x.getAsStringDangerous()]={matches:function(){return _n.matchRecipeIdUsingState(l.recipeInstance,{})},component:function(A){return l.getFeatureComponent("signinupcallback",A,d)},recipeID:_n.ThirdParty.RECIPE_ID},w},l.getFeatureComponent=function(d,w,C){if(C===void 0&&(C=_n.useContext),d==="signinup")return w.redirectOnSessionExists!==!1?N.jsx(X.UserContextWrapper,S.__assign({userContext:w.userContext},{children:N.jsx(ze.AuthWidgetWrapper,S.__assign({authRecipe:l.recipeInstance,history:w.history},{children:N.jsx(Ne,S.__assign({recipe:l.recipeInstance},w,{useComponentOverrides:C}))}))})):N.jsx(X.UserContextWrapper,S.__assign({userContext:w.userContext},{children:N.jsx(Ne,S.__assign({recipe:l.recipeInstance},w,{useComponentOverrides:C}))}));if(d==="signinupcallback")return N.jsx(X.UserContextWrapper,S.__assign({userContext:w.userContext},{children:N.jsx(ki,S.__assign({recipe:l.recipeInstance},w,{useComponentOverrides:C}))}));throw new Error("Should never come here")},l}return e.getInstanceOrInitAndGetInstance=function(){if(e.instance===void 0){var t=_n.ThirdParty.getInstanceOrThrow();e.instance=new e(t)}return e.instance},e.getFeatures=function(t){return t===void 0&&(t=_n.useContext),e.getInstanceOrInitAndGetInstance().getFeatures(t)},e.getFeatureComponent=function(t,l,d){return d===void 0&&(d=_n.useContext),e.getInstanceOrInitAndGetInstance().getFeatureComponent(t,l,d)},e.reset=function(){!S.isTest()||(e.instance=void 0)},e.SignInAndUp=function(t){return t===void 0&&(t={}),e.getInstanceOrInitAndGetInstance().getFeatureComponent("signinup",t)},e.SignInAndUpCallback=function(t){return e.getInstanceOrInitAndGetInstance().getFeatureComponent("signinupcallback",t)},e.SignInAndUpTheme=ue,e.SignInAndUpCallbackTheme=ce,e}(X.RecipeRouter),wi=ge.SignInAndUp,Ii=ge.SignInAndUpCallback;hn.ProvidersForm=Ye;hn.SignInAndUp=wi;hn.SignInAndUpCallback=Ii;hn.SignInAndUpCallbackTheme=ce;hn.SignInAndUpThemeWrapper=ue;hn.ThirdPartyPreBuiltUI=ge;hn.defaultTranslationsThirdParty=pe;hn.useChildProps=$e;hn.useFeatureReducer=qe;var L=pn,U=mn.exports,Si=re,vn=On,Xe=Un,z=Fe,Nn=hn,yn=ft,Kn=An.exports,Ei=Dn,yi=Vn,Qe=In;function Ci(n){return n&&n.__esModule?n:{default:n}}function Ti(n){if(n&&n.__esModule)return n;var e=Object.create(null);return n&&Object.keys(n).forEach(function(t){if(t!=="default"){var l=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:function(){return n[t]}})}}),e.default=n,Object.freeze(e)}var Pi=Ci(Si),wn=Ti(Kn),Li=`/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
[data-supertokens~="container"] {
    --palette-background: 255, 255, 255;
    --palette-inputBackground: 250, 250, 250;
    --palette-inputBorder: 224, 224, 224;
    --palette-primary: 255, 155, 51;
    --palette-primaryBorder: 238, 141, 35;
    --palette-success: 65, 167, 0;
    --palette-successBackground: 217, 255, 191;
    --palette-error: 255, 23, 23;
    --palette-errorBackground: 255, 241, 235;
    --palette-textTitle: 34, 34, 34;
    --palette-textLabel: 34, 34, 34;
    --palette-textInput: 34, 34, 34;
    --palette-textPrimary: 101, 101, 101;
    --palette-textLink: 0, 118, 255;
    --palette-buttonText: 255, 255, 255;
    --palette-textGray: 128, 128, 128;
    --palette-superTokensBrandingBackground: 242, 245, 246;
    --palette-superTokensBrandingText: 173, 189, 196;

    --font-size-0: 12px;
    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 19px;
    --font-size-4: 24px;
}
/*
 * Default styles.
 */
@-webkit-keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}
@keyframes slideTop {
    0% {
        -webkit-transform: translateY(-5px);
                transform: translateY(-5px);
    }
    100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
    }
}
@-webkit-keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}
@keyframes swing-in-top-fwd {
    0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
    }
    100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
    }
}
[data-supertokens~="container"] {
    font-family: "Rubik", sans-serif;
    margin: 12px auto;
    margin-top: 26px;
    margin-bottom: 26px;
    width: 420px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
    background-color: rgb(var(--palette-background));
}
@media (max-width: 440px) {
    [data-supertokens~="container"] {
        width: 95vw;
    }
}
[data-supertokens~="row"] {
    margin: 0 auto;
    width: 76%;
    padding-top: 30px;
    padding-bottom: 10px;
}
[data-supertokens~="superTokensBranding"] {
    display: block;
    margin: 0 auto;
    background: rgb(var(--palette-superTokensBrandingBackground));
    color: rgb(var(--palette-superTokensBrandingText));
    text-decoration: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-radius: 6px 6px 0 0;
    padding: 4px 9px;
    font-weight: 300;
    font-size: var(--font-size-0);
    letter-spacing: 0.4px;
}
[data-supertokens~="generalError"] {
    background: rgb(var(--palette-errorBackground));
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    padding-left: 18px;
    padding-right: 18px;
    letter-spacing: 0.2px;
    font-size: var(--font-size-1);
    border-radius: 8px;
    color: rgb(var(--palette-error));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    word-wrap: break-word;
}
[data-supertokens~="headerTitle"] {
    font-size: var(--font-size-4);
    line-height: 40px;
    letter-spacing: 0.58px;
    font-weight: 800;
    margin-bottom: 2px;
    color: rgb(var(--palette-textTitle));
}
[data-supertokens~="headerSubtitle"] {
    margin-bottom: 21px;
}
[data-supertokens~="privacyPolicyAndTermsAndConditions"] {
    max-width: 300px;
    margin-top: 10px;
}
[data-supertokens~="privacyPolicyAndTermsAndConditions"] a {
    line-height: 21px;
}
/* TODO: split the link style into separate things*/
/* We add this before primary and secondary text, because if they are applied to the same element the other ones take priority */
[data-supertokens~="link"] {
    padding-left: 3px;
    padding-right: 3px;
    color: rgb(var(--palette-textLink));
    font-size: var(--font-size-1);
    cursor: pointer;
    letter-spacing: 0.16px;
    line-height: 26px;
}
[data-supertokens~="primaryText"] {
    font-size: var(--font-size-1);
    font-weight: 500;
    letter-spacing: 0.4px;
    line-height: 21px;
    color: rgb(var(--palette-textLabel));
}
[data-supertokens~="secondaryText"] {
    font-size: var(--font-size-1);
    font-weight: 300;
    letter-spacing: 0.4px;
    color: rgb(var(--palette-textPrimary));
}
[data-supertokens~="divider"] {
    margin-top: 1em;
    margin-bottom: 1em;
    border-bottom: 0.3px solid #dddddd;
    align-items: center;
    padding-bottom: 5px;
}
[data-supertokens~="headerTinyTitle"] {
    margin-top: 13px;
    font-size: var(--font-size-3);
    letter-spacing: 1.1px;
    font-weight: 500;
    line-height: 28px;
}
[data-supertokens~="secondaryLinkWithArrow"] {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}
[data-supertokens~="secondaryLinkWithArrow"]:hover {
    position: relative;
    left: 2px;
    word-spacing: 4px;
}
[data-supertokens~="generalSuccess"] {
    color: rgb(var(--palette-success));
    font-size: var(--font-size-1);
    background: rgb(var(--palette-successBackground));
    -webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
            animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    padding: 9px 15px 9px 15px;
    border-radius: 6px;
    display: inline-block;
}
[data-supertokens~="spinner"] {
    width: 80px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 40px;
    margin: 0 auto;
}
[data-supertokens~="error"] {
    color: rgb(var(--palette-error));
}
[data-supertokens~="linkButton"] {
    background-color: transparent;
    border: 0;
}
[data-supertokens~="secondaryLinkWithLeftArrow"] {
    margin-top: 10px;
    margin-bottom: 40px;
    cursor: pointer;
}
[data-supertokens~="secondaryLinkWithLeftArrow"] svg {
    margin-right: 0.3em;
}
[data-supertokens~="secondaryLinkWithLeftArrow"]:hover svg {
    position: relative;
    left: -4px;
}
[data-supertokens~="button"] {
    background-color: rgb(var(--palette-primary));
    color: rgb(var(--palette-buttonText));
    width: 100%;
    height: 34px;
    font-weight: 700;
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    border-color: rgb(var(--palette-primaryBorder));
    background-position: center;
    transition: all 0.4s;
    background-size: 12000%;
    cursor: pointer;
}
[data-supertokens~="button"]:disabled {
    border: none;
    cursor: no-drop;
}
[data-supertokens~="button"]:active {
    outline: none;
    transition: all 0s;
    background-size: 100%;
    -webkit-filter: brightness(0.85);
            filter: brightness(0.85);
}
[data-supertokens~="button"]:focus {
    outline: none;
}
/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
[data-supertokens~="inputContainer"] {
    margin-top: 6px;
}
[data-supertokens~="inputWrapper"] {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgb(var(--palette-inputBackground));
    height: 34px;
    border-radius: 6px;
    border: 1px solid rgb(var(--palette-inputBorder));
}
[data-supertokens~="inputWrapper"][focus-within] {
    background-color: rgba(var(--palette-inputBackground), 0.25);
    border: 1px solid rgb(var(--palette-primary));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-primary), 0.25);
    outline: none;
}
[data-supertokens~="inputWrapper"]:focus-within {
    background-color: rgba(var(--palette-inputBackground), 0.25);
    border: 1px solid rgb(var(--palette-primary));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-primary), 0.25);
    outline: none;
}
[data-supertokens~="inputError"] {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}
[data-supertokens~="inputError"][focus-within] {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}
[data-supertokens~="inputError"]:focus-within {
    border: 1px solid rgb(var(--palette-error));
    box-shadow: 0 0 0 0.2rem rgba(var(--palette-error), 0.25);
    outline: none;
}
[data-supertokens~="input"] {
    box-sizing: border-box;
    padding-left: 15px;
    -webkit-filter: none;
            filter: none;
    color: rgb(var(--palette-textInput));
    background-color: transparent;
    border-radius: 6px;
    font-size: var(--font-size-1);
    border: none;
    padding-right: 25px;
    letter-spacing: 1.2px;
    flex: 9 1 75%;
    width: 75%;
    height: 32px;
}
[data-supertokens~="input"]:focus {
    border: none;
    outline: none;
}
[data-supertokens~="input"]:-webkit-autofill,
[data-supertokens~="input"]:-webkit-autofill:hover,
[data-supertokens~="input"]:-webkit-autofill:focus,
[data-supertokens~="input"]:-webkit-autofill:active {
    -webkit-text-fill-color: rgb(var(--palette-textInput));
    box-shadow: 0 0 0 30px rgb(var(--palette-inputBackground)) inset;
}
[data-supertokens~="inputAdornment"] {
    justify-content: center;
    margin-right: 5px;
}
[data-supertokens~="showPassword"] {
    cursor: pointer;
}
[data-supertokens~="forgotPasswordLink"] {
    margin-top: 10px;
}
[data-supertokens~="enterEmailSuccessMessage"] {
    margin-top: 15px;
    margin-bottom: 15px;
    word-break: break-word;
}
[data-supertokens~="submitNewPasswordSuccessMessage"] {
    margin-top: 15px;
    margin-bottom: 15px;
}
[data-supertokens~="inputErrorMessage"] {
    padding-top: 5px;
    padding-bottom: 5px;
    color: rgb(var(--palette-error));
    line-height: 24px;
    font-weight: 400;
    font-size: var(--font-size-1);
    text-align: left;
    -webkit-animation: slideTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slideTop 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    max-width: 330px;
}
@media (max-width: 440px) {
    [data-supertokens~="inputErrorMessage"] {
        max-width: 250px;
    }
}
[data-supertokens~="inputErrorSymbol"] {
    margin-right: 5px;
    top: 1px;
    position: relative;
    left: 2px;
}
[data-supertokens~="label"] {
    text-align: left;
    font-weight: 600;
    font-size: var(--font-size-1);
    line-height: 24px;
    color: rgb(var(--palette-textLabel));
}
[data-supertokens~="formRow"] {
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 34px;
}
[data-supertokens~="formRow"][data-supertokens~="hasError"] {
    padding-bottom: 0;
}
[data-supertokens~="sendVerifyEmailIcon"] {
    margin-top: 11px;
}
[data-supertokens~="headerTinyTitle"] {
    margin-top: 13px;
    font-size: var(--font-size-3);
    letter-spacing: 1.1px;
    font-weight: 500;
    line-height: 28px;
}
[data-supertokens~="sendVerifyEmailText"] {
    line-height: 21px;
    font-size: var(--font-size-1);
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.8px;
}
[data-supertokens~="secondaryLinkWithArrow"] {
    margin-top: 10px;
    margin-bottom: 30px;
    cursor: pointer;
}
[data-supertokens~="secondaryLinkWithArrow"]:hover {
    position: relative;
    left: 2px;
    word-spacing: 4px;
}
[data-supertokens~="sendVerifyEmailResend"] {
    margin-top: 13px;
    font-weight: 300;
}
[data-supertokens~="sendVerifyEmailResend"]:hover {
    text-decoration: underline;
}
[data-supertokens~="noFormRow"] {
    padding-bottom: 25px;
}
[data-supertokens~="emailVerificationButtonWrapper"] {
    padding-top: 25px;
    max-width: 96px;
    margin: 0 auto;
}
[data-supertokens~="resetPasswordHeaderTitle"] {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
[data-supertokens~="backButtonCommon"] {
    width: 16px;
    height: 13px;
}
[data-supertokens~="backButton"] {
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0px;
}
[data-supertokens~="backButtonPlaceholder"] {
    display: block;
}
[data-supertokens~="resendEmailLink"] {
    display: inline-block;
}
[data-supertokens~="generalSuccess"] {
    margin-bottom: 20px;
    -webkit-animation: swingIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) alternate 2 both;
            animation: swingIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) alternate 2 both;
}
[data-supertokens~="codeInputLabelWrapper"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
[data-supertokens~="headerSubtitle"] strong {
    max-width: 100%;
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
[data-supertokens~="sendCodeText"] {
    margin-top: 15px;
    margin-bottom: 20px;
}
[data-supertokens~="sendCodeText"] strong {
    max-width: 100%;
    display: inline-block;
    vertical-align: bottom;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
[data-supertokens~="resendCodeBtn"] {
    width: auto;
    margin-top: 0;
    line-height: 24px;
}
[data-supertokens~="resendCodeBtn"]:hover {
    text-decoration: underline;
}
[data-supertokens~="resendCodeBtn"]:disabled {
    color: rgb(var(--palette-textPrimary));
    cursor: default;
    text-decoration: none;
}
[data-supertokens~="phoneInputLibRoot"] {
    display: flex;
    align-items: center;
}
[data-supertokens~="phoneInputWrapper"] {
    display: flex;
    align-items: center;
}
[data-supertokens~="phoneInputWrapper"] .iti [data-supertokens~="input"] {
    padding-left: 15px;
}
[data-supertokens~="phoneInputWrapper"] .iti {
    flex: 1 1;
    min-width: 0;
    width: 100%;
    background: transparent;
    border: none;
    color: inherit;
    outline: none;
}
[data-supertokens~="continueButtonWrapper"] {
    margin-top: 10px;
    margin-bottom: 30px;
}
.iti__country-list {
    border: 0;
    top: 40px;
    width: min(72.2vw, 320px);
    border-radius: 6;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.16);
}
.iti__country {
    display: flex;
    align-items: center;
    height: 34px;
    cursor: pointer;

    padding: 0 8px;
}
.iti__country-name {
    color: var(--palette-textLabel);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: "0 16px";
}
[data-supertokens~="row"] {
    padding-bottom: 30px;
}
[data-supertokens~="providerContainer"] {
    padding-top: 9px;
    padding-bottom: 9px;
}
[data-supertokens~="providerButton"] {
    border-color: rgb(221, 221, 221) !important;
}
[data-supertokens~="providerButton"] {
    min-height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 8px;

    background-color: white;
    color: black;
}
[data-supertokens~="providerButton"]:hover {
    -webkit-filter: none !important;
            filter: none !important;
}
[data-supertokens~="providerButton"]:hover {
    background-color: #fafafa;
}
[data-supertokens~="providerButtonLeft"] {
    min-width: 34px;
    margin-left: 66px;
}
[data-supertokens~="providerButtonLogo"] {
    height: 30px;
    display: flex;
}
[data-supertokens~="providerButtonLogoCenter"] {
    display: flex;
    margin: auto;
}
[data-supertokens~="providerButtonText"] {
    font-weight: 400;
    text-align: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
}
[data-supertokens~="providerButtonText"]:only-child {
    margin: 0 auto;
}
[data-supertokens~="thirdPartyPasswordlessDivider"] {
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rgb(var(--palette-textPrimary));
}
[data-supertokens~="thirdPartyPasswordlessDividerText"] {
    flex: 1 1;
    margin-top: 0.75em;
}
[data-supertokens~="divider"] {
    flex: 3 3;
}
[data-supertokens~="providerButton"] {
    margin: auto !important;
    max-width: 240px !important;
}
[data-supertokens~="providerButtonLeft"] {
    margin-left: 30px !important;
}
`,Ri=function(n){var e=n.children,t=n.userStyles,l=n.loadDefaultFont;return U.jsxs(Kn.Fragment,{children:[e,l&&U.jsx("link",{href:"//fonts.googleapis.com/css?family=Rubik:wght@300;400;600;500;700",rel:"stylesheet",type:"text/css"}),U.jsxs("style",{children:[Li,t.join(`
`)]})]})},Ni=vn.withOverride("ThirdPartyPasswordlessHeader",function(){var e=Qe.useTranslation();return U.jsxs(Kn.Fragment,{children:[U.jsx("div",L.__assign({"data-supertokens":"headerTitle"},{children:e("THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_HEADER_TITLE")})),U.jsx("div",{"data-supertokens":"divider"})]})}),Ai=function(n){var e,t=Qe.useTranslation(),l=L.SuperTokens.usesDynamicLoginMethods,d=vn.useDynamicLoginMethods(),w;if(l){if(d.loaded===!1)throw new Error("Component requiring dynamicLoginMethods rendered without FeatureWrapper.");w=d.loginMethods}var C=((e=n.tpChildProps)===null||e===void 0?void 0:e.providers)!==void 0&&n.tpChildProps.providers.length>0,x=l===!1&&C||(w==null?void 0:w.thirdparty.enabled)&&C,A=n.passwordlessRecipe!==void 0&&l===!1||(w==null?void 0:w.passwordless.enabled);return x===!1&&A===!1?null:n.activeScreen===z.SignInUpScreens.CloseTab?U.jsx(z.CloseTabScreen,L.__assign({},n.pwlessChildProps)):n.activeScreen===z.SignInUpScreens.LinkSent?U.jsx(z.LinkSent,L.__assign({},Cn(n.pwlessChildProps,n),{loginAttemptInfo:n.pwlessState.loginAttemptInfo})):U.jsxs("div",L.__assign({"data-supertokens":"container"},{children:[U.jsx("div",L.__assign({"data-supertokens":"row"},{children:(n.pwlessChildProps===void 0||n.pwlessState.loaded===!0)&&U.jsxs(wn.Fragment,{children:[n.activeScreen===z.SignInUpScreens.UserInputCodeForm?U.jsx(z.UserInputCodeFormHeader,L.__assign({},Cn(n.pwlessChildProps,n),{loginAttemptInfo:n.pwlessState.loginAttemptInfo})):U.jsx(Ni,{}),n.commonState.error&&U.jsx(yi.GeneralError,{error:n.commonState.error}),n.tpChildProps!==void 0&&x&&n.activeScreen!==z.SignInUpScreens.UserInputCodeForm&&U.jsx(Nn.ProvidersForm,L.__assign({},n.tpChildProps,{featureState:n.tpState,dispatch:n.tpDispatch})),x&&A&&n.activeScreen!==z.SignInUpScreens.UserInputCodeForm&&U.jsxs("div",L.__assign({"data-supertokens":"thirdPartyPasswordlessDivider"},{children:[U.jsx("div",{"data-supertokens":"divider"}),U.jsx("div",L.__assign({"data-supertokens":"thirdPartyPasswordlessDividerText"},{children:t("THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_DIVIDER_OR")})),U.jsx("div",{"data-supertokens":"divider"})]})),A?n.activeScreen===z.SignInUpScreens.EmailForm?U.jsx(z.EmailForm,L.__assign({},Cn(n.pwlessChildProps,n))):n.activeScreen===z.SignInUpScreens.PhoneForm?U.jsx(z.PhoneForm,L.__assign({},Cn(n.pwlessChildProps,n))):n.activeScreen===z.SignInUpScreens.EmailOrPhoneForm?U.jsx(z.EmailOrPhoneForm,L.__assign({},Cn(n.pwlessChildProps,n))):n.activeScreen===z.SignInUpScreens.UserInputCodeForm?U.jsx(z.UserInputCodeForm,L.__assign({},Cn(n.pwlessChildProps,n),{loginAttemptInfo:n.pwlessState.loginAttemptInfo,onSuccess:n.pwlessChildProps.onSuccess})):null:null]})})),U.jsx(Xe.SuperTokensBranding,{})]}))};function _e(n){var e=Ei.hasFontDefined(n.config.rootStyle),t=n.passwordlessRecipe!==void 0&&n.pwlessChildProps!==void 0?L.__assign(L.__assign({},n),{activeScreen:z.getActiveScreen({config:n.pwlessChildProps.config,featureState:n.pwlessState}),pwlessChildProps:n.pwlessChildProps,passwordlessRecipe:n.passwordlessRecipe}):L.__assign(L.__assign({},n),{activeScreen:void 0,passwordlessRecipe:void 0,pwlessChildProps:void 0}),l;return t.activeScreen===z.SignInUpScreens.CloseTab?l=n.passwordlessRecipe.config.signInUpFeature.closeTabScreenStyle:t.activeScreen===z.SignInUpScreens.LinkSent?l=n.passwordlessRecipe.config.signInUpFeature.linkSentScreenStyle:t.activeScreen===z.SignInUpScreens.UserInputCodeForm?l=n.passwordlessRecipe.config.signInUpFeature.userInputCodeFormStyle:l=n.config.thirdPartyProviderAndEmailOrPhoneFormStyle,U.jsx(Ri,L.__assign({loadDefaultFont:!e,userStyles:[n.config.rootStyle,l]},{children:U.jsx(Ai,L.__assign({},t))}))}function Cn(n,e){return{recipeImplementation:n.recipeImplementation,config:n.config,clearError:function(){return e.pwlessDispatch({type:"setError",error:void 0})},onError:function(t){return e.pwlessDispatch({type:"setError",error:t})},error:e.pwlessState.error}}var Oi={en:L.__assign(L.__assign(L.__assign({},Nn.defaultTranslationsThirdParty.en),z.defaultTranslationsPasswordless.en),{THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_HEADER_TITLE:"Sign Up or Log In",THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_DIVIDER_OR:"or"})},Ui=function(n){var e,t=Nn.useFeatureReducer(),l=t[0],d=t[1],w=vn.useUserContext(),C=z.useFeatureReducer((e=n.recipe.passwordlessRecipe)===null||e===void 0?void 0:e.webJSRecipe,w),x=C[0],A=C[1],W=wn.useReducer(function(b,D){switch(D.type){case"startLogin":case"resendCode":return L.__assign(L.__assign({},b),{error:void 0});case"load":return D.loginAttemptInfo!==void 0?L.__assign(L.__assign({},b),{error:D.error}):L.__assign(L.__assign({},b),{error:b.error!==void 0?b.error:D.error});case"restartFlow":case"setError":return L.__assign(L.__assign({},b),{error:D.error});default:return b}},{error:void 0},function(){var b=l.error;return x.error!==void 0&&(b===void 0||b==="SOMETHING_WENT_WRONG_ERROR")&&(b=x.error),{error:b}}),$=W[0],G=W[1],an=wn.useCallback(function(b){G(b),d(b)},[d,G]),en=Nn.useChildProps(n.recipe.thirdPartyRecipe),V=wn.useCallback(function(b){G(b),A(b)},[A,G]),fn=z.useSuccessInAnotherTabChecker(x,V,w),xn=z.useChildProps(n.recipe.passwordlessRecipe,V,x,fn,w,n.history),tn={passwordlessRecipe:n.recipe.passwordlessRecipe,thirdPartyRecipe:n.recipe.thirdPartyRecipe,config:n.recipe.config,history:n.history,commonState:$,tpState:l,tpDispatch:an,tpChildProps:en,pwlessState:x,pwlessDispatch:V,pwlessChildProps:xn};return U.jsxs(Kn.Fragment,{children:[n.children===void 0&&U.jsx(_e,L.__assign({},tn)),n.children&&wn.Children.map(n.children,function(b){return wn.isValidElement(b)?wn.cloneElement(b,tn):b})]})},Ae=function(n){var e=n.useComponentOverrides();return U.jsx(vn.ComponentOverrideContext.Provider,L.__assign({value:e},{children:U.jsx(vn.FeatureWrapper,L.__assign({useShadowDom:n.recipe.config.useShadowDom,defaultStore:Oi},{children:U.jsx(Ui,L.__assign({},n))}))}))},Yn=function(n){L.__extends(e,n);function e(l){var d=n.call(this)||this;d.recipeInstance=l,d.getFeatureComponent=function(x,A,W){if(W===void 0&&(W=yn.useContext),x==="signInUp")return A.redirectOnSessionExists!==!1?U.jsx(vn.UserContextWrapper,L.__assign({userContext:A.userContext},{children:U.jsx(Xe.AuthWidgetWrapper,L.__assign({authRecipe:d.recipeInstance,history:A.history},{children:U.jsx(Ae,L.__assign({recipe:d.recipeInstance},A,{useComponentOverrides:W}))}))})):U.jsx(vn.UserContextWrapper,L.__assign({userContext:A.userContext},{children:U.jsx(Ae,L.__assign({recipe:d.recipeInstance},A,{useComponentOverrides:W}))}));if(x==="linkClickedScreen"){if(d.passwordlessPreBuiltUI===void 0)throw new Error("Embedding this component requires the passwordless recipe to be enabled. Please check the value of disablePasswordless in the configuration.");return d.passwordlessPreBuiltUI.getFeatureComponent(x,A,W)}else if(x==="signinupcallback"){if(d.thirdPartyPreBuiltUI===void 0)throw new Error("Embedding this component requires the thirdparty recipe to be enabled. Please check the value of signInUpFeature.providers in the configuration.");return d.thirdPartyPreBuiltUI.getFeatureComponent(x,A,W)}else throw new Error("Should never come here.")},d.getFeatures=function(x){var A,W;x===void 0&&(x=yn.useContext);var $={};if(d.passwordlessPreBuiltUI!==void 0&&($=L.__assign(L.__assign({},$),d.passwordlessPreBuiltUI.getFeatures(x))),d.thirdPartyPreBuiltUI!==void 0&&($=L.__assign(L.__assign({},$),d.thirdPartyPreBuiltUI.getFeatures(x))),d.recipeInstance.config.passwordlessConfig!==void 0&&((A=d.recipeInstance.config.passwordlessConfig.signInUpFeature)===null||A===void 0?void 0:A.disableDefaultUI)!==!0||d.recipeInstance.config.thirdpartyConfig!==void 0&&((W=d.recipeInstance.config.thirdpartyConfig.signInAndUpFeature)===null||W===void 0?void 0:W.disableDefaultUI)!==!0){var G=d.recipeInstance.config.appInfo.websiteBasePath.appendPath(new Pi.default("/"));$[G.getAsStringDangerous()]={matches:L.matchRecipeIdUsingQueryParams(d.recipeInstance.config.recipeId),component:function(an){return d.getFeatureComponent("signInUp",an,x)},recipeID:yn.ThirdPartyPasswordless.RECIPE_ID}}return L.__assign({},$)};var w=l.thirdPartyRecipe,C=l.passwordlessRecipe;return w!==void 0&&(d.thirdPartyPreBuiltUI=new Nn.ThirdPartyPreBuiltUI(w)),C!==void 0&&(d.passwordlessPreBuiltUI=new z.PasswordlessPreBuiltUI(C)),d}e.getInstanceOrInitAndGetInstance=function(){if(e.instance===void 0){var l=yn.ThirdPartyPasswordless.getInstanceOrThrow();e.instance=new e(l)}return e.instance},e.getFeatures=function(l){return l===void 0&&(l=yn.useContext),e.getInstanceOrInitAndGetInstance().getFeatures(l)},e.getFeatureComponent=function(l,d,w){return w===void 0&&(w=yn.useContext),e.getInstanceOrInitAndGetInstance().getFeatureComponent(l,d,w)},e.reset=function(){!L.isTest()||(e.instance=void 0)};var t;return t=e,e.SignInAndUp=function(l){return l===void 0&&(l={}),t.getFeatureComponent("signInUp",l)},e.ThirdPartySignInAndUpCallback=function(l){return t.getFeatureComponent("signinupcallback",l)},e.SignInUpTheme=_e,e.PasswordlessLinkClicked=function(l){return t.getFeatureComponent("linkClickedScreen",l)},e}(vn.RecipeRouter),Di=Yn.SignInAndUp,Fi=Yn.ThirdPartySignInAndUpCallback,ji=Yn.PasswordlessLinkClicked;Pn.PasswordlessLinkClicked=ji;Pn.SignInAndUp=Di;Pn.SignInUpTheme=_e;Pn.ThirdPartyPasswordlessPreBuiltUI=Yn;Pn.ThirdPartySignInAndUpCallback=Fi;(function(n){function e(t){for(var l in t)n.hasOwnProperty(l)||(n[l]=t[l])}n.__esModule=!0,e(Pn)})(De);const Oe=[De.ThirdPartyPasswordlessPreBuiltUI];var te={},Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});var qn=On;Ln.canHandleRoute=qn.canHandleRoute;Ln.default=qn.UI;Ln.getRoutingComponent=qn.getRoutingComponent;Ln.getSuperTokensRoutesForReactRouterDom=qn.getSuperTokensRoutesForReactRouterDom;(function(n){function e(t){for(var l in t)n.hasOwnProperty(l)||(n[l]=t[l])}n.__esModule=!0,e(Ln)})(te);function Bi(n){return te.canHandleRoute(Oe)?te.getRoutingComponent(Oe):"Route not found"}const Wi={mounted:()=>{xt.render(mt.createElement(Bi),document.getElementById("authapp"))}},Mi={id:"authapp"};function zi(n,e,t,l,d,w){return bt(),kt("div",Mi)}const Hi=vt(Wi,[["render",zi]]);export{Hi as default};
