class Column {

    constructor() {
      this.column = new THREE.Object3D();
      let column_tex = new THREE.TextureLoader().load('textures/bas.jpg');
	  let columnM = new THREE.MeshPhongMaterial( { map: column_tex } );
      let columnG = new THREE.BoxGeometry(1,1,1);

      let base = this.createPartOf(columnG,columnM, 10, 2);
      let stem = this.createPartOf(columnG,columnM, 6, 59);
      let capital = this.createPartOf(columnG,columnM, 10, 4);
      let capital2 = this.createPartOf(columnG,columnM, COLUMN_CAPITAL_SIZE, 3); 

      this.column.add(base);
      base.position.y = 2/1 + H_STEP*3;
      this.column.add(stem);
      stem.position.y = 59/2 + H_STEP*3 + 2; 
      this.column.add(capital);
      capital.position.y = 4/2 + H_STEP*3 + 59 + 2;
      this.column.add(capital2);
      capital2.position.y = 3/2 + H_STEP*3 + 59 + 4 + 2;
    }
  
    getColumn(){
      return this.column;
    }

    createPartOf(geometry, material, size, heigth){
      var base = new THREE.Mesh(geometry, material );
      base.scale.x = size;
      base.scale.y = heigth;;
      base.scale.z = size;
      return base;
    }
  }