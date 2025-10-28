//Principal
/*2. PRESUPUESTO MENSUAL
Partiendo de que se conoce el monto inicial del presupuesto asignado para gastos, se desea
llevar el control de los gastos por semana. Para ello el programa requiere que solicite el monto
inicial presupuestado para gastos. Por semana solicite: el número de la semana y el monto de
gastos. El programa debe reportar el total de gastos, el promedio de gastos y monto actualizado
del presupuesto.*/ 

import Cl_Presupuesto from "./Cl_Presupuesto.js";
import Cl_iPresupuesto from "./Cl_iPresupuesto.js";
import Cl_Semana from "./Cl_Semana.js";
import Cl_iSemana from "./Cl_iSemana.js";

iPresupuesto = new Cl_iPresupuesto();
mI = iPresupuesto.leer montoInicial();

