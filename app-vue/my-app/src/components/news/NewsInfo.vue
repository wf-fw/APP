<template>
    <div class="newsinfo">
        <!-- 标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat }}</span>
            <span>点击：{{newsinfo.click}}</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
import comment from '../subcomp/comment.vue'

export default{
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:[]
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result => {
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast("获取新闻失败")
                }


            })
        }
    },
    components:{     //用来注册子组件的节点
        "comment-box": comment
    }
}
</script>



<style>
.newsinfo{
    padding:0 4px;
}
.newsinfo .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:  red;
    }
.newsinfo .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
}
.newsinfo .content{

}
</style>