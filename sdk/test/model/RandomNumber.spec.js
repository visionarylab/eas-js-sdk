/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EchaloasuerteJsSdk);
  }
}(this, function(expect, EchaloasuerteJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EchaloasuerteJsSdk.RandomNumber();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RandomNumber', function() {
    it('should create an instance of RandomNumber', function() {
      // uncomment below and update the code to test RandomNumber
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be.a(EchaloasuerteJsSdk.RandomNumber);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property privateId (base name: "private_id")', function() {
      // uncomment below and update the code to test the property privateId
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property rangeMin (base name: "range_min")', function() {
      // uncomment below and update the code to test the property rangeMin
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property rangeMax (base name: "range_max")', function() {
      // uncomment below and update the code to test the property rangeMax
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property numberOfResults (base name: "number_of_results")', function() {
      // uncomment below and update the code to test the property numberOfResults
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property allowRepeatedResults (base name: "allow_repeated_results")', function() {
      // uncomment below and update the code to test the property allowRepeatedResults
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new EchaloasuerteJsSdk.RandomNumber();
      //expect(instance).to.be();
    });

  });

}));
