'use strict';
const sampleProjects=[{"category":"精密齒輪加工","title":"大型斜齒輪加工","description":"展示齒輪加工、精度要求與製造流程。"},{"category":"客製化專用工具機","title":"客製化齒輪加工專用機","description":"依製程需求規劃機構、操作及控制整合。"},{"category":"機械設備改造","title":"PFAUTER P1000 6軸滾齒機","description":"整機控制器翻新，針對既有滾齒機進行控制系統更新。"},{"category":"電控系統規劃","title":"自動化電控系統整合","description":"展示 PLC、驅動、控制櫃配線與設備操作介面整合。"},{"category":"機構設計與製造","title":"減速機機構設計","description":"展示傳動機構、軸承配置及零件製造。"},{"category":"精密齒輪加工","title":"高精度齒輪加工","description":"展示不同齒形及精密加工應用。"},{"category":"設備維修與改善","title":"石英加工機維修","description":"石英加工設備維修，展示機台、控制面板與傳動機構現場照片。"},{"category":"客製化專用工具機","title":"專用治具開發","description":"展示配合加工需求的夾治具設計。"},{"category": "機械設備改造", "title": "MOTOKUBO CNC 洗溝機", "description": "機械設備改造，展示機台、傳動螺桿、CNC 操作介面與控制箱設計。"},{"category": "客製化專用工具機", "title": "雷射手臂平台設計", "description": "客製化雷射手臂平台設計，展示平台結構、手臂配置與操作介面。"},{"category": "機械設備改造", "title": "鍵槽加工機", "description": "鍵槽加工機設備改造，展示機台、加工配置與操作控制面板。"},{"category": "設備維修與改善", "title": "MOOR螢幕更換", "description": "MOOR 設備螢幕更換，展示原螢幕、拆裝過程與更換後的顯示畫面。"},{"category": "機械設備改造", "title": "機械手臂安裝", "description": "機械手臂安裝與設備整合，展示手臂配置、夾持機構及整合設計圖。"}];
const filters=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('.project-card');
const count=document.querySelector('.project-count');
filters.forEach(button=>button.addEventListener('click',()=>{
  const value=button.dataset.filter;let visible=0;
  filters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
  cards.forEach(card=>{const show=value==='全部'||card.dataset.category===value;card.hidden=!show;if(show)visible++;});
  count.textContent='顯示 '+visible+' 個專案項目';
}));
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('.project-detail').forEach(button=>button.addEventListener('click',()=>{
  const item=sampleProjects[Number(button.dataset.index)];
  document.querySelector('#dialog-title').textContent=item.title;
  document.querySelector('#dialog-category').textContent=item.category;
  document.querySelector('#dialog-description').textContent=item.description;
  const media=document.querySelector('#pfauter-media');media.hidden=Number(button.dataset.index)!==2;document.querySelector('#quartz-media').hidden=Number(button.dataset.index)!==6;document.querySelector('#motokubo-media').hidden=Number(button.dataset.index)!==8;document.querySelector('#laser-media').hidden=Number(button.dataset.index)!==9;document.querySelector('#automation-media').hidden=Number(button.dataset.index)!==3;document.querySelector('#keyway-media').hidden=Number(button.dataset.index)!==10;document.querySelector('#moor-media').hidden=Number(button.dataset.index)!==11;document.querySelector('#robot-media').hidden=Number(button.dataset.index)!==12;if(typeof dialog.showModal==='function')dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
