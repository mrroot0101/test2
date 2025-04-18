// Create a safe object with client-side information
const clientInfo = {
  browser: navigator.userAgent, // Browser info
  platform: navigator.platform, // Platform info (OS)
  language: navigator.language, // Language preference
  screenWidth: window.innerWidth, // Browser window width
  screenHeight: window.innerHeight, // Browser window height
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Timezone info
};

// Convert the info object to JSON and log it (or display it)
console.log(JSON.stringify(clientInfo));

// Optionally, if you want to show this information on the webpage
document.body.innerHTML = `
  <h2>Client Information</h2>
  <pre>${JSON.stringify(clientInfo, null, 2)}</pre>
`;
