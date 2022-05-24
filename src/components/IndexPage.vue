<template>
    <header>
        <Navbar />
        <PageHeader />
    </header>
    <main>
        <AboutServer />
        <FeaturesSection />
    </main>
    <footer>

    </footer>
</template>

<script>
    import Navbar from './landing/Navbar.vue';
    import PageHeader from './landing/PageHeader.vue';
    import AboutServer from './landing/AboutServer.vue';
    import FeaturesSection from './landing/FeaturesSection.vue';

    export default {
    name: "ItemShop",
    components: {
    Navbar,
    PageHeader,
    AboutServer,
    FeaturesSection,
}
}

</script>

<style lang="scss">
  @import '../../public/css/landing.scss';
</style>
