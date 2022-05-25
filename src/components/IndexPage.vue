<template>
    <header>
        <Navbar />
        <PageHeader />
    </header>
    <main>
        <AboutServer />
        <FeaturesSection />
        <LandingCta />
    </main>
    <footer>

    </footer>
</template>

<script>
    import Navbar from './landing/Navbar.vue';
    import PageHeader from './landing/PageHeader.vue';
    import AboutServer from './landing/AboutServer.vue';
    import FeaturesSection from './landing/FeaturesSection.vue';
    import LandingCta from './landing/LandingCta.vue';

    export default {
    name: "ItemShop",
    components: {
    Navbar,
    PageHeader,
    AboutServer,
    FeaturesSection,
    LandingCta,
}
}

</script>

<style lang="scss">
  @import '../../public/css/landing.scss';
</style>
