# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: object destructuring is a shortcut to referencing an object in state. 

  Researched answer: an expression that allows us to extract data from arrays, objects and maps, and set them into new distinct variables. Allows us to extract multiple properties from an array at a time.

https://www.educative.io/edpresso/what-is-object-destructuring-in-javascript


2. What are React lifecycle methods? Provide three examples.

  Your answer: lifecycle methods are those used to specify the run course of a program. 

  Researched answer: lifecycle methods are the methods that process the lifecycle of a component. Every component has a lifecycle that goes through specific phases. 
  Examples:
  1. componentDidMount() - called after a componenet is rendered. This is where DOM or state updates should occur.
  2. componentWillUnmount() - component is removed from the DOM (unmounting). Called to remove a component from the DOM. 
  3. getDerivedStateFromProps() - called right before rendering the elements in the DOM. Takes state as an argument and returns an object with changes to the state. 
  4. render() - required method that displays the HTML on the DOM.
  5. constructor() - the method that is called before anything else (when component is initiated). It is the natrual place to set up the intial state and other initial values.

https://www.w3schools.com/react/react_lifecycle.asp


3. What is the difference between a class and an object?

  Your answer: an object can be many things, and contains a specific value. A class is a blueprint or structure that can create new objects.

  Researched answer: class is a template for an object. An object is an instance (or member) of a class. A class can store both data and methods as a single unit which aids in avoiding repetition. 

  https://www.w3schools.in/java-questions-answers/difference-between-classes-objects/#:~:text=A%20class%20is%20a%20blueprint,a%20variable%20of%20the%20class.



4. What is the difference between a HTML div and a span?

  Your answer: I cannot say I have done enough research to know what the span tag does, but a div in HTML creates a space or divider on the page for whatever content you want it to display. 

  Researched answer: a div is a block level element, and span is an inline element. The div can be used to wrap around sections of the document (images, header, footer, navigation bar, etc), while span wraps small portions of text, images, etc. Span is more so used to stylize text. If you wanna highlight a part of the text within the div you can do so with span. 

  https://www.geeksforgeeks.org/difference-between-div-and-span-tag-in-html/



5. What is a React Fragment (or <>) and why would you want to use it?

  Your answer: the React Fragment <> is a tag that can be used for wrapping multiple content together. It is most used in return statements if we would like to return mutiple things, so that React recognizes that there is only one thing being returned in the return. 

  Researched answer: In React, one component can return multiple elements. Fragments allow you to group elements together without having to add nodes (node = 1 HTML element) to the DOM. 

https://reactjs.org/docs/fragments.html#short-syntax


6. What does it mean to create a responsive UI? What are three options for creating responsive design?

  Your answer: creating a responsive UI means it is responding to the things the user is doing to it in a way that does not require one to refresh the page to load the changes made. *After resesrching, realized I was totally on a different train of thought on this one lol*

  Researched answer: responsive UI is a desigin approach that allows content and layout in a web application to be flexible to the point that the layout/content adjusts its layout to stretch or condense on different screen sizes. Which means the layout will adjust in a way that fills the space of whatever screen size is being used. This contrasts adaptive view which works with absolute units (e.g., pixels) on separate versions (mobile version, tablet version, computer screen version).
  Three options:
    1. Media queries - allow you to design different layouts for different 'media' types like, screen, tv, handheld devices, etc. A media type declaration is required, along with the features belonging to that specific media type (the feature expressions evaluate to true or false depending on which media device you are using). If the media type is a hand-held device, such as a phone or a tablet, the features would provide limits that tell the code to either shrink or expand the layout/content if certain conditions are met. 
    2. Fluid grids - layout coded in relative proportion of the various elements it contains (as opposed to coded with fixed pixel values). All of the content is not given a fixed size, but a percentaged size that changes according to the device being used. 
    3. Flexible images - again sizing here is not fixed, the size is determined with a percentage so that the size reflects the device it is being viewed on. An image could be chopped off on a mobile view if the size is not specified to take up no more than 100% of the space (page). 

  https://www.interaction-design.org/literature/topics/responsive-design#:~:text=Responsive%20design%20is%20a%20graphic,ensure%20content%20consistency%20across%20devices.

  https://www.webdesignerdepot.com/2014/10/3-fundamentals-of-responsive-design-you-have-to-master/



7. What are props in React?

  Your answer: props is short for properties in React and they are used for accessing variables (or properties) that belong to one component, in a another component. 

  Researched answer: keyword used to pass data from one component to another. The direction in which the data is being passed is unidirectional, from parent to child component.

https://reactjs.org/docs/components-and-props.html


