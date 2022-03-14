<template>
  <div class="spin"></div>
</template>

<style>
  .spin{
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: orange;
    animation: spinning 1s ease infinite ;
  }

  @keyframes spinning {
    to{transform: rotateZ(360deg);}
  }
</style>