# (a + b) < (a - b)

a deep study of this simple expression will help you understand how types, expressions & implicit coercion work in JS.

###Index
* [learning objectives](#learning-objectives)
* [parsons & evaluation table](https://colevanderswands.github.io/an-expression-study)
* [ast visualizer](#ast-visualizer)
* [console exercises](#console-exercises)

---

## learning objectives

* implicit type conversion: strings & numbers, + & -
* programming is computational steps: value -> operation -> value ...
* breaking down & studying JS expressions
* ast visualizer for help parsing long/complex expressions

---

## [ast visualizer](https://astexplorer.net/) 

* select to hide everything just above the collapsible tree, makes it readable
* this tool will be very helpful figuring out order of operations when expanding expressions
    * the deepest operators are executed first, then their parents, ...
* using this for anything but just expressions will likely be more confusing than helpful
* this tool doesn't check for syntax errors and doesn't run code, so keep it simple and just copy in the expression. no need for variable declarations

---

## Console Exercises

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
