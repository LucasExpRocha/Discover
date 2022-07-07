# Trabalhando com fontes

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui *fallback* font

```css
p   {
    font-family: "Times New Roman", Times, serif;
}
```
    - serif
    - sans

## Font Weight

* Peso da fonte

```css
p {
    font-weight: bold; /*normal 100 300 500...*/
}
```

## Font Style

* O estilo da fonte

```css
p {
    font-style: normal; /* normal | italic | oblique */
}
```

## Font Size

* O tamanho da fonte

```css
p {
    font-size: 30px;
}
```

## Web Fonts

- fontes do sistema x fontes da web
- como usar fontes para web

    * @fonte-face
    * @import
    * link


### Referências

http://www.w3.org/TR/css-fonts-3  
https://css-tricks.com/snippets/css/using-font-face/

---------------------------------------------------------------

## Font Variant

* variações na apresentação fonte

```css
p {
    font-variant: small-caps;
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/font-variant


---------------------------------------------------------------
## Font Stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50 a 200%

```css
p {
    font-stretch: expanded;
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/font-stretch

---------------------------------------------------------------
## letter spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/letter-spacing

---------------------------------------------------------------
## Word Spacing

* Espaços entre palavras

```css
p {
    word-spacing: 4px;
}

```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/word-spacing

---------------------------------------------------------------
## Line Height

* Espaços entre linhas
* Pode ser como unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/line-height

---------------------------------------------------------------
## Text Transform

* Transformação de texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/text-transform

---------------------------------------------------------------
## Text Decoration

* Aparencia decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicas mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/text-decoration

---------------------------------------------------------------
## Text Align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | top | bottom | center | justify */
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/text-align

---------------------------------------------------------------
## Text Shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 2px 3px red; /* offset-x | offset-y | blur-radius | color */
}
```

### Referências
https://developer.mozilla.org/en--US/docs/Web/CSS/text-shadow

---------------------------------------------------------------

## Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family

```css
p{
/*  -style, -variant, -weight, -stretch, -size / line-height e -family */
    font: italic normal bold 3em/1.5 Helvetica, Arial, sans-serif;
}
```