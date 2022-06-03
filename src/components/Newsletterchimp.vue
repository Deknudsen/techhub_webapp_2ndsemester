<template>
    <div class="newsletter">
        <hr>
        <div class="newsText">
            <h2><span>Join us</span> - Subscribe to our newsletter</h2>
            <p>By signing up to our community and newsletter you agree to receive updates on TECHHUB SYD events and news about relevant tech in the region.</p>
        </div>
        <!-- Begin Mailchimp Signup Form -->

<div id="mc_embed_signup">
<form action="https://easv365.us10.list-manage.com/subscribe/post?u=52cc5580c7bf1f5ec1e49129d&amp;id=b6fb1f6c73" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_52cc5580c7bf1f5ec1e49129d_b6fb1f6c73" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/h3zEb5" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<!--End mc_embed_signup-->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

//#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
	

.newsletter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;

    hr {
        height: 2px;
        width: 1200px;
        color: #cc6633;
        opacity: 1;
        margin: 0 auto;
        margin-bottom: 49px;
    }

    .newsText {
        //margin-bottom: 30px;

        h2 {
            font-size: 48px;
            font-family: 'Roboto Slab', serif;
            font-weight: 600;
            color: #333333;
            margin-bottom: 0;

            span {
                color: #cc6633;
            }
        }

        p {
            font-size: 12px;
            color: #333333;
            font-family: 'Roboto', sans-serif;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            margin-bottom: 15px;
            width: 650px;
            // display: flex;
            // justify-content: space-between;

            label {
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                color: #333333;
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
            
            &:hover {
                color: #cc6633;
                background-color: #fff;
                font-weight: 700;
            }
        }
    }
}
#mc_embed_signup {
    margin: 0 auto;
}

@media screen and (max-width: 1200px) {
    .newsletter {
        hr {
            width: 90%;
        }
    }
}

@media screen and (max-width: 915px) {
    .newsletter {
        display: flex;
        .newsText {
            width: 80%;
            align-self: center;
            h2 {
                font-size: 24px;
            }            
        }
        .newsBox {
            width: 80%;

            label {
                font-size: 14px;
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
    }
}
</style>