import {useState} from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: 'sam', id: 2},
        {title: "Web dev top tips", body: "lorem ipsum...", author: 'john', id: 3}
    ]); 

    // const [name, setName] = useState ("John"); // To make the name reactive
    // const [age, setAge] = useState(25);

    // name => initial value
    // setName => function used to chnage the value
    // When we use the setName => react re-renders the paragraph in DOM only 
    // with the updated value of the name because that is what changed.

    // const handleClick = (e) => {
    //     console.log("Hello, World!", e);
    // };

    // const handleClickAgain = (name, e) => {
    //     console.log(`Hello, ${name}!`, e.target);
    // };

    // const handleClick = () => {
    //     setName("Sam");
    //     setAge(40);
    // };

    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old.</p> */}
            {/* Use the function reference not the function call because the function would be called automatically without the user clicking on the button. */}
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('John', e)}>Click Me Again</button> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;