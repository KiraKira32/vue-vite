import{_ as a,o as n,c,a as _,t as l,b as o}from"./index-62a22ab1.js";const r={data(){return{data:{}}},mounted(){console.log("這是產品的環境");const e="https://randomuser.me/api/";this.$http.get(e).then(t=>{this.data=t.data.results[0],console.log(this.data),console.log(t)})}},i={class:"about"},d=o("h1",null,"This is an about page",-1),u=o("h1",null,"測試測試測試",-1);function p(e,t,h,g,s,m){return n(),c("div",i,[d,u,_(" "+l(s.data),1)])}const b=a(r,[["render",p]]);export{b as default};
