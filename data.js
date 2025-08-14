// Datos compartidos (globales)
// Estructura de datos del test
const temperamentos = [
  {
    name: "León",
    animal: "León",
    questions: [
      "¿Tomo el control cuando algo necesita hacerse?",
      "¿Me impacienta que otros tarden en decidir?",
      "¿Actúo rápido en lugar de esperar o pensar demasiado?",
      "¿Pierdo la paciencia con personas que van lento?",
      "¿Prefiero liderar antes que seguir instrucciones?",
      "¿Hago las cosas a mi manera sin consultar a los demás?",
      "¿Me frustro cuando otros no hacen las cosas como yo espero?",
      "¿Digo las cosas de forma directa aunque suene fuerte?",
      "¿Me pongo metas altas y espero lo mismo de los demás?",
      "¿Me cuesta aceptar cuando cometo errores?",
      "¿Evito pedir perdón incluso si sé que me equivoqué?",
      "¿Prefiero hacerlo yo mismo si creo que otros no lo harán bien?",
      "¿Digo lo que pienso sin rodeos?",
      "¿Evito mostrarme débil o vulnerable frente a otros?",
      "¿Pienso que puedo hacer las cosas mejor que los demás?",
      "¿Presiono para que todo se haga rápido?",
      "¿Me molesta cuando los planes no salen como quiero?",
      "¿Valoro más los resultados que los sentimientos de los demás?",
      "¿Me desanimo si pierdo el control de una situación?",
      "¿Resuelvo los problemas sin depender de nadie?",
      "¿Disfruto tomar decisiones importantes?",
      "¿Actúo con firmeza aunque a otros no les guste?",
      "¿Creo que casi todos los problemas tienen una solución rápida?",
      "¿Me cuesta dejar el control de un proyecto en manos de otros?",
      "¿Me enojo cuando veo que otros no se esfuerzan como yo?",
      "¿Sigo avanzando aunque los demás quieran descansar?",
      "¿Compito incluso en cosas pequeñas?",
      "¿Me molesta cuando alguien más tiene el mando?",
      "¿Tomo el liderazgo aunque nadie me lo pida?",
      "¿Me enojo cuando alguien me lleva la contraria?"
    ]
  },
  {
    name: "Mono",
    animal: "Mono",
    questions: [
      "¿Digo cosas sin pensar si pueden molestar?",
      "¿Hago reír o entretengo a los demás?",
      "¿Disfruto estar rodeado de personas y conversar?",
      "¿Me aburro cuando algo se vuelve repetitivo?",
      "¿Empiezo cosas con entusiasmo pero no las termino?",
      "¿Prefiero iniciar cosas nuevas en lugar de continuar con lo mismo?",
      "¿Exagero historias para que sean más divertidas?",
      "¿Hablo más de lo que escucho?",
      "¿Me distraigo fácilmente?",
      "¿Olvido lo que prometí?",
      "¿Hago varias cosas al mismo tiempo sin terminarlas?",
      "¿Pierdo la noción del tiempo y llego tarde?",
      "¿Mantengo desorden en mi espacio personal?",
      "¿Actúo según lo que siento en el momento?",
      "¿Me cuesta seguir una rutina durante varios días?",
      "¿Busco ser el centro de atención en grupos?",
      "¿Cambio de ánimo con facilidad?",
      "¿Hablo mucho sobre mí en las conversaciones?",
      "¿Evito conversaciones serias porque me aburren o incomodan?",
      "¿Me cuesta decir que no cuando me invitan a algo divertido?",
      "¿Prefiero improvisar en lugar de seguir instrucciones?",
      "¿Pido disculpas solo cuando no tengo otra opción?",
      "¿Uso el humor para no hablar de temas que me duelen?",
      "¿Tengo dificultad para concentrarme mucho tiempo?",
      "¿Reacciono con mucha emoción por cosas pequeñas?",
      "¿Digo cosas sin pensar si pueden afectar a alguien?",
      "¿Me gusta conocer gente nueva pero luego pierdo contacto?",
      "¿Evito comprometerme porque siento que pierdo libertad?",
      "¿Pongo excusas cuando no cumplo algo?",
      "¿Siento que algo no vale la pena si no es divertido?"
    ]
  },
  {
    name: "Labrador",
    animal: "Labrador",
    questions: [
      "¿Prefiero seguir a otros en lugar de tomar el liderazgo?",
      "¿Dudo al tomar decisiones por mi cuenta?",
      "¿Evito discutir aunque crea que tengo razón?",
      "¿Me adapto a lo que dicen los demás para evitar problemas?",
      "¿Me preocupo por lo que podría pasar?",
      "¿Prefiero que todo siga igual antes que enfrentar cambios?",
      "¿Digo “sí” aunque no quiero, por miedo a incomodar?",
      "¿Evito llamar la atención en grupos o actividades?",
      "¿Dejo pasar retos aunque sé que podría intentarlo?",
      "¿Me siento mal cuando alguien se enoja conmigo?",
      "¿Pongo primero las necesidades de otros antes que las mías?",
      "¿Callo lo que pienso para no perder la paz?",
      "¿Evito actuar por miedo a equivocarme?",
      "¿Prefiero trabajar en grupo antes que hacerlo solo?",
      "¿Observo más de lo que hablo cuando estoy con otras personas?",
      "¿Me quedo como estoy si ya me siento cómodo?",
      "¿Me afecta cuando alguien me critica?",
      "¿Evito cambiar mi rutina si ya funciona como está?",
      "¿Me siento culpable al tomar decisiones que afectan a otros?",
      "¿Evito conflictos incluso si eso me afecta?",
      "¿Prefiero que alguien más hable por mí en público?",
      "¿No digo lo que realmente quiero o necesito?",
      "¿Dejo que otros decidan por mí?",
      "¿Me siento mejor en ambientes tranquilos y sin sorpresas?",
      "¿Trato de ser amable incluso si estoy cansado o molesto?",
      "¿Pienso más en los demás que en mí mismo?",
      "¿Los cambios me hacen sentir inestable emocionalmente?",
      "¿Evito comprometerme porque no estoy seguro de poder cumplir?",
      "¿Me cuesta tomar decisiones rápidas?",
      "¿Prefiero mantener la calma antes que expresar lo que pienso?"
    ]
  },
  {
    name: "Castor",
    animal: "Castor",
    questions: [
      "¿Reviso los detalles antes de tomar decisiones?",
      "¿Me molesta que las cosas estén mal hechas?",
      "¿Me frustro cuando otros no siguen las reglas?",
      "¿Exijo mucho de mí mismo y de los demás?",
      "¿Desconfío de que otros hagan bien su parte?",
      "¿Prefiero hacer las cosas solo para asegurarme de que queden bien?",
      "¿Planifico todo con anticipación?",
      "¿Evito cambiar de planes en el último momento?",
      "¿Me pongo nervioso cuando tengo que improvisar?",
      "¿Reviso mi trabajo varias veces para evitar errores?",
      "¿Me siento mal si algo no queda perfecto?",
      "¿Soy muy duro conmigo cuando cometo errores?",
      "¿Prefiero hacer las cosas despacio pero bien hechas?",
      "¿Me cuesta mostrar lo que siento?",
      "¿Parezco frío o seco con otras personas?",
      "¿Me molestan los espacios desordenados o ruidosos?",
      "¿Guardo rencor cuando alguien rompe una regla importante?",
      "¿Guardo mis emociones para mí?",
      "¿Evito lugares caóticos o desorganizados?",
      "¿Prefiero que algo esté bien hecho aunque tome más tiempo?",
      "¿Detecto los errores más que los aciertos?",
      "¿Cumplo mis promesas aunque me cueste?",
      "¿Me gusta trabajar en lugares tranquilos?",
      "¿No me gusta hacer algo si no entiendo para qué sirve?",
      "¿Me enojo cuando otros hacen las cosas de forma incorrecta?",
      "¿Evito decidir si no tengo toda la información?",
      "¿Desconfío de personas que improvisan constantemente?",
      "¿Siento que tengo que hacer las cosas muy bien para que me respeten?",
      "¿Busco mejorar lo que ya funciona bien?",
      "¿Me molesta cuando algo está casi bien pero no perfecto?"
    ]
  }
];

