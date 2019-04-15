<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat }}</span>
                            <span>点击：{{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../img/03.jpg">
                    <div class="mui-media-body">
                        <h1>木屋</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-04-11 11:50:00</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../img/02.jpg">
                    <div class="mui-media-body">
                        <h1>CBD</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-04-11 11:50:00</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li> -->
        </ul>
    </div>
</template>


<script>
import { Toast } from "mint-ui";

export default{
    data(){
        return{
            newslist:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result => {
                if(result.body.status === 0){
                    this.newslist = result.body.message;
                }else{
                    Toast("获取新闻列表失败")
                }
            })
        }
    }
}
</script>



<style>
.mui-table-view h1{
        font-size: 14px
    }
.mui-ellipsis{
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>
