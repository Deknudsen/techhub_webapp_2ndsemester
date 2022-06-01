<template>
    <div class="newsletter">
        <hr>
        <div class="newsText">
            <h2><span>Join us</span> - Subscribe to our newsletter</h2>
            <p>By signing up to our community and newsletter you agree to receive updates on TECHHUB SYD events and news about relevant tech in the region.</p>
        </div>
        <form>
            <div class="newsBox">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName">
            </div>
            <div class="newsBox">
                <label for="email">Email Adress</label>
                <input type="text" name="email">
            </div>
            <button type="submit">Subscribe now</button>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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
        margin-bottom: 30px;

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
            display: flex;
            justify-content: space-between;

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