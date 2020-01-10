import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import App from './app/App'

const { warn } = console
// eslint-disable-next-line no-console
console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].startsWith('async-validator:'))
        return
    warn(...args)
}

ReactDOM.render(
    <ConfigProvider prefixCls="iltlc">
        <App />
    </ConfigProvider>,
    document.getElementById('root')
)
