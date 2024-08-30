import React,{useState} from 'react';
import '../App.css';

const Calc = () =>{
    const[input,setInput] = useState('')

    const calculateResult = (input) =>  {
        let result;

        try{
            const operators=['+','-','/','*','%','^']
            let operator = null

            for(let i=0;i<input.length;i++){
                if(operators.includes(input[i])){
                    operator = input[i];
                    break;
                }
            }

            const[op1,op2] = input.split(operator).map(parseFloat)
            
            switch(operator){
                case '+':
                    result = op1+op2
                    break;
                case '-':
                    result = op1-op2
                    break;
                case '/':
                    result = op1/op2
                    break;
                case '*':
                    result = op1*op2
                    break;
                case '%':
                    result = (op1/op2)*100
                    break;
                case '^':
                    result = Math.pow(op1,op2)
                    break;             
                default:
                    throw new Error('Invalid Operator')
            }

            setInput(result.toString())
            
        }catch(error){
            
        }
    }

    const handleValue = (value) => {
        if(value==='0'){
            setInput('0')
        }else if(value==='<-'){
            setInput(input.slice(0,-1))
        }else if(value==='C'){
            setInput('')
        }else if(value==='='){
            calculateResult(input)
        }else{
            setInput((prev)=>prev+value)
        }
    }

    return(
        <div className='main'>
            <div className='output'>
                <h2>{input}</h2>
            </div>
            
            <div className='content'>
                
                <div className="first">
                    <button className="btn btn-primary" onClick={()=>handleValue('C')}>C</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('7')}>7</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('4')}>4</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('1')}>1</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('0')}>0</button>
                </div>

                <div className="second">
                    <button className="btn btn-primary" onClick={()=>handleValue('%')}>%</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('8')}>8</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('5')}>5</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('2')}>2</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('.')}>.</button>
                </div>

                <div className="third">
                    <button className="btn btn-primary" onClick={()=>handleValue('^')}>^</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('9')}>9</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('6')}>6</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('3')}>3</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('=')}>=</button>
                </div>

                <div className="forth">
                    <button className="btn btn-primary" onClick={()=>handleValue('<-')}>Back</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('/')}>/</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('*')}>X</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('-')}>-</button>
                    <button className="btn btn-primary" onClick={()=>handleValue('+')}>+</button>
                </div>
    
            </div> 
        </div>
  
    )
} 

export default Calc;