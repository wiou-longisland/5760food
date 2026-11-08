import {createContext,useContext,useEffect,useState,cloneElement,isValidElement,type ReactNode} from 'react';
import {dictionary} from './translations';
type Language='zh'|'en';
const Context=createContext<{language:Language;setLanguage:(l:Language)=>void}>({language:'zh',setLanguage:()=>{}});
const keys=Object.keys(dictionary).filter(k=>k.length>1).sort((a,b)=>b.length-a.length);
const pattern=new RegExp(keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
export function translate(text:string,language:Language):string{
 if(language==='zh'||!/[\u3400-\u9fff]/.test(text))return text;
 const trimmed=text.trim();if(Object.prototype.hasOwnProperty.call(dictionary,trimmed))return text.replace(trimmed,dictionary[trimmed]);
 text=text.replace(/^为(.+?)优先挑选，照顾你的饮食偏好。$/,(_,name)=>`For ${translate(name,language)} — meals selected with your preferences in mind.`).replace(/^含(.+?) · 与档案冲突$/,(_,name)=>`Contains ${translate(name,language)} · Profile conflict`);
 return text.replace(pattern,k=>dictionary[k]).replace(/、/g,', ').replace(/，/g,', ').replace(/：/g,': ').replace(/。/g,'. ').replace(/；/g,'; ');
}
function renderLocalized(node:ReactNode,language:Language):ReactNode{
 if(typeof node==='string')return translate(node,language);
 if(Array.isArray(node))return node.map(n=>renderLocalized(n,language));
 if(!isValidElement(node))return node;
 const p=node.props as Record<string,unknown>;
 if(p['data-i18n-skip'])return node;
 // Only presentation text is localized. Field values and business keys stay stable.
 const next:Record<string,unknown>={};
 if(typeof node.type==='string'){
  for(const name of ['placeholder','aria-label','title','alt'])if(typeof p[name]==='string')next[name]=translate(p[name] as string,language);
  if(node.type==='option'&&p.value===undefined&&typeof p.children==='string')next.value=p.children;
 }
 if(p.children!==undefined)next.children=renderLocalized(p.children as ReactNode,language);
 return cloneElement(node,next);
}
export function LocaleProvider({children}:{children:ReactNode}){
 const [language,setLanguage]=useState<Language>(()=>{try{return localStorage.getItem('zhishi-language')==='en'?'en':'zh'}catch{return 'zh'}});
 useEffect(()=>{document.documentElement.lang=language==='en'?'en':'zh-CN';document.title=language==='en'?'Recipe Community · Zhishi':'食谱社区 · 知食';try{localStorage.setItem('zhishi-language',language)}catch{}},[language]);
 return <Context.Provider value={{language,setLanguage}}>{children}</Context.Provider>;
}
export function useLocale(){const {language,setLanguage}=useContext(Context);return {language,setLanguage,t:(text:string)=>translate(text,language),localize:(node:ReactNode)=>renderLocalized(node,language)}}
export function LanguageSwitch(){const {language,setLanguage}=useLocale();return <div className="language-switch" data-i18n-skip="true" role="group" aria-label="Language / 语言"><button aria-pressed={language==='zh'} onClick={()=>setLanguage('zh')} lang="zh-CN">中文</button><span>/</span><button aria-pressed={language==='en'} onClick={()=>setLanguage('en')} lang="en">English</button></div>}
