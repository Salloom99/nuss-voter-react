import React from 'react';
import FullContainer from './../../layouts/containers/fullContainer';
import SmallCard from '../../layouts/cards/smallCard';
import { Logo } from './../Login/Logo';


function NotFound() {  
    return (
      <FullContainer>
        <SmallCard>
          <Logo />
          <div className='title'>
            <h3>لم يتم العثور على الصفحة</h3>
          </div>
        </SmallCard>
      </FullContainer>
    );
  }
  
  export default NotFound;
  