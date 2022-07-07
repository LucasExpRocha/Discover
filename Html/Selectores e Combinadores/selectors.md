# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Element selector
    - Todos os elementos HTML
* ID selector
    - Um elemento que tenha um atributo `id`
    - Cada id deverá ser único
* Class selector
    - Os elementos que contenham um atributo `class`
    - Podemos ter uma ou mais classes
* Attribute selector
    - Um elemento que contenham um atributo especifico
* Pseudo-class selector
    - Elementos em um estado especifico

## Múltiplos

Voce poderá selecionar múltiplos elementos a aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1, p, a{
    color: red;
}
```