(function () {
  function injectWidget() {
    var body = document.body;
    if (!body) return;

    /* ----------------------------------------------------------
       1) BARRA CONTATTI ORIZZONTALE (identica a Mondocamgirls)
       ---------------------------------------------------------- */
    var topBarHTML = `
<div style="width: 100%; text-align: center; margin: 16px 0;">
  <div style="display: inline-flex; justify-content: center; align-items: center; gap: 18px; padding: 16px 24px; background: rgba(255, 255, 255, 0.95); border-radius: 60px; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12); backdrop-filter: blur(8px); overflow-x: auto; box-sizing: border-box;">
    
    <!-- WhatsApp -->
    <a title="WhatsApp" href="https://wa.me/393476893717" target="_blank">
      <img style="width: clamp(38px, 7vw, 60px); transition: .3s;" 
           onmouseover="this.style.transform='scale(1.15)';this.style.filter='drop-shadow(0 0 5px #25D366)'"
           onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
           src="https://cdn-icons-png.flaticon.com/512/733/733585.png">
    </a>

    <!-- Telegram -->
    <a title="Telegram" href="https://t.me/dolce_emy" target="_blank">
      <img style="width: clamp(38px, 7vw, 60px); transition: .3s;"
           onmouseover="this.style.transform='scale(1.15)';this.style.filter='drop-shadow(0 0 5px #0088cc)'"
           onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
           src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png">
    </a>

    <!-- Instagram -->
    <a title="Instagram" href="https://www.instagram.com/emiladolce/" target="_blank">
      <img style="width: clamp(38px, 7vw, 60px); transition: .3s;"
           onmouseover="this.style.transform='scale(1.15)';this.style.filter='drop-shadow(0 0 5px #C13584)'"
           onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
           src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png">
    </a>

    <!-- X -->
    <a title="X" href="https://x.com/emyladolce" target="_blank">
      <img style="width: clamp(38px, 7vw, 60px); transition: .3s;"
           onmouseover="this.style.transform='scale(1.15)';this.style.filter='drop-shadow(0 0 5px #000)'"
           onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
           src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png">
    </a>

    <!-- Teams -->
    <a title="Teams" href="https://teams.live.com/l/invite/FEASLd93wpX2pz4zgE" target="_blank">
      <img style="width: clamp(38px, 6.5vw, 58px); transition: .3s;"
           onmouseover="this.style.transform='scale(1.12)';this.style.filter='drop-shadow(0 0 5px #464EB8)'"
           onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
           src="https://cdn-icons-png.flaticon.com/512/15047/15047490.png">
    </a>

  </div>
</div>`;
    

    /* ----------------------------------------------------------
       2) BARRA LATERALE + BOTTONE FLOTTANTE
       ---------------------------------------------------------- */
    var sideBarHTML = `
<div id="social-toggle" style="
  position: fixed; bottom: 20px; right: 20px; z-index: 9999;
  background: #e91e63; color: white; width: 44px; height: 44px;
  border-radius: 50%; font-size: 28px; text-align: center;
  line-height: 44px; cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
">&minus;</div>

<div id="social-bar" style="
  position: fixed; bottom: 80px; right: 20px; z-index: 9998;
  display: flex; flex-direction: column; align-items: center;
  gap: 10px; padding: 10px;
  background: rgba(255,255,255,0.95); border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); backdrop-filter: blur(4px);
  max-width: 60px; max-height: 300px; overflow-y: auto;
  transition: opacity .3s, visibility .3s; opacity: 1;
">

  <a href="https://wa.me/393476893717" target="_blank">
    <img style="width: 32px; transition: .3s;"
         onmouseover="this.style.transform='scale(1.1)';this.style.filter='drop-shadow(0 0 5px #25D366)'"
         onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
         src="https://cdn-icons-png.flaticon.com/512/733/733585.png">
  </a>

  <a href="https://t.me/dolce_emy" target="_blank">
    <img style="width: 32px; transition: .3s;"
         onmouseover="this.style.transform='scale(1.1)';this.style.filter='drop-shadow(0 0 5px #0088cc)'"
         onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
         src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png">
  </a>

  <a href="https://www.instagram.com/emiladolce/" target="_blank">
    <img style="width: 32px; transition: .3s;"
         onmouseover="this.style.transform='scale(1.1)';this.style.filter='drop-shadow(0 0 5px #C13584)'"
         onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
         src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png">
  </a>

  <a href="https://x.com/emyladolce" target="_blank">
    <img style="width: 32px; transition: .3s;"
         onmouseover="this.style.transform='scale(1.1)';this.style.filter='drop-shadow(0 0 5px #000)'"
         onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
         src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png">
  </a>

  <a href="https://teams.live.com/l/invite/FEASLd93wpX2pz4zgE" target="_blank">
    <img style="width: 32px; transition: .3s;"
         onmouseover="this.style.transform='scale(1.1)';this.style.filter='drop-shadow(0 0 5px #464EB8)'"
         onmouseout="this.style.transform='scale(1)';this.style.filter='none'"
         src="https://cdn-icons-png.flaticon.com/512/15047/15047490.png">
  </a>

</div>`;
    

    /* ----------------------------------------------------------
       3) POP-UP GLAMOROSO
       ---------------------------------------------------------- */
    var popupHTML = `
<div id="popup-glam" style="
  display:none; position:fixed; top:15%; left:50%;
  transform:translateX(-50%); background:rgba(255,255,255,0.9);
  backdrop-filter:blur(10px); border:2px solid #e91e63;
  border-radius:28px; padding:26px 24px 30px; z-index:9999;
  box-shadow:0 0 20px #e91e63; max-width:440px; width:92%;
  text-align:center; font-family:'Dancing Script',cursive;
">
  <span style="position:absolute; top:10px; right:18px; cursor:pointer;
               font-size:28px; font-weight:bold; color:#e91e63;"
        onclick="document.getElementById('popup-glam').style.display='none'">&times;</span>

  <h2 style="margin:0 0 16px; font-size:2.2em; color:#e91e63;">
    Hey Porcellino! <span style="display:inline-block;">💖</span>
  </h2>

  <p style="font-size:1.2em; color:#111; font-family:Arial;">
    <strong>Hai voglia di giocare con me?</strong><br>
    Puoi contattarmi tramite uno dei miei social:
  </p>

  <div style="display:flex; gap:20px; justify-content:center; margin-top:18px;">

    <a href="https://wa.me/393476893717" target="_blank">
      <img style="width:48px; transition:.3s;"
           onmouseover="this.style.transform='scale(1.15)'"
           onmouseout="this.style.transform='scale(1)'"
           src="https://cdn-icons-png.flaticon.com/512/733/733585.png">
    </a>

    <a href="https://t.me/dolce_emy" target="_blank">
      <img style="width:48px; transition:.3s;"
           onmouseover="this.style.transform='scale(1.15)'"
           onmouseout="this.style.transform='scale(1)'"
           src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png">
    </a>

    <a href="https://teams.live.com/l/invite/FEASLd93wpX2pz4zgE" target="_blank">
      <img style="width:48px; transition:.3s;"
           onmouseover="this.style.transform='scale(1.15)'"
           onmouseout="this.style.transform='scale(1)'"
           src="https://cdn-icons-png.flaticon.com/512/15047/15047490.png">
    </a>

  </div>
</div>`;
    

    /* ----------------------------------------------------------
       INSERIMENTO ELEMENTI NELLA PAGINA
       ---------------------------------------------------------- */
    body.insertAdjacentHTML("afterbegin", topBarHTML);
    body.insertAdjacentHTML("beforeend", sideBarHTML + popupHTML);

    /* ----------------------------------------------------------
       LOGICA TOGGLE ICONA FLOTANTE
       ---------------------------------------------------------- */
    var toggleBtn = document.getElementById("social-toggle");
    var socialBar = document.getElementById("social-bar");
    var isVisible = true;

    toggleBtn.onclick = function () {
      isVisible = !isVisible;
      socialBar.style.opacity = isVisible ? "1" : "0";
      socialBar.style.visibility = isVisible ? "visible" : "hidden";
      toggleBtn.innerHTML = isVisible ? "&minus;" : "+";
    };

    /* ----------------------------------------------------------
       MOSTRA POP-UP DOPO 5 SECONDI
       ---------------------------------------------------------- */
    setTimeout(function () {
      var popup = document.getElementById("popup-glam");
      if (popup) popup.style.display = "block";
    }, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectWidget);
  } else {
    injectWidget();
  }
})();
