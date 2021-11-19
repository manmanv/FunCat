const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry:'./src/main.js',//入口
    output:{
        path:path.resolve(__dirname,'dist'),//动态获取路径
        filename:'bundle.js',
        // publicPath:'dist/'
    },//出口
    module:{
        rules:[
            {
                test:/\.css$/,
                //css-loader只负责将css文件加载
                //style-loader将样式添加到dom
                //从右向左读取
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:[{
                    loader:"style-loader" 
                },
                {
                    loader:"css-loader"
                },
                {
                    loader:"less-loader"
                },
                
            ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        //当图片小于limit时，会将图片编译成base64字符串形式
                        //大于会使用file-loader
                        limit: 9000,
                        name:'img/[name].[hash:8].[ext]'
                    },
                    
                }
                ]
            },
            {
                test:/\.js$/,
                //exclude:排除
                //include:包含
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            },
           {
               test:/\.vue$/,
               use:['vue-loader']
           }
        ]
    },
    resolve:{
        //alias:别名
        
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终解释权归manmanv所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        
    ]
}