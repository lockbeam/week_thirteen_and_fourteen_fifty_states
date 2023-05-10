<template>
    <div>
        <div id="navigation-links">
            <span class="nav-link">
                <router-link to="/">Home</router-link>
            </span>

            <span class="nav-link">
                <router-link to="/about">About the Site</router-link>
            </span>
        </div>

        <p>Header image by
            <a href="https://unsplash.com/photos/uE2T1tCFsn8">Element5 Digital on Unsplash</a>
        </p>

        <p><a target="_blank" href="undefined/icons/set/map">Map icon</a>
            icon by <a target="_blank" href="">Icons8</a>
        </p>

    </div>
</template>

<script>


export default {
    name: 'PageFooter'
}


</script>

<style scoped>

.nav-link {
    margin: 1rem;
}

</style>