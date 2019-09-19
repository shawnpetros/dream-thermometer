import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'

import './styles/main.scss'

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
