/**
 * 是否支持指定平台
 * 如果不支持某可 {module: 'calendar', content: {app: '×'}} 如此编写
 * 如 全平台支持 可 {module: 'calendar', content: false} 即可
 * @type {{app: string, qq: string, mp: string, alipay: string, baidu: string, h5: string, headline: string}}
 */

const defaultModuleConfigData = {app: '√',h5: '√',mp: '√',alipay: '√',baidu: '√',headline: '√',qq: '√'};

const  moduleConfig = [{module: 'calendar', content: false}, {module: 'overlay', content: false}, {module: 'popup', content: false}]

export function getModuleConfigByPage(pageModule) {
   let moduleContent =  moduleConfig.filter(item => item.module === pageModule)[0];
   return (!moduleContent || !moduleContent.content)
       ? defaultModuleConfigData
       : Object.assign(cloneData(defaultModuleConfigData),moduleContent.content);
}

function cloneData(data){
   if (!data) return ''
   return JSON.parse(JSON.stringify(data))
}

