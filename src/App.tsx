// import React, { useState } from "react";
// import styled from "styled-components";

// const EntireDiv = styled.div`
//   background-color: #4a4a4a;
//   display: flex;
//   border-radius: 10px;
//   flex-direction: column;
//   gap: 1px 1px;
//   width: 403px;
//   height: 605px;
// `;
// const FirstDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: end;
// `;
// const DisplayNum = styled.text`
//   display: flex;
//   width: 100px;
//   height: 100px;
//   font-size: 40px;
//   color: white;
//   align-items: center;
// `;
// const SecondDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const ThirdDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const FourthDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const FifthDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const SixthDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const SymbolDiv = styled.button`
//   display: flex;
//   border-radius: 10px;
//   background-color: #ffa200;
//   width: 100px;
//   height: 100px;
//   font-size: 30px;
//   align-items: center;
//   justify-content: center;
// `;
// const NumberDiv = styled.button`
//   display: flex;
//   border-radius: 10px;
//   background-color: gray;
//   width: 100px;
//   height: 100px;
//   font-size: 30px;
//   align-items: center;
//   justify-content: center;
// `;
// const ZeroDiv = styled.button`
//   display: flex;
//   border-radius: 10px;
//   background-color: gray;
//   width: 200px;
//   height: 100px;
//   font-size: 30px;
//   align-items: center;
//   justify-content: center;
// `;
// const DotDiv = styled.button`
//   display: flex;
//   border-radius: 10px;
//   background-color: gray;
//   width: 100px;
//   height: 100px;
//   font-size: 30px;
//   align-items: center;
//   justify-content: center;
// `;

// const App: React.FC = () => {
//   const [display, setDisplay] = useState<string>("0");
//   const [operator, setOperator] = useState<string | null>(null);
//   const [previousValue, setPreviousValue] = useState<string | null>(null);
//   const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);

//   const handleNumberClick = (value: string) => {
//     if (waitingForNewValue) {
//       setDisplay(value);
//       setWaitingForNewValue(false);
//     } else {
//       setDisplay(display === "0" ? value : display + value);
//     }
//   };

//   const handleSymbolClick = (symbol: string) => {
//     switch (symbol) {
//       case "AC":
//         setDisplay("0");
//         setOperator(null);
//         setPreviousValue(null);
//         break;
//       case "+/-":
//         setDisplay((prev) => String(parseFloat(prev) * -1));
//         break;
//       case "%":
//         setDisplay((prev) => String(parseFloat(prev) / 100));
//         break;
//       case "=":
//         if (operator && previousValue !== null) {
//           const currentValue = parseFloat(display);
//           const result = calculate(previousValue, currentValue, operator);
//           setDisplay(String(result));
//           setPreviousValue(null);
//           setOperator(null);
//         }
//         break;
//       default:
//         if (previousValue === null) {
//           setPreviousValue(display);
//         } else if (operator) {
//           const currentValue = parseFloat(display);
//           const result = calculate(previousValue, currentValue, operator);
//           setPreviousValue(String(result));
//           setDisplay(String(result));
//         }
//         setOperator(symbol);
//         setWaitingForNewValue(true);
//         break;
//     }
//   };

//   const calculate = (prev: string, current: number, op: string): number => {
//     const prevValue = parseFloat(prev);
//     switch (op) {
//       case "+":
//         return prevValue + current;
//       case "-":
//         return prevValue - current;
//       case "x":
//         return prevValue * current;
//       case "/":
//         return prevValue / current;
//       default:
//         return current;
//     }
//   };

//   return (
//     <EntireDiv>
//       {" "}
//       <FirstDiv>
//         <DisplayNum>{display}</DisplayNum>{" "}
//       </FirstDiv>{" "}
//       <SecondDiv>
//         {" "}
//         <SymbolDiv onClick={() => handleSymbolClick("AC")}>AC</SymbolDiv>{" "}
//         <SymbolDiv onClick={() => handleSymbolClick("+/-")}>+/-</SymbolDiv>
//         <SymbolDiv onClick={() => handleSymbolClick("%")}>%</SymbolDiv>{" "}
//         <SymbolDiv onClick={() => handleSymbolClick("/")}>/</SymbolDiv>{" "}
//       </SecondDiv>{" "}
//       <ThirdDiv>
//         <NumberDiv onClick={() => handleNumberClick("7")}>7</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("8")}>8</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("9")}>9</NumberDiv>
//         <SymbolDiv onClick={() => handleSymbolClick("x")}>x</SymbolDiv>{" "}
//       </ThirdDiv>{" "}
//       <FourthDiv>
//         <NumberDiv onClick={() => handleNumberClick("4")}>4</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("5")}>5</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("6")}>6</NumberDiv>
//         <SymbolDiv onClick={() => handleSymbolClick("-")}>-</SymbolDiv>{" "}
//       </FourthDiv>{" "}
//       <FifthDiv>
//         <NumberDiv onClick={() => handleNumberClick("1")}>1</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("2")}>2</NumberDiv>
//         <NumberDiv onClick={() => handleNumberClick("3")}>3</NumberDiv>
//         <SymbolDiv onClick={() => handleSymbolClick("+")}>+</SymbolDiv>{" "}
//       </FifthDiv>{" "}
//       <SixthDiv>
//         <ZeroDiv onClick={() => handleNumberClick("0")}>0</ZeroDiv>
//         <DotDiv onClick={() => handleNumberClick(".")}>.</DotDiv>{" "}
//         <SymbolDiv onClick={() => handleSymbolClick("=")}>=</SymbolDiv>{" "}
//       </SixthDiv>{" "}
//     </EntireDiv>
//   );
// };

