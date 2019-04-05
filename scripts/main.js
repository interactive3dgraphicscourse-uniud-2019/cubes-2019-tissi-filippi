//Funzione per il terreno -- NON UTILIZZATA
function setGround(){
    let groundGeo = new THREE.PlaneBufferGeometry(10000, 10000);
    let groundMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0x050505
    });
    groundMat.color.setHSL(0.095, 1, 0.75);
  
    let ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.5;
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    ground.receiveShadow = true;
}


// Genera un colore rgb random --> ci serve per inizializzare la luce
function createRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}
// Verifica che le coordinate date siano all'interno dell'immagine e che non siano negative
function isInImg(x,z,xmax,zmax){
  return ((x>=0) && (z>=0) && (x<=xmax) && (z<=zmax)); 
}

		