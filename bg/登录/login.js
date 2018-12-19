let  comment = new Vue({
    el: '#app',
    data: {
        ruleForm: {
            //机构名称
            mechanismName:'',
            //手机号
            phoneNumber:''
        },
        showMechanismName:false,
        showPhoneNumber:false,
        showCorrectPhoneNumber:false,

    },

    mounted() {
        //初始化数据
        this.init();
    },
    methods: {
        init: function () {
            let self = this;

        },
        //点击提交按钮
        submitForm(formName) {

            let self = this;
            //验证机构名称
            if(!formName.mechanismName){
                self.showMechanismName = true;
            }
            //验证手机号

            if (!(/^1[34578]\d{9}$/.test(formName.phoneNumber))) {
                self.showCorrectPhoneNumber = true;
            } else if (formName.phoneNumber == "" || !formName.phoneNumber) {
                self.showPhoneNumber = true;
            } else {
                console.log(formName);
            }
        }


    },
    created: function () {
        let self = this;
    },
    watch: {
        'ruleForm.mechanismName': function(newVal){
           this.showMechanismName = false;
        },
        'ruleForm.phoneNumber': function(newVal){
            this.showPhoneNumber = false;
            this.showCorrectPhoneNumber = false;
        }

    }

});