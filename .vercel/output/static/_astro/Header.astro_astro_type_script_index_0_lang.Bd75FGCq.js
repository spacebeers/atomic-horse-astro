window.addEventListener("scroll",()=>{const s=document.querySelector('[data-target="header"]');window.scrollY>75?s?.classList.add("stuck"):s?.classList.remove("stuck")});
