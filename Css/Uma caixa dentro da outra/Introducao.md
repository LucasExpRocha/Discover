# Box Model

- Fundamental para fazer layouts para web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Esse caixa possui propriedades de uma caixa (2D)

- Tamanho (largura x altura)        width | height
- Conteúdo                          content
- Bordas                            border
- Preenchimento interno             padding
- Espaços fora da caixa             margin

*Cada elemento na sua página, será considerado uma caixa.*

## Box sizing

Como será calculado o tamanho total da caixa

- content-box|border-box

```css
div {
    box-sizing: border-box;
}
```


## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

**block**                           |**inline**
                                    |
Ocupa toda a linha, colocando o     |Elemento ao lado do outro
próximo elemento abaixo desse       |
                                    |
width e height são respeitados      |width e height não funcionam
                                    |
padding, margin, border irão        |Somente valores horizontais de
funcionar normalmente.              |margin, padding e border

exemplos

block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a><strong><span><em>`


## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- valeus: `<lenght>` | `<percentage>` | auto

``` css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 8px;
}
```

    * Cuidado com margin collapsing (top se ajunta ao bottom)

https://developer.mazilla.org/en-US/docs/Web/CSS/margin

## Padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>`

```css
div {
    /*shorthand*/
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}
```

    * Padding poderá causar diferença na largura de um elemento


https://developer.mozilla.org/en-US/docs/Web/CSS/padding

## border (e outline)

As bordas da caixa 

- value: `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<lenght>`
    - color: `<color>`

```css
div {
    /*shorthand*/
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid

    /* widht <lenght> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* widht | style | color */
    border: medium dashed green;
}
```
### E outline

- diferente em 4 sentidos
    - Não modifica o tamanho da caixa, pois não é parte do box model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para aecssibilidade

https://developer.mozilla.org/en-US/docs/Web/CSS/border











