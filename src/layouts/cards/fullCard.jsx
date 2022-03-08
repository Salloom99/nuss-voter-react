import React from 'react';

function FullCard(props) {
    return (
        <section className="card card--full">
            {props.children}
          </section>
    );
}

export default FullCard;