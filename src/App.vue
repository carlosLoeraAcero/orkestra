<template>
<header>
  <div class="container">
    <div class="icon">
      <img src="./assets/header/icon.png" alt="icon">
    </div>
    <div class="title"><img src="./assets/header/icon.png" alt="icon" class="iconTitle"><router-link to="/" class="router-link">rkestra</router-link></div>
    <div class="profile">
      <img src="./assets/header/profile.png" alt="icon">
    </div>
    <div class="car">
      <img src="./assets/header/car.png" alt="icon">
      <img class="centerCar" src="./assets/header/carrito.png" alt="car">
    </div>
    <div class="notifications">
      <img src="./assets/header/notifications.png" alt="icon">
      <img class="centerCampaign" src="./assets/header/campaign.png" alt="car">
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

    .icon{
      width: 10%;
      margin-top: 10px;
    }
    .title{
      width: 45%;
      margin-top: 12px;
      font-size: 32px;
      position: relative;
      
      .router-link{
          color: #FFFFFF;
          text-decoration: none;
          margin-left: 30px;
          
      }
      .iconTitle{
        position: absolute;
        height: 60%;
      }
    }

    .profile{
      width: 15%;
      margin-top: 10px;
    }
    .car{
      width: 15%;
      margin-top: 10px;

      .centerCar{
        position: absolute;
        margin-left: -33px;
        margin-top: 8px;
      }
    }
    .notifications{
      width: 15%;
      margin-top: 10px;

      .centerCampaign{
        position: absolute;
        margin-left: -30px;
        margin-top: 7px;
      }
    }
  }
}
</style>
