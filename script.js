// Aspetto che la pagina sia caricata
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bmiForm");
    const badge = document.getElementById("categoryBadge");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // blocca l’invio al server e il refresh
  
      const w = Number(form.weight.value);
      const h = Number(form.height.value) / 100;
  
      // Reset badge
      badge.textContent = "";
      badge.className = "badge rounded-pill";
  
      // Validazione
      if (!w || !h) {
        form.result.value = "";
        badge.textContent = "Inserisci valori validi";
        badge.classList.add("text-bg-warning");
        return;
      }
  
      // Calcolo BMI
      const bmi = w / (h ** 2);
      form.result.value = bmi.toFixed(1);
  
      // Categoria e colore
      let category = "";
      let badgeClass = "";
  
      if (bmi < 18.5) {
        category = "Sottopeso";
        badgeClass = "text-bg-info";
      } else if (bmi < 25) {
        category = "Normale";
        badgeClass = "text-bg-success";
      } else if (bmi < 30) {
        category = "Sovrappeso";
        badgeClass = "text-bg-warning";
      } else {
        category = "Obeso";
        badgeClass = "text-bg-danger";
      }
  
      // Aggiorna badge
      badge.textContent = category;
      badge.classList.add(badgeClass);
    });
  });