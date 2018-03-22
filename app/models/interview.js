module.exports = (sequelize, DataTypes) =>
    sequelize.define('Interview',
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
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lifetime: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            received_times: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            completed_times: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            successfully_completed_times: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            questions: {
                type: DataTypes.JSON,
                allowNull: false,
            }
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: true,
        }
    );

