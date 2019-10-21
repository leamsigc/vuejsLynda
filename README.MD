# Note from the Lynda.com curse about VUEJS 

## Vuejs = Reactivity 

 Set the variable value is all what we need to do to update the html ,
 because Vue will track the changes to this variable & make the dom react to the changes.


* The only time you wanna use double curly braces 
    - inner text
* v-bind Shorthand
    - :value 

 Two-way data binding 

 - To prevent refresh of the page on form submit we have a short cut after v-on:click.prevent='functionToCall'
    * v-on: shorthand  = @
- v-if Remove the element from the DOM and the v-show HIDE the element whit css display none 

- v-cloak:
     By itself, does nothing except disappear once vue is active.
     But if we add  css to the page 
     ``` css

        [v-cloak] {
            display: none;
        }
     ```
     so when we refresh  the page really fast the hidden items can't be seen 

- [x] Vue Components

    - Vue instances mounted on custom elements (no el)
    - Template / markup defined as strings whit template option
    - The data option is a function (not an object)
  
``` javascript
 Vue.component('example-component',{
     template:`<div>Useless component #{{sku}}</div>`,
     data:()=>({
         sku:'C342w8'
     })
 });
```


- [ ] Why use Vue Components 
  * Reusability 
  * Encapsulation 
  * Portability
  * Organization
- [ ] Slots 
    - The inner html will be inserted for the slot placeholder
    - Default content for ```<slot><p>Default content here </p></slot>```
    - More than one slot available need a name attribute to identify them ``` name='name'```  
    ``` javascript
    //in the component we need to declare the slot and a name attribute for it 
    <slot name='title'>default content here</slot>
    //to use the slot we need to declare the slot name attribute in out markup 
    <h1 slot='title'>slot content here </h1>


    ```
    - If we want to access the prop inn the slot we need declared  or pass the prop that we want to use to the slot is a dynamic property example ``` <slot name='title' :propName='propName' ></slot> ``` to access our props from the template  
  ``` javascript 
  <custom-component date='2019-08-09' > 
    //title  date is still in the scope of the root instance 
    <h1 slot='title'>the date is {{date}} </h1>
    //to be able to access the  date thats passed to the slot we need to use name ,like a name space - slot scope attribute
    <h1 slot='title' slot-scope='image'>The date is {{image.date}}</h1>


  </custom-component>
  ```