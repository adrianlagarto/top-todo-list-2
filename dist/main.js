(()=>{"use strict";let t=[];function e(){const e=document.querySelector("#project-container");e.innerHTML="";for(let n=0;n<t.length;n++){let o=t[n].newProject;const c=document.createElement("div"),d=document.createElement("button");c.setAttribute("class","card-container"),d.textContent=`${o.title}`,c.appendChild(d),e.appendChild(c),d.addEventListener("click",(e=>{let n=e.target.textContent;console.log(n);for(let e=0;e<t.length;e++);})),console.log(t[n])}}function n(t){this.title=t}const o=()=>{document.querySelector("#container");const o=document.createElement("div");o.classList.add("page-content"),o.textContent="Project Tab",main.appendChild(o);const c=document.createElement("div");c.setAttribute("id","todos-container"),c.textContent="Project Todos Container";const d=document.createElement("div");d.setAttribute("id","project-container"),d.textContent="All Projects",o.appendChild(d);const i=document.createElement("button");i.textContent="Add Project",i.setAttribute("id","add-project-btn"),o.appendChild(i),document.querySelector("#add-project-btn").addEventListener("click",(()=>{(()=>{console.log("hi");const t=document.querySelector("#container"),e=document.createElement("form"),n=document.createElement("div"),o=document.createElement("input"),c=document.createElement("button"),d=document.createElement("button");n.setAttribute("class","pop-up-box"),n.setAttribute("id","pop-up-box-1"),o.setAttribute("id","title"),c.setAttribute("id","confirm"),d.setAttribute("id","exit"),o.setAttribute("class","info-input"),c.textContent="Confirm",c.type="submit",c.value="Add Project",d.textContent="Exit",o.placeholder="Title",e.appendChild(o),n.appendChild(c),n.appendChild(d),n.appendChild(e),t.appendChild(n),console.log(n)})(),document.querySelector("#confirm").addEventListener("click",(()=>{const o=document.querySelector("#container"),c=document.querySelector("#pop-up-box-1");let d=document.querySelector("#title").value,i=document.querySelectorAll(".info-input");for(let e=0;e<t.length;e++)if(d==t[e].title)return;let r=new n(d);i.value="",Object.values(r);let l={newProject:r};t.push(l),console.log(t),console.log("^^"),e(),o.removeChild(c)}))})),e()};function c(){const t=document.querySelector("#main"),e=document.querySelector(".page-content");e&&t.removeChild(e)}const d=()=>{const t=document.querySelector("#container"),e=document.createElement("div");e.setAttribute("id","sidebar");const n=document.createElement("button"),d=document.createElement("button"),i=document.createElement("button"),r=document.createElement("button");n.setAttribute("id","all-btn"),d.setAttribute("id","today-btn"),i.setAttribute("id","project-btn"),n.setAttribute("id","all-btn"),n.textContent="All",d.textContent="Today",i.textContent="Project",r.textContent="Notes",e.appendChild(n),e.appendChild(d),e.appendChild(i),e.appendChild(r),t.appendChild(e),n.addEventListener("click",(()=>{c(),(()=>{document.querySelector("#container");const t=document.createElement("div");t.classList.add("page-content"),t.textContent="All Tab",main.appendChild(t)})()})),d.addEventListener("click",(()=>{c(),tabToday()})),i.addEventListener("click",(()=>{c(),o()})),r.addEventListener("click",(()=>{c(),(()=>{document.querySelector("#container");const t=document.createElement("div");t.classList.add("page-content"),t.textContent="Notes",main.appendChild(t)})()})),console.log("tabs")};(function(){const t=document.querySelector("#container"),e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");e.setAttribute("id","header");const c=document.createElement("h1");c.textContent="Header",c.setAttribute("id","header-title"),e.appendChild(c),o.setAttribute("id","main"),n.setAttribute("id","sidebar"),n.textContent="sidebar",t.appendChild(e),t.appendChild(o),t.appendChild(n)})(),d()})();