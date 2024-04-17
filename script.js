const labels = document.querySelectorAll('.form-control label')
// this gives me a nodeList of all the labels

labels.forEach(label => {
    label.innerHTML = label.innerText
// <label>Email</label>     //E M A I L 
        .split('')
        // splitting it into an array
        // [E, M, A, I, L]
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                                                            // choosing the index and multiply it by 50
                                                            // 0, 50 ,,100, 150 so on....
        // mapping the label to create an array of the letter with a span around it 
        .join('')
        // then i am turning it back into a string
})