# str-normalize

## Description

Using regular expressions along with some common string methods to clean up text strings for things.

## Usage

```js
import { strNormalize } from "str-normalize";

const textInput = `\
Vehicle military-grade 8-bit twork-space market ablative pistol rebar rifle. Monofilament towards ; rain saturation p,oint augmente()d r_-–—e=a+lity apo/?!;'"“”‘’|\\phenia vinyl paranoid tattoo.\
`;

console.log(strNormalize(textInput));
```

## Acknowledgments