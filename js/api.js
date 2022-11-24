<<<<<<< HEAD
class API {
  Data={
      Platillos:[],
      Users:[],
      Request:[],
      Denied:[]
  }
  Detch={A:"A"}
  Betch={}
  Getch={}
  constructor (){
       this.getDATArequests()
       this.getDATAplatillos()
       this.getDATAusers()
  }

async  getDATAusers(){                               
  await axios.get("https://backend.lanonna.online/carts").then((response) =>{
       this.Detch = response
   }).catch((err) => {
           console.log(err);
   });
   console.log(this.Detch);
   for (let index = 0; index < this.Detch.data.length; index++) {
       this.Data.Users.push(this.Detch.data[index].user);      
   }
   console.log(this.Data.Users);
  }
  async  getDATArequests(){                               
   await axios.get("https://backend.lanonna.online/carts").then((response) =>{
        this.Betch = response
    }).catch((err) => {
            console.log(err);
    });
    console.log(this.Betch);
    for (let index = 0; index < this.Betch.data.length; index++) {
        this.Data.Request.push(this.Betch.data[index].platillos);      
    }
    console.log(this.Data.Request);
   }   
   async  getDATAplatillos(){                               
       await axios.get("https://backend.lanonna.online/platillos").then((response) =>{
            this.Getch = response
        }).catch((err) => {
                console.log(err);
        });
        console.log(this.Getch);
        for (let index = 0; index < this.Getch.data.length; index++) {
            this.Data.Platillos.push(this.Getch.data[index]);      
        }
        console.log(this.Data.Platillos);
       }
       async postRequestplatillos(){
           await axios.post
       }
       quantity=[[0,1],[2,1]]
}
=======
class API {
  Data = {
    //Platillos del Menu
    Platillos: [],
    //Usuario Actual
    User: {},
    //Carrito del Usuario
    Request: [],
    //Productos Denegados
    Denied: [],
  };
  //Datos del Usuario
  Fetch_User = { A: "A" };
  //Datos de los Platillos
  Fetch_Platillos = {};
  //Datos del Carrito
  Fetch_Request = {};
  //Funcion Inicial
  constructor() {
    this.getDATArequests();
    this.getDATAplatillos();
    this.getDATAusers();
  }
  // Metodo get para recoger los datos del usuario
  async getDATAusers() {
    await axios
      .get("https://backend.lanonna.online/carts")
      .then((response) => {
        this.Detch = response;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.Detch);
    for (let index = 0; index < this.Detch.data.length; index++) {
      this.Data.Users.push(this.Detch.data[index].user);
    }
    console.log(this.Data.User);
  }
  // Metodo get para recoger los datos del carrito
  async getDATArequests() {
    await axios
      .get("https://backend.lanonna.online/carts")
      .then((response) => {
        this.Betch = response;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.Betch);
    for (let index = 0; index < this.Betch.data.length; index++) {
      this.Data.Request.push(this.Betch.data[index].platillos);
    }
    console.log(this.Data.Request);
  }
  // Metodo get para recoger los datos del menu
  async getDATAplatillos() {
    await axios
      .get("https://backend.lanonna.online/platillos")
      .then((response) => {
        this.Getch = response;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.Getch);
    for (let index = 0; index < this.Getch.data.length; index++) {
      this.Data.Platillos.push(this.Getch.data[index]);
    }
    console.log(this.Data.Platillos);
  }
  //* Pruebas
  async postRequestplatillos() {
    await axios.post;
  }
  quantity = [
    [0, 1],
    [2, 1],
  ];
}
>>>>>>> 787e77bc23821825aaec605baf04ff33359024e1
