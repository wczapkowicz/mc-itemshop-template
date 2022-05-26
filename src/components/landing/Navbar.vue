<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
      <a class="navbar-brand" href="">NazwaSerwera.pl</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Strona Główna</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">O serwerze</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#map">Mapa serwera</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Kontakt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-primary" href="#">Sklep</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style scoped>

</style>
