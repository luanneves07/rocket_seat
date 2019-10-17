"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}, {
  nome: 'Luan',
  idade: 30,
  empresa: 'Atech'
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
var arrayDeSoma = [1, 2, 3, 4, 5];
var usuario = {
  nome: 'Luan',
  idade: 23
};
var nome = "Luan";
var idade = 23; // arrayDeSoma.map(function(item) {
//     return item + 10;
// });

var resultado = arrayDeSoma.map(function (item) {
  return 10 + item;
});
console.log(resultado); // function mostraIdade(usuario) {
//     return usuario.idade;
// }

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // function mostraUsuario(nome = 'Diego', idade = 18) {
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
/****************
 * Exercício 4  *
 ***************/

console.log("Exercício 4");
var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Luan',
  idade: 23
}));
/****************
 * Exercício 5  *
 ***************/

console.log("Exercício 5");
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

function soma() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2));
var usuario_spread = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario_spread, {
  nome: "Gabriel"
});

var usuario3 = _objectSpread({}, usuario_spread, {
  endereco: {
    cidade: "Lontras"
  }
});

console.log(usuario_spread);
console.log(usuario2);
console.log(usuario3);
/****************
 * Exercício 6  *
 ***************/

console.log("Exercício 6");
var templateUser = 'Luan';
var templateAge = 23;
console.log("O usu\xE1rio ".concat(templateUser, " possui ").concat(templateAge, " anos"));
/****************
 * Exercício 7  *
 ***************/

console.log("Exercício 7");
var tempNome = 'Luan';
var tempIdade = 23;
var temUser = {
  tempNome: tempNome,
  tempIdade: tempIdade,
  cidade: 'Rio do Sul'
};
console.log(temUser);
