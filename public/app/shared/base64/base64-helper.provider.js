/*
 *
 * This is a wrapper around JavaScript's native base64 functions, atob() & btoa()
 * Please read this MDN article for an explanation of this implementation:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 *
 */
(function() {
  'use strict';

  angular
    .module('base64')
    .provider('base64Helper', base64HelperProvider);

  function base64HelperProvider() {
    this.$get = Base64Helper;

    function Base64Helper() {
      var service = {
        base64DecodeUnicode: base64DecodeUnicode,
        base64EncodeUnicode: base64EncodeUnicode
      };

      return service;

      // Public Members //
      function base64EncodeUnicode(string) {
        return btoa(encodeURIComponent(string).replace(/%([0-9A-F]{2})/g, function(match, firstSubMatch) {
          return String.fromCharCode('0x' + firstSubMatch);
        }));
      }

      function base64DecodeUnicode(string) {
        return decodeURIComponent(Array.prototype.map.call(atob(string), function(code) {
          return '%' + code.charCodeAt(0).toString(16);
        }).join(''));
      }
    }
  }
})();
