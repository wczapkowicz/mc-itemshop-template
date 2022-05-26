<template>
    <header>
        <Navbar />
        <PageHeader />
    </header>
    <main>
        <AboutServer />
        <FeaturesSection />
        <GameMap />
        <LandingCta />
        <ContactPage />
    </main>
    <footer>
        <PageFooter />
    </footer>
</template>

<script>
    import Navbar from './landing/Navbar.vue';
    import PageHeader from './landing/PageHeader.vue';
    import AboutServer from './landing/AboutServer.vue';
    import FeaturesSection from './landing/FeaturesSection.vue';
    import GameMap from './landing/GameMap.vue';
    import LandingCta from './landing/LandingCta.vue';
    import ContactPage from './landing/ContactPage.vue';
    import PageFooter from './landing/PageFooter.vue';

    export default {
    name: "ItemShop",
    components: {
    Navbar,
    PageHeader,
    AboutServer,
    FeaturesSection,
    LandingCta,
    GameMap,
    ContactPage,
    PageFooter
}
}

</script>

<style lang="scss">
  @import '../../public/css/landing.scss';
</style>
