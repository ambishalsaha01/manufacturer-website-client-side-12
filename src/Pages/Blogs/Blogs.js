import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-2 gap-5 py-5'>
            <div className='border-2 p-5 rounded-2xl'>
                <h2 className='text-xl font-bold mb-2'>How will you improve the performance of a React Application?</h2>
                <p>Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders. Lazy loading images in React.To optimize React rendering, you need to make sure that components receive only necessary props.It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
            </div>
            <div className='border-2 p-5 rounded-2xl'>
                <h2 className='text-xl font-bold mb-2'>What are the different ways to manage a state in a React application?</h2>
                <p>There are four main types of state you need to properly manage in your React apps. Local ui state Local state is data we manage in one or another component. Global UI state  Global state is data we manage across multiple components. Server state Data that comes from an external server that must be integrated with our UI state. URL state  Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='border-2 p-5 rounded-2xl'>
                <h2 className='text-xl font-bold mb-2'>How does prototypical inheritance work?</h2>
                <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
            </div>
            <div className='border-2 p-5 rounded-2xl'>
                <h2 className='text-xl font-bold mb-2'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>first we should find on array products. we use arrow function on products. The find method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined.Then use find to return the name value. also use The filter method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array.</p>
            </div>
            <div className='border-2 p-5 rounded-2xl'>
                <h2 className='text-xl font-bold mb-2'>What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
            </div>
        </div>
    );
};

export default Blogs;