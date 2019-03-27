class Column {

    constructor(size) {
      this.column = new THREE.Object3D();
      let column_tex = new THREE.TextureLoader().load('textures/stone.jpg');
	  let columnM = new THREE.MeshPhongMaterial( { map: column_tex } );
      let columnG = new THREE.BoxGeometry(1,1,1);

      let base0 = this.createPartOf(columnG, columnM, 15, 5);
      let base1 = this.createPartOf(columnG, columnM, 10, 3);
      let stem = this.createPartOf(columnG,columnM, 6, 59);
      let capital = this.createPartOf(columnG,columnM, 10, 3); 

      this.column.add(base0);
      base0.position.y = 17.5;
      this.column.add(base1);
      base1.position.y = 21.5;
      this.column.add(stem);
      stem.position.y = 52.5; 
      this.column.add(capital);
      capital.position.y = 83.5;
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