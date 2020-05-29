/**
 * *@2020-5-20
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

 module.exports = {
   // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
   devServer:{
    // port:8870, 端口感觉没啥作用
    proxy:{
        "^/api":{
          target:"http://dev.aiops.demolx.com"
        }
      }
   }
  

 }
