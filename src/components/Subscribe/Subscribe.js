import React from 'react';
import './SubscribeElements.js';
import { FaFire } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { PricingContainer, PricingContainerCard, PricingContainerCardInfo, PricingContainerFeatures, PricingContainerFeaturesItem, PricingHeading, PricingSection, PricingWrapper, Icon, Button} from './SubscribeElements.js';


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Escolha o tipo de cadastro
          </PricingHeading>
          <PricingContainer>
            <PricingContainerCard to='/sign-up'>
              <PricingContainerCardInfo>
                <Icon>
                  <FaFire />
                </Icon>
                <PricingContainerFeatures>Cadastro Pessoal</PricingContainerFeatures>
                <PricingContainerFeatures>
                  Aluno/Estudante
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='./signup'>
                  Cadastrar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>

            <PricingContainerCard >
              <PricingContainerCardInfo>
                <Icon>
                  <FaBriefcase />
                </Icon>
                <PricingContainerFeatures>Cadastro Empresarial</PricingContainerFeatures>
                <PricingContainerFeatures>
                  Empresa/Empresario
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='/signup'>
                  Cadastrar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;