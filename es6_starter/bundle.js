"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "setAdmin",
    value: function setAdmin(status) {
      this.admin = status;
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));

    _this.setAdmin(true);

    return _this;
  }

  return Admin;
}(Usuario);
/****************
 * Exercício 1  *
 ***************/


console.log("Exercício 1");
var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
/****************
 * Exercício 2  *
 ***************/

console.log("Exercício 2");
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
var filter = usuarios.filter(function (usuario) {
  return 'Rocketseat' === usuario.empresa && 18 < usuario.idade;
});
var find = usuarios.find(function (usuario) {
  return 'Google' === usuario.empresa;
});
var result = usuarios.reduce(function (filtro, usuario) {
  var idadeAlterada = 2 * usuario.idade;
  var user = {
    nome: usuario.nome,
    idade: idadeAlterada,
    empresa: usuario.empresa
  };

  if (50 >= idadeAlterada) {
    filtro.push(user);
  }

  return filtro;
}, []);
console.log(idades);
console.log(filter);
console.log(find);
console.log(result);
/****************
 * Exercício 3  *
 ***************/

console.log("Exercício 3");
var arr = [1, 2, 3, 4, 5]; // arr.map(function(item) {
//     return item + 10;
// });

var r = arr.map(function (item) {
  return 10 + item;
});
console.log(r);
var usuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(usuario) {
//     return usuario.idade;
// }

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
var nome = "Diego";
var idade = 23; // function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

var promise = function promise() {
  return new Promise(function (resolve) {
    return resolve();
  });
};

console.log(promise());
