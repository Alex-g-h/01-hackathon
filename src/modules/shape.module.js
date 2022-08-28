import {Module} from '../core/module'
import {random} from '../utils'


export class ShapeModule extends Module {
        constructor(type, text) {
            super(type, text)
        }
    
        square() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const size = random(300, 400)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(0, width - size) 
            const y = random(0, height- size)
            element.style.background = color
            element.style.width = element.style.height = `${size}px`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
            document.body.append(element)
            element.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() => {element.remove()}, 2000)
        }
    
        circle() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const size = random(100, 400)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(0, width - size) 
            const y = random(0, height- size)
            element.style.borderRadius = '50%'
            element.style.background = color
            element.style.width = element.style.height = `${size}px`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
            document.body.append(element)
            element.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() =>{element.remove() }, 2000)
        }
    
        ring() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const size = random(100, 400)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(0, width - size) 
            const y = random(0, height- size)
            element.style.borderRadius = '50%'
            element.style.border =`${random(6, 15)}px solid ${color}`
            element.style.width = element.style.height = `${size}px`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
            document.body.append(element)
            element.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() =>{element.remove() }, 2000)
        }
    
        rectangle() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const sizeWidth = random(90, 400)
            const sizeHeight = random(90, 400)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(0, width - sizeWidth) 
            const y = random(0, height- sizeHeight)
            element.style.background = color
            element.style.width = `${sizeWidth}px`
            element.style.height = `${sizeHeight}px`
            element.style.borderRadius =`${random(30, 100)}px`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
            document.body.append(element)
            element.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() => {element.remove()}, 2000)
        }
    
    
        triangleUp() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const sizeWidth = random(90, 300)
            const sizeHeight = random(150, 300)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(2, width - 2*sizeWidth) 
            const y = random(0, height - sizeHeight)
            element.style.width = '0px'
            element.style.height = '0px'
            element.style.borderLeft = `${sizeWidth}px solid transparent`
            element.style.borderRight = `${sizeWidth}px solid transparent`
            element.style.borderBottom= `${sizeHeight}px solid ${color}`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
             document.body.append(element)
             element.animate([{transform: 'rotate(0) scale(1)'},
             {transform: 'rotate(360deg) scale(0)'}
           ], 2000)
            setTimeout(() => {element.remove()}, 2000)
        }
        
        triangleDown() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const sizeWidth = random(90, 300)
            const sizeHeight = random(150, 300)
            const {width, height} = body.getBoundingClientRect()
            const element = document.createElement('div')
            const x = random(2, width - 2*sizeWidth) 
            const y = random(0, height - sizeHeight)
            element.style.width = '0px'
            element.style.height = '0px'
            element.style.borderLeft = `${sizeWidth}px solid transparent`
            element.style.borderRight = `${sizeWidth}px solid transparent`
            element.style.borderTop= `${sizeHeight}px solid ${color}`
            element.style.position='absolute'
            element.style.top=`${y}px`
            element.style.left=`${x}px`
            document.body.append(element)
            element.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() => {element.remove()}, 2000)
        }
    
        infinity() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const {width, height} = body.getBoundingClientRect()
            const elementOne = document.createElement('div')
            const elementTwo = document.createElement('div')
            const sizeWidth = random(80, 130)
            elementOne.style.width = elementOne.style.height = elementTwo.style.width = elementTwo.style.height = `${sizeWidth}px`
            const x = random(2, width - 3*sizeWidth) 
            const y = random(2, height - 2*sizeWidth)
            elementOne.style.position = 'relative'
            elementTwo.style.position = 'absolute'
            elementOne.style.border = elementTwo.style.border = `25px solid ${color}`
            elementOne.style.borderRadius = elementTwo.style.borderRadius  ='50px 50px 0 50px'
            elementOne.style.transform = 'rotate(-45deg)'
            elementOne.style.marginTop=`${y}px`
            elementOne.style.marginLeft=`${x}px`
            elementTwo.style.top = '100%'
            elementTwo.style.left = `100%`
            elementTwo.style.transform = 'rotate(-179deg)'
            document.body.append(elementOne)
            elementOne.append(elementTwo)
            elementOne.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() => {elementOne.remove()}, 2000)
        }
            
        heart() {
            const body = document.querySelector('body')
            const {width, height} = body.getBoundingClientRect()
            const elementOne = document.createElement('div')
            const elementTwo = document.createElement('div')
            const x = random(2, width - 240) 
            const y = random(2, height - 400)
            elementOne.style.position = 'relative'
            elementOne.style.width = '80px'
            elementOne.style.height = '120px'
            elementOne.style.marginTop=`${y}px`
            elementOne.style.marginLeft=`${x}px`
            elementOne.style.background = `red`
            elementOne.style.borderRadius = '50px 50px 0 0' 
            elementOne.style.transform = 'rotate(-45deg)'
            elementTwo.style.position = 'absolute'
            elementTwo.style.width = '80px'
            elementTwo.style.height = '120px'
            elementTwo.style.top = `19%`
            elementTwo.style.left = `25%`
            elementTwo.style.background = `red`
            elementTwo.style.borderRadius = '50px 50px 0 0' 
            elementTwo.style.transform = 'rotate(90deg)'
            document.body.append(elementOne)
            elementOne.append(elementTwo)
            elementOne.animate([{transform: 'rotate(0) scale(1)'},
            {transform: 'rotate(360deg) scale(0)'}
          ], 2000)
            setTimeout(() => {elementOne.remove()}, 2000)
        }
    
        star() {
            const color =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`
            const body = document.querySelector('body')
            const {width, height} = body.getBoundingClientRect()
            const elementOne = document.createElement('div')
            const elementTwo = document.createElement('div')
           const x = random(2, width - 240) 
            const y = random(2, height - 400)
            elementOne.style.position = 'relative'
            elementOne.style.width = '0px'
            elementOne.style.height = '0px'
            elementOne.style.marginTop=`${y}px`
            elementOne.style.marginLeft=`${x}px`
            elementOne.style.borderLeft = '100px solid transparent' 
            elementOne.style.borderRight = '100px solid transparent'
            elementOne.style.borderBottom = `150px solid ${color}`
            elementTwo.style.borderLeft = '100px solid transparent' 
            elementTwo.style.borderRight = ' 100px solid transparent'
            elementTwo.style.borderTop = `150px solid ${color}`
            elementTwo.style.position = 'absolute'
            elementTwo.style.width = '0px'
            elementTwo.style.height = '0px'
            elementTwo.style.top = `43px`
            elementTwo.style.left = `-98px`   
            document.body.append(elementOne)
            elementOne.append(elementTwo)
            elementOne.animate([{transform: 'rotate(100%) scale(1)'},
            {transform: 'rotate(360deg) scale(3)'}
          ], 2000)
            setTimeout(() => {elementOne.remove()}, 2000)
        } 
    
        trigger() {
            // const li = document.querySelector('li')
            // li.addEventListener('click', (event) => {
            //     const {target} = event
                const p = [this.star, this.square,  this.circle, this.triangleUp, this.rectangle, this.triangleDown, this.ring, this.infinity, this.heart]
                 p[random(0,p.length-1)]()
                
            
        }
    }
    
    

    
    
    
    
