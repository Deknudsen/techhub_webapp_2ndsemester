<template>
<div>
<div class="bannerbox"><img src="../assets/aboutus.jpg" alt="about us"> 
<div class="bannertext">About us</div>
</div>

<div class="aboutus"> TECHHUB SYD is a private initiative to support and grow the tech eco system in Southern Denmark.
</div>
  <div class="toptextcontainer">
    <div class="toptextbox mission">
      <h3>Mission</h3>
    <p>To support the technology evolvement in the southern region and push forward on renewables, energy, and green digitisation.</p>
  </div>
  <div class="toptextbox goal">
    <h3>Goal</h3>
    <p>To strengthen the startup and tech eco-system through a powerful community to fuel the next generation of tech winner companies.</p>
  </div>
</div>

<div class="bubblecontainer">
  <div class="bluebubble"> <img src="../assets/icons-aboutus/icon-microphone.png" alt="microphone icon"> <p> To facilitate events for tech startups and offer access to investors and students in the southern region.</p></div>
  <div class="bluebubble"> <img src="../assets/icons-aboutus/icon-raisedfists.png" alt="raised fists icon"> <p> To strengthen the startup and tech eco system in the southern region through a powerful community.</p></div> 
  <div class="bluebubble"> <img src="../assets/icons-aboutus/icon-chat.png" alt="chat icon"> <p> Match commercial founders with tech founders to create new tech ventures.</p></div>
  <div class="bluebubble"> <img src="../assets/icons-aboutus/icon-personpin.png" alt="person pin icon"> <p> Inspire with inspirational talks from successful tech founders, industry leaders, and business angels.</p></div>
</div>

<div class="blueseparationline"></div>

<div class="whatwedo">
  <h1>What we do</h1>
</div>

<div class="bubblecontainer">
  <div class="bubbletitle"> <h3> Inspirational talks </h3>
    <div class="orangebubble"> <img src="../assets/icons-aboutus/icon-buildtool.png" alt="build tool icon"> <p>  We partner with inspirational leaders and tech entrepreneurs who have either built own venture or invested in startups. They go on stage to hand out wisdom from the biggest success to various failures. This to tell the true story of building tech companies and to inspire others.</p>
    </div>
  </div>
  <div class="bubbletitle"> <h3> Investor pitches </h3>
    <div class="orangebubble"> <img src="../assets/icons-aboutus/icon-moneychat.png" alt="money chat icon"> <p> We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region. Startups will be chosen from four parameters such as: Team, Product/service, Market potential and business model.</p>
      </div>
    </div> 
  <div class="bubbletitle"> <h3> Co-founder meetups </h3>
    <div class="orangebubble"> <img src="../assets/icons-aboutus/icon-handshake.png" alt="handshake icon"> <p> It is often hard to find the right co-founder for your startup. We setup a match-making event where commercial founders together with tech development founders can setup the right team from the start.</p>
      </div>
    </div>
  <div class="bubbletitle"> <h3> Startups pitch for student jobs </h3>
    <div class="orangebubble"> <img src="../assets/icons-aboutus/icon-arrows.png" alt="arrows icon"> <p> A student job at a startup can be super exciting. Therefore we gather curious students from relevant educations and put them in front of startups looking to strengthen their core team.</p>
      </div>
    </div>
</div>

<div class="orangeseparationline"></div>

<div class="partners">
  <h1>Partners</h1>
</div>

<table>
  <tr>
    <td width="400px"> <a href="https://innovationsfonden.dk/da"> <img src="../assets/partners/Innovationsfonden-logo.png" alt="innovationsfonden logo"></a> </td>
    <td width="400px"> <a href="https://www2.deloitte.com/dk/da.html"> <img src="../assets/partners/Deloitte-logo.png" alt="deloitte logo"></a> </td>
  </tr>
  <tr>
    <td width="400px"> <a href="https://www.easv.dk/da/"> <img src="../assets/partners/EASV-logo.png" alt="easv logo"></a> </td>
    <td width="400px"> <a href="https://www.businessesbjerg.com/da/"> <img src="../assets/partners/BE-logo.png" alt="BE logo"></a> </td>
    <td width="400px"> <a href="https://vf.dk/"> <img src="../assets/partners/vaekstfonden-logo.png" alt="vaekstfonden logo"></a> </td>
  </tr>
  <tr>
    <td width="400px"> <a href="https://www.aau.dk/"> <img src="../assets/partners/AAU-logo.png" alt="AAU logo"></a> </td>
    <td width="400px"> <img src="../assets/partners/A-Thomsen-Holding-logo.png" alt="A. Thomsen Holding logo"> </td>
    <td width="400px"> <a href="https://www.ebanklauridsen.dk/"> <img src="../assets/partners/E-Bank-Lauridsen-Holding-logo.png" alt="E. Bank Lauridsen Holding logo"></a> </td>
  </tr>
</table>

</div>
</template>

<script>

</script>

<style lang="scss" scoped>

img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 0 70%;
}

.bannerbox {
  text-align: center;
  position: relative;
  margin-bottom: 40px;
}

.bannertext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
}

.aboutus {
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #006699;

}

.missiongoalcontainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #006699;
}


.bubblecontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  max-width: 1200px;
  margin:0 auto;
}

.bluebubble {
  height: 400px;
  width: 400px;
  background-color: #006699;
  border-radius: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  flex-direction: column;

  p {
    color: white;
    font-size: 16px;
  }

  img {
    height:60px;
    width:auto;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
    
    
  }

}

.toptextcontainer {
  display:flex; 
  justify-content: center;

  .toptextbox {
    width: 500px;
    padding: 30px;
  }

  h3 {
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    color: #006699;
  }

  p {
    text-align:left;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #006699;
  }
}

.blueseparationline {
  border-bottom: 2px solid #006699;
  width: 1200px;
  padding-top: 70px;
  margin: 0 auto;
}

.whatwedo {
  margin-top: 70px;
  margin-bottom: 70px;
}

h1 {
  font-weight: 600;
  font-family: 'Roboto Slab', serif;
  color: #006699;
}

.bubbletitle {
  
  h3 {
    padding-bottom: 30px;
    font-family: 'Roboto Slab', serif;
    color: #006699;
  }
  
}

.orangebubble {
  height: 400px;
  width: 400px;
  background-color: #cc6633;
  border-radius: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  p {
    color: white;
    font-size: 16px;
  }

  img {
    height:60px;
    width:auto;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;
  }


}

.orangeseparationline {
  border-bottom: 2px solid #cc6633;
  width: 1200px;
  padding-top: 70px;
  margin: 0 auto;
}

.partners {
  margin-top: 70px;
  margin-bottom: 70px;
}

table {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

table tr td img {
    width: 50%;
    height: 50%;
}


</style>
