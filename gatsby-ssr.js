/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  // Set HTML language attribute
  setHtmlAttributes({ lang: `en` })

  // Add Chatbase script
  setPostBodyComponents([
    React.createElement("script", {
      key: "chatbase-widget",
      dangerouslySetInnerHTML: {
        __html: `
          (function(){
            if(!window.chatbase||window.chatbase("getState")!=="initialized"){
              window.chatbase=(...arguments)=>{
                if(!window.chatbase.q){
                  window.chatbase.q=[]
                }
                window.chatbase.q.push(arguments)
              };
              window.chatbase=new Proxy(window.chatbase,{
                get(target,prop){
                  if(prop==="q"){
                    return target.q
                  }
                  return(...args)=>target(prop,...args)
                }
              })
            }
            const onLoad=function(){
              const script=document.createElement("script");
              script.src="https://www.chatbase.co/embed.min.js";
              script.id="5MidPtKrVz97X5SaLoE8E";
              script.domain="www.chatbase.co";
              document.body.appendChild(script)
            };
            if(document.readyState==="complete"){
              onLoad()
            }else{
              window.addEventListener("load",onLoad)
            }
          })();
        `,
      },
    }),
  ])
}
