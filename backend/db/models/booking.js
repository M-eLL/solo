"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      spotId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      // vehicleId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      nickname: DataTypes.STRING(255),
    },
    {}
  );
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
    Booking.belongsTo(models.Status, { foreignKey: "statusId" });
    Booking.belongsTo(models.User, { foreignKey: "userId" });
    Booking.hasMany(models.Review, { foreignKey: "bookingId" });
  };
  return Booking;
};
