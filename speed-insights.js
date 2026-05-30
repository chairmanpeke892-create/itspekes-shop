// Import and inject Vercel Speed Insights
// This script loads the Speed Insights tracking for the website
(function() {
  // Queue initialization
  if (window.si) return;
  window.si = function() {
    (window.siq = window.siq || []).push(arguments);
  };

  // Load the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '2.0.0';
  
  // Use the default Vercel path when deployed
  // In development, this will use the debug version
  var isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  script.src = isDev 
    ? 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js'
    : '/_vercel/speed-insights/script.js';
  
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Failed to load script. Please check if any content blockers are enabled.');
  };
  
  document.head.appendChild(script);
})();
