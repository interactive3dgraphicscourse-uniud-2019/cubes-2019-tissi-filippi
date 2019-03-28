class Column {

    constructor() {
      this.column = new THREE.Object3D();
      let column_tex = new THREE.TextureLoader().load('textures/bas.jpg');
	    let columnM = new THREE.MeshPhongMaterial( { map: column_tex } );
      let columnG = new THREE.BoxGeometry(1,1,1);

      let h_base = 2;
      let size_base = 10;
      let h_stem = 59;
      let size_stem = 6;
      let h_capital = 4;
      let h_capital2 = 3;
      let size_capital2 = COLUMN_CAPITAL_SIZE;
      this.h_total = h_base+h_stem+h_capital+h_capital2;
      let base = this.createPartOf(columnG,columnM, size_base, h_base);
      let stem = this.createPartOf(columnG,columnM, size_stem, h_stem);
      let capital = this.createPartOf(columnG,columnM, size_base, h_capital);
      let capital2 = this.createPartOf(columnG,columnM, size_capital2, h_capital2); 

      this.column.add(base);
      base.position.y = h_base/1 + H_STEP*3;
      this.column.add(stem);
      stem.position.y = h_stem/2 + H_STEP*3 + h_base; 
      this.column.add(capital);
      capital.position.y = h_capital/2 + H_STEP*3 + h_stem + h_base;
      this.column.add(capital2);
      capital2.position.y = h_capital2/2 + H_STEP*3 + h_stem + h_capital + h_base;
    }
  
    getColumn(){
      return this.column;
    }

    getHColumn(){
      return this.h_total;
    }

    createPartOf(geometry, material, size, heigth){
      var base = new THREE.Mesh(geometry, material );
      base.scale.x = size;
      base.scale.y = heigth;;
      base.scale.z = size;
      return base;
    }
  }