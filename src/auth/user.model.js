import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";
import { encryptedPassword } from "../config/plugins/encripted-password.plugin.js";

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },

    fullname: {
        allowNull:false,
        type: DataTypes.STRING(200),
    },

    email: {
        allowNull:false,
        type: DataTypes.STRING(150),
        unique:true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    gender: {
        allowNull: false,
        type: DataTypes.ENUM('male', 'female', 'prefer not to say')
    },
    
    role: {
        allowNull: false,
        type: DataTypes.ENUM('recepcionist', 'admin', 'developer', 'manager', 'user'),
        defaultValue: 'user'
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    changedPasswordAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    hooks: {
        beforeCreate: async(user) => 
        {
            user.password = await encryptedPassword(user.password)
        }
    }
})

export default User