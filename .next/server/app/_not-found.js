(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6232:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=r(482),o=r(9108),n=r(2563),i=r.n(n),a=r(8300),d={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);r.d(t,d);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"C:\\Users\\geneb\\lasvegashomeexpert.com\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=[],p="/_not-found",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8457:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},4557:()=>{},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>i});var s=r(5036),o=r(3640),n=r.n(o);r(5023);let i={title:"Las Vegas Home Expert - Your Trusted Real Estate Partner",description:"Expert real estate services in Las Vegas. Find your dream home, get property valuations, and work with experienced professionals. RealScout, Homebot, and CloudCMA powered.",keywords:"Las Vegas real estate, home buying, home selling, property valuation, real estate expert",authors:[{name:"Dr. Jan Duffy"}],openGraph:{title:"Las Vegas Home Expert",description:"Your trusted real estate partner in Las Vegas",url:"https://lasvegashomeexpert.com",siteName:"Las Vegas Home Expert",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"Las Vegas Home Expert"}],locale:"en_US",type:"website"},twitter:{card:"summary_large_image",title:"Las Vegas Home Expert",description:"Your trusted real estate partner in Las Vegas",images:["/og-image.jpg"]},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-video-preview":-1,"max-image-preview":"large","max-snippet":-1}},verification:{google:"your-google-verification-code"}};function a({children:e}){return(0,s.jsxs)("html",{lang:"en",className:"scroll-smooth",children:[(0,s.jsxs)("head",{children:[s.jsx("script",{src:"https://em.realscout.com/widgets/realscout-web-components.umd.js",type:"module"}),s.jsx("style",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`
              /* RealScout Widget Styling - Applied to every page */
              realscout-office-listings {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
              
              realscout-property-search {
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
              
              realscout-property-details {
                width: 100%;
                margin: 2rem 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-height: 480px;
                z-index: 1000;
              }
            `}}),s.jsx("script",{src:"https://cdn.homebot.com/widget.js",integrity:"sha384-your-integrity-hash",crossOrigin:"anonymous",async:!0}),s.jsx("script",{src:"https://cdn.cloudcma.com/widget.js",integrity:"sha384-your-integrity-hash",crossOrigin:"anonymous",async:!0}),s.jsx("script",{src:"https://cdn.percy.ai/hvs-autocomplete.js",integrity:"sha384-your-integrity-hash",crossOrigin:"anonymous",async:!0})]}),(0,s.jsxs)("body",{className:`${n().className} bg-neutral-50 text-neutral-900 antialiased`,children:[s.jsx("div",{id:"root",children:e}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
              // Critical path script loading sequence
              window.addEventListener('DOMContentLoaded', function() {
                // Initialize RealScout web components
                if (typeof window.customElements !== 'undefined') {
                  // RealScout components are loaded as web components
                  console.log('RealScout web components ready');
                }
                
                // Initialize other widgets after core dependencies
                setTimeout(() => {
                  if (typeof window.Homebot !== 'undefined') {
                    window.Homebot.init();
                  }
                  if (typeof window.CloudCMA !== 'undefined') {
                    window.CloudCMA.init();
                  }
                  if (typeof window.PercyAI !== 'undefined') {
                    window.PercyAI.init();
                  }
                }, 100);
              });
            `}})]})]})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[803],()=>r(6232));module.exports=s})();