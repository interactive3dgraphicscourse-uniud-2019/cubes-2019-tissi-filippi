class Wall {
    constructor(length, width) {
        this.wall = new THREE.Object3D();
        let wall_tex = new THREE.TextureLoader().load('textures/stone.jpg');
        let wallM = new THREE.MeshPhongMaterial( { map: wall_tex } );
        wall_tex.wrapS = wall_tex.wrapT = THREE.RepeatWrapping;
        wall_tex.offset.set( 0, 0 );
        wall_tex.repeat.set( 10, 2 );
        //Geometria comune: viene utilizzata per tutti gli elementi, che poi vengono scalati
        let wallG = new THREE.BoxBufferGeometry(1,1,1);
        

        //Creo le pareti del muretto
        let wall_front_1 = this.createSubWall(wallG, wallM, 60);
        let wall_front_2 = this.createSubWall(wallG, wallM, 60);
        let wall_back = this.createSubWall(wallG, wallM, length - (RIENTRO*2) - WIDTH_WALL*2);
        let wall_sx = this.createSubWall(wallG, wallM, width - (RIENTRO*2) - WIDTH_WALL*2);
        let wall_dx = this.createSubWall(wallG, wallM, width - (RIENTRO*2) - WIDTH_WALL*2);

        //Creo le torrette
        let towers = [];
        for(let i=0; i<4; i++){
            towers.push(this.createLittleTower(wallG, wallM, H_TOWER));
            this.wall.add(towers[i]);
        }
        //Posiziono le 4 torrette agli angoli
        towers[0].position.set(-(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2), H_TOWER/2, (width - (RIENTRO*2))/2 - WIDTH_WALL/2); //front sx
        towers[1].position.set(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2, H_TOWER/2, (width - (RIENTRO*2))/2 - WIDTH_WALL/2);          //front dx
        towers[2].position.set(-(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2), H_TOWER/2, -((width - (RIENTRO*2))/2 - WIDTH_WALL/2));    //back sx
        towers[3].position.set(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2, H_TOWER/2, -((width - (RIENTRO*2))/2 - WIDTH_WALL/2)); //back dx

        //Aggiungo e posiziono le pareti del muretto
        this.wall.add(wall_front_1);
        this.wall.add(wall_front_2);
        wall_front_1.rotation.y = 90 * Math.PI/180;
        wall_front_2.rotation.y = 90 * Math.PI/180;
        wall_front_1.position.set(-(length-(RIENTRO*2))/2 + WIDTH_WALL + 30, H_WALL/2, (width - (RIENTRO*2))/2 - WIDTH_WALL/2);
        wall_front_2.position.set((length-(RIENTRO*2))/2 - WIDTH_WALL - 30, H_WALL/2, (width - (RIENTRO*2))/2 - WIDTH_WALL/2);
        this.wall.add(wall_back);
        wall_back.rotation.y = 90 * Math.PI/180;
        wall_back.position.set(0,H_WALL/2, -(DEPH_STEPS/2 - RIENTRO - WIDTH_WALL/2));
        this.wall.add(wall_sx);
        wall_sx.position.set(-(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2),H_WALL/2,0);
        this.wall.add(wall_dx);
        wall_dx.position.set(WIDTH_STEPS/2 - RIENTRO - WIDTH_WALL/2, H_WALL/2,0);
    }
    
    //Funzione che mi ritorna l'oggetto appena creato
    getWall(){
        return this.wall;
    }

    //Funzione per creare le pareti del muretto
    createSubWall(geometry, material, length){
        let subwall = new THREE.Mesh(geometry, material );
        subwall.scale.x = WIDTH_WALL;
        subwall.scale.y = H_WALL;;
        subwall.scale.z = length;
        return subwall;
    }

    //Funzione per creare le torri
    createLittleTower(geometry, material, height){
        let tower = new THREE.Mesh(geometry, material );
        tower.scale.x = TOWER_BASE;
        tower.scale.y = height;;
        tower.scale.z = TOWER_BASE;
        return tower;
    }
  }