if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let c={};const o=s=>a(s,t),f={module:{uri:t},exports:c,require:o};e[t]=Promise.all(r.map((s=>f[s]||o(s)))).then((s=>(i(...s),c)))}}define(["./workbox-3a60a71a"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/Asociacion-4daf00bf.jpeg",revision:"79fe05ee81933eeb0a3542c2274b4ec7"},{url:"assets/css/bootstrap-grid.css",revision:"02c04dfa80af659dc6f4c517b677435d"},{url:"assets/css/bootstrap-grid.min.css",revision:"dbd47382523d754013115de4be202a74"},{url:"assets/css/bootstrap-grid.rtl.css",revision:"63d1e5a2903e394f52b1fccaf84159a0"},{url:"assets/css/bootstrap-grid.rtl.min.css",revision:"92871a500cb2d82f99258a6a17e46ef6"},{url:"assets/css/bootstrap-reboot.css",revision:"28372dcca49ddee994668db39a49f7f0"},{url:"assets/css/bootstrap-reboot.min.css",revision:"7b3e39ea9e950f59c494f3e0ae5971db"},{url:"assets/css/bootstrap-reboot.rtl.css",revision:"d7cfce563ed23132808a3647f675a1ae"},{url:"assets/css/bootstrap-reboot.rtl.min.css",revision:"1a3cae87f043a9031675fab697888c7c"},{url:"assets/css/bootstrap-utilities.css",revision:"a5f78ee119a023227eceb749f83f6b12"},{url:"assets/css/bootstrap-utilities.min.css",revision:"5e47a49091ab986da0c9a5122a5dfe6c"},{url:"assets/css/bootstrap-utilities.rtl.css",revision:"a3ff7a01905bed4e279995549711d424"},{url:"assets/css/bootstrap-utilities.rtl.min.css",revision:"1200ba112673d97391e77f097d1eb26f"},{url:"assets/css/bootstrap.css",revision:"41ba0ff5eed842d853aede220a3ccfee"},{url:"assets/css/bootstrap.min.css",revision:"3f30c2c47d7d23c7a994db0c862d45a5"},{url:"assets/css/bootstrap.rtl.css",revision:"1457707e717950e48e9af2ef614b68e8"},{url:"assets/css/bootstrap.rtl.min.css",revision:"dfa5ca983e2834131c9d9d51ae3b1eb2"},{url:"assets/css/ErrorPage.css",revision:"a3c725cdf67e2ea39788aa51bbaf0e30"},{url:"assets/css/Fondo.css",revision:"8ff90d800e5b2eeeed37a2eb3580e0a0"},{url:"assets/css/Login.css",revision:"1d933411c5ea7d3cf43622f8f2c49726"},{url:"assets/html2canvas.esm-e0a7d97b.js",revision:"19a537a06ac69a98e5b51f60bf50f92f"},{url:"assets/img/Asociacion.jpeg",revision:"79fe05ee81933eeb0a3542c2274b4ec7"},{url:"assets/img/Logo.jpeg",revision:"e0c1098ea05972c988f7aad4a5af772b"},{url:"assets/index-e4580a88.js",revision:"ea65c333beb592590786e4ac6299e790"},{url:"assets/index-f9625304.css",revision:"efe844de01bb41e0b6b01e9325f1e979"},{url:"assets/index.es-80acc46b.js",revision:"5abe3886c903512f9f53643716fb7a2e"},{url:"assets/js/bootstrap.bundle.js",revision:"01a034c34cb9c1d2f062af8def13ecb7"},{url:"assets/js/bootstrap.bundle.min.js",revision:"b75ae000439862b6a97d2129c85680e8"},{url:"assets/js/bootstrap.esm.js",revision:"f86c449a0babc30b33ff71a6fd064833"},{url:"assets/js/bootstrap.esm.min.js",revision:"da74cf4659eb6c671e549aaed3d7ca1d"},{url:"assets/js/bootstrap.js",revision:"1376378024397729b1febb40f5a0e16f"},{url:"assets/js/bootstrap.min.js",revision:"b0794583ec020a7852f0fc04d5cefc52"},{url:"assets/json/config.json",revision:"ad3e6ffc66d38dcfcb5a057ac250ea90"},{url:"assets/purify.es-cf254a40.js",revision:"5ba6949579371df99249a97ba3e53c98"},{url:"index.html",revision:"d433a3d37922a18d6d8d580ebc7bad3f"},{url:"manifest.json",revision:"192849208ca1ab9c1fe2f5145746f33e"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
