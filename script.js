function checkAnswer() {
    const selectedValue = document.getElementById('logicFunction').value;
    const resultElement = document.getElementById('result');

    if (selectedValue === 'XOR') {
        resultElement.textContent = 'Правильно! Це елемент ВИКЛЮЧАЮЧЕ АБО (нерівнозначність).';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Неправильно. Спробуйте ще раз.';
        resultElement.style.color = 'red';
    }
}
