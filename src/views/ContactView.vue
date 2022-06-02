<template>
    <div>

    <div class="pagetitle">  Team Behind TechHub Syd </div>

    <div class="teamcontainer">

        <div class="box">
            <div class="title"> Founder </div>
            <div class="image"> <a href="https://www.linkedin.com/in/kasperthom/">  <img src="../assets/team/founder.png" alt="founder image"> </a></div>
            <div class="name"> Kasper Bank Thomsen </div>
            <div class="occupation"> Entrepreneur & Investor within technology </div>
            <div class="location"> Esbjerg, Syddanmark, Denmark </div>
        </div>

        <div class="box">
            <div class="title"> Partner </div>
            <div class="image"> <a href="https://www.linkedin.com/in/trinefalbe/"> <img src="../assets/team/Trine.png" alt="partner image"> </a></div>
            <div class="name"> Trine Falbe </div>
            <div class="occupation"> Ethical design and UX expert </div>
            <div class="location"> Esbjerg, Syddanmark, Denmark </div>
        </div>

        <div class="box">
            <div class="title"> Partner </div>
            <div class="image"> <a href="https://www.linkedin.com/in/ronni-baslund/"> <img src="../assets/team/Ronni.png" alt="partner image"> </a></div>
            <div class="name"> Ronni H. Baslund </div>
            <div class="occupation"> Interim CEO / CTO @ Visma | Creditro A/S </div>
            <div class="location"> Esbjerg, Syddanmark, Denmark </div>
        </div>
    </div>

<div class="followtext"> Follow TechHub Syd's LinkedIn page for updates </div>
<a href="https://www.linkedin.com/company/techhub-syd/"><button class="button"> Follow </button></a>

    </div>

    <NewsletterForm />
</template>


<style lang="scss" scoped>

.pagetitle {
    margin:70px;
    font-family: 'Roboto Slab', 'serif';
    color: #006699;
    font-weight: 600;
    font-size: 36px;
}

.teamcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    width:350px;
    height: 470px;
}

.title {
    font-family: 'Roboto Slab', 'serif';
    color: #cc6633;
    font-weight: 600;
    font-size: 36px;
    padding-bottom: 20px;
}

.image {
    transition: transform .4s;
}

.image:hover {
  transform: scale(1.05);
}

.name {
    font-family: 'Roboto', 'sans-serif';
    color: #cc6633;
    font-weight: 700;
    font-size: 24px;  
    padding: 20px;
}

.occupation, .location {
    font-family: 'Roboto', 'sans-serif';
    color: #006699;
    font-size: 16px;  
    padding: 10px;
}

.followtext {
    font-family: 'Roboto', 'sans-serif';
    color: #006699;
    font-weight: 700;
    font-size: 24px;  
    margin-top: 70px;
    
}

.button {
    width: 250px;
    height: 57px;
    background-color: #cc6633;
    color: #fff;
    border-color: #cc6633;
    border-style: solid;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin: 40px;
            
    &:hover {
        color: #cc6633;
        background-color: #fff;
        font-weight: 700;
    }
}

@media only screen and (max-width: 915px) {

.teamcontainer {
    flex-direction: column;
    gap: 50px;
}

.title {
    font-size: 24px;
}

.name {
    font-size: 20px;
}

.followtext {
    font-size: 20px;
    width: 250px;
    display: flex;
    margin: 0 auto;
    margin-top: 40px;
}

.button {
    font-size: 14px;
    width: 110px;
    height: 35px;
}

}

</style>

<script>
import NewsletterForm from '../components/NewsletterForm.vue'

export default {
  name: 'Contact',
  components: {
    NewsletterForm
  }
}
</script>