<template>
    <div class="cmt-com">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多110）" maxlength="110"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                   第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间:
                   {{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined' ? '此用户很懒，无任何评论':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>



<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return{
            pageindex:1 ,    //默认展示第一页数据
            comments: [],    //所有的评论数据

        }
    },
    created(){
        this.getComment();
    },
    methods:{
        getComment(){
                this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result => {
                    if(result.body.status === 0){
                        this.comments = result.body.message;
                        console.log('成功')
                    }else{
                        Toast('获取评论失败');
                    }
                })
        }
    },
    props:["id"]
}

</script>


<style>
.cmt-com h3{
    font-size: 18px;
}
.cmt-com textarea{
    font-size: 14px;
    height: 95px;
    margin: 0;

}
.cmt-list{
    margin: 7px 0;
}
.cmt-item{
    font-size: 13px;
}
.cmt-title{
    line-height: 30px;
    background-color: #ccc;
}
.cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
</style>