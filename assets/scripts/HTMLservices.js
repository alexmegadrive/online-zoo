'use strict'

class HTMLService {

    showElement(element) {
        element.style.display = 'block'
    }
    hideElement(element) {
        element.style.display = 'none'
    }
    randomArrGenerate(max, total) {
        let result = [];
        for (let i=0; i< total; i++) {
            let newEl = Math.round(Math.random() * (max-1) + 1)
           while (result.includes(newEl) == true )
           {
            newEl = Math.round(Math.random() * (max-1) + 1)
           }
            result.push(newEl)
        }
        return result
    }
    
}
