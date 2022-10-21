import{C as s,g as u,a as g,b as h,h as v}from"./compositor.c4cacb8a.js";const w=async(o,a,t)=>{const{backgroundImage:r,layout:l,layoutProps:i={}}=t,e=await s.compositor.createProject({props:{name:"Root",type:"sceneless-project",sourceType:"Element",layout:"Layered",size:a,isRoot:!0,tagName:"div",version:"beta",fields:{style:{background:"black"}}}},o),c=e.getRoot(),d=await Promise.all([e.insert({name:"Background",id:"bg",layout:"Free"},c.id),e.insert({id:"content",name:"Content",layout:l,layoutProps:i},c.id),e.insert({id:"foreground",name:"Overlays",layout:"Free"},c.id)]);await e.reorder(c.id,d);const n=c.children.find(y=>y.props.id==="foreground"),m=await Promise.all([e.insert({name:"ImageOverlay",id:"fg-image",layout:"Free"},n.id),e.insert({name:"Overlay",sourceType:"Overlay",id:"overlay",layout:"Free",style:{width:"100%",height:"100%",objectFit:"cover"}},n.id),e.insert({name:"BannerContainer",id:"fg-banners",layout:"Column",layoutProps:{cover:!0}},n.id),e.insert({name:"VideoOverlay",id:"fg-video",layout:"Free"},n.id),e.insert({name:"VideoOverlay2",layout:"Free",sourceType:"Video2",proxySource:"Overlay",id:"video-overlay",style:{width:"100%",height:"100%",objectFit:"cover"}},n.id),e.insert({name:"Logo",layout:"Free",sourceType:"Logo",id:"logo",style:{width:"100%",height:"100%",objectFit:"contain",position:"unset"}},n.id)]);await e.reorder(n.id,m);const p=c.children.find(y=>y.props.id==="bg"),j=await Promise.all([e.insert({name:"ImageBackground",id:"bg-image",tagName:"img",sourceType:"Element",attributes:{src:r},fields:{style:{width:"100%",height:"100%",objectFit:"cover"}}},p.id),e.insert({name:"ImageBackground2",sourceType:"Image2",proxySource:"Background",id:"image-background",layout:"Free",src:r,style:{width:"100%",height:"100%",objectFit:"cover"}},p.id),e.insert({name:"VideoBackground",sourceType:"Video2",proxySource:"Background",id:"video-background",layout:"Free",style:{width:"100%",height:"100%",objectFit:"cover"}},p.id)]);return await e.reorder(p.id,j),e},F=async o=>{const a=u().id,t=o.type||"sceneless",r=o.size||{x:1280,y:720},l=o.settings||{};let i=await s.clients.LiveApi().project.createProject({collectionId:a,rendering:{video:{width:r.x,height:r.y,framerate:30}},composition:{studioSdk:{}},metadata:{},webrtc:{hosted:{}}});const e=await I({projectId:i.project.projectId,collectionId:i.project.collectionId,settings:l,size:r,type:t}),{displayName:c}=g(),d={type:t,layoutId:e.id,hostDisplayName:c,props:o.props||{}};let n=await s.clients.LiveApi().project.updateProject({collectionId:a,projectId:i.project.projectId,updateMask:["metadata"],metadata:d});return i.project=n.project,i.project.metadata=d,i},P=async o=>{const{projectId:a}=o,t=h(a),r=u().id;await Promise.all([s.clients.LiveApi().project.deleteProject({collectionId:r,projectId:a}),s.clients.LayoutApi().layout.deleteLayout({layoutId:t.layoutApi.layoutId})])},k=async o=>{var e;const a=await b();let t;const{displayName:r,serviceUserId:l}=g();a.length===0?t=(await s.clients.LiveApi().collection.createCollection({metadata:{serviceUserId:l,displayName:r,props:{}}})).collection:t=a[0],await s.clients.LiveApi().subscribeToCollection(t.collectionId);const i=await Promise.all(t.projects.map(c=>v(c,"ROLE_HOST",o)));return{user:{id:t.collectionId,metadata:t.metadata,props:((e=t.metadata)==null?void 0:e.props)||{},name:r},projects:i,sources:t.sources}},b=async()=>(await s.clients.LiveApi().collection.getCollections({})).collections,I=async o=>{const{settings:a,size:t,type:r,projectId:l,collectionId:i}=o,e=await s.clients.LayoutApi().layout.createLayout({layout:{projectId:l,collectionId:i}});return r==="sceneless"?await w(e.id,t,a):await s.compositor.createProject({props:{name:"Root",layout:"Free",...a,isRoot:!0,size:t}},e.id),e};export{I as createLayout,F as createProject,P as deleteProject,b as loadCollections,k as loadUser};
//# sourceMappingURL=requests.df43552d.js.map