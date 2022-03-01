import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
//import '../assets/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    ReactDOM.render(<Root/>, root)
})