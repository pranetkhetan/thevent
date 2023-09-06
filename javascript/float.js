const textbox = document.getElementById('textbox');
    let wordArray = [];
    textbox.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            const fullText = this.value;
            if (fullText.trim() !== '') {
                const message = document.createElement('p');
                message.classList.add('message');
                message.textContent = fullText;
                const ventLeft = document.getElementById('vent').offsetLeft; 
                const ventWidth = document.getElementById('vent').offsetWidth; 
                const randomX = ventLeft + Math.random() * (ventWidth - message.offsetWidth - 200); 
                message.style.animation = `floatAndFade ${5 + Math.random() * 5}s forwards`;
                message.style.left = `${randomX}px`; 
                message.style.bottom = `${20}vh`;
                document.body.appendChild(message);
                this.value = '';
            }
        } else if (e.keyCode === 8) {
            if (wordArray.length > 0) {
                wordArray.pop();
            }
        } else {
            const word = e.key;
            wordArray.push(word);
        }
    });