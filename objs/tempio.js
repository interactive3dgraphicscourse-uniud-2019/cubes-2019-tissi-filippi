class Steps {

    constructor(x,y,z) {
      this.steps = new THREE.Object3D();
      let step_tex = new THREE.TextureLoader().load('textures/stone.jpg');
	  var stepM = new THREE.MeshPhongMaterial( { map: step_tex } );

      var stepG = new THREE.BoxGeometry(1,1,1);
      var step0 = new THREE.Mesh(stepG, stepM);
      step0.castShadow = true;
      step0.receiveShadow = true;

      step0.position.set(x,y,z);
      this.steps.add(step0);
    }
  
    
    getSteps(){
        return this.steps;
      }
  }