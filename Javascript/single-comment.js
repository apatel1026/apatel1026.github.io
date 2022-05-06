Vue.component('single-comment', {
    delimiters: ['[[', ']]'],
    template: `
        <div class="comment">
            <div class="avatar">
                <img :src="comment.avatar" alt="">
            </div>
            <div class="text">
                <a class="username" href="#">
                    @[[ comment.user ]]
                </a> 
                <span>[[ comment.text ]]</span>
            </div>
        </div>
    `,
    props: ['comment']
});