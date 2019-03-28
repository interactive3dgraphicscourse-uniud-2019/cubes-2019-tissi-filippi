class CharacterOutside {

    constructor(size, deph) {
      this.character = new THREE.Object3D();
      let character_tex = new THREE.TextureLoader().load('textures/stone.jpg');
      let stepM = new THREE.MeshPhongMaterial( { map: character_tex } );
      //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
      let stepG = new THREE.BoxGeometry(1,1,1);
      
      //Creo i 3 gradini
      

      //Aggiungo e posiziono i gradini
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

    //Funzione per creare il singolo gradino
    createLevelBottom(geometry, material, size, deph){
      let step = new THREE.Mesh(geometry, material );
      step.scale.x = size;
      step.scale.y = H_STEP;;
      step.scale.z = deph;
      return step;
    }
  }