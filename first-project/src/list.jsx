import React from 'react';
function Car(props) {
    return <li>{props.brand}</li>;
}

const List = () => {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <h4>Test List of Cars Arrays</h4>
            <ul>
                {/* Key is Required for all the list to del/update stuff on react */}
                {cars.map((car) => <Car key={crypto.randomUUID()} brand={car} />)}
            </ul>
        </div>
    );
}

export default List;
