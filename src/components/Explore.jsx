import React from 'react';

const Explore = () => {
    return (
        <div id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Explore more <span className="purple">Books</span>
                    </h2>
                    <a href="/books">
                        <button className="btn">Explore books</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Explore;