8. What is `this` in JavaScript? (me: why is it used?)

  Your answer: 'this' is a key word that refers to the object living in the state of the component. 

  Researched answer: this is a keyword that refers back to the object it belongs to. It's used to point back specifically to the owner of the object it is being used on so that javascript knows which information to access in that moment.

  https://www.w3schools.com/js/js_this.asp#:~:text=The%20JavaScript%20this%20keyword%20refers,on%20where%20it%20is%20used%3A&text=In%20a%20function%2C%20this%20refers,element%20that%20received%20the%20event.



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: It is the question mark operator, used in place of a conditional statement, but I can't say I know exactly how it works. 

  Researched answer: shortcut for an if statement. Takes in three operands: a condition to be evaluated as t/f, an expression to execute a true outcome, and then an expression to execute a false outcome.
  Example: "is this true ? do this if yes : else do this"

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I can't say I've heard about anonymous functions, but it sounds to me like it is a function that is anonymous, meaning, it does not have a declared name? 

  Researched answer: function without a name. Cannot be accessed after its creation usually. You can assign it to a variable and then call it by calling the variable name and attaching the () to call it. They can be fed as arguments into other functions as well. 

  https://www.javascripttutorial.net/javascript-anonymous-functions/



## Looking Ahead: Terms for Next Week

- Ruby - object oriented language, dynamic, open source. It uses garbage collection (automatic memory management) which means it attempts to reclaim memory (or garbage) from objects that are no longer being used. It supports multiple programming paradigms like procedural, OOP, and functional. It was created by Yukihiro Matsumoto or 'Matz' in Japan around the mid-1990s. Matz stated that the language was designed to be fun and productive! Used for both back and front end purposes. It is scripted, meaning it's an interpreted language rather than a compiled one.

https://en.wikipedia.org/wiki/Ruby_(programming_language)
https://careerkarma.com/blog/what-is-ruby-used-for/

- Object oriented programming - OOP is a programming paradigm based on the concept of objects. They can contain anything from data to procedures or both. The great thing about OOP is how mutable, reusable, and simple it can transform code to be as opposed to procedural or structual programmming. OOP is better organized and because of that, objects can be accessed and modified without other objects being affected by any certain changes. 
  4 main concepts:
  1. Encapsulation - objects can keep their properties and methods private within classes. No other objects can access the properties in a class unless specifically specified. The properties and methods can be accessed and called whenever the class wants, and nothing else would be affected by this since it would be a private change (encapsulated). 
  2. Abstraction - the magic behind what is happening. Under the hood the code is doing what we tell it to do but we dont know exactly how it is happening, we just know that it is doing its job. It holds so much information we would want to access at some point, and allows us to do so whenever we'd like. 
  3. Inheritance - creating new code or objects using the same principles used in another object. Helps us reuse code and avoid redundencies. Classes are best examples of this, we can inherit certain traits from a class we already have, and make another one to build off of, without having to rewrite the same exact code, we would just reference the already written code. 
  4. Polymorphism - technique that allows you to get rid of long if/else or switch/case statements. You can call a parent method on multiple child classes, and have that parent method work specifically for each class that was called, this is not a universal functionality, but a tailored one for the specific classes. 

https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/

- RSpec - testing tool in Ruby created for behavior-driven development (BDD). Testing library for Ruby (most frequently used in production applications). Even though it has a very strong DSL (domain-specific language), at its core it is very simple to use. 

https://semaphoreci.com/community/tutorials/getting-started-with-rspec#:~:text=RSpec%20is%20a%20testing%20tool,can%20start%20using%20rather%20quickly.

- Instance variable - variable type whos name starts with the @ symbol and whos content is restricted to whatever the object itself refers to. They live in, and are visible everywhere in the object's scope. You can create multiple instances within a class and mutate them separately without affecting the other instances. Other variables in Ruby are global, local, and class variables.

https://www.geeksforgeeks.org/instance-variables-in-ruby/
https://www.rubyguides.com/2019/07/ruby-instance-variables/

- Ruby blocks - anonymous functions (doesn't have a name or belong to any object) that can be passed into methods. They are enclosed in a do/end statement or between brackets {}, and can have multiple arguments. It allows you to save a bit of logic and use it later. Blocks can only be created by passing them to a method when the method is called.

http://ruby-for-beginners.rubymonstas.org/blocks.html

- Ruby hashes - collection of key-value pairs. They are created using 'hash rockets' or '=> the fat arrow'... { "one" => "deux" }

http://ruby-for-beginners.rubymonstas.org/built_in_classes/hashes.html