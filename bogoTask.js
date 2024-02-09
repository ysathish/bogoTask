const boxRadios = document.querySelectorAll('[id^="boxRadio"]'); 
    const selectors = document.querySelectorAll('.selectors');

    boxRadios.forEach(function (boxRadio, index) {
        boxRadio.addEventListener('change', function () {
            selectors.forEach(function (selector) {
                selector.style.display = 'none';
                selector.parentElement.parentElement.classList.remove('pink'); 
            });
            document.getElementById("box").classList.remove('pink')
            document.getElementById("box2").classList.remove('pink')
            document.getElementById("box3").classList.remove('pink')

           
            if (this.checked) {
                selectors[index].style.display = 'flex';
                this.closest('.box').classList.add('pink'); 
            } else {
                this.closest('.box').classList.remove('pink'); 
            }
        });
    });
   // Update total price based on radio button selection
function updateTotalPrice(price) {
    document.getElementById('total').textContent = price;
}

// Event listener for radio buttons
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        let priceId;
        if (this.id === 'boxRadio1') {
            priceId = 'price1';
        } else if (this.id === 'boxRadio2') {
            priceId = 'price2';
    // Added for the third set of radio buttons
        } else if (this.id === 'boxRadio3') { 
            priceId = 'price3';
        }
        // Get the price text content
        const price = document.getElementById(priceId).textContent; 
        // Update the total price
        updateTotalPrice(price); 
    });
});