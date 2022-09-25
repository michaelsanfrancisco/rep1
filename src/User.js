function User2() {
  return  (
    <div>My component 1</div>//JSX

  );


}

// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
// JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.
// That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array…you name it.

// A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:
// my-attribute-name="my-attribute-value"
// const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
// const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

//Nested JSX: You can nest JSX elements inside of other JSX elements, just like in HTML.
//<a href="https://www.example.com"><h1>Click me!</h1></a>
// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:
// const x = (
//<a href="https://www.example.com">
  //<h1>
    //Click me!
  //</h1>
//</a>
//);
//a JSX expression must have exactly one outermost element!
//The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!
//If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a <div></div>.

const User = (props) => {
  console.log(props);
  return  (
    <div>
    <h1>{props.userName}</h1>
    <p>{props.tweet}</p>
    </div>

  );

}


export default User;
