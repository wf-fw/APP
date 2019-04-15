<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000" :style="{height:'200px'}">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img  class="img" src="../../img/04.jpg"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="img" src="../../img/05.jpg"/>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="img" src="../../img/06.jpg"/>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="img" src="../../img/07.jpg"/>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                        <img class="img" src="../../img/08.jpg"/>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img class="img" src="../../img/09.jpg"/>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
		</ul>
    </div>
</template>



<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            lunbotulist:[]      //保存轮播图的数组
        };
    },
    created(){
        this.getlunbotu()
    },
    methods:{
        getlunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                if(result.body.status === 0){
                    this.lunbotulist = result.body.message;
                }else{
                    Toast("加载轮播图失败")
                }
            })
        }
    }
}
</script>

<style>


    .mint-swipe img{
            width: 100%;
            height: 100%;
        }


    .mui-grid-view .mui-grid-9{
         background-color: #000;
         border: none;
    }
    .img{
        height: 50px;
        height: 50px;
        border-radius: 50%
        }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        bottom: 0;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px
    }
</style>
