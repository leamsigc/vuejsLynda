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
