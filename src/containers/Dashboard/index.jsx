import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Header from "../../components/Header";

//icons
import MathIcon from "../../components/Icons/MathIcon";
import PhyIcon from "../../components/Icons/PhyIcon";
import ChemIcon from "../../components/Icons/ChemIcon";
import BioIcon from "../../components/Icons/BioIcon";
import EngIcon from "../../components/Icons/EngIcon";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header />
        <br />

        <div className="Dashboard__content">
          <h1>Hello Darrel,</h1>
          <br />
          <div className="Dashboard__subjects">
            <Link to={`/chapters/8`}>
              <div className="Dashboard__subject__math">
                <MathIcon />
                <br />
                <div className="Dashboard__subject__text Dashboard__subject__text--math">
                  Mathematics
                </div>
              </div>
            </Link>

            <Link to={`/chapters/9`}>
              <div className="Dashboard__subject__phy">
                <PhyIcon />
                <br />
                <div className="Dashboard__subject__text">Physics</div>
              </div>
            </Link>

            <Link to={`/chapters/5`}>
              <div className="Dashboard__subject__chem">
                <ChemIcon />
                <br />
                <div className="Dashboard__subject__text">Chemistry</div>
              </div>
            </Link>

            <Link to={`/chapters/2`}>
              <div className="Dashboard__subject__bio">
                <BioIcon />
                <br />
                <div className="Dashboard__subject__text">Biology</div>
              </div>
            </Link>

            <Link to={`/chapters/6`}>
              <div className="Dashboard__subject__eng">
                <EngIcon />
                <br />
                <div className="Dashboard__subject__text">English Language</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
