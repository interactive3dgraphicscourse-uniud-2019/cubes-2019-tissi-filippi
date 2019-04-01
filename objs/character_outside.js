class CharacterOutside {

    constructor() {
      this.character = new THREE.Object3D();
      let character_tex = new THREE.TextureLoader().load('textures/ros.jpg');
      
      /****************** Creo il bottom *************/
      let bottom = [];
      let h_level = 2.5;
      let h_level_2 = 2;
      let bottom_character = new THREE.Object3D();
      let bottomG = new THREE.BoxBufferGeometry(1,1,1);
      let bottomM = new THREE.MeshPhongMaterial( { map: character_tex, opacity: .8, transparent: true } );
      bottom.push(this.createBottomLevel(bottomG, bottomM, 1.5, h_level_2, 2)); //livello 0
      bottom_character.add(bottom[0]);
      bottom[0].position.set(0, -(h_level_2/2 + h_level +h_level_2), -(h_level_2/2 + h_level_2 + 1))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 3,h_level_2, h_level_2)); //livello 1
      bottom_character.add(bottom[1]);
      bottom[1].position.set(0, -(h_level_2/2 + h_level), -(h_level_2/2 + h_level_2))

      bottom.push(this.createBottomLevel(bottomG, bottomM, 5, h_level, 2)); //livello 2
      bottom_character.add(bottom[2]);
      bottom[2].position.set(0,-h_level/2 , -h_level_2)

      bottom.push(this.createBottomLevel(bottomG, bottomM, 7, h_level, 4)); //livello 3
      bottom_character.add(bottom[3]);
      bottom[3].position.set(0,h_level/2,0)

      /****************** Creo l'upper *************/
      let upper_character = new THREE.Object3D();
      
      //Busto
      let w_body = 10;
      let h_chest = 10;
      let w_body_in = 7;
      let w_arm_hand = 1.5;
      let bodyG = new THREE.BoxBufferGeometry(w_body_in, h_chest,4);
      let bodyM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,20)", opacity: .8, transparent: true } );
      let body = new THREE.Mesh(bodyG, bodyM);
      upper_character.add(body);
      body.position.set(0, w_body/2 + h_level, 0);

      //Braccia e mani
      let h_arm = 5;
      let h_hand = 2;
      let armG = new THREE.BoxBufferGeometry(w_arm_hand, h_arm, h_hand);
      let armM = new THREE.MeshBasicMaterial( { color: "rgb(0,0,20)", opacity: .8, transparent: true } );
      let handG = new THREE.BoxBufferGeometry(w_arm_hand, h_hand, h_hand);
      let handM = new THREE.MeshBasicMaterial( { color: "rgb(255,222,173)", opacity: .8, transparent: true } );
      let armSx = new THREE.Mesh(armG, armM);
      let armDx = new THREE.Mesh(armG, armM);
      let handSx = new THREE.Mesh(handG, handM);
      let handDx = new THREE.Mesh(handG, handM);

      let test1 = new THREE.Object3D();
      test1.position.set(0,10,2);
      let test2 = new THREE.Object3D();
      test1.add(test2);
      test2.add(armDx);
      test2.add(handDx);
      test2.rotation.x = -90*Math.PI/180;

      upper_character.add(armSx);
      armSx.position.set(-(w_body_in/2+w_arm_hand/2), h_arm/2 + h_level + h_chest/2, 0);
      upper_character.add(handSx);
      handSx.position.set(-(w_body_in/2+w_arm_hand/2), h_hand/2 + h_level + (h_chest-h_arm-h_hand), 0);

      upper_character.add(test1);
      armDx.position.set(w_body_in/2+w_arm_hand/2, 0, 0);
      handDx.position.set(w_body_in/2+w_arm_hand/2, -(h_hand/2 + h_level), 0);

      //Aggiungiamo un piccola lancia
      let spearG = new THREE.BoxBufferGeometry(0.5,25,0.5);
      let spearM = new THREE.MeshBasicMaterial({ color: "rgb(0,0,0)", opacity: .8, transparent: true });
      let spear = new THREE.Mesh(spearG, spearM);
      spear.rotation.x = 90 * Math.PI/180;
      handDx.add(spear);
      
      /************ Creo la testa *********************/
        let head_tex = new THREE.TextureLoader().load('textures/head_tex.jpg');
        let face_tex = new THREE.TextureLoader().load('textures/face.jpg');

        let headM_array = [
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}), 
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: face_tex, opacity: .8, transparent: true}),
                new THREE.MeshPhongMaterial({map: head_tex, opacity: .8, transparent: true})
            ];
      let size_head = 3;
      let headG = new THREE.BoxBufferGeometry(size_head, size_head, size_head);
      let headM = new THREE.MultiMaterial(headM_array);
      let head = new THREE.Mesh(headG, headM);
      upper_character.add(head);
      head.position.set(0, size_head/2 + h_level + h_chest, 0);
      
      this.character.add(bottom_character);
      this.character.add(upper_character);
      this.character.position.y = 25;

    }
  
    getCharacter(){
      return this.character;
    }
    
    //Funzione per creare il singolo "livello" del bottom del character
    createBottomLevel(geometry, material, width, heigth, size){
        let step = new THREE.Mesh(geometry, material );
        step.scale.x = width;
        step.scale.y = heigth;
        step.scale.z = size;
        return step;
      }
  }