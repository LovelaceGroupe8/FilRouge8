import React, {Component} from 'react';
import './Stephane.css';

class Stephane extends Component{
  render(){
    return(
    <div className="mainnew">
        <section className="maininfo">
            <div className="imgmain">
                <img src={"img/lesdentslanches.jpg"} alt="dentsblanches" />
            </div>
        <article className="mainarticle">
            <p className="date">Jour - Mois - Année</p>
            <h2 className="maintitle">Les dents blanches</h2>
          <p className="newmain">
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
         </p>

        <a className="more" href="#">lire plus</a>
        </article>
        </section>
        <section className="maininfo">
            <div className="imgmain">
                <img src={"img/sagesse.jpg"} alt="dentsblanches" />
            </div>
        <article className="mainarticle">
            <p className="date">Jour - Mois - Année</p>
            <h2 className="maintitle">Les dents blanches</h2>
          <p className="newmain">
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
        Des dents blanches commencent par un entretien quotidien.
         </p>

        <a className="more" href="#">lire plus</a>
        </article>
        </section>





      </div>
    );
  }
}



export default Stephane;
