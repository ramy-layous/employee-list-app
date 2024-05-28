(function(){"use strict";var e={2755:function(e,t,n){var o=n(5130),a=n(6768);const r=e=>((0,a.Qi)("data-v-0684b79b"),e=e(),(0,a.jt)(),e),i={class:"main-container"},l=r((()=>(0,a.Lk)("h1",null,"Our Employees",-1)));function s(e,t,n,o,r,s){const c=(0,a.g2)("EmployeeList");return(0,a.uX)(),(0,a.CE)("div",i,[l,(0,a.bF)(c)])}var c=n(4232);const u={class:"list-container"},p={class:"page-number"},d={class:"pagination"};function f(e,t,n,o,r,i){const l=(0,a.g2)("EmployeeCard"),s=(0,a.g2)("PaginationButton");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.employees,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.id,employee:e},null,8,["employee"])))),128))]),(0,a.Lk)("p",p,(0,c.v_)(r.page)+" / "+(0,c.v_)(r.totalPages),1),(0,a.Lk)("div",d,[(0,a.bF)(s,{onClick:i.prevPage,disabled:1===r.page},{default:(0,a.k6)((()=>[(0,a.eW)("Previous Page")])),_:1},8,["onClick","disabled"]),(0,a.bF)(s,{onClick:i.nextPage,disabled:r.page===r.totalPages},{default:(0,a.k6)((()=>[(0,a.eW)("Next Page")])),_:1},8,["onClick","disabled"])])])}var m=n(4373);const v={class:"employee-card"},g={class:"profile-pic"},y=["src"],h=["href"];function b(e,t,n,o,r,i){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",g,[(0,a.Lk)("img",{src:n.employee.avatar,alt:"Profile"},null,8,y)]),(0,a.Lk)("p",null,(0,c.v_)(i.fullName),1),(0,a.Lk)("a",{href:`mailto:${n.employee.email}`},"Contact",8,h)])}var k={name:"EmployeeCard",props:{employee:{type:Object,required:!0}},computed:{fullName(){return`${this.employee.first_name} ${this.employee.last_name}`}}},_=n(1241);const P=(0,_.A)(k,[["render",b],["__scopeId","data-v-79148c6a"]]);var C=P;const E=["disabled"];function O(e,t,n,o,r,i){return(0,a.uX)(),(0,a.CE)("button",{onClick:t[0]||(t[0]=(...e)=>i.onClick&&i.onClick(...e)),disabled:n.disabled},[(0,a.RG)(e.$slots,"default",{},void 0,!0)],8,E)}var L={name:"PaginationButton",props:{disabled:{type:Boolean,default:!1}},methods:{onClick(){this.$emit("click")}}};const j=(0,_.A)(L,[["render",O],["__scopeId","data-v-5cc6a94b"]]);var w=j,x={name:"EmployeeList",components:{EmployeeCard:C,PaginationButton:w},data(){return{employees:[],page:1,totalPages:1}},created(){this.fetchEmployees()},watch:{page(){this.fetchEmployees()}},methods:{async fetchEmployees(){try{const e=await m.A.get(`https://reqres.in/api/users?page=${this.page}`);this.employees=e.data.data,this.totalPages=e.data.total_pages}catch(e){console.error("Error fetching employees:",e)}},prevPage(){this.page>1&&this.page--},nextPage(){this.page<this.totalPages&&this.page++}}};const A=(0,_.A)(x,[["render",f],["__scopeId","data-v-a446b792"]]);var X=A,$={name:"App",components:{EmployeeList:X}};const F=(0,_.A)($,[["render",s],["__scopeId","data-v-0684b79b"]]);var I=F;(0,o.Ef)(I).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkemployee_list_app"]=self["webpackChunkemployee_list_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2755)}));o=n.O(o)})();
//# sourceMappingURL=app.de8f2b8b.js.map