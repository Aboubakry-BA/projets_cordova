document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', () => {
    const birthYearInput = document.getElementById('birthYear');
    const birthYear = Number(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    if (!birthYear) {
      alert('Veuillez entrer une année de naissance.');
      return;
    }

    if (birthYear < 1900 || birthYear > currentYear) {
      alert('Veuillez entrer une année de naissance valide (entre 1900 et ' + currentYear + ').');
      return;
    }

    const age = currentYear - birthYear;
    const ageResult = document.getElementById('ageResult');
    ageResult.textContent = `Vous avez ${age} ans !`;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('hidden');
  });
});
