module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    username:{
                        type:'string',
                        description:"task´s title",
                        example:"John"
                    },
  email:{
                        type:'boolean',
                        description:"the status of the task",
                        example:"john@gmail.com"
                    },
  email:{
  }
                   
                },
            },
        },
    },
}
