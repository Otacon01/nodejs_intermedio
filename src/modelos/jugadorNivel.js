
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UsuarioNivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },  
          jugadorCedula: {
            type: DataTypes.STRING,
            references: {
              model: 'jugador',
              key: 'cedula'
            }
          },
          nivelId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'nivel',
              key: 'id'
            }
          },
          puntajeMaximo: {
            type: DataTypes.INTEGER,
            defaultValue: 0
          }
    }, {
      tableName: 'usuarionivel',
      timestamps: true,
    });
};
  