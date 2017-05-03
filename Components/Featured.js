import React from 'react';
import ReactPlayer from 'react-player';


// CSS
// *******************
import '../public/css/featured/featured.css';

var Featured = React.createClass({

    render() {

        return (

            
                <div className="tabscontent__item">
                    <figure className="poster">
                        <img className="poster__img" src={this.props.image}/>
                        <figcaption className="poster__caption">
                            <h2 className="poster__title">wild<br/>corn</h2>
                            <p className="poster__deco">nothing lost</p>
                            <div className="poster__box"></div>
                            <span className="poster__number">01</span>
                        </figcaption>
                    </figure>
                </div>
            
        );

    }

});

export default Featured;
