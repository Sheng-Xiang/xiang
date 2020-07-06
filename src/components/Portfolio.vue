<template>
    <div id="portfolio">
        <div class="container">
            <div class="title">
                <span>Portfolio</span>
                <font-awesome-icon :icon="['fas', 'book-open'] " size="2x" />
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Portfolio'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#portfolio {
    height: 100vh;
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
}

.title {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 2rem;
}

.content {
    flex: 1 1 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

a {
    font-weight: bold;
    color: #2c3e50;
}
</style>