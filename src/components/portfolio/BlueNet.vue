<template>
    <main>
        <nav>
            <router-link to="/portfolio/list">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span> Back To List</span>
            </router-link>
        </nav>
        <article>
            <h1>Line Project</h1>
            <h2>BlueNet交通大平台</h2>
            <section>
                <h1>大學實驗室參與的計畫內容</h1>
                <p>這個專案為實驗室原本科技部計畫（BlueNet 交通大平台）的延伸,在原先叫車服務（ web 端, ios 端, andriod 端 ），額外擴展在社群軟體上，因為考量到使用 LINE 的人相當多以及 LINE 所提供給開發者的服務也非常多元，可以在日常生活中很好的做銜接，讓自己的服務可以很快的與使用者接觸到，也能減少使用者安裝 APP 的動作，而且所有的介面及一些底層網路安全協定，這些社群軟體商都幫你訂好了，做為一個前端介面能省去很多麻煩，比較可以專注在自己的服務上。</p>
                <hr>
                <p>我在此專案負責前端介面，主要工作項目為串接 google map API ，取得使用者 GPS 位置，與後端串接部分，並使用 LINE Login 做為使用者身分驗證。透過 LINE Login 取得 user 的資料後再跟後端比對有無該 user 的資料，並取得資料存取權限，若無則進行註冊程序。</p>
                <p></p>
                <p>
                    <a :href="require(`../../assets/portfolio/bluenet/0_0.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/0_0.jpg`)" alt="">
                    </a>
                </p>
                <hr>
                <p>在 google map API 的使用上，主要以 Geo API, 與 Place API 應用較多，有特別針對使用者位置去限制 google Place API 回傳的結果，及地圖拖動的中心點經緯度轉換，高頻拖動地圖與輸入框預測的防彈跳機制，及滑出特定區域的提醒功能。</p>
                <p></p>
                <p>
                    <a :href="require(`../../assets/portfolio/bluenet/1_0.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/1_0.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/1_1.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/1_1.jpg`)" alt="">
                    </a>
                </p>
                <hr>
                <p>於取得 GPS 位置，主要使用 HTML 5 Geolocation API，提供快速取得的 getCurrentPosition 與高精度 watchPosition 兩種模式做切換。</p>
                <p></p>
                <p>
                    <a :href="require(`../../assets/portfolio/bluenet/2_0.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/2_0.jpg`)" alt="">
                    </a>
                </p>
                <hr>
                <p>與後端串接取得 user 資料，可以使用歷史紀錄或者是最愛地址快速的叫車。也可以查看進行中的訂單與過去已完成的訂單，並取得訂單的詳細資訊。</p>
                <p></p>
                <p>
                    <a :href="require(`../../assets/portfolio/bluenet/3_0.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/3_0.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/3_1.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/3_1.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/3_2.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/3_2.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/3_3.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/3_3.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/3_4.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/3_4.jpg`)" alt="">
                    </a>
                </p>
                <hr>
                <p>使用者需要叫車時（及時叫車與預約叫車），我們以網頁跟後端叫車服務系統做串接，以 Google Map API 調整地圖風格及搜尋框自動填入的預備選項，調整到指定地區範圍，取得使用者授權與表格資料後，發送當前 GPS 位置與使用者填入的特殊條件，傳回後台進行司機搶單。後端服務接到正確格式後，根據收到的使用者 UserId 在 LINE 聊天室內做提醒動作，並在時間快到時（ 預約叫車 ）主動以 LINE 進行通知，或是根據使用者需要在 LINE 聊天室顯示。</p>
                <p></p>
                <p>
                    <a :href="require(`../../assets/portfolio/bluenet/4_0.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_0.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/4_1.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_1.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/4_2.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_2.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/4_3.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_3.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/4_4.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_4.jpg`)" alt="">
                    </a>
                    <a :href="require(`../../assets/portfolio/bluenet/4_5.jpg`)">
                        <img :src="require(`../../assets/portfolio/bluenet/4_5.jpg`)" alt="">
                    </a>
                </p>
            </section>
        </article>
    </main>
</template>
<script>
export default {
    name: 'BlueNet',
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        console.log(require(`../../assets/portfolio/bluenet/0_0.jpg`))
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    margin: 5% 15%;
    padding: 2rem 5%; // vertical horizontal
}

nav {
    display: flex;
    align-items: flex-start;

    a {
        font-weight: bold;
        color: rgba(229, 229, 228, 0.9);
        text-decoration: none;
        border: 1px solid rgba(229, 229, 228, 1);
    }
}

article {
    h1 {
        font-size: 2rem;
    }

    section {
        text-align: start;
    }

    p {
        text-indent: 2.5rem;
        font-size: 1.25rem;
        display: flex;

        a {
            margin: 0 auto;
            display: flex;

            img {
                margin: 0 auto;
                max-width: 100%;
                height: 25vh;
            }
        }
    }
}

@media (min-width: 1025px) and (max-width: 1440px) {}

@media (min-width: 769px) and (max-width: 1024px) {
    main {
        margin: 5% 10%;
        padding: 2rem 5%; // vertical horizontal
    }
}

@media (max-width: 768px) {
    main {
        margin: 5% 5%;
        padding: 2rem 5%; // vertical horizontal
    }
}

@media (max-width: 445px) {
    main {
        margin: 5%;
        padding: 2rem 5%; // vertical horizontal
    }

    article {

        p {

            a {

                img {
                    height: 15vh;
                }
            }
        }
    }
}
</style>