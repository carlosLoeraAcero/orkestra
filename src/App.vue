<template>
<header>
  <div class="container">
    <div class="icon">
      <img src="./assets/header/icon.png" alt="icon" class="barraInvertida">
    </div>
    <div class="title"><img src="./assets/header/icon.png" alt="icon" class="iconTitle"><router-link to="/" class="router-link">rkestra</router-link></div>
    <div class="profile">
      <img src="./assets/header/profile.png" alt="icon" class="profileIcon">
    </div>
    <div class="car">
      <img src="./assets/header/car.png" alt="icon" class="centerCar">
      <img class="centerCar1" src="./assets/header/carrito.png" alt="car">
    </div>
    <div class="notifications">
      <img src="./assets/header/notifications.png" alt="icon" class="centerCampaign">
      <img class="centerCampaign1" src="./assets/header/campaign.png" alt="car">
    </div>
  </div>
</header>
  <router-view/>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  
  .container{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #35495E;
    text-align: center;
    height: 60px;
    background-image: url("./assets/header/fondoHeader.png");
    position: relative;
    box-sizing: border-box;

    .icon{
      width: 10%;
      margin-left: 1%;
      position: relative;
      display: grid;
      border-right: 1px Solid#D6DFE4;

      .barraInvertida{
        width: 90%;
        text-align: center;
        align-self: center;
        object-fit: contain;
      }
    }
    .title{
      width: 60%;
      // margin-top: 15px;
      position: relative;
      display: grid;
      
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        // height: 60%;
        width: 11%;
        margin-left: 20%;
        text-align: center;
        align-self: center;
      }
    }

    .profile{
      width: 10%;
      padding-right: 1%;
      padding-left: 2%;
      position: relative;
      display: grid;
      border-left: 1px Solid#000000;
      border-right: 1px Solid#000000;
      .profileIcon{
        width: 85%;
        text-align: center;
        align-self: center;
      }
    }
    .car{
      width: 10%;
      position: relative;
      display: grid;
      padding-right: 1%;
      padding-left: 2%;
      border-right: 1px Solid#000000;
      text-align: center;
      .centerCar{
        width: 85%;
        text-align: center;
        align-self: center;
      }
      .centerCar1{
        width: 45%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 25%;
        z-index: 10;
      }
    }
    .notifications{
      width: 10%;
      position: relative;
      display: grid;
      padding-right: 1%;
      padding-left: 2%;
      text-align: center;

      .centerCampaign{
        width: 85%;
        text-align: center;
        align-self: center;
      }
      .centerCampaign1{
        width: 45%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 25%;
        z-index: 10;
      }
    }
  }
}
@media screen and (min-width: 410px){
  .container{
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #35495E;
    text-align: center;
    height: 60px;
    background-image: url("./assets/header/fondoHeader.png");
    position: relative;
    box-sizing: border-box;

    .title{
      width: 60%;
      // margin-top: 15px;
      position: relative;
      display: grid;
      
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        width: 11%;
        margin-left: 27%;
        text-align: center;
        align-self: center;
      }
    }
  }
}
@media screen and (min-width: 550px) {
  .container {
    .title{
      width: 74%;
      position: relative;
      display: grid;
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        // height: 60%;
        width: 6%;
        margin-left: 36%;
        text-align: center;
        align-self: center;
      }
    }
    .icon{
      width: 8%;
      margin-left: 1%;
      position: relative;
      display: grid;
      border-right: 1px Solid#D6DFE4;

      .barraInvertida{
        width: 65%;
        text-align: center;
        align-self: center;
        object-fit: contain;
      }
    }

  .profile{
      width: 6%;
      padding-right: 2%;
      padding-left: 2%;
      position: relative;
      display: grid;
      border-left: 1px Solid#000000;
      border-right: 1px Solid#000000;
      .profileIcon{
        width: 85%;
        text-align: center;
        align-self: center;
      }
    }
    .car{
      width: 6%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      border-right: 1px Solid#000000;
      text-align: center;
      .centerCar{
        width: 85%;
        text-align: center;
        align-self: center;
      }
      .centerCar1{
        width: 36%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 27%;
        z-index: 10;
      }
    }
    .notifications{
      width: 6%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      text-align: center;

      .centerCampaign{
        width: 85%;
        text-align: center;
        align-self: center;
      }
      .centerCampaign1{
        width: 36%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 27%;
        z-index: 10;
      }
    }
  }
}
@media screen and (min-width: 650px) {
  .container {
    .title{
      width: 74%;
      position: relative;
      display: grid;
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        // height: 60%;
        width: 6%;
        margin-left: 38%;
        text-align: center;
        align-self: center;
      }
    }
  }
}

@media screen and (min-width: 870px) {
  .container {
    .title{
      width: 78%;
      display: grid;
      position: relative;
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        // height: 60%;
        width: 3%;
        margin-left: 43%;
        text-align: center;
        align-self: center;
      }
    }
    .icon{
      width: 5%;
      margin-left: 1%;
      position: relative;
      display: grid;
      border-right: 1px Solid#D6DFE4;

      .barraInvertida{
        width: 60%;
        text-align: center;
        align-self: center;
        object-fit: contain;
      }
    }


  .profile{
      width: 4%;
      padding-right: 2%;
      padding-left: 2%;
      position: relative;
      display: grid;
      border-left: 1px Solid#000000;
      border-right: 1px Solid#000000;
      .profileIcon{
        width: 75%;
        text-align: center;
        align-self: center;
      }
    }
    .car{
      width: 4%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      border-right: 1px Solid#000000;
      text-align: center;
      .centerCar{
        width: 75%;
        text-align: center;
        align-self: center;
      }
      .centerCar1{
        width: 25%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 30%;
        z-index: 10;
      }
    }
    .notifications{
      width: 4%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      text-align: center;

      .centerCampaign{
        width: 75%;
        text-align: center;
        align-self: center;
      }
      .centerCampaign1{
        width: 25%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 30%;
        z-index: 10;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .container {
    .title{
      width: 78%;
      display: grid;
      position: relative;
      .router-link{
        color: #FFFFFF;
        text-decoration: none;
        margin-left: 30px;
        font-size: 32px;
        text-align: center;
        align-self: center;
          
      }
      .iconTitle{
        position: absolute;
        // height: 60%;
        width: 3%;
        margin-left: 44%;
        text-align: center;
        align-self: center;
      }
    }
    .icon{
      width: 5%;
      margin-left: 1%;
      position: relative;
      display: grid;
      border-right: 1px Solid#D6DFE4;

      .barraInvertida{
        width: 60%;
        text-align: center;
        align-self: center;
        object-fit: contain;
      }
    }


  .profile{
      width: 4%;
      padding-right: 2%;
      padding-left: 2%;
      position: relative;
      display: grid;
      border-left: 1px Solid#000000;
      border-right: 1px Solid#000000;
      .profileIcon{
        width: 75%;
        text-align: center;
        align-self: center;
      }
    }
    .car{
      width: 4%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      border-right: 1px Solid#000000;
      text-align: center;
      .centerCar{
        width: 75%;
        text-align: center;
        align-self: center;
      }
      .centerCar1{
        width: 25%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 30%;
        z-index: 10;
      }
    }
    .notifications{
      width: 4%;
      position: relative;
      display: grid;
      padding-right: 2%;
      padding-left: 2%;
      text-align: center;

      .centerCampaign{
        width: 75%;
        text-align: center;
        align-self: center;
      }
      .centerCampaign1{
        width: 25%;
        text-align: center;
        align-self: center;
        position: absolute;
        margin-left: 30%;
        z-index: 10;
      }
    }
  }
}
</style>
