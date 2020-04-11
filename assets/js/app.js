var options = {
  strings: ["veloper", "signer"],
  typeSpeed: 50,
  loop: true,
};

var typed = new Typed("#hobbie", options);

particlesJS.load("particles-js", "/assets/js/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
