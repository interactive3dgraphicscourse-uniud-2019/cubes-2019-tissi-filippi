class CharacterInside {

    constructor() {
      this.character_in = new THREE.Object3D();
      let character_tex_in = new THREE.TextureLoader().load('textures/ros.jpg');
      let head_tex = new THREE.TextureLoader().load('textures/head_tex.jpg');
      let face_tex = new THREE.TextureLoader().load('textures/face.jpg');
      
      /****************** Creo la parte inferiore del personaggio *************/
      let bottom = [];
      let h_level = 2.5;
      let h_level_2 = 2;
      let bottom_character_in = new THREE.Object3D();
      let bottomG = new THREE.BoxBufferGeometry(1,1,1);
      let bottomM = new THREE.MeshPhongMaterial( { map: character_tex_in, opacity: .8, transparent: true } );
      bottom.push(this.createBottomLevel(bottomG, bottomM, 1.5, 2, 2)); //livello 0
      bottom_character_in.add(bottom[0]);
      bottom[0].position.set(0, -(h_level_2/2 + h_level + h_level_2), -(2/2 + 2 + 1))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 3, 2, 2)); //livello 1
      bottom_character_in.add(bottom[1]);
      bottom[1].position.set(0, -(h_level_2/2 +h_level), -(h_level_2/2 + 2))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 5, h_level, 2)); //livello 2
      bottom_character_in.add(bottom[2]);
      bottom[2].position.set(0,-h_level/2 , -2)

      bottom.push(this.createBottomLevel(bottomG, bottomM, 7, h_level, 4)); //livello 3
      bottom_character_in.add(bottom[3]);
      bottom[3].position.set(0,h_level/2,0)

      /****************** Creo la parte superiore del personaggio ***************/
      let upper_character_in = new THREE.Object3D();
      
      //Busto
      let w_body = 10;
      let h_chest = 10;
      let w_body_in = 7;
      let w_arm_hand = 1.5;
      let bodyG = new THREE.BoxBufferGeometry(w_body_in,h_chest,4);
      let body = new THREE.Mesh(bodyG, bottomM);
      upper_character_in.add(body);
      body.position.set(0, w_body/2 + h_level, 0);

      //Braccia e mani
      let h_arm = 5;
      let h_hand = 2;
      let armG = new THREE.BoxBufferGeometry(w_arm_hand, h_arm, h_hand);
      let handG = new THREE.BoxBufferGeometry(w_arm_hand, h_hand, h_hand);
      let handM = new THREE.MeshPhongMaterial( { map: head_tex, opacity: .8, transparent: true } );
      let armSx = new THREE.Mesh(armG, bottomM);
      let armDx = new THREE.Mesh(armG, bottomM);
      let handSx = new THREE.Mesh(handG, handM);
      let handDx = new THREE.Mesh(handG, handM);

      //Oggetti che mi servono per ruotare le braccia
      let test1 = new THREE.Object3D();
      test1.position.set(0,10,2);
      let test2 = new THREE.Object3D();
      test1.add(test2);
      test2.add(armSx);
      test2.add(handSx);
      test2.add(armDx);
      test2.add(handDx);
      test2.rotation.x = -100*Math.PI/180;

      upper_character_in.add(test1);
      armSx.position.set(-(w_body_in/2+w_arm_hand/2), 0, 0);
      armDx.position.set(w_body_in/2+w_arm_hand/2, 0, 0);
      handSx.position.set(-(w_body_in/2+w_arm_hand/2), -(h_hand/2 + h_level), 0);
      handDx.position.set(w_body_in/2+w_arm_hand/2, -(h_hand/2 + h_level), 0);

      /******************* Creo la testa del personaggio **********************/
      let headM_array = [
              new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}), 
              new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
              new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
              new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
              new THREE.MeshPhongMaterial({map: face_tex, opacity: .8, transparent: true}),
              new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true})
          ];
      let size_head = 3;
      let headG = new THREE.BoxBufferGeometry(size_head,size_head,size_head);
      let headM = new THREE.MultiMaterial(headM_array);
      let head = new THREE.Mesh(headG, headM);
      upper_character_in.add(head);
      head.position.set(0, size_head/2 + h_level + h_chest, 0);
      
      bottom_character_in.position.z = -1.5;
      this.character_in.add(bottom_character_in);
      this.character_in.add(upper_character_in);
      this.character_in.position.y = 25;

    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getCharacter(){
      return this.character_in;
    }
    
    //Funzione per creare il singolo "livello" della parte inferiore del personaggio
    createBottomLevel(geometry, material, width, heigth, size){
        let step = new THREE.Mesh(geometry, material );
        step.scale.x = width;
        step.scale.y = heigth;
        step.scale.z = size;
        return step;
      }
  }