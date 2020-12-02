import _ from 'lodash';
import { xml2json } from 'xml-js';

export interface LooseObject {
  [key: string]: any;
}

const removeEmptyObjects = (obj: LooseObject): LooseObject => {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .mapValues(removeEmptyObjects) // call only for object values
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
};

const nativeType = (value: any) => {
  var nValue = Number(value);
  if (!isNaN(nValue)) {
    return nValue;
  }
  var bValue = value.toLowerCase();
  if (bValue === 'true') {
    return true;
  } else if (bValue === 'false') {
    return false;
  }

  return value;
};

const removeJsonTextAttribute = (value: string, parentElement: LooseObject) => {
  try {
    var keyNo = Object.keys(parentElement._parent).length;
    var keyName = Object.keys(parentElement._parent)[keyNo - 1];
    parentElement._parent[keyName] = nativeType(value);
  } catch (e) {}
};

export const parseGoodreadsResponse = (data: any) => {
  const resp = JSON.parse(
    xml2json(data, {
      compact: true,
      trim: true,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      ignoreAttributes: true,
      ignoreComment: true,
      ignoreCdata: true,
      ignoreDoctype: true,
      textFn: removeJsonTextAttribute,
    }),
  );
  return removeEmptyObjects(resp).GoodreadsResponse;
};