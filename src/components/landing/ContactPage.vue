<template>
    <div id="contact">
        <div class="container-fluid">
            <h1 class="contact-title">Skontaktuj się z nami!</h1>
            <div class="row d-flex justify-content-center">
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="form-wrapper">
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="name" placeholder="Imie" required>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="email" placeholder="Adres e-mail" required>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="textarea-contact" rows="5" placeholder="Wiadomość" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary sign-in-button btn-lg">Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>

<style lang="scss" scoped>

</style>