import p from"critters";import i from"./parse.js";var f=async(t,o=2)=>{for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const r=t[a];if(!r)continue;switch(a){case"critters":{await i(`${t.path}**/*.html`,o,"html",t?.exclude,async e=>(r.path=r.path?r.path:t.path,await new p(r).process(e)));break}default:break}}};export{f as default};
