import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../client/App'
import { ServerStyleSheet } from 'styled-components'

const serverTemplate = ({ html, css }) => {
  return `
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Host</title>
      ${css}
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="build/client/index.js"> </script>
    </body>
  </html>
  `
}
const renderOnServer = (req, res) => {
  const sheet = new ServerStyleSheet()
  const HTML = renderToString(sheet.collectStyles(<App />))
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();

  const finalMarkup = serverTemplate({ html: HTML, css: styleTags })
  return res.send(finalMarkup)
}

export default renderOnServer
