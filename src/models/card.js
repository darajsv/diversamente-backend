module.exports = (sequelize, DataTypes) => {
    const card = sequelize.define(
        "Card",
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            imageType: DataTypes.STRING,
            imageName: DataTypes.STRING,
            imageData: DataTypes.BLOB('long'),
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at",
            }
        },
        {
            tableName: "cards",
        }
    );
    return card;
}