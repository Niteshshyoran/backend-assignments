const Operator = require("../models/operator")
const Route = require("../models/route")

export default async function addBusToOperator (operatorId, busId){
    await Operator.findByIdAndUpdate(operatorId, {$push: {bus: busId}})
}

export default async function addBusToRoute(operatorId, routeID){
    await Route.findByIdAndUpdate(operatorId, {$push: {route: routeID}});
}