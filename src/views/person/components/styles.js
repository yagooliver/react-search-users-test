import styled from 'styled-components';

//Main Container
export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: #c850c0;
  background: -webkit-linear-gradient(90deg, #020024, #29ABE2);
  background: -o-linear-gradient(90deg, #020024, #29ABE2);
  background: -moz-linear-gradient(90deg, #020024, #29ABE2);
  background: linear-gradient(90deg, #020024, #29ABE2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContanerTitle = styled.div`
  align-items:center;
  justify-content: center;
  max-width: 100%;
  display: flex;
`;

export const Title = styled.h2`
  color: white;
  weight: bold;
`;

export const ViewAll = styled.div`
  display: block;
`;

export const View = styled.div`
  display: sketch;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerFilter = styled.div`
  display: block;
`;

//ListComponent
export const ContainerListComponent = styled.div`
  margin-top: 20px;
  display: block;
  width: 600px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

export const ContainerListResult = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
`;

export const DivGif = styled.div`
  align-items: center;
  justify-content: center;
  display:flex;
  max-height: 250px;
  max-width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoadGif = styled.image`
  position: absolute;
  width: 250px; 
  height: 70px; 
  background: url('https://www.suezwatertechnologies.com/kcpguest/registration/assets/images/loader.gif') no-repeat center center;
`;

//Filter component
export const FormContainer = styled.div`
  margin-top: 50px;
  display: inline-flex;
`;

export const LabelInput = styled.span`
  width: 50px;
  color: #f0f0f0;
  font-weight: bold;
`;

export const FormGroup = styled.div`
  margin-top: 10px;
`;

export const InputFieldName = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
  width: 45%;
  padding-left: 12px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-styled: solid;
  border-bottom-width: 1px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
`;

export const InputFieldAge = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
  width: 30%;
  padding-left: 12px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
`;