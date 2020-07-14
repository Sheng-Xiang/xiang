<template>
    <div id="contact">
        <div class="container">
            <div class="title">
                <span>Contact</span>
                <font-awesome-icon class="titleIcon" :icon="['far', 'address-book'] " size="2x" />
            </div>
            <div class="content">
                <div class="item">
                    <a href="mailto:a2325504a@gmail.com">
                        <font-awesome-icon class="contactIcon" :icon="['far', 'envelope'] " size="3x" />
                    </a>
                </div>
                <div class="item">
                    <a href="https://github.com/Sheng-Xiang?tab=repositories">
                        <font-awesome-icon class="contactIcon" :icon="['fab', 'github'] " size="3x" />
                    </a>
                </div>
                <div class="item">
                    <a href="tel:0978108508">
                        <font-awesome-icon class="contactIcon" :icon="['fas', 'mobile-alt'] " size="3x" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contact'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#contact {
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
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

.item {
    flex: 1 1 10%;
    margin: 1rem;
    padding: 0.5rem;
}

a {
    // cursor: none !important;
    color: rgba(255, 255, 255, 1);

    &:hover {
        .contactIcon {
            transform: scale(1.5);
        }

        .tooltiptext {
            display: block;
        }
    }
}

@media (min-width: 1024px) and (max-width: 1920px) {
    .container {}

    .title {}
}

@media (min-width: 800px) and (max-width: 1024px) {
    .container {}

    .title {}
}

@media (max-width: 800px) {
    .container {
        flex-direction: column;
    }

    .title {
        margin-top: 10vh;
        padding: 1rem;

        .titleIcon {
            display: none;
        }
    }

    .content {
        border-left: 0px;
        // flex-direction: column;
        // align-items: center;
    }
}
</style>