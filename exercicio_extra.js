const minhaListaNumeros = [1, 2, 3, 4, 5];



function mapFn(value) {
  return value * 2;
}

function objectMap(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
}


var minhaNovaListaNumeros = objectMap(minhaListaNumeros, mapFn)

console.log(minhaNovaListaNumeros);