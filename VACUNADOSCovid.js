cube(`VACUNADOSCovid`, {
  sql: `SELECT * FROM dbo."VACUNADOS_COVID_VIEW"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [idUbigeoRes, departamentoResidencia, provinciaResidencia, distritoResidencia, actividad, comorbilidad]
    },
	  dosis_1:{
		  sql:`num_doc`,
		  type:`count`,
		  filters:[
			  {sql:`${CUBE}.dosis_aplicada='1ª dosis'`}
			  ]

	  },
	  dosis_2:{
		                    sql:`num_doc`,
		                    type:`count`,
		                    filters:[
					                              {sql:`${CUBE}.dosis_aplicada='2ª dosis'`}


					                      ]

		            }
  },
  
  dimensions: {
    abrevTipoDoc: {
      sql: `abrev_tipo_doc`,
      type: `string`
    },
    
    numDoc: {
      sql: `num_doc`,
      type: `string`
    },
    
    paciente: {
      sql: `paciente`,
      type: `string`
    },
    
    descGenero: {
      sql: `desc_genero`,
      type: `string`
    },
    
    descEtn: {
      sql: `desc_etn`,
      type: `string`
    },
    
    idUbigeoRes: {
      sql: `id_ubigeo_res`,
      type: `string`
    },
    
    departamentoResidencia: {
      sql: `departamento_residencia`,
      type: `string`
    },
    
    provinciaResidencia: {
      sql: `provincia_residencia`,
      type: `string`
    },
    
    distritoResidencia: {
      sql: `distrito_residencia`,
      type: `string`
    },
    
    actividad: {
      sql: `actividad`,
      type: `string`
    },
    
    codigoVacuna: {
      sql: `codigo_vacuna`,
      type: `string`
    },
    
    vacuna: {
      sql: `vacuna`,
      type: `string`
    },
    
    dosisAplicada: {
      sql: `dosis_aplicada`,
      type: `string`
    },
    
    gruporiesgo: {
      sql: `gruporiesgo`,
      type: `string`
    },
    
    comorbilidad: {
      sql: `comorbilidad`,
      type: `string`
    },
    
    contactotbp: {
      sql: `contactotbp`,
      type: `string`
    },
    
    vacunador: {
      sql: `vacunador`,
      type: `string`
    },
    
    disa: {
      sql: `${CUBE}."DISA"`,
      type: `string`
    },
    
    red: {
      sql: `${CUBE}."RED"`,
      type: `string`
    },
    
    microred: {
      sql: `${CUBE}."MICRORED"`,
      type: `string`
    },
    
    establecimiento: {
      sql: `establecimiento`,
      type: `string`
    },
    
    departamentoEstablecimiento: {
      sql: `departamento_establecimiento`,
      type: `string`
    },
    
    provinciaEstablecimiento: {
      sql: `provincia_establecimiento`,
      type: `string`
    },
    
    distritoEstablecimiento: {
      sql: `distrito_establecimiento`,
      type: `string`
    },
    
    fechaRegistro: {
      sql: `fecha_registro`,
      type: `string`
    },
    
    registrador: {
      sql: `registrador`,
      type: `string`
    },
    
    codigoModular: {
      sql: `codigo_modular`,
      type: `string`
    },
    
    loteVacuna: {
      sql: `${CUBE}."Lote_Vacuna"`,
      type: `string`
    },
    
    fabricante: {
      sql: `${CUBE}."Fabricante"`,
      type: `string`
    },
    
    fechaNacimiento: {
      sql: `fecha_nacimiento`,
      type: `time`
    },
    
    fechaVacunacion: {
      sql: `fecha_vacunacion`,
      type: `time`
    },
	  grupo_edad:	  {
		  sql:`GRUPO_EDAD`,
		  type:`string`

	  },
	  grupo_vacunacion:{
		  sql:`GRUPO_VACUNACION`,
		  type:`string`
	  }
  },
  
  dataSource: `default`
});
