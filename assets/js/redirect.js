// redirect.js
(function(){
  const mobilePage = 'Mobil.html'; // nom exact, sensible à la casse sur certains serveurs

  // détection userAgent + largeur d'écran
  const uaMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const narrowScreen = window.matchMedia && window.matchMedia('(max-width:900px)').matches;

  // Empêche la redirection si déjà sur la page mobile
  const currentFile = (location.pathname.split('/').pop() || '').toLowerCase();
  const skip = location.search.includes('no_mobile_redirect=1');

  if (!skip && (uaMobile || narrowScreen) && currentFile !== mobilePage.toLowerCase()) {
    // replace pour ne pas ajouter d'entrée dans l'historique
    location.replace(mobilePage);
  }
})();
