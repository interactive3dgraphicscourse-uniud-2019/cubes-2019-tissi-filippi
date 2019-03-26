
//FUNZIONE PER IL TERRENO - DA GUARDARE PIU' AVANTI
function setGround(){
    var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
    var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
    groundMat.color.setHSL( 0.095, 1, 0.75 );
    var ground = new THREE.Mesh( groundGeo, groundMat );
    ground.position.y = -0.5;
    ground.rotation.x = -Math.PI/2;
    scene.add( ground );
    ground.receiveShadow = true;
}
			