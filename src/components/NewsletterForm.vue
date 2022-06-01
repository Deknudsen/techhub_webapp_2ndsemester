<template>
    <div class="newsletter">
        <hr>
        <div class="newsText">
            <h2><span>Join us</span> - Subscribe to our newsletter</h2>
            <p>By signing up to our community and newsletter you agree to receive updates on TECHHUB SYD events and news about relevant tech in the region.</p>
        </div>
        <form>
            <div>
                <label for="firstName">First Name</label>
                <input type="text" name="firstName">
            </div>
            <div>
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
            }
        }
    }
}
</style>