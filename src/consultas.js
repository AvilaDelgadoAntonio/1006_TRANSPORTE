/*$GROUP con más de 2 campos*/

db.transporte.aggregate(
    [
       
        {$match: { $expr: { $gt: ["$peso_kg", 1000] } } },
        
        {
            $group:
            {
                _id: { 
                    anualidad: {$year: "$fecha_envio" },
                    ciudad_destino: "$destino_envio",
                    empresa_transportista: "$empresa_envio"
                    },
                    precio_transportado: { $sum: { $multiply: ["$precio_transporte_kg", "$peso_kg"] } },
                  
            }
        },
        {
            $project: {
		_id: 0,
                año: "$_id.anualidad",
                destino: "$_id.ciudad_destino",
                transportista: "$_id.empresa_transportista",
                total_coste_transporte: { $round: ["$precio_transportado",1] },

            }
        },
        {
            $sort: {
                año: -1, destino: 1
            }
        },
        {
            $match: {
                total_coste_transporte: { $gt: 40000 }
            }
        }
    ]
).pretty()