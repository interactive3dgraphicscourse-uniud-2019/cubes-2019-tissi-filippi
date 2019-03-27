class Wall {
    constructor(length) {
        this.wall = new THREE.Object3D();
        let wall_tex = new THREE.TextureLoader().load('textures/stone.jpg');
        let wallM = new THREE.MeshPhongMaterial( { map: wall_tex } );
        //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
        let wallG = new THREE.BoxGeometry(1,1,1);
        

        //Creo le pareti del muro
        let wall_front_1 = this.createSubWall(wallG, wallM, length/3);
        let wall_front_2 = this.createSubWall(wallG, wallM, length/3);
        let wall_back = this.createSubWall(wallG, wallM, length - WIDTH_WALL*2);
        let wall_sx = this.createSubWall(wallG, wallM, length - WIDTH_WALL*2);
        let wall_dx = this.createSubWall(wallG, wallM, length - WIDTH_WALL*2);
        //Creo le torri
        let towers = [];
        for(let i=0; i<4; i++){
            towers.push(this.createLittleTower(wallG, wallM, H_TOWER));
            this.wall.add(towers[i]);
        }
        //Posiziono le 4 torri agli angoli
        towers[0].position.set(-(length/2) + TOWER_BASE/2,H_TOWER/2,length/2 - TOWER_BASE/2); //front sx
        towers[1].position.set(length/2 - TOWER_BASE/2,H_TOWER/2,length/2 - TOWER_BASE/2); //front dx
        towers[2].position.set(-(length/2) + TOWER_BASE/2,H_TOWER/2,-(length/2) + TOWER_BASE/2); //back sx
        towers[3].position.set(length/2 - TOWER_BASE/2,H_TOWER/2,-(length/2) + TOWER_BASE/2); //back dx

        //Posiziono le pareti del muro
        this.wall.add(wall_front_1);
        this.wall.add(wall_front_2);
        wall_front_1.rotation.y = 90 * Math.PI/180;
        wall_front_2.rotation.y = 90 * Math.PI/180;
        wall_front_1.position.set(-length/3 + WIDTH_WALL, H_WALL/2, WIDTH_STEPS/2 - 15 - WIDTH_WALL/2);
        wall_front_2.position.set(length/3 - WIDTH_WALL, H_WALL/2, WIDTH_STEPS/2 - 15 - WIDTH_WALL/2);
        this.wall.add(wall_back);
        wall_back.rotation.y = 90 * Math.PI/180;
        wall_back.position.set(0,H_WALL/2, -(WIDTH_STEPS/2 - 15 - WIDTH_WALL/2));
        this.wall.add(wall_sx);
        wall_sx.position.set(-(WIDTH_STEPS/2 - 15 - WIDTH_WALL/2),H_WALL/2,0);
        this.wall.add(wall_dx);
        wall_dx.position.set(WIDTH_STEPS/2 - 15 - WIDTH_WALL/2, H_WALL/2,0);
    }
  
    getWall(){
        return this.wall;
    }

    //Funzione per creare le pareti del muro
    createSubWall(geometry, material, length){
        var base = new THREE.Mesh(geometry, material );
        base.scale.x = WIDTH_WALL;
        base.scale.y = H_WALL;;
        base.scale.z = length;
        return base;
    }

    //Funzione per creare le torri
    createLittleTower(geometry, material, height){
        var base = new THREE.Mesh(geometry, material );
        base.scale.x = TOWER_BASE;
        base.scale.y = height;;
        base.scale.z = TOWER_BASE;
        return base;
    }
  }