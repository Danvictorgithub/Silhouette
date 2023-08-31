import {DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize';
import sequelize from '../configs/sequelize';

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    username:string;
    password:string;
}

const UserModel = sequelize.define<UserModel>('user', {
    username: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    }
    , password: {
        type:DataTypes.STRING,
        allowNull: false
    }
});

export default UserModel;