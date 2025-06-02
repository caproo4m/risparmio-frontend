async function generatePlan() {
  const income = document.getElementById("income").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Generazione in corso...";

  try {
    const res = await fetch("const res = await fetch("https://risparmio-interattivo.onrender.com/generate", {
", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ income })
    });

    const data = await res.json();
    resultDiv.innerHTML = data.result.replace(/\n/g, "<br>");
    // Estrapola percentuali per il grafico (esempio semplice)
    const labels = ["Spese Fisse", "Risparmio", "Tempo Libero"];
    const values = [50, 30, 20]; // Placeholder

    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Distribuzione Entrate',
          data: values,
          backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
        }]
      },
      options: {
        responsive: true
      }
    });

    document.getElementById('chart').style.display = "block";
  } catch (err) {
    resultDiv.innerHTML = "Errore nella generazione.";
    console.error(err);
  }
}
