// app.js - logique minimale pour remplir compteurs et gérer boutons
document.addEventListener('DOMContentLoaded', () => {
  const totalEl = document.getElementById('totalServers');
  const availEl = document.getElementById('availableSlots');
  const occEl = document.getElementById('occupiedSlots');
  const status = document.getElementById('connectStatus');

  // état mock (remplace par données réelles via fetch/WebSocket)
  const state = { total: 0, available: 0, occupied: 0, connected: false };

  function render() {
    totalEl.textContent = state.total;
    availEl.textContent = state.available;
    occEl.textContent = state.occupied;
    status.textContent = state.connected ? 'Connecté' : 'Déconnecté';
    status.style.background = state.connected ? '#059669' : '#ef4444';
  }

  // simule tentative de connexion (exemple)
  setTimeout(() => {
    // laisse déconnecté (comme capture) ; si tu veux connecté : state.connected = true;
    state.connected = true;
    render();
  }, 800);

  // boutons
  document.getElementById('refreshBtn').addEventListener('click', () => {
    status.textContent = 'Reconnexion...';
    // ici tu peux appeler ton API ou relancer WebSocket
    setTimeout(() => {
      // exemple: mise à jour mock
      state.connected = true; // ou true si connecté
      render();
    }, 900);
  });

  document.getElementById('reloadPage').addEventListener('click', () => {
    location.reload();
  });

  render();
});

/* Où brancher WebSocket / fetch :
   - crée une connexion WebSocket et dans onmessage mets à jour state.total/state.available/state.occupied puis appel render()
   - ou fais fetch périodique vers ton endpoint et mets à jour state à partir de la réponse
*/

(function(){
  const quitBtn = document.getElementById('quitBtn');
  const closeFailed = document.getElementById('close-failed');

  if (!quitBtn) return;

  quitBtn.addEventListener('click', () => {
    // tentative de fermeture (méthode la plus compatible)
    try {
      // ouvre la même fenêtre sur elle-même puis ferme — parfois autorisé
      window.open('', '_self');
      window.close();
    } catch (e) {
      // ignore
    }

    // fallback : après un court délai, si la fenêtre n'est pas fermée,
    // on redirige vers about:blank et affiche un message d'instruction.
    setTimeout(() => {
      // redirige pour vider la page
      try { location.href = 'about:blank'; } catch(e){ /* ignore */ }

      // affiche message d'instruction si l'onglet n'a pas été fermé
      if (closeFailed) {
        closeFailed.style.display = 'block';
      } else {
        // si aucun élément de fallback, affiche quick alert
        alert("Impossible de fermer automatiquement l'onglet. Veuillez le fermer manuellement.");
      }
    }, 250);
  });
})();
