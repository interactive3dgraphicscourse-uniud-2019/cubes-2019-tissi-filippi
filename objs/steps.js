class Steps {

    constructor(size, deph) {
      this.steps = new THREE.Object3D();
      let step_tex = new THREE.TextureLoader().load('textures/stone.jpg');
	    let stepM = new THREE.MeshPhongMaterial( { map: step_tex } );
      let stepG = new THREE.BoxGeometry(1,1,1);

      let step0 = this.createStep(stepG, stepM, size, deph);
      let step1 = this.createStep(stepG, stepM, size-RIENTRO, deph-RIENTRO);
      let step2 = this.createStep(stepG, stepM, size-(RIENTRO*2), deph- (RIENTRO*2));

      this.steps.add(step0);
      step0.position.set(0,H_STEP/2,0);
      this.steps.add(step1);
      step1.position.y = 3/2*H_STEP;
      this.steps.add(step2);
      step2.position.y = 5/2*H_STEP;
    }
  
    getSteps(){
      return this.steps;
    }

    createStep(geometry, material, size, deph){
      let step = new THREE.Mesh(geometry, material );
      step.scale.x = size;
      step.scale.y = H_STEP;;
      step.scale.z = deph;
      return step;
    }
  }