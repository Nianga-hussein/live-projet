document.getElementById('buyNowButton').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    // Récupérer le nom de l'article, le prix et l'URL de l'image
    const itemName = document.querySelector('.card__title').innerText;
    const itemPrice = document.querySelector('.card__preci').innerText;
    const itemImage = document.getElementById('itemImage').src; // Récupérer l'URL de l'image

    // Créer le message personnalisé
    const message = `${itemImage}\nSalut l'agence pili-pili, je suis intéressé par ${itemName} qui coûte ${itemPrice}.`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);

    // Ouvrir WhatsApp avec le message
    const whatsappUrl = `https://wa.me/242069178630?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});