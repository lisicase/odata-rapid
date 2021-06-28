// copyright: Copyright (c) 2021 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.0.0 [apg-js](https://github.com/ldthomas/apg-js)
module.exports = function grammar(){
  // ```
  // SUMMARY
  //      rules = 41
  //       udts = 0
  //    opcodes = 284
  //        ---   ABNF original opcodes
  //        ALT = 15
  //        CAT = 46
  //        REP = 39
  //        RNM = 99
  //        TLS = 50
  //        TBS = 29
  //        TRG = 6
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  //        BKA = 0
  //        BKN = 0
  //        BKR = 0
  //        ABG = 0
  //        AEN = 0
  // characters = [32 - 1114111]
  // ```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'model', lower: 'model', index: 0, isBkr: false};
  this.rules[1] = {name: 'namespace', lower: 'namespace', index: 1, isBkr: false};
  this.rules[2] = {name: 'include', lower: 'include', index: 2, isBkr: false};
  this.rules[3] = {name: 'modelElement', lower: 'modelelement', index: 3, isBkr: false};
  this.rules[4] = {name: 'structuredType', lower: 'structuredtype', index: 4, isBkr: false};
  this.rules[5] = {name: 'structuredTypeMember', lower: 'structuredtypemember', index: 5, isBkr: false};
  this.rules[6] = {name: 'property', lower: 'property', index: 6, isBkr: false};
  this.rules[7] = {name: 'propertyModifier', lower: 'propertymodifier', index: 7, isBkr: false};
  this.rules[8] = {name: 'typeReference', lower: 'typereference', index: 8, isBkr: false};
  this.rules[9] = {name: 'typeName', lower: 'typename', index: 9, isBkr: false};
  this.rules[10] = {name: 'builtInType', lower: 'builtintype', index: 10, isBkr: false};
  this.rules[11] = {name: 'operation', lower: 'operation', index: 11, isBkr: false};
  this.rules[12] = {name: 'operationKind', lower: 'operationkind', index: 12, isBkr: false};
  this.rules[13] = {name: 'parameter', lower: 'parameter', index: 13, isBkr: false};
  this.rules[14] = {name: 'enumType', lower: 'enumtype', index: 14, isBkr: false};
  this.rules[15] = {name: 'enumMember', lower: 'enummember', index: 15, isBkr: false};
  this.rules[16] = {name: 'typeDefinition', lower: 'typedefinition', index: 16, isBkr: false};
  this.rules[17] = {name: 'service', lower: 'service', index: 17, isBkr: false};
  this.rules[18] = {name: 'serviceMember', lower: 'servicemember', index: 18, isBkr: false};
  this.rules[19] = {name: 'entitySet', lower: 'entityset', index: 19, isBkr: false};
  this.rules[20] = {name: 'singleton', lower: 'singleton', index: 20, isBkr: false};
  this.rules[21] = {name: 'serviceOperation', lower: 'serviceoperation', index: 21, isBkr: false};
  this.rules[22] = {name: 'annotations', lower: 'annotations', index: 22, isBkr: false};
  this.rules[23] = {name: 'annotation', lower: 'annotation', index: 23, isBkr: false};
  this.rules[24] = {name: 'annotationValue', lower: 'annotationvalue', index: 24, isBkr: false};
  this.rules[25] = {name: 'annotationProperty', lower: 'annotationproperty', index: 25, isBkr: false};
  this.rules[26] = {name: 'propertyName', lower: 'propertyname', index: 26, isBkr: false};
  this.rules[27] = {name: 'qualifiedName', lower: 'qualifiedname', index: 27, isBkr: false};
  this.rules[28] = {name: 'identifier', lower: 'identifier', index: 28, isBkr: false};
  this.rules[29] = {name: 'identInitial', lower: 'identinitial', index: 29, isBkr: false};
  this.rules[30] = {name: 'identSubsequent', lower: 'identsubsequent', index: 30, isBkr: false};
  this.rules[31] = {name: 'number', lower: 'number', index: 31, isBkr: false};
  this.rules[32] = {name: 'integer', lower: 'integer', index: 32, isBkr: false};
  this.rules[33] = {name: 'precision', lower: 'precision', index: 33, isBkr: false};
  this.rules[34] = {name: 'scale', lower: 'scale', index: 34, isBkr: false};
  this.rules[35] = {name: 'maxLength', lower: 'maxlength', index: 35, isBkr: false};
  this.rules[36] = {name: 'ALPHA', lower: 'alpha', index: 36, isBkr: false};
  this.rules[37] = {name: 'DIGIT', lower: 'digit', index: 37, isBkr: false};
  this.rules[38] = {name: 'CHAR', lower: 'char', index: 38, isBkr: false};
  this.rules[39] = {name: 'DQUOTE', lower: 'dquote', index: 39, isBkr: false};
  this.rules[40] = {name: 'ESCAPE', lower: 'escape', index: 40, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* model */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,3,5]};// CAT
  this.rules[0].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[2] = {type: 4, index: 1};// RNM(namespace)
  this.rules[0].opcodes[3] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[4] = {type: 4, index: 2};// RNM(include)
  this.rules[0].opcodes[5] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[0].opcodes[6] = {type: 4, index: 3};// RNM(modelElement)

  /* namespace */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[1].opcodes[1] = {type: 6, string: [110,97,109,101,115,112,97,99,101]};// TBS
  this.rules[1].opcodes[2] = {type: 4, index: 27};// RNM(qualifiedName)

  /* include */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 2, children: [1,2,3,5,6,7]};// CAT
  this.rules[2].opcodes[1] = {type: 6, string: [105,110,99,108,117,100,101]};// TBS
  this.rules[2].opcodes[2] = {type: 4, index: 39};// RNM(DQUOTE)
  this.rules[2].opcodes[3] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[2].opcodes[4] = {type: 4, index: 38};// RNM(CHAR)
  this.rules[2].opcodes[5] = {type: 4, index: 39};// RNM(DQUOTE)
  this.rules[2].opcodes[6] = {type: 6, string: [97,115]};// TBS
  this.rules[2].opcodes[7] = {type: 4, index: 28};// RNM(identifier)

  /* modelElement */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 1, children: [1,2,3,4]};// ALT
  this.rules[3].opcodes[1] = {type: 4, index: 4};// RNM(structuredType)
  this.rules[3].opcodes[2] = {type: 4, index: 14};// RNM(enumType)
  this.rules[3].opcodes[3] = {type: 4, index: 16};// RNM(typeDefinition)
  this.rules[3].opcodes[4] = {type: 4, index: 17};// RNM(service)

  /* structuredType */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 2, children: [1,2,4,5,6,10,11,13]};// CAT
  this.rules[4].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[4].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[4].opcodes[3] = {type: 6, string: [97,98,115,116,114,97,99,116]};// TBS
  this.rules[4].opcodes[4] = {type: 6, string: [116,121,112,101]};// TBS
  this.rules[4].opcodes[5] = {type: 4, index: 28};// RNM(identifier)
  this.rules[4].opcodes[6] = {type: 3, min: 0, max: 1};// REP
  this.rules[4].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[4].opcodes[8] = {type: 6, string: [101,120,116,101,110,100,115]};// TBS
  this.rules[4].opcodes[9] = {type: 4, index: 27};// RNM(qualifiedName)
  this.rules[4].opcodes[10] = {type: 7, string: [123]};// TLS
  this.rules[4].opcodes[11] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[4].opcodes[12] = {type: 4, index: 5};// RNM(structuredTypeMember)
  this.rules[4].opcodes[13] = {type: 7, string: [125]};// TLS

  /* structuredTypeMember */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[5].opcodes[1] = {type: 4, index: 6};// RNM(property)
  this.rules[5].opcodes[2] = {type: 4, index: 11};// RNM(operation)

  /* property */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 2, children: [1,2,4,5,6]};// CAT
  this.rules[6].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[6].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[6].opcodes[3] = {type: 4, index: 7};// RNM(propertyModifier)
  this.rules[6].opcodes[4] = {type: 4, index: 28};// RNM(identifier)
  this.rules[6].opcodes[5] = {type: 7, string: [58]};// TLS
  this.rules[6].opcodes[6] = {type: 4, index: 8};// RNM(typeReference)

  /* propertyModifier */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 6, string: [107,101,121]};// TBS

  /* typeReference */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 1, children: [1,5]};// ALT
  this.rules[8].opcodes[1] = {type: 2, children: [2,3]};// CAT
  this.rules[8].opcodes[2] = {type: 4, index: 9};// RNM(typeName)
  this.rules[8].opcodes[3] = {type: 3, min: 0, max: 1};// REP
  this.rules[8].opcodes[4] = {type: 7, string: [63]};// TLS
  this.rules[8].opcodes[5] = {type: 2, children: [6,7,8,10]};// CAT
  this.rules[8].opcodes[6] = {type: 7, string: [91]};// TLS
  this.rules[8].opcodes[7] = {type: 4, index: 9};// RNM(typeName)
  this.rules[8].opcodes[8] = {type: 3, min: 0, max: 1};// REP
  this.rules[8].opcodes[9] = {type: 7, string: [63]};// TLS
  this.rules[8].opcodes[10] = {type: 7, string: [93]};// TLS

  /* typeName */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 1, children: [1,2,6]};// ALT
  this.rules[9].opcodes[1] = {type: 4, index: 10};// RNM(builtInType)
  this.rules[9].opcodes[2] = {type: 2, children: [3,4,5]};// CAT
  this.rules[9].opcodes[3] = {type: 6, string: [69,100,109]};// TBS
  this.rules[9].opcodes[4] = {type: 7, string: [46]};// TLS
  this.rules[9].opcodes[5] = {type: 4, index: 28};// RNM(identifier)
  this.rules[9].opcodes[6] = {type: 4, index: 27};// RNM(qualifiedName)

  /* builtInType */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 1, children: [1,2,3,4,13,14,15,16,23]};// ALT
  this.rules[10].opcodes[1] = {type: 6, string: [66,111,111,108,101,97,110]};// TBS
  this.rules[10].opcodes[2] = {type: 6, string: [68,97,116,101]};// TBS
  this.rules[10].opcodes[3] = {type: 6, string: [68,97,116,101,84,105,109,101]};// TBS
  this.rules[10].opcodes[4] = {type: 2, children: [5,6]};// CAT
  this.rules[10].opcodes[5] = {type: 6, string: [68,101,99,105,109,97,108]};// TBS
  this.rules[10].opcodes[6] = {type: 3, min: 0, max: 1};// REP
  this.rules[10].opcodes[7] = {type: 2, children: [8,9,10,11,12]};// CAT
  this.rules[10].opcodes[8] = {type: 7, string: [40]};// TLS
  this.rules[10].opcodes[9] = {type: 4, index: 33};// RNM(precision)
  this.rules[10].opcodes[10] = {type: 7, string: [44]};// TLS
  this.rules[10].opcodes[11] = {type: 4, index: 34};// RNM(scale)
  this.rules[10].opcodes[12] = {type: 7, string: [41]};// TLS
  this.rules[10].opcodes[13] = {type: 6, string: [68,111,117,98,108,101]};// TBS
  this.rules[10].opcodes[14] = {type: 6, string: [68,117,114,97,116,105,111,110]};// TBS
  this.rules[10].opcodes[15] = {type: 6, string: [73,110,116,101,103,101,114]};// TBS
  this.rules[10].opcodes[16] = {type: 2, children: [17,18]};// CAT
  this.rules[10].opcodes[17] = {type: 6, string: [83,116,114,105,110,103]};// TBS
  this.rules[10].opcodes[18] = {type: 3, min: 0, max: 1};// REP
  this.rules[10].opcodes[19] = {type: 2, children: [20,21,22]};// CAT
  this.rules[10].opcodes[20] = {type: 7, string: [40]};// TLS
  this.rules[10].opcodes[21] = {type: 4, index: 35};// RNM(maxLength)
  this.rules[10].opcodes[22] = {type: 7, string: [41]};// TLS
  this.rules[10].opcodes[23] = {type: 6, string: [84,105,109,101,79,102,68,97,121]};// TBS

  /* operation */
  this.rules[11].opcodes = [];
  this.rules[11].opcodes[0] = {type: 2, children: [1,2,3,4,5,12,13]};// CAT
  this.rules[11].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[11].opcodes[2] = {type: 4, index: 12};// RNM(operationKind)
  this.rules[11].opcodes[3] = {type: 4, index: 28};// RNM(identifier)
  this.rules[11].opcodes[4] = {type: 7, string: [40]};// TLS
  this.rules[11].opcodes[5] = {type: 3, min: 0, max: 1};// REP
  this.rules[11].opcodes[6] = {type: 2, children: [7,8]};// CAT
  this.rules[11].opcodes[7] = {type: 4, index: 13};// RNM(parameter)
  this.rules[11].opcodes[8] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[11].opcodes[9] = {type: 2, children: [10,11]};// CAT
  this.rules[11].opcodes[10] = {type: 7, string: [44]};// TLS
  this.rules[11].opcodes[11] = {type: 4, index: 13};// RNM(parameter)
  this.rules[11].opcodes[12] = {type: 7, string: [41]};// TLS
  this.rules[11].opcodes[13] = {type: 3, min: 0, max: 1};// REP
  this.rules[11].opcodes[14] = {type: 2, children: [15,16,17]};// CAT
  this.rules[11].opcodes[15] = {type: 7, string: [58]};// TLS
  this.rules[11].opcodes[16] = {type: 4, index: 22};// RNM(annotations)
  this.rules[11].opcodes[17] = {type: 4, index: 8};// RNM(typeReference)

  /* operationKind */
  this.rules[12].opcodes = [];
  this.rules[12].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[12].opcodes[1] = {type: 6, string: [97,99,116,105,111,110]};// TBS
  this.rules[12].opcodes[2] = {type: 6, string: [102,117,110,99,116,105,111,110]};// TBS

  /* parameter */
  this.rules[13].opcodes = [];
  this.rules[13].opcodes[0] = {type: 2, children: [1,2,3,4]};// CAT
  this.rules[13].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[13].opcodes[2] = {type: 4, index: 28};// RNM(identifier)
  this.rules[13].opcodes[3] = {type: 7, string: [58]};// TLS
  this.rules[13].opcodes[4] = {type: 4, index: 8};// RNM(typeReference)

  /* enumType */
  this.rules[14].opcodes = [];
  this.rules[14].opcodes[0] = {type: 2, children: [1,2,5,6,7,9]};// CAT
  this.rules[14].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[14].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[14].opcodes[3] = {type: 6, string: [101,110,117,109]};// TBS
  this.rules[14].opcodes[4] = {type: 6, string: [102,108,97,103,115]};// TBS
  this.rules[14].opcodes[5] = {type: 4, index: 28};// RNM(identifier)
  this.rules[14].opcodes[6] = {type: 7, string: [123]};// TLS
  this.rules[14].opcodes[7] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[14].opcodes[8] = {type: 4, index: 15};// RNM(enumMember)
  this.rules[14].opcodes[9] = {type: 7, string: [125]};// TLS

  /* enumMember */
  this.rules[15].opcodes = [];
  this.rules[15].opcodes[0] = {type: 4, index: 28};// RNM(identifier)

  /* typeDefinition */
  this.rules[16].opcodes = [];
  this.rules[16].opcodes[0] = {type: 2, children: [1,2,3,4,5]};// CAT
  this.rules[16].opcodes[1] = {type: 4, index: 22};// RNM(annotations)
  this.rules[16].opcodes[2] = {type: 6, string: [116,121,112,101,100,101,102]};// TBS
  this.rules[16].opcodes[3] = {type: 4, index: 28};// RNM(identifier)
  this.rules[16].opcodes[4] = {type: 7, string: [58]};// TLS
  this.rules[16].opcodes[5] = {type: 1, children: [6,7]};// ALT
  this.rules[16].opcodes[6] = {type: 4, index: 10};// RNM(builtInType)
  this.rules[16].opcodes[7] = {type: 2, children: [8,9,10]};// CAT
  this.rules[16].opcodes[8] = {type: 6, string: [69,100,109]};// TBS
  this.rules[16].opcodes[9] = {type: 7, string: [46]};// TLS
  this.rules[16].opcodes[10] = {type: 4, index: 28};// RNM(identifier)

  /* service */
  this.rules[17].opcodes = [];
  this.rules[17].opcodes[0] = {type: 2, children: [1,2,4,5,7]};// CAT
  this.rules[17].opcodes[1] = {type: 6, string: [115,101,114,118,105,99,101]};// TBS
  this.rules[17].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[17].opcodes[3] = {type: 4, index: 28};// RNM(identifier)
  this.rules[17].opcodes[4] = {type: 7, string: [123]};// TLS
  this.rules[17].opcodes[5] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[17].opcodes[6] = {type: 4, index: 18};// RNM(serviceMember)
  this.rules[17].opcodes[7] = {type: 7, string: [125]};// TLS

  /* serviceMember */
  this.rules[18].opcodes = [];
  this.rules[18].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[18].opcodes[1] = {type: 4, index: 19};// RNM(entitySet)
  this.rules[18].opcodes[2] = {type: 4, index: 20};// RNM(singleton)
  this.rules[18].opcodes[3] = {type: 4, index: 21};// RNM(serviceOperation)

  /* entitySet */
  this.rules[19].opcodes = [];
  this.rules[19].opcodes[0] = {type: 2, children: [1,2,3,4,5]};// CAT
  this.rules[19].opcodes[1] = {type: 4, index: 28};// RNM(identifier)
  this.rules[19].opcodes[2] = {type: 7, string: [58]};// TLS
  this.rules[19].opcodes[3] = {type: 7, string: [91]};// TLS
  this.rules[19].opcodes[4] = {type: 4, index: 27};// RNM(qualifiedName)
  this.rules[19].opcodes[5] = {type: 7, string: [93]};// TLS

  /* singleton */
  this.rules[20].opcodes = [];
  this.rules[20].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[20].opcodes[1] = {type: 4, index: 28};// RNM(identifier)
  this.rules[20].opcodes[2] = {type: 7, string: [58]};// TLS
  this.rules[20].opcodes[3] = {type: 4, index: 27};// RNM(qualifiedName)

  /* serviceOperation */
  this.rules[21].opcodes = [];
  this.rules[21].opcodes[0] = {type: 2, children: [1,2,3,4,11,12]};// CAT
  this.rules[21].opcodes[1] = {type: 4, index: 12};// RNM(operationKind)
  this.rules[21].opcodes[2] = {type: 4, index: 28};// RNM(identifier)
  this.rules[21].opcodes[3] = {type: 7, string: [40]};// TLS
  this.rules[21].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[21].opcodes[5] = {type: 2, children: [6,7]};// CAT
  this.rules[21].opcodes[6] = {type: 4, index: 13};// RNM(parameter)
  this.rules[21].opcodes[7] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[21].opcodes[8] = {type: 2, children: [9,10]};// CAT
  this.rules[21].opcodes[9] = {type: 7, string: [44]};// TLS
  this.rules[21].opcodes[10] = {type: 4, index: 13};// RNM(parameter)
  this.rules[21].opcodes[11] = {type: 7, string: [41]};// TLS
  this.rules[21].opcodes[12] = {type: 3, min: 0, max: 1};// REP
  this.rules[21].opcodes[13] = {type: 2, children: [14,15]};// CAT
  this.rules[21].opcodes[14] = {type: 7, string: [58]};// TLS
  this.rules[21].opcodes[15] = {type: 4, index: 8};// RNM(typeReference)

  /* annotations */
  this.rules[22].opcodes = [];
  this.rules[22].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[22].opcodes[1] = {type: 4, index: 23};// RNM(annotation)

  /* annotation */
  this.rules[23].opcodes = [];
  this.rules[23].opcodes[0] = {type: 2, children: [1,2,3,4]};// CAT
  this.rules[23].opcodes[1] = {type: 7, string: [64]};// TLS
  this.rules[23].opcodes[2] = {type: 4, index: 27};// RNM(qualifiedName)
  this.rules[23].opcodes[3] = {type: 7, string: [58]};// TLS
  this.rules[23].opcodes[4] = {type: 4, index: 24};// RNM(annotationValue)

  /* annotationValue */
  this.rules[24].opcodes = [];
  this.rules[24].opcodes[0] = {type: 1, children: [1,2,3,4,5,10,21,32]};// ALT
  this.rules[24].opcodes[1] = {type: 6, string: [116,114,117,101]};// TBS
  this.rules[24].opcodes[2] = {type: 6, string: [102,97,108,115,101]};// TBS
  this.rules[24].opcodes[3] = {type: 6, string: [110,117,108,108]};// TBS
  this.rules[24].opcodes[4] = {type: 4, index: 31};// RNM(number)
  this.rules[24].opcodes[5] = {type: 2, children: [6,7,9]};// CAT
  this.rules[24].opcodes[6] = {type: 4, index: 39};// RNM(DQUOTE)
  this.rules[24].opcodes[7] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[24].opcodes[8] = {type: 4, index: 38};// RNM(CHAR)
  this.rules[24].opcodes[9] = {type: 4, index: 39};// RNM(DQUOTE)
  this.rules[24].opcodes[10] = {type: 2, children: [11,12,13,18,20]};// CAT
  this.rules[24].opcodes[11] = {type: 7, string: [91]};// TLS
  this.rules[24].opcodes[12] = {type: 4, index: 24};// RNM(annotationValue)
  this.rules[24].opcodes[13] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[24].opcodes[14] = {type: 2, children: [15,17]};// CAT
  this.rules[24].opcodes[15] = {type: 3, min: 0, max: 1};// REP
  this.rules[24].opcodes[16] = {type: 7, string: [44]};// TLS
  this.rules[24].opcodes[17] = {type: 4, index: 24};// RNM(annotationValue)
  this.rules[24].opcodes[18] = {type: 3, min: 0, max: 1};// REP
  this.rules[24].opcodes[19] = {type: 7, string: [44]};// TLS
  this.rules[24].opcodes[20] = {type: 7, string: [93]};// TLS
  this.rules[24].opcodes[21] = {type: 2, children: [22,23,24,29,31]};// CAT
  this.rules[24].opcodes[22] = {type: 7, string: [123]};// TLS
  this.rules[24].opcodes[23] = {type: 4, index: 25};// RNM(annotationProperty)
  this.rules[24].opcodes[24] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[24].opcodes[25] = {type: 2, children: [26,28]};// CAT
  this.rules[24].opcodes[26] = {type: 3, min: 0, max: 1};// REP
  this.rules[24].opcodes[27] = {type: 7, string: [44]};// TLS
  this.rules[24].opcodes[28] = {type: 4, index: 25};// RNM(annotationProperty)
  this.rules[24].opcodes[29] = {type: 3, min: 0, max: 1};// REP
  this.rules[24].opcodes[30] = {type: 7, string: [44]};// TLS
  this.rules[24].opcodes[31] = {type: 7, string: [125]};// TLS
  this.rules[24].opcodes[32] = {type: 2, children: [33,34]};// CAT
  this.rules[24].opcodes[33] = {type: 7, string: [46]};// TLS
  this.rules[24].opcodes[34] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[24].opcodes[35] = {type: 2, children: [36,37]};// CAT
  this.rules[24].opcodes[36] = {type: 7, string: [47]};// TLS
  this.rules[24].opcodes[37] = {type: 4, index: 28};// RNM(identifier)

  /* annotationProperty */
  this.rules[25].opcodes = [];
  this.rules[25].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[25].opcodes[1] = {type: 4, index: 26};// RNM(propertyName)
  this.rules[25].opcodes[2] = {type: 7, string: [58]};// TLS
  this.rules[25].opcodes[3] = {type: 4, index: 24};// RNM(annotationValue)

  /* propertyName */
  this.rules[26].opcodes = [];
  this.rules[26].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[26].opcodes[1] = {type: 4, index: 28};// RNM(identifier)
  this.rules[26].opcodes[2] = {type: 2, children: [3,4,6]};// CAT
  this.rules[26].opcodes[3] = {type: 4, index: 39};// RNM(DQUOTE)
  this.rules[26].opcodes[4] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[26].opcodes[5] = {type: 4, index: 38};// RNM(CHAR)
  this.rules[26].opcodes[6] = {type: 4, index: 39};// RNM(DQUOTE)

  /* qualifiedName */
  this.rules[27].opcodes = [];
  this.rules[27].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[27].opcodes[1] = {type: 4, index: 28};// RNM(identifier)
  this.rules[27].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[27].opcodes[3] = {type: 2, children: [4,5]};// CAT
  this.rules[27].opcodes[4] = {type: 7, string: [46]};// TLS
  this.rules[27].opcodes[5] = {type: 4, index: 28};// RNM(identifier)

  /* identifier */
  this.rules[28].opcodes = [];
  this.rules[28].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[28].opcodes[1] = {type: 4, index: 29};// RNM(identInitial)
  this.rules[28].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[28].opcodes[3] = {type: 4, index: 30};// RNM(identSubsequent)

  /* identInitial */
  this.rules[29].opcodes = [];
  this.rules[29].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[29].opcodes[1] = {type: 4, index: 36};// RNM(ALPHA)
  this.rules[29].opcodes[2] = {type: 7, string: [95]};// TLS

  /* identSubsequent */
  this.rules[30].opcodes = [];
  this.rules[30].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[30].opcodes[1] = {type: 4, index: 29};// RNM(identInitial)
  this.rules[30].opcodes[2] = {type: 4, index: 37};// RNM(DIGIT)

  /* number */
  this.rules[31].opcodes = [];
  this.rules[31].opcodes[0] = {type: 2, children: [1,3,4,6]};// CAT
  this.rules[31].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[2] = {type: 7, string: [45]};// TLS
  this.rules[31].opcodes[3] = {type: 4, index: 37};// RNM(DIGIT)
  this.rules[31].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[31].opcodes[5] = {type: 4, index: 37};// RNM(DIGIT)
  this.rules[31].opcodes[6] = {type: 3, min: 0, max: 1};// REP
  this.rules[31].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[31].opcodes[8] = {type: 7, string: [46]};// TLS
  this.rules[31].opcodes[9] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[31].opcodes[10] = {type: 4, index: 37};// RNM(DIGIT)

  /* integer */
  this.rules[32].opcodes = [];
  this.rules[32].opcodes[0] = {type: 2, children: [1,3,4]};// CAT
  this.rules[32].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[32].opcodes[2] = {type: 7, string: [45]};// TLS
  this.rules[32].opcodes[3] = {type: 4, index: 37};// RNM(DIGIT)
  this.rules[32].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[32].opcodes[5] = {type: 4, index: 37};// RNM(DIGIT)

  /* precision */
  this.rules[33].opcodes = [];
  this.rules[33].opcodes[0] = {type: 4, index: 32};// RNM(integer)

  /* scale */
  this.rules[34].opcodes = [];
  this.rules[34].opcodes[0] = {type: 4, index: 32};// RNM(integer)

  /* maxLength */
  this.rules[35].opcodes = [];
  this.rules[35].opcodes[0] = {type: 4, index: 32};// RNM(integer)

  /* ALPHA */
  this.rules[36].opcodes = [];
  this.rules[36].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[36].opcodes[1] = {type: 5, min: 65, max: 90};// TRG
  this.rules[36].opcodes[2] = {type: 5, min: 97, max: 122};// TRG

  /* DIGIT */
  this.rules[37].opcodes = [];
  this.rules[37].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* CHAR */
  this.rules[38].opcodes = [];
  this.rules[38].opcodes[0] = {type: 1, children: [1,2,3,4,7]};// ALT
  this.rules[38].opcodes[1] = {type: 5, min: 32, max: 33};// TRG
  this.rules[38].opcodes[2] = {type: 5, min: 35, max: 91};// TRG
  this.rules[38].opcodes[3] = {type: 5, min: 93, max: 1114111};// TRG
  this.rules[38].opcodes[4] = {type: 2, children: [5,6]};// CAT
  this.rules[38].opcodes[5] = {type: 4, index: 40};// RNM(ESCAPE)
  this.rules[38].opcodes[6] = {type: 4, index: 40};// RNM(ESCAPE)
  this.rules[38].opcodes[7] = {type: 2, children: [8,9]};// CAT
  this.rules[38].opcodes[8] = {type: 4, index: 40};// RNM(ESCAPE)
  this.rules[38].opcodes[9] = {type: 4, index: 39};// RNM(DQUOTE)

  /* DQUOTE */
  this.rules[39].opcodes = [];
  this.rules[39].opcodes[0] = {type: 6, string: [34]};// TBS

  /* ESCAPE */
  this.rules[40].opcodes = [];
  this.rules[40].opcodes[0] = {type: 6, string: [92]};// TBS

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString(){
    let str = "";
    str += ";----------------------------\r\n";
    str += "; ABNF for RSDL\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Model\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "model                = [ namespace ] *include *modelElement\r\n";
    str += "\r\n";
    str += "namespace            = %s\"namespace\" qualifiedName\r\n";
    str += "\r\n";
    str += "include              = %s\"include\" DQUOTE 1*CHAR DQUOTE %s\"as\" identifier\r\n";
    str += "\r\n";
    str += "modelElement         = structuredType / enumType / typeDefinition / service\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Structured Type\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "structuredType       = annotations [ %s\"abstract\" ] %s\"type\" identifier [ %s\"extends\" qualifiedName ] \"{\" *structuredTypeMember \"}\"\r\n";
    str += "\r\n";
    str += "structuredTypeMember = property / operation ; property, action, or function\r\n";
    str += "\r\n";
    str += "property             = annotations [propertyModifier] identifier \":\" typeReference\r\n";
    str += "\r\n";
    str += "propertyModifier     = %s\"key\"\r\n";
    str += "\r\n";
    str += "typeReference        = typeName [ \"?\" ] / \"[\" typeName [ \"?\" ] \"]\"\r\n";
    str += "\r\n";
    str += "typeName             = builtInType / %s\"Edm\" \".\" identifier / qualifiedName\r\n";
    str += "\r\n";
    str += "builtInType          = %s\"Boolean\"\r\n";
    str += "                     / %s\"Date\"\r\n";
    str += "                     / %s\"DateTime\"\r\n";
    str += "                     / %s\"Decimal\" [ \"(\" precision \",\" scale \")\"]\r\n";
    str += "                     / %s\"Double\"\r\n";
    str += "                     / %s\"Duration\"\r\n";
    str += "                     / %s\"Integer\"\r\n";
    str += "                     / %s\"String\" [ \"(\" maxLength \")\" ]\r\n";
    str += "                     / %s\"TimeOfDay\"\r\n";
    str += "\r\n";
    str += "operation            = annotations operationKind identifier\r\n";
    str += "                       \"(\" [ parameter *(\",\" parameter) ] \")\"\r\n";
    str += "                       [ \":\" annotations typeReference ]\r\n";
    str += "\r\n";
    str += "operationKind        = %s\"action\" / %s\"function\"\r\n";
    str += "\r\n";
    str += "parameter            = annotations identifier \":\" typeReference\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Enumeration Type\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "enumType             = annotations ( %s\"enum\" / %s\"flags\" ) identifier \"{\" 1*enumMember \"}\"\r\n";
    str += "\r\n";
    str += "enumMember           = identifier\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Type Definition\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "typeDefinition       = annotations %s\"typedef\" identifier \":\" ( builtInType / %s\"Edm\" \".\" identifier )\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Service\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "service              = %s\"service\" [ identifier ] \"{\" 1*serviceMember \"}\"\r\n";
    str += "\r\n";
    str += "serviceMember        = entitySet / singleton / serviceOperation\r\n";
    str += "\r\n";
    str += "entitySet            = identifier \":\" \"[\" qualifiedName \"]\"\r\n";
    str += "\r\n";
    str += "singleton            = identifier \":\" qualifiedName\r\n";
    str += "\r\n";
    str += "serviceOperation     = operationKind identifier\r\n";
    str += "                       \"(\" [ parameter *(\",\" parameter) ] \")\"\r\n";
    str += "                       [ \":\" typeReference ]\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Annotations\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "annotations          = 1*annotation\r\n";
    str += "\r\n";
    str += "annotation           = \"@\" qualifiedName \":\" annotationValue\r\n";
    str += "\r\n";
    str += "annotationValue      = %s\"true\"\r\n";
    str += "                     / %s\"false\"\r\n";
    str += "                     / %s\"null\"\r\n";
    str += "                     / number\r\n";
    str += "                     / DQUOTE 1*CHAR DQUOTE\r\n";
    str += "                     / \"[\" annotationValue *( [ \",\" ] annotationValue ) [ \",\" ] \"]\"\r\n";
    str += "                     / \"{\" annotationProperty *( [ \",\" ] annotationProperty ) [ \",\" ] \"}\"\r\n";
    str += "                     / \".\" *( \"/\"  identifier )\r\n";
    str += "\r\n";
    str += "annotationProperty   = propertyName \":\" annotationValue\r\n";
    str += "\r\n";
    str += "propertyName         = identifier / DQUOTE 1*CHAR DQUOTE\r\n";
    str += "\r\n";
    str += "\r\n";
    str += ";----------------------------\r\n";
    str += ";  Core Syntax Elements\r\n";
    str += ";----------------------------\r\n";
    str += "\r\n";
    str += "qualifiedName       = identifier *( \".\" identifier )\r\n";
    str += "\r\n";
    str += "identifier          = identInitial *identSubsequent\r\n";
    str += "\r\n";
    str += "identInitial        = ALPHA / \"_\" ; Note: actually all Unicode letters\r\n";
    str += "\r\n";
    str += "identSubsequent     = identInitial / DIGIT\r\n";
    str += "\r\n";
    str += "number              = [ \"-\" ] DIGIT *DIGIT [\".\" *DIGIT ]\r\n";
    str += "\r\n";
    str += "integer             = [ \"-\" ] DIGIT *DIGIT\r\n";
    str += "\r\n";
    str += "precision           = integer\r\n";
    str += "\r\n";
    str += "scale               = integer\r\n";
    str += "\r\n";
    str += "maxLength           = integer\r\n";
    str += "\r\n";
    str += "ALPHA               = %x41-5A / %x61-7A\r\n";
    str += "\r\n";
    str += "DIGIT               = %x30-39\r\n";
    str += "\r\n";
    str += "CHAR                = %x20-21 / %x23-5B / %x5D-10FFFF\r\n";
    str += "                    / ESCAPE ESCAPE\r\n";
    str += "                    / ESCAPE DQUOTE\r\n";
    str += "\r\n";
    str += "DQUOTE              = %x22              ; \"\r\n";
    str += "\r\n";
    str += "ESCAPE              = %x5C              ; \\\r\n";
    return str;
  }
}
