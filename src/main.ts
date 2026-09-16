import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="terminal">
    <h1>SISTEMA EN LÍNEA</h1>
    <p><strong>[STATUS]:</strong> Infraestructura Vite + TS inicializada.</p>
    <p><strong>[HOST]:</strong> patriciogaitan.vercel.app</p>
    <p><strong>[USER]:</strong> Patricio Gaitan | CTO TEZCOR</p>
    <p><strong>[TARGET]:</strong> UASLP & MITACS</p>
    <div class="blinking-cursor"></div>
  </div>
`

console.log("Arquitectura conectada. Búnker operando al 100%.");