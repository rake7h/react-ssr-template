import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../client/App'

const serverTemplate = (rootHTML) => {
  return `
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>React SSR app</title>
    </head>
    <body>
      <div id="root">${rootHTML}</div>
      <script src="build/client/index.js"> </script>
    </body>
  </html>
  `
}
const renderOnServer = (req, res) => {
  const appHTML = ReactDOMServer.renderToString(<App />)
  const HTML = serverTemplate(appHTML)
  return res.send(HTML)
}

export default renderOnServer
