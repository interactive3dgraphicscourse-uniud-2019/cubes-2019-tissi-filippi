class Steps {

    constructor(x,y,z) {
      this.steps = new THREE.Object3D();
      let step_tex = new THREE.TextureLoader().load('textures/stone.jpg');
	  var stepM = new THREE.MeshPhongMaterial( { map: step_tex } );

      var stepG_0 = new THREE.BoxGeometry(x,y,z);
      var step0 = new THREE.Mesh(stepG_0, stepM);
      //step0.castShadow = true;
      //step0.receiveShadow = true;
      var stepG_1 = new THREE.BoxGeometry(x-15,y,z-15);
      var step1 = new THREE.Mesh(stepG_1, stepM);

      var stepG_2 = new THREE.BoxGeometry(x-30,y,z-30);
      var step2 = new THREE.Mesh(stepG_2, stepM);

      this.steps.add(step0);
      step0.position.set(0,y/2,0);
      this.steps.add(step1);
      step1.position.y = 3/2*y;
      this.steps.add(step2);
      step2.position.y = 5/2*y;
    }
  
    
    getSteps(){
        return this.steps;
      }
  }