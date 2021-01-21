import React from 'react';
import { IconContext } from 'react-icons/lib';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiJoystickAlt, BiDonateBlood } from 'react-icons/bi';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Project</PricingHeading>
          <PricingContainer>
            <PricingCard to='/project'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BsFillPlayFill />
                </PricingCardIcon>
                <PricingCardPlan>Web Movie</PricingCardPlan>
                <PricingCardCost>2019-2020</PricingCardCost>
                <PricingCardLength>3 month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    In this project, I learned how to create a website both front-end and back-end.
                    Have practiced skill HTML CSS Javascipt PHP and JSON.
                    </PricingCardFeature>
                </PricingCardFeatures>
       
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/project'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiJoystickAlt />
                </PricingCardIcon>
                <PricingCardPlan>PacMan Game</PricingCardPlan>
                <PricingCardCost>2019-2020</PricingCardCost>
                <PricingCardLength>3 month</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>In this project,I have practiced Java and have experimented with designing game graphics.</PricingCardFeature>
                </PricingCardFeatures>
         
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/project'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiDonateBlood />
                </PricingCardIcon>
                <PricingCardPlan>Blood Donate</PricingCardPlan>
                <PricingCardCost>2020</PricingCardCost>
                <PricingCardLength>3 month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>In this project,
                   I learned to use the database. Database app page design 
                  and database management to be organized.</PricingCardFeature>
                </PricingCardFeatures>
       
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
