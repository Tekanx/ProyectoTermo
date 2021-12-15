export interface Conceptos {
    id: number;
    nombre : string;
    descripcion_corta : string;
    descripcion_larga : string;
    imagen_formula : string;
    imagen_ejemplo : string;
    notas : string;
    simbologia : string;
}
export let ListaConceptos : Array<Conceptos> = 
[
    {
        id: 1,
        nombre : "Escalas de Temperatura",
        descripcion_corta : "Las escalas de temperatura (o escalas termométricas) son las escalas que se utilizan para determinar la temperatura de un cuerpo midiéndola en grados.",
        descripcion_larga : "La escala de temperatura es una metodología para calibrar la temperatura de cantidad física en metrología. Las escalas empíricas miden la temperatura en relación con parámetros convenientes y estables, como el punto de congelación y ebullición del agua",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "Las tres escalas de temperatura más comunes son: Celsius, Fahrenheit y Kelvin. Una escala de temperatura puede ser creada identificando dos temperaturas fácilmente reproducibles.",
        simbologia : "Depende de la escala"
    },
    {
        id: 2,
        nombre : "Transferencia de Calor",
        descripcion_corta : "La transferencia de calor es el proceso de propagación del calor en distintos medios.",
        descripcion_larga : "La transferencia de calor se produce siempre que existe un gradiente térmico en un sistema o cuando dos sistemas con diferentes temperaturas se ponen en contacto. El proceso persiste hasta alcanzar el equilibrio térmico, es decir, hasta que se igualan las temperaturas. Cuando existe una diferencia de temperatura entre dos objetos cercanos o regiones lo suficientemente próximas se transfiere calor más rápido.",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "La Termodinámica es la ciencia que estudia la transferencia de calor. Siempre que existe un gradiente térmico en un sistema o se ponen en contacto dos sistemas a diferentes temperaturas, se transfiere energía entre ellos o las temperaturas se mantienen constantes punto a punto en el sistema.",
        simbologia : ""
    },
    {
        id: 3,
        nombre : "Fuentes de Energía",
        descripcion_corta : "Fuente de energía es un fenómeno físico o químico del que es posible explotar su energía con fines económicos o biofísicos",
        descripcion_larga : "Son la energía solar, eólica, hidráulica, mareomotriz y la biomasa. Las fuentes de energía no renovables son aquellas que existen en una cantidad limitada en la naturaleza. La demanda mundial de energía en la actualidad se satisface en un 94% con este tipo de fuentes: carbón, petróleo, gas natural y uranio.",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "Las energías renovables están destinadas a convertirse en la fuente de electricidad más rentable para el planeta y el desarrollo económico.",
        simbologia : ""
    },
    {
        id: 4,
        nombre : "Unidad de Masa",
        descripcion_corta : "",
        descripcion_larga : "",
        imagen_formula : "",
        imagen_ejemplo : "",
        notas : "",
        simbologia : ""
    },
    {
        id: 5,
        nombre : "Unidad de Fuerza",
        descripcion_corta : "La unidad de medida de la magnitud fuerza, adoptada por los países firmantes de la Convención del Metro y de uso legal en España, es el “newton” (N)",
        descripcion_larga : "En física, un newton​ es la unidad de medida de la fuerza en el Sistema Internacional de Unidades, nombrada de esa forma por las aportaciones de Isaac Newton a la física, especialmente a la mecánica clásica. ",
        imagen_formula : "../../assets/img/newtonformula",
        imagen_ejemplo : "../../assets/img/fuerzaejemplo",
        notas : "Unidades básicas del Sistema Internacional: 1 N = 1 kg.m/s ^ 2",
        simbologia : "N"
    },
    {
        id: 6,
        nombre : "Unidad de Peso",
        descripcion_corta : "La masa es una magnitud física que mide la cantidad de materia contenida en un cuerpo.​ En el Sistema Internacional de Unidades la unidad oficial de masa es el kilogramo.",
        descripcion_larga : "Unidad de masa del Sistema Internacional, de símbolo kg, que equivale a la masa del prototipo de platino iridiado que se encuentra en la Oficina Internacional de Pesas y Medidas de París.",
        imagen_formula : "../../assets/img/kiloformula",
        imagen_ejemplo : "-",
        notas : "-",
        simbologia : "Kg"
    },
    {
        id: 7,
        nombre : "Unidad de Trabajo",
        descripcion_corta : "El julio​ o joule​ es la unidad derivada del Sistema Internacional utilizada para medir energía, trabajo y calor.",
        descripcion_larga : "Como unidad de trabajo, el julio se define como la cantidad de trabajo realizado por una fuerza constante de un newton en un metro de longitud en la misma dirección de la fuerza.",
        imagen_formula : "../../assets/img/juleformula",
        imagen_ejemplo : "-",
        notas : "Un joule (J) es el trabajo producido por una fuerza de 1 newton, cuyo punto de aplicación se desplaza 1 metro en la dirección de la fuerza.",
        simbologia : "J"
    },
    {
        id: 8,
        nombre : "Tipos de sistemas",
        descripcion_corta : "Cuando hablamos de termodinámica, el elemento o conjunto particular de elementos que nos interesa (que podría ser algo tan pequeño como una célula o tan grande como un ecosistema) se llama sistema.",
        descripcion_larga : "Un sistema abierto puede intercambiar energía y materia con su entorno. El ejemplo de la estufa sería un sistema abierto, porque se puede perder calor y vapor de agua en el aire.Un sistema cerrado, por el contrario, solo puede intercambiar energía con sus alrededores, no materia. Si ponemos una tapa muy bien ajustada sobre la olla del ejemplo anterior, se aproximaría a un sistema cerrado.Un sistema aislado es que no puede intercambiar ni materia ni energía con su entorno. Es difícil encontrarse con sistema aislado perfecto, pero una taza térmica con tapa es conceptualmente similar a un sistema aislado verdadero.",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "El sistema y los alrededores en conjunto componen el universo.",
        simbologia : "-"
    },
    {
        id: 9,
        nombre : "Propiedades Intensivas",
        descripcion_corta : "",
        descripcion_larga : "",
        imagen_formula : "",
        imagen_ejemplo : "",
        notas : "",
        simbologia : ""
    },
    {
        id: 10,
        nombre : "Propiedades Extensivas",
        descripcion_corta : "Las propiedades denominadas propiedades intensivas son aquellas que no dependen del tamaño del sistema.",
        descripcion_larga : "Si un sistema está compuesto por diferentes subsistemas, el valor de la propiedad extensiva total será la suma del valor de los diferentes subsistemas.",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "-",
        simbologia : "-"
    },

    {
        id: 12,
        nombre : "Principio de Pascal",
        descripcion_corta : "El principio de Pascal o ley de Pascal, es una ley enunciada por el físico-matemático francés Blaise Pascal",
        descripcion_larga : "la presión ejercida sobre un fluido incompresible y en equilibrio dentro de un recipiente de paredes indeformables se transmite con igual intensidad en todas las direcciones y en todos los puntos del fluido.",
        imagen_formula : "../../assets/img/pascalej",
        imagen_ejemplo : "../../assets/img/pascalformula",
        notas : "La presión es igual en todo el recipiente, entonces se deriva la fórmula P=F1/A1=F2/A2, de lo que resulta F2=F1xA2/A1. La fuerza sobre el área de la sección mayor F2 se multiplica por la relación con el área de la sección menor donde se aplica la fuerza F1.",
        simbologia : "-"
    },
    {
        id: 13,
        nombre : "Energía Potencial",
        descripcion_corta : "La energía potencial es la energía mecánica asociada a la localización de un cuerpo dentro de un campo de fuerza o a la existencia de un campo de fuerza en el interior de un cuerpo.",
        descripcion_larga : "Esta forma de energía se asocia con las fuerzas que actúan sobre un cuerpo de tal manera que esto sólo depende de la posición del cuerpo en el espacio. Estas fuerzas pueden ser representadas por un vector en cualquier punto del espacio formando. Este vector se conoce como campo vectorial de fuerzas o campo de fuerzas.",
        imagen_formula : "../../assets/img/potencialformula",
        imagen_ejemplo : "../../assets/img/potencialej",
        notas : "La fórmula matemática es la siguiente Ep = m.g.h. siendo m, la masa, g la fuerza de la gravedad y h la altura del objeto.",
        simbologia : "Ep"
    },
    {
        id: 14,
        nombre : "Energía Cinética",
        descripcion_corta : "En física, la energía cinética de un cuerpo es aquella energía que posee debido a su movimiento relativo.",
        descripcion_larga : "La cinética es la energía que posee un cuerpo a causa de su movimiento. Se trata de la capacidad o trabajo que permite que un objeto pase de estar en reposo, o quieto, a moverse a una determinada velocidad.",
        imagen_formula : "../../assets/img/cineticaformula",
        imagen_ejemplo : "../../assets/img/cineticaej",
        notas : "Como cualquier magnitud física que sea función de la velocidad, la energía cinética de un objeto no solo depende de la naturaleza interna de ese objeto, también depende de la relación entre el objeto y el observador.",
        simbologia : "Ec"
    },
    {
        id: 15,
        nombre : "Flujo másico",
        descripcion_corta : "El flujo másico es la magnitud física que expresa la variación de la masa con respecto al tiempo en un área específica.",
        descripcion_larga : "En el Sistema Internacional se mide en unidades de kilogramos por segundo, mientras que en el sistema anglosajón se mide en libras por segundo.",
        imagen_formula : "-",
        imagen_ejemplo : "-",
        notas : "Se usa frecuentemente en sistemas termodinámicos como tuberías, toberas, turbinas, compresores o difusores.",
        simbologia : "m con un punto arriba"
    },
    {
        id: 16,
        nombre : "Energía Interna",
        descripcion_corta : "En física, la energía interna de un sistema es un reflejo de la energía a escala macroscópica.",
        descripcion_larga : "Más concretamente, es la suma de: la energía cinética interna, es decir, de las sumas de las energías cinéticas de las individualidades que forman un cuerpo respecto al centro de masas del sistema.",
        imagen_formula : "../../assets/img/u",
        imagen_ejemplo : "../../assets/img/uej",
        notas : "La energía interna, de acuerdo al Primer Principio de la Termodinámica, se entiende como aquella vinculada con el movimiento aleatorio de las partículas dentro de un sistema. Por ejemplo: baterías, agitar un líquido, el vapor del agua.",
        simbologia : "U"
    },
    {
        id: 17,
        nombre : "Energía Mecánica",
        descripcion_corta : "La energía mecánica de un cuerpo o de un sistema físico es la suma de su energía cinética y la energía potencial.",
        descripcion_larga : "Se trata de una magnitud escalar relacionada con el movimiento de los cuerpos y con las fuerzas de origen mecánico, como son la fuerza gravitatoria y la de origen elástico, cuyo principal exponente es la ley de Hooke. Ambas son fuerzas conservativas.",
        imagen_formula : "../../assets/img/emfor",
        imagen_ejemplo : "../../assets/img/emej",
        notas : "En líneas generales, la energía mecánica se emplea para llevar a cabo numerosos trabajos de tipo industrial o logístico, por lo que se encuentra presente en casi todos los ámbitos de la vida en que hay movimiento. ",
        simbologia : "Em"
    }
]
