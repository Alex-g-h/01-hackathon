import {Module} from '../core/module'
import {random} from '../utils'


export class ShapeModule extends Module {
   
        constructor(type, text) {
            super('shape', 'Создать фигуру');
        }
        
        #animate(elem, firstParameter, secondParameter, rotate = 0) {
            elem.animate([
                {transform: `rotate(${rotate}%) scale(${firstParameter})`},
                {transform: `rotate(360deg) scale(${secondParameter})`}
            ], 2000);
        }

        #getRandomColor() {
           return `rgb(${random(0, 255)},
                       ${random(0, 255)},
                       ${random(0, 255)})`;
                 
        }

        #getRandomGradient() {
            return `linear-gradient(
                  ${random(0, 360)}deg,
             rgba(${random(0, 255)},
                  ${random(0, 255)},
                  ${random(0, 255)}, .5)
                  ${random(0, 100)}%,
             rgba(${random(0, 255)},
                  ${random(0, 255)},
                  ${random(0, 255)}, 1)
                  ${random(0, 100)}%)`;
                    
        }

        #duplicateСodeSquareCircle(borderRadius = 0, border = 'none', background = this.#getRandomGradient()) {
            const element = document.createElement('div');
            const size = random(200, 400);
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const x = random(0, width - size);
            const y = random(0, height- size);
            element.style.background = background;
            element.style.width = element.style.height = `${size}px`;
            element.style.position='absolute';
            element.style.top=`${y}px`;
            element.style.left=`${x}px`;
            element.style.borderRadius = `${borderRadius}%`;
            element.style.border =`${border}`;
            document.body.append(element);
            this.#animate(element, 1, 0);
            setTimeout(() => {element.remove()}, 2000);
        }

        square() {
            this.#duplicateСodeSquareCircle();
        }
    
        circle() {
            this.#duplicateСodeSquareCircle(50);
        }
    
        ring() {
            this.#duplicateСodeSquareCircle(50, `${random(15, 25)}px solid ${this.#getRandomColor()}`, 'white');
        }
    
        rectangle() {
            const sizeWidth = random(90, 400);
            const sizeHeight = random(90, 400);
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const element = document.createElement('div');
            const x = random(0, width - sizeWidth);
            const y = random(0, height- sizeHeight);
            element.style.background = this.#getRandomGradient();
            element.style.width = `${sizeWidth}px`;
            element.style.height = `${sizeHeight}px`;
            element.style.borderRadius = `${random(30, 100)}px`;
            element.style.position = 'absolute';
            element.style.top = `${y}px`;
            element.style.left = `${x}px`;
            document.body.append(element);
            this.#animate(element, 1, 0);
            setTimeout(() => {element.remove()}, 2000);
        }
    
        triangle() {
            const sizeWidth = random(90, 300);
            const sizeHeight = random(150, 300);
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const element = document.createElement('div');
            const x = random(2, width - 2*sizeWidth); 
            const y = random(0, height - sizeHeight);
            element.style.width = element.style.height = '0px';
            element.style.borderLeft = element.style.borderRight = `${sizeWidth}px solid transparent`;
            element.style.borderBottom = `${sizeHeight}px solid ${this.#getRandomColor()}`;
            element.style.position = 'absolute';
            element.style.top = `${y}px`;
            element.style.left = `${x}px`;
            document.body.append(element);
            this.#animate(element, 1, 0);
            setTimeout(() => {element.remove()}, 2000);
        }
        
        infinity() {
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const elementOne = document.createElement('div');
            const elementTwo = document.createElement('div');
            const sizeWidth = random(80, 130);
            elementOne.style.width = elementOne.style.height = elementTwo.style.width = elementTwo.style.height = `${sizeWidth}px`;
            const x = random(2, width - 3*sizeWidth); 
            const y = random(2, height - 2*sizeWidth);
            elementOne.style.position = 'relative';
            elementTwo.style.position = 'absolute';
            elementOne.style.border = elementTwo.style.border = `25px solid rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 254)})`;
            elementOne.style.borderRadius = elementTwo.style.borderRadius = '50px 50px 0 50px';
            elementOne.style.transform = 'rotate(-45deg)';
            elementOne.style.marginTop=`${y}px`;
            elementOne.style.marginLeft=`${x}px`;
            elementTwo.style.top = elementTwo.style.left = '100%';
            elementTwo.style.transform = 'rotate(-179deg)';
            document.body.append(elementOne);
            elementOne.append(elementTwo);
            this.#animate(elementOne, 1, 0);
            setTimeout(() => {elementOne.remove()}, 2000);
        }
            
        heart() {
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const elementOne = document.createElement('div');
            const elementTwo = document.createElement('div');
            const x = random(2, width - 240);
            const y = random(2, height - 400);
            elementOne.style.position = 'relative';
            elementOne.style.width = elementTwo.style.width = '80px';
            elementOne.style.height = elementTwo.style.height = '120px';
            elementOne.style.marginTop=`${y}px`;
            elementOne.style.marginLeft=`${x}px`;
            elementOne.style.background = `red`;
            elementOne.style.borderRadius = elementTwo.style.borderRadius = '50px 50px 0 0'; 
            elementOne.style.transform = 'rotate(-45deg)';
            elementTwo.style.position = 'absolute';
            elementTwo.style.top = `19%`;
            elementTwo.style.left = `25%`;
            elementTwo.style.background = `red`;
            elementTwo.style.transform = 'rotate(90deg)';
            document.body.append(elementOne);
            elementOne.append(elementTwo);
            this.#animate(elementOne, 1, 3, 60);
            setTimeout(() => {elementOne.remove()}, 2000);
        }
    
        star() {
            const {width, height} = document.querySelector('body').getBoundingClientRect();
            const elementOne = document.createElement('div');
            const elementTwo = document.createElement('div');
            const x = random(2, width - 300); 
            const y = random(2, height - 300);
            elementOne.style.position = 'relative';
            elementOne.style.width = elementOne.style.height = '0px';
            elementOne.style.marginTop=`${y}px`;
            elementOne.style.marginLeft=`${x}px`;
            elementOne.style.borderLeft = elementOne.style.borderRight = '100px solid transparent'; 
            elementOne.style.borderBottom = elementTwo.style.borderTop = `150px solid ${this.#getRandomColor()}`;
            elementTwo.style.position = 'absolute';
            elementTwo.style.width = elementTwo.style.height = '0px';
            elementTwo.style.top = `43px`;
            elementTwo.style.left = `-98px`;   
            document.body.append(elementOne);
            elementOne.append(elementTwo);
            this.#animate(elementOne, 1, 3, 60);
            setTimeout(() => {elementOne.remove()}, 2000);
        } 
    
        trigger() {
           const arrayOfShapes = [this.star.bind(this),
                                  this.square.bind(this), 
                                  this.circle.bind(this),
                                  this.triangle.bind(this),
                                  this.rectangle.bind(this), 
                                  this.ring.bind(this),
                                  this.infinity.bind(this), 
                                  this.heart.bind(this)];
            arrayOfShapes[random(0,arrayOfShapes.length-1)]();
        }
}
    
    

    
    
    
    
