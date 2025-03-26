<template>
    <div>
        <Nav/>
        <div class="content">
            <router-view></router-view>
        </div>
        <FooterVue/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import FooterVue from '../components/footer.vue';

export default {
    components: {
        Nav,
        FooterVue
    }
}
</script>

<style scoped>

</style>