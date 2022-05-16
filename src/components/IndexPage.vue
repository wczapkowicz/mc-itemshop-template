<template>
    <header>
        <Navbar />
        <PageHeader />
        <AboutServer />
    </header>
    <main>

    </main>
    <footer>

    </footer>
</template>

<script>
    import Navbar from './landing/Navbar.vue';
    import PageHeader from './landing/PageHeader.vue';
    import AboutServer from './landing/AboutServer.vue';

    export default {
    name: "ItemShop",
    components: {
    Navbar,
    PageHeader,
    AboutServer,
}
}

</script>

<style lang="scss">
  @import '../../public/css/landing.scss';
</style>
