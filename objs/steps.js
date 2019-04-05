class Steps {

    constructor(size, deph) {
      this.steps = new THREE.Object3D();
      let step_tex = new THREE.TextureLoader().load('textures/stone.jpg');
      step_tex.wrapS = step_tex.wrapT = THREE.RepeatWrapping;
      step_tex.offset.set( 0, 0 );
      step_tex.repeat.set( 5, 5 );
      let stepM = new THREE.MeshPhongMaterial( { map: step_tex } );
      //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
      let stepG = new THREE.BoxBufferGeometry(1,1,1);

      //Creo i 3 gradini
      let step0 = this.createStep(stepG, stepM, size, deph);
      let step1 = this.createStep(stepG, stepM, size-RIENTRO, deph-RIENTRO);
      let step2 = this.createStep(stepG, stepM, size-(RIENTRO*2), deph- (RIENTRO*2));

      //Aggiungo e posiziono i gradini
      this.steps.add(step0);
      step0.position.set(0,H_STEP/2,0);
      this.steps.add(step1);
      step1.position.y = 3/2*H_STEP;
      this.steps.add(step2);
      step2.position.y = 5/2*H_STEP;
    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getSteps(){
      return this.steps;
    }

    //Funzione per creare il singolo gradino
    createStep(geometry, material, size, deph){
      let step = new THREE.Mesh(geometry, material );
      step.scale.x = size;
      step.scale.y = H_STEP;;
      step.scale.z = deph;
      return step;
    }
  }