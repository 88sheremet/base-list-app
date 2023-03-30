// import { useState } from 'react';
// import Modal from 'components/Modal/Modal';
// import { useDispatch } from 'react-redux';
// import React from 'react';
// import img from '../src/images/Vector.png'
// import HomePageMobile from '../src/images/HomePageMobile.png'
// import HomePageTablet from '../src/images/HomePageTablet.png'
// import HomePageDesktop from '../src/images/HomePageDesktop.png'
import svgGoogle from '../src/images/GoogleIcon.svg'
import css from '../src/Calcutate.module.css'
export const DailyCaloriesForm = () => {

  // className={css.HomePageTablet}
  // className={css.HomePageDesktop}
  return (
    <main className={css.main}>
{/*     
      <img className={css.HomePageMobile}  src={HomePageMobile} alt="HomePageMobile" />
      <img  className={css.HomePageTablet} src={HomePageTablet} alt="HomePageTablet" />
      <img className={css.HomePageDesktop}  src={HomePageDesktop} alt="HomePageDesktop" />
     */}
      <h1 className={css.title}><span className={css.mainLogo}>PLANNER</span>FOR JOINT SAVINGS FOR AN APARTMENT</h1>
      
      <div className={css.signGoogle}>
      <img src={svgGoogle} alt="" />
        <p className={css.signText}>Sig in with Google</p>
        
      </div>
     
    </main>
  );
};

// const Title = styled.h1`
//   display: flex;
//   width: 280px;
//   color: #212121;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 140%;
//   margin-bottom: 34px;
//   @media (min-width: 768px) {
//     width: 504px;
//     font-weight: 700;
//     font-size: 34px;
//     line-height: 140%;
//     margin-bottom: 68px;
//   }
//   @media (min-width: 1280px) {
//   }
// `;

// const Form = styled.div`
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   row-gap: 32px;
//   @media (min-width: 768px) {
//     flex-direction: row;
//     column-gap: 40px;
//     background-image: url(${img});
//   }
// `;

// const RadioButtonWrapper = styled.div`
// display: flex;
// align-items: center;
//   justify-content: center;
//   padding: 0;
//   column-gap: 24px;
//   width: 240px;
//   margin-bottom: 40px;
//   margin-top: 8px;
// `;

// const RadioButtonDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   label {
//     cursor: pointer;
//       display: flex;
//       justify-content:center;
//       align-items: center;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 17px;
//     letter-spacing: 0.04em;
//     color: #9b9faa;
    
//   }
//   label::before {
//     content: '';
//     display: flex;
//       justify-content:center;
//     border: 1px solid #e0e0e0;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     margin-right: 8px;
    
//   }
//   input {
//     display: flex;
//      justify-content: center;
//     cursor: pointer;
//     width: 40px;
//     opacity: 0;
//     position: absolute;
   
//   }
//   input:checked {
//     & + label::before {
//       display: flex;
//      justify-content: center;
//       content: '⬤';
//     }
//     & + label {
//       color: #fc842d;
//       display: flex;
//      justify-content: center;
//     }
//   }
// `;

// const InputContainer = styled.div`
//   label {
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 17px;
//     letter-spacing: 0.04em;
//     color: #9b9faa;
//   }
//   input {
//     border: none;
//     border-bottom: 1px solid #e0e0e0;
//     width: 240px;
//     outline: none;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 17px;
//     letter-spacing: 0.04em;
//     color: #454647;
//     background-color: #fff;
//   }
// `;

// const BloodTypeInput = styled.div`
//   label {
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 17px;
//     letter-spacing: 0.04em;
//     color: #9b9faa;
//   }
//   input {
//     @media (max-width: 768px) {
//       display: none;
//     }
//     @media (min-width: 768px) {
//       border: none;
//       border-bottom: 1px solid #e0e0e0;
//       width: 240px;
//       height: 12px;
//       outline: none;
//       font-weight: 700;
//       font-size: 14px;
//       line-height: 17px;
//       letter-spacing: 0.04em;
//       color: #454647;
//       background-color: #ffffff;
//     }
//   }
//   margin-top: 35px;
// `;

// const Button = styled.button`
//   width: 210px;
//   height: 43px;
//   background: #fc842d;
//   box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
//   border-radius: 30px;
//   border: none;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 17px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   letter-spacing: 0.04em;
//   color: #ffffff;
// `;
// const WrapperInputLeft = styled.div`
//   padding: 0;
//   width: 240px;
//   display: flex;
//   flex-direction: column;
//   row-gap: 32px;
//   @media (min-width: 768px) {
//     margin-bottom: 60px;
//   }
// `;

// const WrapperInputRight = styled.div`
//   padding: 0;
//   width: 240px;
// `;

// const WrapperButton = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 0;
//   @media (min-width: 768px) {
//     justify-content: flex-start;
//   }
// `;