
//FUNZIONE PER IL TERRENO - DA GUARDARE PIU' AVANTI
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

function setRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}

function removeEntity(object) {
  let selectedObject = scene.getObjectByName(object.name);
  sfera.remove( selectedObject );
}

		