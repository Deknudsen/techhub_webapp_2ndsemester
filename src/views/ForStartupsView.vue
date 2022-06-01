<template>
    <div>
        <div class="bannerbox"><img src="../assets/forstartupsbanner.jpg" alt="for startups"> 
        <div class="bannertext">For Startups</div>
        </div>

        <div class="forstartupstext"> Are you a tech startup in the Southern region looking for funding? </div>

        <div class="container">
            <div class="leftbox">
                <div class="lefttopbox"> This is your chance to meet with tech-focused investors looking for the most promising tech startups in the region.</div>
                <div class="leftbottombox"> We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region. <br> <br>
                Startups will be chosen from four parameters such as: Team, Product/service, Market potential and business model. </div>
            </div>
        <div class="verticalline"></div>
        <div class="rightbox">
            <div class="righttopbox"> Sign up&nbsp;
                <div class="righttopboxtwo"> as a TECH STARTUP 
                 </div>
                </div>
            <div class="signupboxContainer">
            <form>
            <div class="signupBox">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName">
            </div>
            <div class="signupBox">
                <label for="email">Email Adress</label>
                <input type="text" name="email">
            </div>

<form class="inputfield">
  <label for="saas">SaaS</label>
  <input type="checkbox" id="saas" name="saas">
  <label for="mobileapp">Mobile App</label>
  <input type="checkbox" id="mobileapp" name="mobileapp">
  <label for="aiarvr">AI/AR/VR</label>
  <input type="checkbox" id="aiarvr" name="aiarvr">
  <label for="other">Other</label>
  <input type="checkbox" id="other" name="other">
</form>
            
            <button type="submit">Sign up now</button>
        </form>
       </div>         
        

            </div>
        </div>
    </div>

<NewsletterForm />

</template>

<style lang="scss" scoped>

img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 0 35%;
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

.forstartupstext {
  padding: 20px;
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
  font-size: 24px;
  color: #006699;
}

.container {
    display: flex;
    gap:50px;
}

.leftbox {
    height: 300px;
    width: 450px;
    text-align: left;
    display:flex;
    flex-direction: column;
}

.lefttopbox {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #006699;
    
}

.leftbottombox {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333333;
}

.verticalline {
    border-left: 2px solid #006699;
    height: 300px;
    margin-bottom: 50px;

}

.rightbox {
    display:flex;
    flex-direction: column;
    justify-content: center;
}

.righttopbox {
    display: flex;
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    color: #cc6633;
    font-weight: 600;
    margin-bottom:50px;
}

.righttopboxtwo {
    display: flex;
    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    color: #006699;
    font-weight: 600;
}

.signupboxContainer {
    display:flex;
    flex-direction: column;
}

form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            margin-bottom: 15px;
            width: 650px;
            display: flex;
            justify-content: space-between;

            label {
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                color: #006699;
            }

            input {
                width: 480px;
                height: 50px;
                border-color: #cc6633;
                border-radius: 3px;
                border-style: solid;
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                padding-left: 13px;

                &:focus {
                    outline: none;
                    border-color: #cc6633;
                }
            }
        }

        button {
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
    }

</style>

<script>
import NewsletterForm from '../components/NewsletterForm.vue'

export default {
  name: 'ForStartups',
  components: {
    NewsletterForm
  }
}
</script>