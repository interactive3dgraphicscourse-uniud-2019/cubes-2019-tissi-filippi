
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

//FUNZIONE PER CUBO CON TEXTURE
function createCube(){
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let loader = new THREE.TextureLoader();
    loader.load(
        // resource URL
        "textures/11635.jpg",
        // onLoad callback
        texture => {
            let material = new THREE.MeshPhongMaterial({ map: texture });
            let cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true;
            cube.receiveShadow = true;
            scene.add(cube);
        },
        // onProgress callback currently not supported
        undefined,
        // onError callback
        err => {
            console.error("An error happened.");
            console.error(err);
        }
    );
}

			