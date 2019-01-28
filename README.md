## (a + b) < (a - b)

[parsons & evaluation table](https://colevanderswands.github.io/an-expression-study)

learning objectives:
* implicit type conversion: strings & numbers, + & -
* programming is computational steps: value -> operation -> value ...
* breaking down & studying JS expressions


the expression:
```js
{ const expected = ;

  const a = ;
  const b = ;                               
                                            
  let actual = (a + b) < (a - b); 

  console.log({a, b});
  console.assert(actual === expected, 'try again');
};
```
values to try out
```js
a: 4, b: 6          -->   ?
a: '4', b: 6        -->   ?
a: 4, b: '6'        -->   ?
a: '4', b: '6'      -->   ?

a: true, b: true      -->   ?
a: true, b: false     -->   ?
a: false, b: true     -->   ?
a: false, b: false    -->   ?
```

the expansion:
```js
{ const expected = ;

  const a = ;
  const b = ; 
                                            const log = [];               
  let actual; { // = (a + b) < (a - b);    

    const val_1 = a + b;                    log.push({op: 'a + b',
                                                      value: val_1,
                                                      type: typeof val_1});
    const val_2 = a - b;                    log.push({op:'a - b',
                                                      value: val_2,
                                                      type: typeof val_2});
    const val_3 = val_1 < val_2;            log.push({op:'val_1 < val_2',
                                                      value: val_3,
                                                      type: typeof val_3});
  actual = val_3; };

  console.log({a, b});
  console.table(log);
  console.assert(actual === expected, 'try again');
};
```

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
