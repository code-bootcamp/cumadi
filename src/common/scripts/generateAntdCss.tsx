import fs from 'fs'
import { extractStyle } from '@ant-design/static-style-extract'
import antdTheme from '../styles/theme'

const outputPath = './public/antd.min.css'

const css = extractStyle(antdTheme)

fs.writeFileSync(outputPath, css)
