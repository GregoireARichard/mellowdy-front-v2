function Article2() {
    return (
      <div className="article">
          <h1>Technical part</h1>
          <p>
            Mellowdy is a relatively simple site, as you can see on 
            our github <a href="https://github.com/kokorirko/mellowdy-front-v2">front</a> and 
            <a href="https://github.com/kokorirko/mellowdy"> back</a> for that we used 
            several different technologies.<br/><br/>
            For the front end we used React.js and Axios for the API. 
            At the base the web application was written with 
            Typescript but the latter posed problems with libraries 
            that we used. In this case it was fseehawer/circular-clider 
            and mui. For the main page we also use Three.js with React-Three-Fiber 
            to generate 
            the 3D components.<br/><br/>
            For the back end and server part, we use symfony 
            (which is a PHP framework) and MongoDB. As I said before, 
            the link between the back and the front is made by an API 
            called Axios, which sends requests to transmit information. ⚙️
          </p>
      </div>
    );
  }
  
  export default Article2;