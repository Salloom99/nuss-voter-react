import React from 'react';
import FullContainer from './../../layouts/containers/fullContainer';
import SmallCard from '../../layouts/cards/smallCard';
import { Logo } from '../../components/common/logo';
import { Link } from 'react-router-dom';


function NotFound() {  
    return (
      <FullContainer>
        <SmallCard>
          <Logo />
          <div className='title'>
            <h3 style={{marginTop: 0}}>لم يتم العثور على الصفحة</h3>
            <Link style={{color: "red"}} to={"/dashboard"} >العودة للقائمة الرئيسية </Link>
          </div>
        </SmallCard>
      </FullContainer>
    );
  }
  
  export default NotFound;
  