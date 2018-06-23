import * as React from 'react';
import serviceIcon1 from '../images/service1_icon.png';
import serviceIcon2 from '../images/service2_icon.png';
import serviceIcon3 from '../images/service3_icon.png';
import serviceIcon4 from '../images/service4_icon.png';

const Offer = () => (
  <div className="offer-wrapper">
    <div className="offer-header">
        <h2>what we offer</h2>
        <p>Tailored Logistic Services</p>
    </div>
    <div className="services">
        <div className="service">
            <img className="service-image" src={ serviceIcon1 } />
            <div className="service-description">
                <h2>Contract logistics</h2>
                <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?</p>
            </div>
        </div>
        <div className="service">
            <img className="service-image" src={ serviceIcon2 } />
            <div className="service-description">
                <h2>Overland, Ocean and Air Freight</h2>
                <p>De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
            </div>
        </div>
        <div className="service">
            <img className="service-image" src={ serviceIcon3 } />
            <div className="service-description">
                <h2>Warehousing and Storage</h2>
                <p>Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.</p>
            </div>
        </div>
        <div className="service">
            <img className="service-image" src={ serviceIcon4 } />
            <div className="service-description">
                <h2>Consulting Services</h2>
                <p>Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
            </div>
        </div>
    </div>
  </div>
);

export default Offer;