function selectCard(cardElement) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.classList.remove('selected');
    });

    cards.forEach((card) => {
        const radioBtn = card.querySelector('input[type="radio"]');
        radioBtn.checked = false;
      });
      
    cardElement.classList.add('selected');
    const radioBtn = cardElement.querySelector('input[type="radio"]');
    radioBtn.checked = true;
  }
  