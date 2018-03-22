module.exports = (sequelize, DataTypes) =>
    sequelize.define('User',
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            middle_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            telephone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mobile_operator_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            date_birth: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            city_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            sales_point_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            place_of_work_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            authorization_code: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            promo_code: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            user_agreement_version: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            registration_IMEI: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            date_activity: {
                type: DataTypes.DATE,
            },
            points: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            number_of_proposed_tasks: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            number_of_completed_tasks: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            number_of_invited_users: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );
