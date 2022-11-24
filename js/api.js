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