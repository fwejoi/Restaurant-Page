import "./styles.css"; // 导入 CSS 文件
import {renderHomePage} from './home'
import {renderMenuPage} from './menu'
import { renderReserveationPage } from "./reservation";

const tabs = document.querySelectorAll("[data-tab-target]");//得到标签元素

renderHomePage();
tabs.forEach((tab)=>{//绑定标签点击切换界面事件
    tab.addEventListener('click',()=>{
        const target=tab.dataset.tabTarget;

        if(target==='home'){
            renderHomePage();
        }else if(target==='menu'){
            renderMenuPage();
        }else if(target==='contact'){
            renderReserveationPage();
        }
    })
});
