import{w as t}from"./preload-helper-29d322af.js";import{p as o,a as r}from"./state-3a19ae0b.js";const e=o(t({isDark:!1}),r(),"themeStore"),l=["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"],n=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=l.includes(s);console.log("Setting theme",s),e.set({theme:s,isDark:a})};export{n as s,e as t};
