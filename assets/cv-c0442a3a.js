import{_ as h,o as n,c as i,a as e,F as o,r as s,b as m,t as r,d as g,p as f,e as b}from"./index-dcf3c01d.js";const y={name:"Resume",data(){return{experience:[{title:"Principal Software Engineer",company:"NextEra Analytics",country:"United States",period:"04/2022 - 02/2024",bullets:["Software Architecture and implementation across multiple products and teams","Ideation, design, and implementation of new products and features","Security reviews and implementation of best practices","Creating innovative solutions to complex problems in the energy industry"],references:[{name:"NextEra 360",url:"https://www.nexteraenergyresources.com/nextera360.html"}]},{title:"Head of Engineering",company:"YoMa Solutions GmbH",country:"Germany",period:"06/2021 - 04/2022",bullets:["Responsible for the engineering department incl. hiring and staffing","Technical Lead for all engineering projects","Worked on track & trace - a smart prediction systems for the automotive industry supply chain"],references:[{name:"YoMa Solutions Track & Trace",url:"https://yoma-track-trace.com/en/"}]},{title:"Staff Software Engineer",company:"Jungheinrich AG",country:"Germany",period:"11/2019 - 06/2021",bullets:["Cloud native development of an online platform connecting >30k smart forklifts","Responsible for shaping the company approach to cloud native development in AWS","Lead engineer for analytics and predictions team"],references:[{name:"Jungheinrich AG",url:"https://www.jungheinrich.com/en"}]},{title:"IT Consultant",company:"Cassini Consulting AG",country:"Germany",period:"03/2018 - 11/2019",bullets:["IT consultant for software engineering","Worked on various projects as technical lead, security advisor and software engineer","Worked on undisclosed multi-national projects as technical lead"]},{title:"Senior Software Engineer & Team Lead",company:"Orgadata AG",country:"Germany",period:"08/2011 - 03/2018",bullets:["Worked as lead engineer on all CAD and 3D related projects","Team lead for 10+ direct reports","Responsible for technological vision and architecture spanning across multiple products"],references:[{name:"LogiKal CAD suite",url:"https://www.orgadata.com/us/en/solutions/logikal/cad-suite-2d.html"},{name:"Revit plugin",url:"https://www.orgadata.com/us/en/solutions/logikal-revit-plugin.html"}]}],projects:[{title:"agree",url:"https://github.com/replicadse/agree",description:"A CLI implementation of Shamirs Secret Sharing for splitting secrets into _n_ parts, restorable with _p_ shares where p <= n. It requires multiple individuals to agree on restoring a secret, therefore implementing multi-key-turn security.",techStack:["Rust"]},{title:"complate",url:"https://github.com/replicadse/complate",description:"A powerful text templating tool for the terminal.",techStack:["Rust"]},{title:"fmerge",url:"https://github.com/replicadse/fmerge",description:"A recursive file merger.",techStack:["Rust"]},{title:"hoox",url:"https://github.com/replicadse/hoox",description:"Git hooks done right. Supports re-usable scripts and custom commands.",techStack:["Rust"]},{title:"hydrogen (archived)",url:"https://github.com/replicadse/hydrogen",description:"A Kubernetes native websocket API gateway & abstraction layer (mostly an example project for Kubernetes projects, utilizing the operator pattern).https://github.com/replicadse/hydrogen A Kubernetes native websocket API gateway & abstraction layer (mostly an example project for Kubernetes projects, utilizing the operator pattern).",techStack:["Rust","Kubernetes"]},{title:"neomake",url:"https://github.com/replicadse/neomake",description:"An alternative to makefiles inspired by GitLab pipelines. Includes DAG command execution and caching, parallel execution, matrix invokes and much more.",techStack:["Rust"]},{title:"ranger",url:"https://github.com/replicadse/ranger",description:"An application bootstrapping tool with templates.",techStack:["Rust"]},{title:"viking",url:"https://github.com/replicadse/viking",description:"A slightly opinionated API load testing application.",techStack:["Rust"]},{title:"wavefront_rs",url:"https://github.com/replicadse/wavefront_rs",description:"A library to read and write wavefront .obj (and .mtl) files.",techStack:["Rust"]}],publications:[{title:"What is Software Quality anyway? - presentation at Code.Talks 2018",description:"A presentation on software quality at Code.Talks 2018 in Hamburg, Europes largest developer conference."},{title:"Resolving self-intersecting in R^2 polygons for a csg system",description:"A paper on resolving self-intersecting polygons in R^2 space. Relevant for extrusion and other boolean operations in CSG systems."},{title:"Defensive techniques against reverse engineering C# IL code",description:"My Bachelor Thesis on the topic of defensive techniques like obfuscation to prevent reverse engineering of C# and intermediate language code."}]}}};const p=l=>(f("data-v-d86f7be3"),l=l(),b(),l),_={class:"resume"},k=m('<h1 data-v-d86f7be3>Alexander Weber</h1><section data-v-d86f7be3><p data-v-d86f7be3>Tech lead with more than 13 years of experience of which many in leadership roles. With a dedication to practical and efficient solutions as well as a hands on mindset, I am a full‐time problem solver who believes in leadership by example and simplicity by design.</p><h2 data-v-d86f7be3>Personal information</h2><p data-v-d86f7be3><strong data-v-d86f7be3>Email:</strong> alexanderh.weber@outlook.com</p><p data-v-d86f7be3><strong data-v-d86f7be3>Phone:</strong> (628) 468-3123</p><p data-v-d86f7be3><strong data-v-d86f7be3>Website:</strong> <a href="https://replicadse.github.io" target="_blank" data-v-d86f7be3>replicadse.github.io</a></p></section>',2),v=p(()=>e("h2",null,"Experience",-1)),w={key:0},S=p(()=>e("h4",null,"References",-1)),x=["href"],A=p(()=>e("h2",null,"Publications",-1)),R=p(()=>e("h2",null,"Open source projects",-1)),j=["href"],I={class:"tech-stack"};function C(l,G,T,E,d,W){return n(),i("div",_,[k,e("section",null,[v,(n(!0),i(o,null,s(d.experience,(t,a)=>(n(),i("div",{key:a,class:"experience-item"},[e("h3",null,r(t.title)+" - "+r(t.company)+" ("+r(t.country)+")",1),e("p",null,[e("em",null,r(t.period),1)]),e("ul",null,[(n(!0),i(o,null,s(t.bullets,(c,u)=>(n(),i("li",{key:u},r(c),1))),128))]),t.references?(n(),i("div",w,[S,e("ul",null,[(n(!0),i(o,null,s(t.references,(c,u)=>(n(),i("li",{key:u},[e("a",{href:c.url,target:"_blank"},r(c.name),9,x)]))),128))])])):g("",!0)]))),128))]),e("section",null,[A,(n(!0),i(o,null,s(d.publications,(t,a)=>(n(),i("div",{key:a,class:"publication-item"},[e("h3",null,r(t.title),1),e("p",null,r(t.description),1)]))),128))]),e("section",null,[R,(n(!0),i(o,null,s(d.projects,(t,a)=>(n(),i("div",{key:a,class:"project-item"},[e("h3",null,r(t.title),1),e("p",null,[e("a",{href:t.url,target:"_blank"},r(t.url),9,j)]),e("p",null,r(t.description),1),e("p",I,"Tech stack: "+r(t.techStack.join(", ")),1)]))),128))])])}const P=h(y,[["render",C],["__scopeId","data-v-d86f7be3"]]);export{P as default};