function Tempio (x=0, y=0, z=0){
	//this.geometry = new THREE.BoxGeometry(1,1,1);

	this.steps = new THREE.Object3D();

	// Primo gradino 
	let step0 = this.createStep(10, 20, 3);
	this.steps.add(step0);
    step0.position.set(x,y,z);
    
    // Secondo gradino
    let step1 = this.createStep(10, 20, 3);
	this.steps.add(step1);
    step1.position.set(x,y+3,z);

    /*
	col = [];
	for (let i = 0; i < 4; i++) {
		col[i] = new Column();
		this.floor.add(col[i].col);
		col[i].col.scale.set(0.44, 0.44, 0.44);
	}

	col[0].col.position.set(15.5,1,15.5);
	col[1].col.position.set(-15.5,1,15.5);
	col[2].col.position.set(15.5,1,-15.5);
    col[3].col.position.set(-15.5,1,-15.5);
    */

}


Tempio.prototype.createStep = function(x,y,z){
	let geometry = new THREE.BoxGeometry(x, y, z);
    let loader = new THREE.TextureLoader();
    let cube;
    loader.load(
        // resource URL
        "textures/stone.jpg",
        // onLoad callback
        texture => {
            let material = new THREE.MeshPhongMaterial({ map: texture });
            cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true;
            cube.receiveShadow = true;
        },
        // onProgress callback currently not supported
        undefined,
        // onError callback
        err => {
            console.error("An error happened.");
            console.error(err);
        }
    );

	return cube;
}