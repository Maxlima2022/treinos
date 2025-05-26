// Função para salvar e carregar estado dos checkboxes
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const estado = localStorage.getItem(checkbox.id);
        if (estado === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Página de Progresso
    const progressoDiv = document.getElementById('progresso');
    if (progressoDiv) {
        const totalTreinos = ['seg','ter','qua','qui','sex','sab','dom'];
        const totalAlimentacao = ['cafe','lanche1','almoco','lanche2','jantar','ceia'];

        let treinosFeitos = totalTreinos.filter(id => localStorage.getItem(id) === 'true').length;
        let alimentacaoFeita = totalAlimentacao.filter(id => localStorage.getItem(id) === 'true').length;

        progressoDiv.innerHTML = `
            <p>✅ <b>Treinos concluídos:</b> ${treinosFeitos} / ${totalTreinos.length}</p>
            <p>🍎 <b>Refeições feitas:</b> ${alimentacaoFeita} / ${totalAlimentacao.length}</p>
        `;
    }
});
