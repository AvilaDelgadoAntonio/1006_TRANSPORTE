/* Insertar datos en la colección TRANSPORTE creados por el propio alumno */


db.transporte.insertMany([

    { _cod : "envio001",
      destino_envio: "Madrid",  
      precio_transporte_kg: 22.50,
      peso_kg: 1900,
      fecha_envio: ISODate("2021-02-02T08:00:00Z"),
      urgente: true,
      empresa_envio: "SEUR",
      empleado_transportista: "Francisco Romero",
      confirmar_entrega: true
    },{
      _cod : "envio002",
      destino_envio: "Valencia",
      precio_transporte_kg: 20.75,
      peso_kg: 1800,
      fecha_envio: ISODate("2020-05-22T08:00:00Z"),
      urgente: true,
      empresa_envio: "SEUR",
      empleado_transportista: "Francisco Romero",
      confirmar_entrega: true
    },{
      _cod : "envio003",
      destino_envio: "Almeria",
      precio_transporte_kg: 15,
      peso_kg: 3450,
      fecha_envio: ISODate("2020-03-12T08:00:00Z"),
      urgente: false,
      empresa_envio: "DHL",
      empleado_transportista: "Francisco Romero",
      confirmar_entrega: true
    },{
      _cod : "envio004",
      destino_envio: "Barcelona",
      precio_transporte_kg: 28,
      peso_kg: 5000,
      fecha_envio: ISODate("2020-08-22T08:00:00Z"),
      urgente: true,
      empresa_envio: "SEUR",
      empleado_transportista: "Francisco Romero",
      confirmar_entrega: true
    },{
      _cod : "envio005",
      destino_envio: "Bilbao",
      precio_transporte_kg: 30,
      peso_kg: 2500,
      fecha_envio: ISODate("2020-03-12T08:00:00Z"),
      urgente: false,
      empresa_envio: "DHL",
      empleado_transportista: "Laura Vaz",
      confirmar_entrega: false
    },{
      _cod : "envio006",
      destino_envio: "Valencia",
      precio_transporte_kg: 20.75,
      peso_kg: 3000,
      fecha_envio: ISODate("2019-04-22T08:00:00Z"),
      urgente: false,
      empresa_envio: "DHL",
      empleado_transportista: "Laura Vaz",
      confirmar_entrega: true
    },{
      _cod : "envio007",
      destino_envio: "Almeria",
      precio_transporte_kg: 15,
      peso_kg: 4200,
      fecha_envio: ISODate("2020-03-12T08:00:00Z"),
      urgente: false,
      empresa_envio: "DHL",
      empleado_transportista: "Laura Vaz",
      confirmar_entrega: false
    },{
      _cod : "envio008",
      destino_envio: "Barcelona",
      precio_transporte_kg: 28,
      peso_kg:8000,
      fecha_envio: ISODate("2020-05-22T08:00:00Z"),
      urgente: true,
      empresa_envio: "DHL",
      empleado_transportista: "Laura Vaz",
      confirmar_entrega: false
    },{
      _cod : "envio009",
      destino_envio: "Bilbao",
      pprecio_transporte_kg: 30,
      peso_kg: 200,
      fecha_envio: ISODate("2019-05-22T08:00:00Z"),
      urgente: false,
      empresa_envio: "Correos",
      empleado_transportista: "Manuel Escudero",
      confirmar_entrega: true
    }
    ])    