/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
import logger from "./../../../../utils/logger";

import * as cellNotEmpty from "./cellNotEmpty";
import * as colNotExists from "./colNotExists";
import * as colDoesExists from "./colDoesExists";
import * as contains from "./contains";
import * as equals from "./equals";
import * as greaterThan from "./greaterThan";
import * as isEmpty from "./isEmpty";
import * as isNotEmpty from "./isNotEmpty";
import * as lessThan from "./lessThan";
import * as notContains from "./notContains";
import * as notEquals from "./notEquals";
import * as isDateTime from "./isDateTime";
import * as dmTypeEquals from "./dmTypeEquals";
import * as dmTypeNotEquals from "./dmTypeNotEquals";
import * as dmMeasurementEquals from "./dmMeasurementEquals";
import * as dmMeasurementNotEquals from "./dmMeasurementNotEquals";
import * as dmRoleEquals from "./dmRoleEquals";
import * as dmRoleNotEquals from "./dmRoleNotEquals";

/**
* @param customOps - Array of custom operators to be added to standard operators
*/
function getConditionOps(customOps) {
	const ops = {};
	ops[cellNotEmpty.op()] = cellNotEmpty.evaluate;
	ops[colNotExists.op()] = colNotExists.evaluate;
	ops[colDoesExists.op()] = colDoesExists.evaluate;
	ops[contains.op()] = contains.evaluate;
	ops[equals.op()] = equals.evaluate;
	ops[greaterThan.op()] = greaterThan.evaluate;
	ops[isEmpty.op()] = isEmpty.evaluate;
	ops[isNotEmpty.op()] = isNotEmpty.evaluate;
	ops[lessThan.op()] = lessThan.evaluate;
	ops[notContains.op()] = notContains.evaluate;
	ops[notEquals.op()] = notEquals.evaluate;
	ops[isDateTime.op()] = isDateTime.evaluate;
	ops[dmTypeEquals.op()] = dmTypeEquals.evaluate;
	ops[dmTypeNotEquals.op()] = dmTypeNotEquals.evaluate;
	ops[dmMeasurementEquals.op()] = dmMeasurementEquals.evaluate;
	ops[dmMeasurementNotEquals.op()] = dmMeasurementNotEquals.evaluate;
	ops[dmRoleEquals.op()] = dmRoleEquals.evaluate;
	ops[dmRoleNotEquals.op()] = dmRoleNotEquals.evaluate;


	if (Array.isArray(customOps)) {
		for (const custOp of customOps) {
			if (custOp && typeof custOp.op === "function" && typeof custOp.evaluate === "function") {
				ops[custOp.op()] = custOp.evaluate;
			} else {
				logger.warn("Custom operator missing require function of `op` or `evaluate`");
			}
		}
	}
	return ops;
}

export {
	getConditionOps
};
