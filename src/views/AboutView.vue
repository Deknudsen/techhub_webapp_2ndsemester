<template>

<div class="bannerbox"><img src="../assets/aboutus.jpg" alt="about us"> 
<div class="bannertext">About us</div>
</div>

  <div>
    <p>
      This is an about site
    </p>
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
}

.bannertext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  font-family: 'Roboto Slab', serif;
}

</style>