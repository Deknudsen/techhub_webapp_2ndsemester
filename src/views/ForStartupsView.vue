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

<div class="inputfield">
  <div>
    <input type="radio" id="saas" value="saas" name="firmchoice">
    <label for="saas">SaaS</label>
  </div>
  <div>
  <input type="radio" id="mobileapp" value="mobileapp" name="firmchoice">
  <label for="mobileapp">Mobile App</label>
  </div>
  <div>
  <input type="radio" id="aiarvr" value="aiarvr" name="firmchoice">
  <label for="aiarvr">AI/AR/VR</label>
  </div>
  <div>
  <input type="radio" id="other" value="other" name="firmchoice">
  <label for="other">Other</label>
  </div>
</div>
            
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
  font-size: 34px;
  color: #006699;
}

.container {
    display: flex;
    justify-content: center;
    gap:50px;
    margin-top:40px;

}

.leftbox {
    height: 300px;
    width: 400px;
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
    height: 400px;
    margin-bottom: 50px;
}

.rightbox {
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin-top:-20px;
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

.inputfield {
    display:flex;
    flex-direction:column;

    div {
        width: 400px;
        display: flex;
        justify-content: flex-start;
        align-content: flex-end;
        color: #006699;

        input {
            margin: 5px;
        }

        label {
            font-family: 'Roboto', sans-serif;
        }
    }


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

        .signupBox {
            margin-bottom: 15px;
            width: 400px;
            display: flex;
            justify-content: space-between;

            label {
                font-family: 'Roboto', sans-serif;
                font-size:16px;
                color: #006699;
                align-items: center;
                display: flex;
            }

            input {
                width: 250px;
                height: 41px;
                border-color: #006699;
                border-radius: 3px;
                border-style: solid;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                color: #cc6633;
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

@media only screen and (max-width: 915px) {

img {
  height: 150px;
}

.bannerbox {
  text-align: center;
  position: relative;
  margin-bottom: 40px;
}

.bannertext {
  font-size: 36px;
}

.forstartupstext {
    width: 470px;
    display: flex;
    margin: 0 auto;
    text-align: left;
    padding: 0px;
}

.container {
    flex-direction: column;
}

.leftbox {
    display:flex;
    margin: 0 auto;
    width: 470px;
    height: 260px;

}

.lefttopbox {
    font-size: 20px;
    width: 470px;
    margin-bottom: 40px;
}

.verticalline {
    border-bottom: 2px solid #006699;
    width: 470px;
    border-left: none;
    height: 2px;
    display: flex;
    margin: 0 auto;
}

.rightbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 470px;
    margin: 0 auto;
}

.signupBox {
    width: 80%; 

    label {
        font-size: 14px;
        align-items: center;
        display: flex;
    }

        input {
            max-width: 75%;
            height: 30px;
            
     }
}
        form {
            button {
                font-size: 14px;
                width: 110px;
                height: 35px;
            }
        }

.inputfield {

    div {
        width: 150px;
        display: flex;
        justify-content: flex-start;
        margin-left: 40px;
        padding:5px;
        

        input {
            margin: 5px;
            
        }

        label {
            font-family: 'Roboto', sans-serif;
        }
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