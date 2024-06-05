document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', () => {
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const weight = Number(weightInput.value);
        const height = Number(heightInput.value);

        if (!weight || weight <= 0) {
            alert('Veuillez entrer un poids valide.');
            return;
        }

        if (!height || height <= 0) {
            alert('Veuillez entrer une taille valide.');
            return;
        }

        const imc = weight / Math.pow(height, 2);
        let message = 'Vous êtes en état ';

        if (imc < 16.5) {
            message += 'de dénutrition.';
        } else if (imc >= 16.5 && imc < 18.5) {
            message += 'de maigreur.';
        } else if (imc >= 18.5 && imc < 25) {
            message = 'Vous avez un poids normal.';
        } else if (imc >= 25 && imc < 30) {
            message += 'de surpoids.';
        } else if (imc >= 30 && imc < 35) {
            message += "d'obésité modérée.";
        } else if (imc >= 35 && imc < 40) {
            message += "d'obésité sévère.";
        } else {
            message += "d'obésité morbide ou massive.";
        }

        const interpretation = document.getElementById('interpretation');
        interpretation.innerHTML = `Votre IMC est : ${imc.toFixed(2)}<hr>${message}`;
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.classList.remove('hidden');
    });
});
