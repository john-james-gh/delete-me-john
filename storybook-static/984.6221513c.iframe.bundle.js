(self.webpackChunkdelete_me_john=self.webpackChunkdelete_me_john||[]).push([[984],{"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),style=__webpack_require__("./node_modules/styled-jsx/style.js"),style_default=__webpack_require__.n(style),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_button.A,options);stories_button.A&&stories_button.A.locals&&stories_button.A.locals;function cov_pd09ra1ad(){var path="C:\\Users\\John James\\Documents\\GitHub\\delete-me-john\\src\\stories\\Button.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2291f5b038ec8255b2a3f5b84c20a572233e9a0b"===coverage[path].hash||(coverage[path]={path:"C:\\Users\\John James\\Documents\\GitHub\\delete-me-john\\src\\stories\\Button.tsx",statementMap:{0:{start:{line:5,column:71},end:{line:33,column:1}},1:{start:{line:6,column:17},end:{line:6,column:86}},2:{start:{line:7,column:4},end:{line:32,column:7}},3:{start:{line:34,column:0},end:{line:106,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:71},end:{line:5,column:72}},loc:{start:{line:5,column:145},end:{line:33,column:1}},line:5}},branchMap:{0:{loc:{start:{line:5,column:74},end:{line:5,column:89}},type:"default-arg",locations:[{start:{line:5,column:84},end:{line:5,column:89}}],line:5},1:{loc:{start:{line:5,column:91},end:{line:5,column:106}},type:"default-arg",locations:[{start:{line:5,column:98},end:{line:5,column:106}}],line:5},2:{loc:{start:{line:6,column:17},end:{line:6,column:86}},type:"cond-expr",locations:[{start:{line:6,column:27},end:{line:6,column:54}},{start:{line:6,column:57},end:{line:6,column:86}}],line:6},3:{loc:{start:{line:17,column:20},end:{line:21,column:25}},type:"binary-expr",locations:[{start:{line:17,column:20},end:{line:17,column:25}},{start:{line:17,column:29},end:{line:17,column:52}},{start:{line:17,column:56},end:{line:17,column:71}},{start:{line:17,column:75},end:{line:21,column:19}},{start:{line:21,column:23},end:{line:21,column:25}}],line:17}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0],1:[0],2:[0,0],3:[0,0,0,0,0]},inputSourceMap:{version:3,sources:["C:/Users/John James/Documents/GitHub/delete-me-john/src/stories/Button.tsx"],sourcesContent:["import React from 'react';\n\nimport './button.css';\n\nexport interface ButtonProps {\n  /** Is this the principal call to action on the page? */\n  primary?: boolean;\n  /** What background color to use */\n  backgroundColor?: string;\n  /** How large should the button be? */\n  size?: 'small' | 'medium' | 'large';\n  /** Button contents */\n  label: string;\n  /** Optional click handler */\n  onClick?: () => void;\n}\n\n/** Primary UI component for user interaction */\nexport const Button = ({\n  primary = false,\n  size = 'medium',\n  backgroundColor,\n  label,\n  ...props\n}: ButtonProps) => {\n  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';\n  return (\n    <button\n      type=\"button\"\n      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}\n      {...props}\n    >\n      {label}\n      <style jsx>{`\n        button {\n          background-color: ${backgroundColor};\n        }\n      `}</style>\n    </button>\n  );\n};\n"],names:[],mappings:"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"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2291f5b038ec8255b2a3f5b84c20a572233e9a0b"});var actualCoverage=coverage[path];return cov_pd09ra1ad=function(){return actualCoverage},actualCoverage}cov_pd09ra1ad(),cov_pd09ra1ad().s[0]++;const Button=({primary=(cov_pd09ra1ad().b[0][0]++,!1),size=(cov_pd09ra1ad().b[1][0]++,"medium"),backgroundColor,label,...props})=>{cov_pd09ra1ad().f[0]++;const mode=(cov_pd09ra1ad().s[1]++,primary?(cov_pd09ra1ad().b[2][0]++,"storybook-button--primary"):(cov_pd09ra1ad().b[2][1]++,"storybook-button--secondary"));return cov_pd09ra1ad().s[2]++,(0,jsx_runtime.jsxs)("button",{type:"button",...props,className:style_default().dynamic([["6675b9302a0356ac",[backgroundColor]]])+" "+(cov_pd09ra1ad().b[3][0]++,props&&(cov_pd09ra1ad().b[3][1]++,null!=props.className)&&(cov_pd09ra1ad().b[3][2]++,props.className)||(cov_pd09ra1ad().b[3][3]++,["storybook-button",`storybook-button--${size}`,mode].join(" "))||(cov_pd09ra1ad().b[3][4]++,"")),children:[label,(0,jsx_runtime.jsx)(style_default(),{id:"6675b9302a0356ac",dynamic:[backgroundColor],children:`button.__jsx-style-dynamic-selector{background-color:${backgroundColor}}`})]})};cov_pd09ra1ad().s[3]++,Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}}},"./src/stories/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Header});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Button=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/stories/Button.tsx")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),header=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(header.A,options);header.A&&header.A.locals&&header.A.locals;function cov_161qvhcy7e(){var path="C:\\Users\\John James\\Documents\\GitHub\\delete-me-john\\src\\stories\\Header.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4fba1989ba65beeb3a578f52b1fad844283e500e"===coverage[path].hash||(coverage[path]={path:"C:\\Users\\John James\\Documents\\GitHub\\delete-me-john\\src\\stories\\Header.tsx",statementMap:{0:{start:{line:5,column:22},end:{line:77,column:6}},1:{start:{line:5,column:84},end:{line:77,column:6}},2:{start:{line:78,column:0},end:{line:149,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:22},end:{line:5,column:23}},loc:{start:{line:5,column:84},end:{line:77,column:6}},line:5}},branchMap:{0:{loc:{start:{line:41,column:30},end:{line:73,column:22}},type:"cond-expr",locations:[{start:{line:41,column:51},end:{line:59,column:22}},{start:{line:59,column:39},end:{line:73,column:22}}],line:41}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,sources:["C:/Users/John James/Documents/GitHub/delete-me-john/src/stories/Header.tsx"],sourcesContent:['import React from \'react\';\n\nimport { Button } from \'./Button\';\nimport \'./header.css\';\n\ntype User = {\n  name: string;\n};\n\nexport interface HeaderProps {\n  user?: User;\n  onLogin?: () => void;\n  onLogout?: () => void;\n  onCreateAccount?: () => void;\n}\n\nexport const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (\n  <header>\n    <div className="storybook-header">\n      <div>\n        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n              fill="#FFF"\n            />\n            <path\n              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n              fill="#555AB9"\n            />\n            <path\n              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"\n              fill="#91BAF8"\n            />\n          </g>\n        </svg>\n        <h1>Acme</h1>\n      </div>\n      <div>\n        {user ? (\n          <>\n            <span className="welcome">\n              Welcome, <b>{user.name}</b>!\n            </span>\n            <Button size="small" onClick={onLogout} label="Log out" />\n          </>\n        ) : (\n          <>\n            <Button size="small" onClick={onLogin} label="Log in" />\n            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />\n          </>\n        )}\n      </div>\n    </div>\n  </header>\n);\n'],names:[],mappings:"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C,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;uCAG3D,CAAC;;0CACC,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;0CACvD,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;gCAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;;;;;OAMnF"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4fba1989ba65beeb3a578f52b1fad844283e500e"});var actualCoverage=coverage[path];return cov_161qvhcy7e=function(){return actualCoverage},actualCoverage}cov_161qvhcy7e(),cov_161qvhcy7e().s[0]++;const Header=({user,onLogin,onLogout,onCreateAccount})=>(cov_161qvhcy7e().f[0]++,cov_161qvhcy7e().s[1]++,(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(cov_161qvhcy7e().b[0][0]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogout,label:"Log out"})]})):(cov_161qvhcy7e().b[0][1]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.$,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]}))})]})}));cov_161qvhcy7e().s[2]++,Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  name: string;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},description:""},onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCreateAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/button.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n.storybook-button--primary {\n  background-color: #1ea7fd;\n  color: white;\n}\n.storybook-button--secondary {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n.storybook-button--small {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n.storybook-button--medium {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n.storybook-button--large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n","",{version:3,sources:["webpack://./src/stories/button.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,0EAA0E;AAC5E;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,qDAAqD;EACrD,6BAA6B;EAC7B,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB",sourcesContent:[".storybook-button {\n  display: inline-block;\n  cursor: pointer;\n  border: 0;\n  border-radius: 3em;\n  font-weight: 700;\n  line-height: 1;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n.storybook-button--primary {\n  background-color: #1ea7fd;\n  color: white;\n}\n.storybook-button--secondary {\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n  background-color: transparent;\n  color: #333;\n}\n.storybook-button--small {\n  padding: 10px 16px;\n  font-size: 12px;\n}\n.storybook-button--medium {\n  padding: 11px 20px;\n  font-size: 14px;\n}\n.storybook-button--large {\n  padding: 12px 24px;\n  font-size: 16px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/header.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".storybook-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 6px 0 6px 10px;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  margin-right: 10px;\n  color: #333;\n  font-size: 14px;\n}\n","",{version:3,sources:["webpack://./src/stories/header.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2CAA2C;EAC3C,kBAAkB;EAClB,0EAA0E;AAC5E;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;AACjB",sourcesContent:[".storybook-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  display: inline-block;\n  vertical-align: top;\n  margin: 6px 0 6px 10px;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  margin-right: 10px;\n  color: #333;\n  font-size: 14px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/styled-jsx/style.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/styled-jsx/dist/index/index.js").style}}]);