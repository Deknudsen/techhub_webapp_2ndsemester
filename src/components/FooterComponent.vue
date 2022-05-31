<template>
    <footer>
        <div>
            <a href="#">
                <i class="icon-facebook-sign icon-3x"></i>
            </a>
            <a href="https://www.linkedin.com/company/techhub-syd/" target="_blank">
                <i class="icon-linkedin-sign icon-3x"></i>
            </a>
            <p>This webpage is the result of an end of semester project</p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
footer {
    height: 100px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 1200px;
        display: flex;
        gap: 30px;
        align-items: center;

        a {
            color: #fff;
            text-decoration: none;
        }

        p {
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            margin:0;
            margin-left: 23%;
        }
    }
}

@media screen and (max-width: 1250px) {
    footer {
        div {
            width: 800px;

            margin-left: 15%;
        }
    }
}

@media screen and (max-width: 915px) {
    footer {
        div {
            width: 100%;
            padding-left: 50px;

            p {
                margin-left: 0;
            }
        }
    }
}
</style>