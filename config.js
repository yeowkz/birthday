// origin 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hey BB",
        "Happy Birthday to You",
        "Hope You Become More Cute Yearly",
        "Every Year is 18 Years Old",
        "Here are the message for you only",
        "Thank you for loving me",
        "I love you too, BB",
        "我们好久没有见面了",
        "你要好好照顾自己哦",
        "我们见面了就一起吃好料吧",
        "你也要乖乖听话",
        "当个快乐的乖宝宝",
        "未来是个未知数",
        "我们一起努力向上",
        "克服困难, 迎接挑战",
        "一起努力让我们的未来变的更好",
        "你是我的BB",
        "我爱我的BB",
        "BB也要更爱我哦",
        "I miss you",
        "And miss the time stay with you",
        "Let's fight for our future",
        "The End",
        
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Happy Birthday to You": "./imgs/rsz_1photo.png",
        "Hey BB": "./imgs/rsz_photo2.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Let's start !",
        play: "Play Some Music ~",
        bannar_coming: "Banner ~",
        balloons_flying: "Add More Decoration ~",
        cake_fadein: "Where Is The Cake ?",
        light_candle: "Light Up Candle !",
        wish_message: "Happy Birthday to Pei Ling",
        story: "A Message Received",
    }
};