// Descripciones detalladas de cada temperamento
const descripciones = {
  "León": {
    emoji: "🦁",
    titulo: "LEÓN",
    descripcion: "Líder nato, confiado, decidido, rápido, proactivo, agresivo. Toma decisiones por otros, tiene estándares altos, va al frente. Pone metas, espera que los demás entiendan sin explicar.",
    caracteristicas: [
      "Líder nato, confiado, decidido",
      "Rápido, proactivo, agresivo",
      "Toma decisiones por otros",
      "Tiene estándares altos, va al frente",
      "Pone metas, espera que los demás entiendan sin explicar"
    ],
    fortalezas: [
      "Activos y motivados por resultados",
      "Confianza en sí mismos y visión de futuro",
      "Valientes, organizados, decididos, productivos",
      "Buenos organizadores y ejecutores",
      "Pueden levantar a otros por su fuerza de carácter"
    ],
    debilidades: [
      "Carácter violento, insensibles, dominantes",
      "Arrogantes, cortantes, crueles, sarcásticos",
      "Altivos, no dialogan fácilmente",
      "Les disgusta el sentimentalismo (lágrimas)",
      "Toman decisiones sin consultar, obligan a otros a su plan",
      "Su exceso de seguridad deja poco espacio para Dios"
    ],
    desarrollo: [
      "Que las personas valen más que los proyectos",
      "Que no puede imponer su ritmo a todos",
      "Humildad y sensibilidad (2 Timoteo 1:7)",
      "A dejar espacio para Dios en sus planes",
      "No ser dictatorial ni rígido",
      "A perdonar y escuchar opiniones"
    ]
  },
  "Mono": {
    emoji: "🐒",
    titulo: "MONO",
    descripcion: "Extrovertido, emocional, creativo, simpático, sociable. Hábil para levantar el ánimo, divertido, ama ser el centro. Viven en el presente, odian la rutina.",
    caracteristicas: [
      "Extrovertido, emocional, creativo",
      "Simpático, sociable",
      "Hábil para levantar el ánimo",
      "Divertido, ama ser el centro",
      "Viven en el presente, odian la rutina"
    ],
    fortalezas: [
      "Carismático, cálido, empático",
      "Comunicativo, alegre, creativo",
      "Buen animador en grupos y eventos",
      "Se lleva bien con todos, facilita el compañerismo",
      "Buen vendedor, habla de sí con entusiasmo"
    ],
    debilidades: [
      "Le cuesta pedir disculpas",
      "No termina lo que empieza",
      "Indisciplinado, no tiene control del tiempo",
      "Actúa por emociones, pierde el enfoque",
      "Se distrae fácilmente, habla demasiado de sí",
      "Rompe promesas, llega tarde, es impulsivo",
      "Exagera o miente para entretener",
      "Llora con facilidad, tiene arranques de enojo"
    ],
    desarrollo: [
      "Disciplina, estructura y constancia",
      "Terminar lo que empieza",
      "Ser puntual, organizado y confiable",
      "A reflexionar antes de actuar",
      "Tener dominio propio (Gálatas 5:23)",
      "Pensar en los demás antes de hablar o actuar"
    ]
  },
  "Labrador": {
    emoji: "🐕",
    titulo: "LABRADOR",
    descripcion: "Tranquilo, reservado, amable, buen oyente. Se adapta, evita conflictos, valora la paz. Busca relaciones profundas, fiel, cuidadoso.",
    caracteristicas: [
      "Tranquilo, reservado, amable",
      "Buen oyente",
      "Se adapta, evita conflictos",
      "Valora la paz",
      "Busca relaciones profundas, fiel, cuidadoso"
    ],
    fortalezas: [
      "Fiel, confiable, estable",
      "Equilibrado emocionalmente",
      "Buen consejero, escucha con atención",
      "Excelente compañía y apoyo emocional",
      "Planificador, metódico si se le exige",
      "Pacifista, busca el bien común"
    ],
    debilidades: [
      "Falta de iniciativa, pasividad",
      "Pesimista, se preocupa fácilmente",
      "Lento para actuar, se acomoda a circunstancias",
      "Evita comprometerse o tomar liderazgo",
      "Puede apagar el entusiasmo de otros",
      "Perezoso, lucha con la motivación",
      "Terco, reservado, le cuesta confiar"
    ],
    desarrollo: [
      "Iniciativa y decisión",
      "Salir de su zona de confort",
      "Tomar liderazgo cuando es necesario",
      "A confiar más en Dios y menos en la estabilidad externa",
      "Cultivar esperanza y gratitud",
      "Superar el miedo al cambio"
    ]
  },
  "Castor": {
    emoji: "🦫",
    titulo: "CASTOR",
    descripcion: "Detallista, disciplinado, estudioso, ama el orden. Analiza todo antes de actuar, perfeccionista. Le molesta el error y lo ilógico, exige sacrificio.",
    caracteristicas: [
      "Detallista, disciplinado, estudioso",
      "Ama el orden",
      "Analiza todo antes de actuar",
      "Perfeccionista",
      "Le molesta el error y lo ilógico, exige sacrificio"
    ],
    fortalezas: [
      "Analítico, lógico, creativo",
      "Buen planificador, perfeccionista en la ejecución",
      "Organizado, disciplinado, confiable",
      "Responsable, sabe sus limitaciones",
      "Se esfuerza por hacer todo con excelencia",
      "Valora la integridad y la verdad"
    ],
    debilidades: [
      "Mal humor, puede ser depresivo",
      "Tiende a criticar, se guarda resentimientos",
      "Indeciso, vive en el temor de fallar",
      "Rígido con sus estándares, poco práctico",
      "Le cuesta hacer amigos, desconfía",
      "Se siente superior moralmente",
      "Cree que su manera de hacer las cosas es la única correcta",
      "Se vuelve metiche o entrometido"
    ],
    desarrollo: [
      "Flexibilidad emocional y mental",
      "Entender que la perfección no es lo esencial",
      "Valorar a las personas por encima del sistema",
      "Confiar más en Dios y menos en su propio juicio",
      "No guardar rencor, aprender a soltar",
      "Aceptar y convivir con el error ajeno"
    ]
  }
};

// Equivalencias con temperamentos clásicos
const equivalenciasClasicas = {
  "León": "Colérico",
  "Mono": "Sanguíneo",
  "Labrador": "Flemático",
  "Castor": "Melancólico"
};


