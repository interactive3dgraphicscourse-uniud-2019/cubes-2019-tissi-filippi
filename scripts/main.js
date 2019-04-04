
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

//Genera un colore rgb random
function setRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}
//verifica che le coordinate date siano all'interno dell'immagine e che non siano negative
function isInEdge(x,z,xmax,zmax){
  return ((x>=0) && (x<=xmax) && (z>=0) && (z<=zmax)); 
}


		