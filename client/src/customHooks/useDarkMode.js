import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode =()=>{
   const [darkMode, setDarkMode] = useLocalStorage();
   useEffect(()=>{
      if(darkMode){
         document.body.classList.add('darkmode')
      }else{
         document.body.classList.remove('darkmode')
      }
   },[darkMode])
   return[darkMode,setDarkMode]
}
