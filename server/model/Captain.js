const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const captainSchema=mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
        required:true,
        minlength:[3,'fullname must be more than 3 character']
        },
        lastname:{
            type:String,
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be at least 3 characters']
        },
        capacity:{
            type:String,
            required:true,
            minlength:[1,"Capacity must be at least 1"]
        },
        vehicleType:{
            type:String,
            required:true,
            enum:["car","motorcycle","auto"]
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})
captainSchema.methods.generateAuthToken =function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}
captainSchema.methods.comparePassword=function(password){
    return bcrypt.compare(password,this.password);
}
captainSchema.statics.hashPassword=function(password){
    return bcrypt.hash(password,10)
}

const Captain=mongoose.model("Captain",captainSchema)

module.exports=Captain;