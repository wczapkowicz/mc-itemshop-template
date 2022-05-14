<template>
    <header>
        <Navbar />
        <PageHeader />
    </header>
    <main>

    </main>
    <footer>

    </footer>
</template>

<script>
    import Navbar from './landing/Navbar.vue';
    import PageHeader from './landing/PageHeader.vue';

    export default {
    name: "ItemShop",
    components: {
        Navbar,
        PageHeader
    }
}

</script>

<style lang="scss">
  @import '../../public/css/landing.scss';
</style>