// export default App;

import React, { useState } from "react";
import styled from "styled-components";

const EntireDiv = styled.div`
  background-color: #4a4a4a;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  gap: 1px 1px;
  width: 403px;
  height: 605px;
`;
const DisplayDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const DisplayNum = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  font-size: 40px;
  color: white;
  align-items: center;
`;
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledButton = styled.button<{ isSymbol?: boolean; isZero?: boolean }>`
  display: flex;
  border-radius: 10px;
  background-color: ${(props) => (props.isSymbol ? "#ffa200" : "gray")};
  width: ${(props) => (props.isZero ? "200px" : "100px")};
  height: 100px;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;

//여기부터 계산논리 부분임 인터넷 자료 좀 배낌-> 이해하기
const App: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [process, setprocess] = useState<boolean>(false); //연산기호, 숫자 번갈아 누를때 필요, 연산기호는 display에서 보여지지 않으니까

  const handleNumberClick = (value: string) => {
    if (process) {
      //연산기호 클릭 후 실행되는 코드임
      setDisplay(value);
      setprocess(false);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const handleSymbolClick = (symbol: string) => {
    switch (symbol) {
      case "AC":
        setDisplay("0");
        setOperator(null);
        setPreviousValue(null);
        break; //값 초기화하는 역할임
      case "+/-":
        setDisplay((prev) => String(parseFloat(prev) * -1));
        break; //부호 반대로 만드는 역할
      case "%":
        setDisplay((prev) => String(parseFloat(prev) / 100));
        break; //백분율
      case "=":
        if (operator && previousValue !== null) {
          const currentValue = parseFloat(display); //소수점까지 보이도록 float
          const result = calculate(previousValue, currentValue, operator);
          setDisplay(String(result));
          setPreviousValue(null);
          setOperator(null);
        }
        break;
      default:
        if (previousValue === null) {
          setPreviousValue(display);
        } else if (operator) {
          const currentValue = parseFloat(display);
          const result = calculate(previousValue, currentValue, operator);
          setPreviousValue(String(result));
          setDisplay(String(result));
        }
        setOperator(symbol);
        setprocess(true);
        //연산기호 누르면 무조건 ture로
        break;
    }
  };

  const calculate = (
    previous: string,
    current: number,
    oper: string,
  ): number => {
    const PreValue = parseFloat(previous);
    switch (oper) {
      case "+":
        return PreValue + current;
      case "-":
        return PreValue - current;
      case "x":
        return PreValue * current;
      case "/":
        return PreValue / current;
      default:
        return current;
    }
  };

  return (
    <EntireDiv>
      <DisplayDiv>
        <DisplayNum>{display}</DisplayNum>
      </DisplayDiv>
      <RowDiv>
        <StyledButton isSymbol onClick={() => handleSymbolClick("AC")}>
          AC
        </StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("+/-")}>
          +/-
        </StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("%")}>
          %
        </StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("/")}>
          /
        </StyledButton>
      </RowDiv>
      <RowDiv>
        <StyledButton onClick={() => handleNumberClick("7")}>7</StyledButton>
        <StyledButton onClick={() => handleNumberClick("8")}>8</StyledButton>
        <StyledButton onClick={() => handleNumberClick("9")}>9</StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("x")}>
          x
        </StyledButton>
      </RowDiv>
      <RowDiv>
        <StyledButton onClick={() => handleNumberClick("4")}>4</StyledButton>
        <StyledButton onClick={() => handleNumberClick("5")}>5</StyledButton>
        <StyledButton onClick={() => handleNumberClick("6")}>6</StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("-")}>
          -
        </StyledButton>
      </RowDiv>
      <RowDiv>
        <StyledButton onClick={() => handleNumberClick("1")}>1</StyledButton>
        <StyledButton onClick={() => handleNumberClick("2")}>2</StyledButton>
        <StyledButton onClick={() => handleNumberClick("3")}>3</StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("+")}>
          +
        </StyledButton>
      </RowDiv>
      <RowDiv>
        <StyledButton isZero onClick={() => handleNumberClick("0")}>
          0
        </StyledButton>
        <StyledButton onClick={() => handleNumberClick(".")}>.</StyledButton>
        <StyledButton isSymbol onClick={() => handleSymbolClick("=")}>
          =
        </StyledButton>
      </RowDiv>
    </EntireDiv>
  );
};

export default App;
