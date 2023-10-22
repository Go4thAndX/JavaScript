document.getElementById('runScript').addEventListener('click', function() {
  var selectElement = document.getElementById('scriptSelector');
  var selectedScript = selectElement.options[selectElement.selectedIndex].value;

  // Voer het geselecteerde script uit
  var script = document.createElement('script');
  script.src = selectedScript;
  document.body.appendChild(script);
});
