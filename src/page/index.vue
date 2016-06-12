<template lang="jade">
header.navbar
    .logo 
        a(href='#') YueUI
    .navbar-right
        a.github(href='https://github.com/mmzhi/yue-ui') 
            i.iconfont &#xe735;
            | &nbsp;GitHub
.header-docs
    .container
        h1 Yue - UI 
        p 
            | 一个基于&nbsp;
            a(href='https://vuejs.org.cn') Vue.js
            | &nbsp;的前端组件框架
        p 独立使用，不依赖jQuery，Bootstrap，以及任何第三方插件
        br
        p
            a.btn(href='https://github.com/mmzhi/yue-ui') Code on GitHub
</template>
<style lang="sass">

@font-face {
    font-family: 'iconfont';
    src: url('../font/iconfont.eot'),
    url('../font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: middle;
}

*,body {
    margin: 0px;
    padding: 0px;
}

html{
    min-height: 100%;
}

input,textarea, button{
    outline:none;
}

*, :after, :before {
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

body {
    font-family: Helvetica,Tahoma,Arial,'Hiragino Sans GB',"Microsoft YaHei",SimSun,Heiti,sans-serif;
}

.navbar {
    box-shadow: 0 3px 3px rgba(0,0,0,.175);
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    z-index: 10;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    .logo{
        float: left;
        height: 50px;
        padding: 15px 15px;
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
        a{
            color: #009dee;
        }
    }
    .navbar-right{
        float: right;
    }
    .github{
        display: inline-block;
        font-size: 18px;
        height: 49px;
        padding: 15px 15px;
        line-height: 20px;
        color: #333;
        vertical-align: middle;
        &:hover{
            color: #463265;
            background-color: #f9f9f9;
        }
    }
}
.header-docs {
    background: linear-gradient(90deg,#1d7097 10%,#93e6f9 90%);
    filter: none;
    color: #e9e9e9;
    padding-top: 60px;
    padding-bottom: 60px;
    font-size: 24px;
    text-align: left;
    .container{
        width: 1170px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    h1{
        font-size: 60px;
        line-height: 1;
        color: #fff;
        margin-bottom: 10px;
    }
    p {
        color: #fff;
        font-weight: lighter;
        line-height: 1.4;
        margin: 0 0 10px;
        a {
            color: #fff;
            text-decoration: none;
            &:hover{
                color: #145675;
            }
        }
        a.btn{
            display: inline-block;
            padding: 10px 16px;
            font-size: 18px;
            text-align: center;
            border: 1px solid #FFF;
            transition: color .15s ease;
            line-height: 1.3333333;
            border-radius: 6px;
            &:hover{
                background: #FFF;
            }
        }
    }
}
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>